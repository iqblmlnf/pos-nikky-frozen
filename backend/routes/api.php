<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductController;

use App\Http\Controllers\ProductStockController;
use App\Http\Controllers\TransferStockController;



Route::apiResource('products', ProductController::class);

Route::apiResource('stocks', ProductStockController::class);
Route::post('/stock-transfer', [TransferStockController::class, 'store']);
Route::get('/stock-transfer', [TransferStockController::class, 'index']);
Route::get('/stock-transfer-history', [TransferStockController::class, 'history']);

