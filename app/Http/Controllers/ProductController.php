<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $isLogin = Auth::check();
        $products = Product::orderBy('created_at', 'desc')->paginate(10);   

        return Inertia::render('components/ProductDetail', [
            'isLogin' => $isLogin,
            'product' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $isLogin = Auth::check();
        $suggested = Product::where('id', '!=', $product->id)
                            ->inRandomOrder()
                            ->limit(5)
                            ->get();

        return Inertia::render('home', [ // Tetap ke "home"
            'product' => $product,
            'suggested' => $suggested,
            'isLogin' => $isLogin,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
