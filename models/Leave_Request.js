 var db=require('../dbconnection');
 const storedProcedure=require('../helpers/stored-procedure');
 var fs = require('fs');
 var Leave_Request=
 { 
    Save_Leave_Request:function(Leave_Request_,callback)
    { 
   return db.query("CALL Save_Leave_Request("+"@Leave_Request_Id_ :=?,"+
   "@Client_Accounts_Id_ :=?,"+
   "@Entry_Date_ :=?,"+
   "@Reasonfor_ :=?,"+
   "@User_Id_ :=?,"+
   "@Leave_Details_ :=?)",[ Leave_Request_.Leave_Request_Id,Leave_Request_.Client_Accounts_Id,Leave_Request_.Entry_Date,Leave_Request_.Reasonfor,Leave_Request_.User_Id,JSON.stringify(Leave_Request_.Leave_Details)],callback);
    },
Save_Leave_Request_Admin:function(Leave_Request_,callback)
{ 
    return db.query("CALL Save_Leave_Request_Admin("+"@Leave_Request_Id_ :=?,"+"@Approved_Date_ :=?,"+
    "@Leave_Request_Status_Id_ :=?,"+"@Approved_by_ :=?,"+"@Description_ :=?,"+   "@Entry_Date_ :=?,"+ 
    "@Leave_Type_Id_ :=?,"+"@Store_Id_ :=?,"+"@From_Date_ :=?,"+"@To_Date_ :=?,"+"@Reasonfor_ :=?,"+
    "@Noof_Leaves_ :=?,"+"@Leave_Mode_Id_ :=?"+")"
    ,[Leave_Request_.Leave_Request_Id,Leave_Request_.Approved_Date,Leave_Request_.Leave_Request_Status_Id,
    Leave_Request_.Approved_by,Leave_Request_.Description,Leave_Request_.Entry_Date,Leave_Request_.Leave_Type_Id,
    Leave_Request_.Store_Id,Leave_Request_.From_Date,Leave_Request_.To_Date,Leave_Request_.Reasonfor,
    Leave_Request_.Noof_Leaves,Leave_Request_.Leave_Mode_Id,
    ],callback);
},
 Delete_Leave_Request:function(Leave_Request_Id_,callback)
 { 
return db.query("CALL Delete_Leave_Request(@Leave_Request_Id_ :=?)",[Leave_Request_Id_],callback);
 },
 Get_Leave_Request:function(Leave_Request_Id_,callback)
 { 
return db.query("CALL Get_Leave_Request(@Leave_Request_Id_ :=?)",[Leave_Request_Id_],callback);
 },
 Load_Leave_Type_Dropdown:function(callback)
 { 
     return db.query("CALL Load_Leave_Type_Dropdown()", [],callback);
 },
 Search_Leave_Request:function(Client_Accounts_Id_,Status_Id_,callback)
 { 
return db.query("CALL Search_Leave_Request(@Client_Accounts_Id_ :=?,@Status_Id_ :=?)",[Client_Accounts_Id_,Status_Id_],callback);
 }, 
 Search_Leave_Request_Admin:function(Fromdate_, Todate_, Leave_Request_Party_Name_,Date_Value_, Store_Id_,Status_Id_,callback)
 { 
 if (Leave_Request_Party_Name_===undefined || Leave_Request_Party_Name_==="undefined" )
 Leave_Request_Party_Name_='';
return db.query("CALL Search_Leave_Request_Admin(@Fromdate_ :=?,@Todate_ :=?,@Leave_Request_Party_Name_ :=?,@Date_Value_ :=?,@Store_Id_  :=?,@Status_Id_ :=?)",
[Fromdate_,Todate_,Leave_Request_Party_Name_,Date_Value_,Store_Id_,Status_Id_],callback);
 },
 Search_Leave_Report_Admin:function(Fromdate_, Todate_, Leave_Request_Party_Name_, Store_Id_,callback)
 { 
 if (Leave_Request_Party_Name_===undefined || Leave_Request_Party_Name_==="undefined" )
 Leave_Request_Party_Name_='';
return db.query("CALL Search_Leave_Report_Admin(@Fromdate_ :=?,@Todate_ :=?,@Leave_Request_Party_Name_ :=?,@Store_Id_  :=?)",
[Fromdate_,Todate_,Leave_Request_Party_Name_,Store_Id_],callback);
 },
 Get_Leave_Count: function (Client_Accounts_Id_,callback)
 { 
     return db.query("CALL Get_Leave_Count(@Client_Accounts_Id_ :=?)", [ Client_Accounts_Id_],callback);
 } ,
  };
  module.exports=Leave_Request;