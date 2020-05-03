<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' =>'auth', 'namespace' => 'Auth'], function(){
    Route::post('signin', 'SignInController');
    Route::post('signup', 'SignUpController');
    Route::post('signout', 'SignOutController');
    Route::get('me', 'MeController');
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
