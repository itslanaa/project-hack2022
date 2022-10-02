<?php

if (!function_exists('title')) {
  function title($title = null)
  {
    if (!empty($title)) {
      return $title . " - " . config('flowdash.brand');
    }

    return config('flowdash.brand');
  }
}

if (!function_exists('activeClass')) {
  function activeClass($route, $activeClass = 'active')
  {
    return request()->routeIs($route) ? $activeClass : '';
  }
}

if (!function_exists('arrayToObject')) {
  function arrayToObject($d) {
    if (is_array($d)) {
      /*
      * Return array converted to object
      * Using __FUNCTION__ (Magic constant)
      * for recursive call
      */
      return (object) array_map(__FUNCTION__, $d);
    }
    else {
      // Return object
      return $d;
    }
  }
}
