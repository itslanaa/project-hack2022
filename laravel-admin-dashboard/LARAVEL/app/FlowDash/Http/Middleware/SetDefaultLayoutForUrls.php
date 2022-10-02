<?php

namespace App\FlowDash\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\URL;

class SetDefaultLayoutForUrls
{
    public function handle($request, Closure $next)
    {
        $default = 'default';

        URL::defaults(['layout' => $default]);

        $session = session('layout', $default);

        $layout = $request->input('layout', $session);

        session(compact('layout'));

        return $next($request);
    }
}