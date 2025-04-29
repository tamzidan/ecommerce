<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->words(5, true),
            'slug' => fake()->unique()->slug(5),
            'description' => fake()->words(100, true),
            'price' => fake()->randomFloat(null, 1, 1000000000)
        ];
    }
}
