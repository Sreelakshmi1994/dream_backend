var db=require('../dbconnection');
const storedProcedure=require('../helpers/stored-procedure');
var fs = require('fs');
var Attendance_Master=
{ 
Save_Attendance_Master:function(Attendance_Master_,callback)
{ 
return db.query("CALL Save_Attendance_Master("+
"@Attendance_Master_Id_ :=?,"+
"@Entry_Date_ :=?,"+
"@Branch_Id_ :=?,"+
"@Users_Id_ :=?,"+
"@Upload_File_ :=?"+")"
,[Attendance_Master_.Attendance_Master_Id,
Attendance_Master_.Entry_Date,
Attendance_Master_.Branch_Id,
Attendance_Master_.Users_Id,
Attendance_Master_.Upload_File
],callback);
},
Delete_Attendance_Master:function(Attendance_Master_Id_,callback)
{ 
return db.query("CALL Delete_Attendance_Master(@Attendance_Master_Id_ :=?)",[Attendance_Master_Id_],callback);
},
Get_Attendance_Master:function(Attendance_Master_Id_,callback)
{ 
return db.query("CALL Get_Attendance_Master(@Attendance_Master_Id_ :=?)",[Attendance_Master_Id_],callback);
},
Search_Attendance_Master:function(Attendance_Master_Name_,callback)
{ 
if (Attendance_Master_Name_===undefined || Attendance_Master_Name_==="undefined" )
Attendance_Master_Name_='';
return db.query("CALL Search_Attendance_Master(@Attendance_Master_Name_ :=?)",[Attendance_Master_Name_],callback);
},
Search_Attendance_Master_Admin:function(From_Date_,To_Date_,Store_Id_,callback)
{ 
   if (Store_Id_===undefined || Store_Id_==="undefined" || Store_Id_===null )
   Store_Id_=0;
 
   console.log(Store_Id_)
return db.query("CALL Search_Attendance_Master_Admin(@From_Date_ :=?,@To_Date_ :=?,@Store_Id_ :=?)",
[From_Date_,To_Date_,Store_Id_],callback);
},

Search_Attendance_Master_Import:function(From_Date_,To_Date_,Is_Date_Check_,Store_Id_,callback)
{ 

   if (Store_Id_===undefined || Store_Id_==="undefined" || Store_Id_===null )
   Store_Id_=0;
   if (Is_Date_Check_===undefined || Is_Date_Check_==="undefined" )
   Is_Date_Check_=0;
return db.query("CALL Search_Attendance_Master_Import(@From_Date_ :=?,@To_Date_ :=?,@Is_Date_Check_ :=?,@Store_Id_ :=?)",[From_Date_,To_Date_,Is_Date_Check_,Store_Id_],callback);
},

Save_Attendance_Master_Import: async function (Attendance_Master_) {
   console.log(Attendance_Master_)
   return new Promise(async (rs,rej)=>{
   const pool = db.promise();
   let result1;
   var connection = await pool.getConnection();
   try {
   const result1 = await(new storedProcedure('Save_Attendance_Master_Import',[Attendance_Master_.Attendance_Master_Id,
       Attendance_Master_.Entry_Date,  Attendance_Master_.From_Date,  Attendance_Master_.To_Date,
       // ,Attendance_Master_.Upload_File
       Attendance_Master_.Users_Id,Attendance_Master_.Store_Id,
     Attendance_Master_.Attendance_Details], connection)).result();
    console.log(result1)
   await connection.commit();
       connection.release();
       rs( result1);
       }
   catch (err) {
       console.log(err)
   await connection.rollback();
   rej(err);
   var result2=[{'Attendance_Master_Id_':0}]      
   rs(result2);
   }
   finally 
   {
   connection.release();
}
})
},


Load_Employee:function(callback)
{ 
   return db.query("CALL Load_Employee()",[],callback);
}, 


 };
 module.exports=Attendance_Master;

