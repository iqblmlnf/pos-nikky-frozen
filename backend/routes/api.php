<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Api\AuthController;

Route::apiResource('users', UserController::class);
Route::post('/login', [AuthController::class, 'login']);
