<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::truncate();

        User::factory(1)->create([
            'email' => 'test@luma.test',
            'password' => bcrypt('12345678')
        ]);
    }
}
