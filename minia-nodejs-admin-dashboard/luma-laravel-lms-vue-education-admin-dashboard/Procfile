web: vendor/bin/heroku-php-nginx -C heroku.nginx.conf public/ & wait -n
release: php artisan config:cache && php artisan route:cache && php artisan view:cache && php artisan migrate --force