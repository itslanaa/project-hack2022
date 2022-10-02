<?php

namespace App\FlowDash;

use App\FlowDash\Http\Middleware\Authorize;
use App\FlowDash\Http\Middleware\SetDefaultLayoutForUrls;
use App\FlowDash\FlowDash;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class FlowDashServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->authorization();

        Route::middlewareGroup('flowdash', config('flowdash.middleware', [
            'web',
            Authorize::class,
            SetDefaultLayoutForUrls::class,
        ]));

        $this->registerRoutes();

        $this->loadViewsFrom(
            __DIR__.'/resources/views', 'flowdash'
        );

        $this->setViewsGlobals();

        $this->publishes([
            __DIR__.'/webpack.config.js' => base_path('webpack.config.js'),
            __DIR__.'/webpack.mix.js' => base_path('webpack.mix.js'),
            __DIR__.'/webpack.mix.css.js' => base_path('webpack.mix.css.js'),
        ], 'mix');

        $this->publishes([
            __DIR__.'/config.php' => config_path('flowdash.php'),
        ], 'config');

        $this->publishes([
            __DIR__.'/resources/views/vendor/flowdash' => resource_path('views/vendor/flowdash'),
            __DIR__.'/resources/views/vendor/jetstream' => resource_path('views/vendor/jetstream'),
        ], 'views');

        $this->publishes([
            __DIR__.'/vendor/flowdash/src/js' => resource_path('js/vendor/flowdash'),
            __DIR__.'/resources/js/bootstrap.js' => resource_path('js/vendor/flowdash/bootstrap.js'),
            __DIR__.'/vendor/flowdash/src/sass' => resource_path('scss/vendor/flowdash'),
            __DIR__.'/vendor/flowdash/dist/assets' => public_path('vendor/flowdash'),
        ], 'assets');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/config.php', 'flowdash'
        );
    }

    /**
     * Configure the FlowDash authorization services.
     *
     * @return void
     */
    protected function authorization()
    {
        $this->gate();

        FlowDash::auth(function ($request) {
            return app()->environment('local') ||
                   Gate::check('viewFlowDash', [$request->user()]);
        });
    }

    /**
     * Register the FlowDash gate.
     *
     * This gate determines who can access FlowDash in non-local environments.
     *
     * @return void
     */
    protected function gate()
    {
        Gate::define('viewFlowDash', function ($user) {
            return in_array($user->email, [
                // 
            ]);
        });
    }

    /**
     * Get the FlowDash route group configuration array.
     *
     * @return array
     */
    private function routeConfiguration()
    {
        return [
            'domain' => config('flowdash.domain'),
            'namespace' => 'App\FlowDash\Http\Controllers',
            'prefix' => config('flowdash.path', 'flowdash'),
            'middleware' => 'flowdash',
        ];
    }

    /**
     * Register the package routes.
     *
     * @return void
     */
    private function registerRoutes()
    {
        Route::group($this->routeConfiguration(), function () {
            $this->loadRoutesFrom(__DIR__.'/Http/routes.php');
        });
    }

    private function setViewsGlobals()
    {
        View::composer('*', function($view) {
            $layout = session('layout');
            $containerClass = 'container-fluid page__container';
            
            if ($layout === 'fixed' || $layout === 'mini') {
                $containerClass = 'container page__container';
            }

            $view->with(compact('layout', 'containerClass'));
        });
    }
}
