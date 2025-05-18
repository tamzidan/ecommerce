<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('welcome');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/cart', [CartController::class, 'index']);

Route::get('/home', function(){
    $isLogin = Auth::check();
    $products = App\Models\Product::orderBy('created_at', 'desc')->paginate(10);   

    return Inertia::render('home', [
        'isLogin' => $isLogin,
        'products' => $products
    ]);
})->name('home');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
