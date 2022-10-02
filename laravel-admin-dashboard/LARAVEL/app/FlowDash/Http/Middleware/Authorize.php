<?php

namespace App\FlowDash\Http\Middleware;

use App\FlowDash\FlowDash;

class Authorize
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Illuminate\Http\Response
     */
    public function handle($request, $next)
    {
        return FlowDash::check($request) ? $next($request) : abort(403);
    }
}
