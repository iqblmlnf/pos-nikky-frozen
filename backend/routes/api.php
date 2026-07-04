<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuditLogController;
use App\Http\Controllers\ExpenseController;


Route::get('/audit-logs', [AuditLogController::class, 'index']);
Route::apiResource('expenses', ExpenseController::class);


