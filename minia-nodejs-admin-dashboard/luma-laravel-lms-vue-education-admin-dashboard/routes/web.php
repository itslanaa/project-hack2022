<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// })->name('/');

// Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
//     return Inertia\Inertia::render('Dashboard');
// })->name('dashboard');

Route::redirect('/', '/app/home')->name('/');

Route::redirect('dashboard', '/app/student-dashboard')->name('dashboard');

Route::middleware(['guest'])->get('/login', function () {
    $intendedUrl = session()->pull('url.intended', '/app/student-dashboard');
    $intendedUrl = str_replace('http://', 'https://', $intendedUrl);
    return Inertia\Inertia::render('Login', compact('intendedUrl'));
})->name('login');

// Password Reset...
if (Features::enabled(Features::resetPasswords())) {
    Route::get('/forgot-password', function () {
        return Inertia\Inertia::render('ForgotPassword');
    })
    ->middleware(['guest'])
    ->name('password.request');
}

// Registration...
if (Features::enabled(Features::registration())) {
    Route::get('/register', function () {
        return Inertia\Inertia::render('Register');
    })
    ->middleware(['guest'])
    ->name('register');
}

// Demos
$authRoutes = [
    'billing-history',
    'billing-invoice',
    'billing-payment',
    'billing-upgrade',
    'billing',
    'change-password',
    'discussions-ask',
    'edit-account-notifications',
    'edit-account-profile',
    'edit-account',
    'instructor-courses',
    'instructor-dashboard',
    'instructor-earnings',
    'instructor-edit-course',
    'instructor-edit-quiz',
    'instructor-profile',
    'instructor-quizzes',
    'instructor-statement',
    'messages',
    'student-dashboard',
    'student-my-courses',
    'student-my-paths',
    'student-my-quizzes',
    'student-profile',
    'student-quiz-result',
    'student-skill-assessment',
    'student-skill-result',
    'student-take-course',
    'student-take-lesson',
    'student-take-quiz',
    'logout',
];

$routes = [
    'home',
    'blog-post',
    'blog',
    'discussion',
    'discussions',
    'faq',
    'help-center',
    'pricing',
    'student-course',
    'student-courses',
    'student-lesson',
    'student-path',
    'student-paths',
    'teachers',
    'ui-alerts',
    'ui-app-layout',
    'ui-avatar',
    'ui-cards',
    'ui-chart-area',
    'ui-chart-bar',
    'ui-chart-doughnut',
    'ui-chart-line',
    'ui-chart-radar',
    'ui-drawer-layout',
    'ui-drawer',
    'ui-fixed-layout',
    'ui-form-image-group',
    'ui-forms',
    'ui-header-layout',
    'ui-header',
    'ui-icons',
    'ui-input-group-merge',
    'ui-perfect-scrollbar',
    'ui-sidebar',
    'ui-sidebar-menu',
    'ui-syntax-highlight',
    'ui-tabs',
];

foreach ($routes as $page) {
    Route::get("/{layout}/${page}", function ($routeLayout) use ($page) {
        return Inertia\Inertia::render("Demos/${page}", compact('routeLayout'));
    })->name($page);
}

foreach ($authRoutes as $page) {
    Route::get("/{layout}/${page}", function ($routeLayout) use ($page) {
        $auth = true;
        return Inertia\Inertia::render("Demos/${page}", compact('routeLayout', 'auth'));
    })
    ->name($page === 'logout' ? 'inertia.logout' : $page)
    ->middleware(['auth:sanctum', 'verified']);
}

// Custom home page component example

Route::get('/custom-homepage', function () {
    return Inertia\Inertia::render('Demos/CustomHomePage', ['routeLayout' => 'boxed']);
})->name('custom-homepage');