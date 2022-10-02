<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Laravel\Fortify\Fortify;
use Laravel\Fortify\Http\Requests\LoginRequest;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * Custom login route with tokens for first party SPA authentication
 * 
 *     Disclaimer: The standard /login route should be used instead.
 *     However due to the nature of our demos, since they may be loaded in iframes and cross-domain,
 *     The standard session cookie based authentication won't work.
 * 
 * 1. Authenticates user
 * 2. Removes user tokens and also issues a new token on each successful authentication
 * 3. Returns the new token in plain text to be used by subsequent SPA requests
 */

Route::post('/login', function(Request $request) {
    $request->validate(app(LoginRequest::class)->rules());

    $user = User::where('email', $request->email)->first();

    if ($user &&
        Hash::check($request->password, $user->password)) {
        
        $user->tokens()->delete();
        $token = $user->createToken('personal');

        $response = $user->toArray();
        $response['token'] = $token->plainTextToken;

        return $response;
    }
    
    throw ValidationException::withMessages([
        Fortify::username() => [trans('auth.failed')],
    ]);
});