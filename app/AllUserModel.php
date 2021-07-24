<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AllUserModel extends Model
{
        public $table="alluser";
         public $primaryKey="id";
         public $incrementing=true;
         public $keyType="int";
         public $timestamps=false;
}
