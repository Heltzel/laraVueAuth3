<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

class SignOutController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth:api']);
    }
    
    public function __invoke()
    {
        auth()->logout();
        return response()->json([
           'message'=> 'Loggedout'
       ]);
    }
}
