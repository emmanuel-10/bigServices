<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds. 
     *
     * @return void
     */
    public function run()
    {
        DB::table('categorias')->insert([
            'nombre' => 'Electricidad',
            'icono' => 'electrico',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        
        DB::table('categorias')->insert([
            'nombre' => 'Gasfiteria',
            'icono' => 'gasfiteria',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        
        DB::table('categorias')->insert([
            'nombre' => 'Jardineria',
            'icono' => 'jardineria',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        
        DB::table('categorias')->insert([
            'nombre' => 'Limpieza del hogar',
            'icono' => 'limhogar',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        
        DB::table('categorias')->insert([
            'nombre' => 'Cuidado de niños',
            'icono' => 'cuininos',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
        
        DB::table('categorias')->insert([
            'nombre' => 'Cuidado de animales',
            'icono' => 'animales',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
