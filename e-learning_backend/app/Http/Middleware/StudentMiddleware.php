<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class StudentMiddleware
{

    public function handle(Request $request, Closure $next)
    {
      $user = Auth::user();
      if($user->type=="student"){
        return $next($request);
      }
       return redirect(route("not-found"));
    }
}
