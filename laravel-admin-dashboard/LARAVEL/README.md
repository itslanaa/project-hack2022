## Installation

### The FlowDash Laravel Starter Project

Unpack the main `.zip` file, then change directory to the project (we'll assume it's called `flowdash-laravel`) and run:

```bash
composer install
```

### Setup Local Development Server

Using the built-in development server, you can access the site in your browser at [http://127.0.0.1:8000](http://127.0.0.1:8000):

```bash
php artisan serve
```

Optionally, setup [Laravel Valet](https://laravel.com/docs/8.x/valet) if you're on a Mac:

```bash
valet link flowdash-laravel
```

After running the link command, you can access the site in your browser at [http://flowdash-laravel.test](http://flowdash-laravel.test)

### Setup FlowDash Laravel Package

The `app/FlowDash` directory contains everything needed for using FlowDash with Laravel (config, assets, demo routes, custom JetStream auth views, etc)

The FlowDash Service Provider is registered within `app/Providers/AppServiceProvider.php`:

```php
<?php

use App\FlowDash\FlowDashServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->register(
            FlowDashServiceProvider::class
        );
    }
}
```

### Global helpers

The views are using a few helpers to set page titles and set active classes based on the current route, etc. The helpers file is already autoloaded from `composer.json`:

```json
"autoload": {
    "files": [
        "app/FlowDash/helpers.php"
    ],
}
```

## Assets

To copy the configuration and assets included with the package within your project, run:

```bash
php artisan vendor:publish --provider="App\FlowDash\FlowDashServiceProvider" --force
```

The publish command will create the following files:

> Laravel Mix Customizations

```bash
webpack.config.js
webpack.mix.js
webpack.mix.css.js
```

> Configuration

```bash
config/flowdash.php
```

> Blade views, layouts, components

```bash
resources/views/vendor/flowdash
resources/views/vendor/jetstream
```

> Source Scss and JavaScript files

```bash
resources/js/vendor/flowdash
resources/scss/vendor/flowdash
```

### Dependencies

Update `package.json` with the following:

```json
"scripts": {
    "dev": "npm run development",
    "development": "npm run dev:main & npm run dev:css",
    "dev:main": "node node_modules/.bin/cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "dev:css": "npm run dev:main -- --env.mixfile=webpack.mix.css",
    "watch": "npm run watch:main & npm run watch:css",
    "watch:main": "npm run dev:main -- --watch",
    "watch:css": "npm run dev:css -- --watch",
    "watch-poll": "npm run watch -- --watch-poll",
    "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --disable-host-check --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "npm run prod:main && npm run prod:css",
    "prod:main": "node node_modules/.bin/cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod:css": "npm run prod:main -- --env.mixfile=webpack.mix.css"
},
"dependencies": {
    "@fortawesome/fontawesome-free": "^5.4.1",
    "@fortawesome/fontawesome-svg-core": "^1.2.6",
    "@fortawesome/free-solid-svg-icons": "^5.4.1",
    "@fortawesome/vue-fontawesome": "^0.1.1",
    "@material/fab": "^0.40.1",
    "bootstrap": "^4.5.2",
    "chart.js": "^2.7.3",
    "daterangepicker": "^3.0.3",
    "dom-factory": "^1.0.3",
    "dragula": "^3.7.2",
    "dropzone": "^5.5.1",
    "flatpickr": "^4.6.6",
    "fullcalendar": "^3.9.0",
    "ion-rangeslider": "^2.3.0",
    "jquery": "^3.3.1",
    "jquery-mask-plugin": "^1.14.15",
    "jquery-ui-dist": "^1.12.1",
    "jqvmap": "github:10bestdesign/jqvmap#master",
    "list.js": "^1.5.0",
    "material-design-icons-iconfont": "^5.0.1",
    "material-design-kit": "^1.0.2",
    "moment": "^2.22.2",
    "moment-range": "^4.0.1",
    "perfect-scrollbar": "^1.4.0",
    "popper.js": "1.16.1",
    "quill": "^1.3.6",
    "select2": "^4.0.6-rc.1",
    "sidebar-style-guide": "^2.0.0",
    "toastr": "^2.1.4",
    "vue": "^2.5.17"
},
"devDependencies": {
    "@tailwindcss/ui": "^0.6.0",
    "axios": "^0.19",
    "cross-env": "^7.0",
    "laravel-mix": "^5.0.1",
    "laravel-mix-merge-manifest": "^0.1.2",
    "lodash": "^4.17.19",
    "material-design-icons-iconfont": "^6.1.0",
    "postcss-import": "^12.0.1",
    "postcss-rtl": "^1.7.3",
    "resolve-url-loader": "^3.1.0",
    "sass": "^1.28.0",
    "sass-loader": "^10.0.5",
    "tailwindcss": "^1.8.0",
    "vue-template-compiler": "^2.6.12",
    "webpack-chunk-rename-plugin": "^1.0.3"
}
```

Then, to install the dependencies, run:

```bash
npm install
```

## Authentication

Update `.env` database connection:

```bash
DB_CONNECTION=sqlite
```

Comment out or remove the `.env` database name:

```bash
# DB_DATABASE=laravel
```

Create a database file:

```bash
touch database/database.sqlite
```

Run the database migrations:

```bash
php artisan migrate
```

Create demo credentials:

```bash
php artisan db:seed --class="App\FlowDash\UsersTableSeeder"
```

## Development

You can run the usual Laravel Mix commands to compile all the assets.

```bash
npm run watch
npm run development
npm run production
```

## Routes

By default, all routes are under the `/` prefix, so accessing the login page for example you would go to [http://localhost:3000/login](http://localhost:3000/login)

You can change that from `config/flowdash.php`, for example to add a prefix to all routes:

```php
'path' => '/flowdash',  // adds a prefix to all routes
'path' => null,     // removes the prefix
```