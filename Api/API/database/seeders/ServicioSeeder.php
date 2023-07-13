<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServicioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $datos = [
            array( 
                'nombre' =>  "ElectraServ",
                'precio' => 10000,
                'imagen' => "electrico_01",
                'categoria_id' => 1,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Voltex",
                'precio' => 10000,
                'imagen' => "electrico_02",
                'categoria_id' => 1,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "PowerTech",
                'precio' => 10000,
                'imagen' => "electrico_03",
                'categoria_id' => 1,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Limpex",
                'precio' => 10000,
                'imagen' => "limpieza_01",
                'categoria_id' => 4,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "CleanCo",
                'precio' => 10000,
                'imagen' => "limpieza_02",
                'categoria_id' => 4,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "Spotless",
                'precio' => 10000,
                'imagen' => "limpieza_03",
                'categoria_id' => 4,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "PetGuard",
                'precio' => 10000,
                'imagen' => "animales_01",
                'categoria_id' => 6,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "FurryCare",
                'precio' => 10000,
                'imagen' => "animales_02",
                'categoria_id' => 6,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "PawsCare",
                'precio' => 10000,
                'imagen' => "animales_03",
                'categoria_id' => 6,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "GasFlow",
                'precio' => 10000,
                'imagen' => "gasfiteria_01",
                'categoria_id' => 2,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "AquaFix",
                'precio' => 10000,
                'imagen' => "gasfiteria_02",
                'categoria_id' => 1,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "PipePro",
                'precio' => 10000,
                'imagen' => "gasfiteria_03",
                'categoria_id' => 2,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "VerdiGarden",
                'precio' => 10000,
                'imagen' => "jardineria_01",
                'categoria_id' => 3,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "FlorScape",
                'precio' => 10000,
                'imagen' => "jardineria_02",
                'categoria_id' => 3,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
            array( 
                'nombre' =>  "GreenCare",
                'precio' => 10000,
                'imagen' => "jardineria_03",
                'categoria_id' => 4,
                'disponible' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ),
        ];

        DB::table('servicios')->insert($datos);
    }
}
