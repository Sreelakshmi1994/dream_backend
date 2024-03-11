 const { Console } = require('console');
var db=require('../dbconnection');
 const storedProcedure=require('../helpers/stored-procedure');
 var fs = require('fs');
 var Salary_Calculation_Master=
 { 
Save_Salary_Calculation_Master: async function (Salary_Calculation_Master_) 
{

    console.log(Salary_Calculation_Master_)
   return new Promise(async (rs,rej)=>{
   const pool = db.promise();
   let result1; 
       var connection = await pool.getConnection();
       try
       {       
       const result1 = await(new storedProcedure('Save_Salary_Calculation_Master',[Salary_Calculation_Master_.Salary_Calculation_Master_Id,
        Salary_Calculation_Master_.Store_Id,Salary_Calculation_Master_.Entry_Date,Salary_Calculation_Master_.Month_Year,
        Salary_Calculation_Master_.Calculation_No,Salary_Calculation_Master_.Users_Id,Salary_Calculation_Master_.Remark,
        Salary_Calculation_Master_.Salary_Calculation_Details], connection)).result();
       console.log(result1)
           connection.release();
           rs( result1);
       }
       catch (err)
           {
               console.log(err)            
       rej(err);
       }   
})
},
Delete_Salary_Calculation_Master:function(Salary_Calculation_Master_Id_,callback)
{ 
return db.query("CALL Delete_Salary_Calculation_Master(@Salary_Calculation_Master_Id_ :=?)",[Salary_Calculation_Master_Id_],callback);
},
Get_Salary_Calculation_Master:function(Salary_Calculation_Master_Id_,callback)
{ 
return db.query("CALL Get_Salary_Calculation_Master(@Salary_Calculation_Master_Id_ :=?)",[Salary_Calculation_Master_Id_],callback);
},
Search_Salary_Calculation_Master:function(Fromdate_,Todate_,Is_Date_,Calculation_No_,callback)
{ 
    if (Calculation_No_===undefined || Calculation_No_==="undefined" )
    Calculation_No_='';
   return db.query("CALL Search_Salary_Calculation_Master(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_ :=?,@Calculation_No_ :=?)",[Fromdate_,Todate_,Is_Date_,Calculation_No_],callback);
},
Search_WPS_Employee:function(Fromdate_,Todate_,Is_Date_,Store_Id_,callback)
{ 
   return db.query("CALL Search_WPS_Employee(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_ :=?,@Store_Id_ :=?)",[Fromdate_,Todate_,Is_Date_,Store_Id_],callback);
},
Save_WPS_Salary_Calculation_Master: async function (WPS_Salary_Calculation_Master_) 
{
   return new Promise(async (rs,rej)=>{
   const pool = db.promise();
   let result1; 
       var connection = await pool.getConnection();
       try
       {       
       const result1 = await(new storedProcedure('Save_WPS_Salary_Calculation_Master',[WPS_Salary_Calculation_Master_.WPS_Salary_Calculation_Master_Id,
        WPS_Salary_Calculation_Master_.Store_Id,WPS_Salary_Calculation_Master_.Entry_Date,WPS_Salary_Calculation_Master_.Month_Year,
        WPS_Salary_Calculation_Master_.Calculation_No,WPS_Salary_Calculation_Master_.Users_Id,WPS_Salary_Calculation_Master_.Remark,
        WPS_Salary_Calculation_Master_.WPS_Salary_Calculation_Details], connection)).result();
       console.log(result1)
           connection.release();
           rs( result1);
       }
       catch (err)
           {
               console.log(err)            
       rej(err);
       }   
})
},

Search_WPS_Salary_Calculation_Master:function(Fromdate_,Todate_,Is_Date_,Calculation_No_,Store_Id_,callback)
{ 
    if (Calculation_No_===undefined || Calculation_No_==="undefined" )
    Calculation_No_='';
   return db.query("CALL Search_WPS_Salary_Calculation_Master(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_ :=?,@Calculation_No_ :=?,@Store_Id_ :=?)",[Fromdate_,Todate_,Is_Date_,Calculation_No_,Store_Id_],callback);
},
Get_WPS_Salary_Calculation_Master:function(WPS_Salary_Calculation_Master_Id_,callback)
{ 
return db.query("CALL Get_WPS_Salary_Calculation_Master(@WPS_Salary_Calculation_Master_Id_ :=?)",[WPS_Salary_Calculation_Master_Id_],callback);
},
Delete_WPS_Salary_Calculation_Master:function(WPS_Salary_Calculation_Master_Id_,callback)
{ 
return db.query("CALL Delete_WPS_Salary_Calculation_Master(@WPS_Salary_Calculation_Master_Id_ :=?)",[WPS_Salary_Calculation_Master_Id_],callback);
},
// Search_Salary_Employee:function(Fromdate_,Todate_,Is_Date_,Store_Id_,callback)
// { 
//    return db.query("CALL Search_Salary_Employee(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_ :=?,@Store_Id_ :=?)",[Fromdate_,Todate_,Is_Date_,Store_Id_],callback);
// },

Search_Salary_Employee:function(Fromdate_,Todate_,Is_Date_,Store_Id_,callback)
{ 
   return db.query("CALL Search_Salary_Employee_New(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_ :=?,@Store_Id_ :=?)",[Fromdate_,Todate_,Is_Date_,Store_Id_],callback);
},

Get_Salary_Print_Details:function(Salary_Calculation_Details_Id_,callback)
{ 
return db.query("CALL Get_Salary_Print_Details(@Salary_Calculation_Details_Id_ :=?)",[Salary_Calculation_Details_Id_],callback);
},
};
  module.exports=Salary_Calculation_Master;

