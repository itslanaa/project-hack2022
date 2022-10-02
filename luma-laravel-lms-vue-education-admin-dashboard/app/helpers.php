<?php

if (! function_exists('hashUrl')) {
  function hashUrl($url) {
    return "$url?".md5_file(public_path() . $url);
  }
}
