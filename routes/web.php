<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/products', [ProductController::class, 'index']);
Route::get('/cart', [CartController::class, 'index']);
// Route::get('/products', [ProductController::class, 'index']);

// Route::get('/product', function(){
//     return Inertia::render('product');
// });

Route::get('/home', function(){
    $isLogin = Auth::check();
    return Inertia::render('home', ['isLogin' => $isLogin]);
})->name('home');


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
