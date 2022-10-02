<?php
Route::get('/', function () {
    return view('auth.login');
})->name('welcome')->middleware('guest');

$guestRoutes = [
    'pricing',
    'blank',
    'ui-buttons',
    'ui-alerts',
    'ui-avatars',
    'ui-modals',
    'ui-charts',
    'ui-icons',
    'ui-forms',
    'ui-range-sliders',
    'ui-datetime',
    'ui-tables',
    'ui-tabs',
    'ui-loaders',
    'ui-drag',
    'ui-pagination',
    'ui-vector-maps',
];

foreach ($guestRoutes as $route) 
{
    Route::get('/' . $route, function() use ($route) {
        return view("flowdash::{$route}");
    })
    ->name($route);
}

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/analytics', 'HomeController@analytics')->name('analytics');
Route::get('/staff', 'HomeController@staff')->name('staff');
Route::get('/ecommerce', 'HomeController@ecommerce')->name('ecommerce');
Route::get('/quick-access', 'HomeController@quickAccess')->name('quick-access');

Route::get('/app-trello', 'HomeController@appTrello')->name('app-trello');
Route::get('/app-projects', 'HomeController@appProjects')->name('app-projects');
Route::get('/app-activities', 'HomeController@appActivities')->name('app-activities');
Route::get('/app-fullcalendar', 'HomeController@appFullcalendar')->name('app-fullcalendar');
Route::get('/app-chat', 'HomeController@appChat')->name('app-chat');
Route::get('/app-email', 'HomeController@appEmail')->name('app-email');
Route::get('/app-browse-courses', 'HomeController@appBrowseCourses')->name('app-browse-courses');
Route::get('/app-course', 'HomeController@appCourse')->name('app-course');
Route::get('/app-lesson', 'HomeController@appLesson')->name('app-lesson');

Route::get('/companies', 'HomeController@companies')->name('companies');
Route::get('/stories', 'HomeController@stories')->name('stories');
Route::get('/discussions', 'HomeController@discussions')->name('discussions');
Route::get('/product-listing', 'HomeController@productListing')->name('product-listing');
Route::get('/payout', 'HomeController@payout')->name('payout');
Route::get('/invoice', 'HomeController@invoice')->name('invoice');
Route::get('/digital-product', 'HomeController@digitalProduct')->name('digital-product');

Route::get('/edit-account', 'HomeController@editAccount')->name('edit-account');
Route::get('/profile', 'HomeController@profile')->name('profile');