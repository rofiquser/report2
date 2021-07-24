<?php

namespace App\Http\Middleware;

use Closure;

class LoginCheckMiddleWare
{

    public function handle($request, Closure $next)
    {
    if($request->session()->has("AdminSession")){
     return $next($request);
    }
    else{
    return redirect('/loginView');
    }

    }
}
