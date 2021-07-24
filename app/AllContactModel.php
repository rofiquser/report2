<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AllContactModel extends Model
{
       public $table="usercontact";
        public $primaryKey="id";
        public $incrementing=true;
        public $keyType="int";
        public $timestamps=false;


}
