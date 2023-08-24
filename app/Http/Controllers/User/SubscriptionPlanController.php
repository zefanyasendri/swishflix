<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Auth;
use Carbon\Carbon;;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        return inertia('User/SubscriptionPlan/Index', [
            'subscriptionPlans' => SubscriptionPlan::all()
        ]);
    }

    public function userSubscribe(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        // data yang diterima di Database
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonths($subscriptionPlan->active_period_in_months),
            'payment_status' => 'paid',
        ];

        $userSubscription = UserSubscription::create($data);

        return redirect(route('user.dashboard.index'));
    }
}
