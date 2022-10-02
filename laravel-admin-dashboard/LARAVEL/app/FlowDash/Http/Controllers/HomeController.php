<?php

namespace App\FlowDash\Http\Controllers;

use App\Http\Controllers\Controller;
use App\FlowDash\Http\Middleware\SetDefaultLayoutForUrls;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', SetDefaultLayoutForUrls::class]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('flowdash::home');
    }

    /**
     * Show the analytics dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function analytics()
    {
        return view('flowdash::analytics');
    }

    /**
     * Show quick access dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function quickAccess()
    {
        return view('flowdash::quick-access');
    }

    /**
     * Show staff.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function staff()
    {
        return view('flowdash::staff');
    }

    /**
     * Show shop dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function ecommerce()
    {
        return view('flowdash::ecommerce');
    }

    /**
     * Show trello.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function appTrello()
    {
        return view('flowdash::app-trello');
    }

    /**
     * Show projects.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function appProjects()
    {
        return view('flowdash::app-projects');
    }

    /**
     * Show activities.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function appActivities()
    {
        return view('flowdash::app-activities');
    }

    /**
     * Show full calendar.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function appFullcalendar()
    {
        return view('flowdash::app-fullcalendar');
    }

    /**
     * Show chat.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function appChat()
    {
        return view('flowdash::app-chat');
    }

    /**
     * Show email.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function appEmail()
    {
        return view('flowdash::app-email');
    }

    /**
     * Show browse courses.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function appBrowseCourses()
    {
        return view('flowdash::app-browse-courses');
    }

    /**
     * Show course.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function appCourse()
    {
        return view('flowdash::app-course');
    }

    /**
     * Show lesson.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function appLesson()
    {
        return view('flowdash::app-lesson');
    }

    /**
     * Show companies.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function companies()
    {
        return view('flowdash::companies');
    }

    /**
     * Show stories.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function stories()
    {
        return view('flowdash::stories');
    }

    /**
     * Show discussions.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function discussions()
    {
        return view('flowdash::discussions');
    }

    /**
     * Show product listing.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function productListing()
    {
        return view('flowdash::product-listing');
    }

    /**
     * Show payout.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function payout()
    {
        return view('flowdash::payout');
    }

    /**
     * Show invoice.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function invoice()
    {
        return view('flowdash::invoice');
    }

    /**
     * Show digital product.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function digitalProduct()
    {
        return view('flowdash::digital-product');
    }

    /**
     * Show edit account.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function editAccount()
    {
        return view('flowdash::edit-account');
    }

    /**
     * Show profile.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function profile()
    {
        return view('flowdash::profile');
    }
}
