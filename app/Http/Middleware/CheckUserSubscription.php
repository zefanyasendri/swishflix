<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Auth;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $status): Response
    {
        // Jika user belum berlangganan, maka redirect ke halaman berlangganan
        if ($status == 'true' && !Auth::user()->isActive) {
            return redirect()->route('user.dashboard.subscriptionPlan.index');
        }

        // Jika user sudah berlangganan, maka redirect ke halaman dashboard
        if ($status == 'false' && Auth::user()->isActive) {
            return redirect()->route('user.dashboard.index');
        }
        return $next($request);
    }
}
