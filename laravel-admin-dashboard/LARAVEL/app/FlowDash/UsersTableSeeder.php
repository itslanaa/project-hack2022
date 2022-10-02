<?php

namespace App\FlowDash;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
  public function run()
  {
    User::truncate();

    // Artisan::call('passport:install');

    $this->freshSeeder();
  }

  protected function freshSeeder()
  {
    $accounts = [[
      'name' => 'Adrian Demian',
      'email' => 'contact@mosaicpro.biz',
      'password' => '12345678'
    ]];

    foreach ($accounts as $account) {
      // user
      $user = User::create([
        'name' => $account['name'],
        'email' => $account['email'],
        'password' => bcrypt($account['password'])
      ]);

      // api
      // $user->createToken('Personal');
    }
  }
}
