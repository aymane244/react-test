<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;


Route::get('/contacts', [ContactController::class, 'show']);
Route::post('/add-contact', [ContactController::class, 'save']);
Route::get('/edit-contact/{id}', [ContactController::class, 'edit']);
Route::post('/update-contact/{id}', [ContactController::class, 'update']);
Route::delete('delete-contact/{id}', [ContactController::class, 'drop']);