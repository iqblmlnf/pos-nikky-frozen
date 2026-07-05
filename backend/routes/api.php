<?php


use App\Http\Controllers\SaleController;

use App\Http\Controllers\Api\MidtransController;



Route::apiResource('sales', SaleController::class);

Route::post('/midtrans/create-transaction', [MidtransController::class, 'createTransaction']);
