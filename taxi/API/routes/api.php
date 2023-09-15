<?php

use App\Http\Controllers\UserController;
use App\Http\Controllers\UserLoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
// users
Route::post('/add_user', [UserController::class, 'create']);
Route::post('/login_user', [UserLoginController::class, 'login']);
Route::middleware('auth:sanctum')->group(function(){
    Route::post('logout', [UserLoginController::class, 'logout']);
    Route::get('user_logged', [UserLoginController::class, 'getUserData']);
    Route::post('logoutUser', [UserLoginController::class, 'logout']);
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
