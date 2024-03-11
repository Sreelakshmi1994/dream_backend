var db=require('../dbconnection');
var fs = require('fs');
const { Console } = require('console');
var Application_Course=
{ 
// Save_Application_Course:function(Application_Course_,callback)
// { 
// return db.query("CALL Save_Application_Course("+
// "@Application_Course_Id_ :=?,"+
// "@Application_Course_Name_ :=?,"+
// "@Subject_Id_ :=?,"+
// "@Sub_Section_Id_ :=?,"+
// "@Duration_Id_ :=?,"+
// "@Level_Id_ :=?,"+
// "@Ielts_Minimum_Score_ :=?,"+
// "@Internship_Id_ :=?,"+
// "@Notes_ :=?,"+
// "@Details_ :=?,"+
// "@Application_Fees_ :=?,"+
// "@Tution_Fees_ :=?,"+
// "@Entry_Requirement_ :=?,"+
// "@Living_Expense_ :=?,"+
// "@Work_Experience_ :=?,"+
// "@Registration_Fees_ :=?,"+
// "@Date_Charges_ :=?,"+
// "@Bank_Statements_ :=?,"+
// "@Insurance_ :=?,"+
// "@VFS_Charges_ :=?,"+
// "@Apostille_ :=?,"+
// "@Other_Charges_ :=?,"+
// "@IELTS_Name_ :=?,"+
// "@Intake_Name_ :=?,"+
// "@University_Id_ :=?,"+
// "@Country_Id_ :=?,"+
// "@Tag_ :=?,"+
// "@Intake_Data_ :=?"+")"
// ,[Application_Course_.Application_Course_Id,
// Application_Course_.Application_Course_Name,
// Application_Course_.Subject_Id, 
// Application_Course_.Sub_Section_Id,
// Application_Course_.Duration_Id,
// Application_Course_.Level_Id,
// Application_Course_.Ielts_Minimum_Score,
// Application_Course_.Internship_Id,
// Application_Course_.Notes,
// Application_Course_.Details,
// Application_Course_.Application_Fees,
// Application_Course_.Tution_Fees,
// Application_Course_.Entry_Requirement,
// Application_Course_.Living_Expense,
// Application_Course_.Work_Experience,
// Application_Course_.Registration_Fees,
// Application_Course_.Date_Charges,
// Application_Course_.Bank_Statements,
// Application_Course_.Insurance,
// Application_Course_.VFS_Charges,
// Application_Course_.Apostille,
// Application_Course_.Other_Charges,
// Application_Course_.IELTS_Name,
// Application_Course_.Intake_Name,
// Application_Course_.University_Id,
// Application_Course_.Country_Id,
// Application_Course_.Tag,
// JSON.stringify(Application_Course_.Intake_Data)
// ],callback);
// }
// ,




Save_Application_Course:function(Application_Course_,callback)
{ 
return db.query("CALL Save_Application_Course("+
"@Application_Course_Id_ :=?,"+
"@Application_Course_Name_ :=?"+")"
,[Application_Course_.Application_Course_Id,
Application_Course_.Application_Course_Name
],callback);
}
,



Delete_Application_Course:function(Application_Course_Id_,callback)
{ 
return db.query("CALL Delete_Application_Course(@Application_Course_Id_ :=?)",[Application_Course_Id_],callback);
},


Get_Application_Course:function(Application_Course_Id_,callback)
{ 
return db.query("CALL Get_Application_Course(@Application_Course_Id_ :=?)",[Application_Course_Id_],callback);
},

Get_Application_Course_Import:function(Import_Master_Id_,callback)
{ 
return db.query("CALL Get_Application_Course_Import(@Import_Master_Id_ :=?)",[Import_Master_Id_],callback);
},

Save_Application_Course_Import:function(Application_Course_Details,callback)
{  

return db.query("CALL Save_Application_Course_Import("+"@Application_Course_Details :=?"+")",
[JSON.stringify(Application_Course_Details.Application_Course_Import_Details)],callback);
},

 Search_Application_Course_Import:function(From_Date_,To_Date_,Is_Date_Check_,callback)
{ 

return db.query("CALL Search_Application_Course_Import(@From_Date_ :=?,@To_Date_ :=?,@Is_Date_Check_ :=?)",[From_Date_,To_Date_,Is_Date_Check_],callback);
},


//  Search_Application_Course:function(Application_Course_Name_,callback)
//  { 
//  if (Application_Course_Name_===undefined || Application_Course_Name_==="undefined" )
// Application_Course_Name_='';
// return db.query("CALL Search_Application_Course(@Application_Course_Name_ :=?)",[Application_Course_Name_],callback);
//  },



Search_Application_Course:function(Application_Course_Name_,Level_Id_,Country_Id_,Internship_Id_,Duration_Id_,University_Id_,Subject_Id_,Sub_Section_Id_,Pointer_Start_,Pointer_Stop_,Page_Length_,callback)
{ 
if (Application_Course_Name_===undefined || Application_Course_Name_==="undefined" )
Application_Course_Name_='';

if (Level_Id_===undefined || Level_Id_==="undefined" )
Level_Id_=0;

if (Country_Id_===undefined || Country_Id_==="undefined" )
Country_Id_=0;

if (Internship_Id_===undefined || Internship_Id_==="undefined" )
Internship_Id_=0;

if (Duration_Id_===undefined || Duration_Id_==="undefined" )
Duration_Id_=0;

if (University_Id_===undefined || University_Id_==="undefined" )
University_Id_=0;

if (Subject_Id_===undefined || Subject_Id_==="undefined" )
Subject_Id_=0;

if (Sub_Section_Id_===undefined || Sub_Section_Id_==="undefined" )
Sub_Section_Id_=0;

if (Pointer_Start_===undefined || Pointer_Start_==="undefined" )
Pointer_Start_=0;

if (Pointer_Stop_===undefined || Pointer_Stop_==="undefined" )
Pointer_Stop_=0; 

return db.query("CALL Search_Application_Course(@Application_Course_Name_ :=?,@Level_Id_ :=?,@Country_Id_ :=?,@Internship_Id_ :=?,@Duration_Id_ :=?,@University_Id_ :=?,@Subject_Id_ :=?,@Sub_Section_Id_ :=?,@Pointer_Start_ :=?,@Pointer_Stop_ :=?,@Page_Length_ :=?)",
[Application_Course_Name_,Level_Id_,Country_Id_,Internship_Id_,Duration_Id_,University_Id_,Subject_Id_,Sub_Section_Id_,Pointer_Start_,Pointer_Stop_,Page_Length_],callback);
},

Search_Application_Course_Typeahead:function(Country_Id_,Subject_Id_,Sub_Section_Id_,Level_Id_ ,Application_Course_Name_ ,Duration_Id_ ,Ielts_Minimum_Score_ ,Intake_Id_,Internship_Id_,callback)
{ 
    if (Delivery_Point_Name_=== undefined || Delivery_Point_Name_==="undefined")
    Delivery_Point_Name_='';

return db.query("CALL Search_Application_Course_Typeahead(@Country_Id_ :=?,@Subject_Id_ :=?,@Sub_Section_Id_ :=?,@Level_Id_ :=?,@Application_Course_Name_ :=?,@Duration_Id_ :=?,@Ielts_Minimum_Score_ :=?,@Intake_Id_ :=?,@Internship_Id_ :=?)",
[Country_Id_,Subject_Id_,Sub_Section_Id_,Level_Id_ ,Application_Course_Name_ ,Duration_Id_ ,Ielts_Minimum_Score_ ,Intake_Id_,Internship_Id_],callback);
},

//  Get_Menu_Status:function(Menu_Id_,Login_User_,callback)
//  { 
//    return db.query("CALL Get_Menu_Status(@Menu_Id_ :=?,@Login_User_:=?)", [Menu_Id_,Login_User_],callback);
//  } 


Search_Application_Courses_Typeahead:function(Application_Course_Name,callback)
{ 
  if (Application_Course_Name===undefined || Application_Course_Name==="undefined" )
  Application_Course_Name='';
  return db.query("CALL Search_Application_Courses_Typeahead(@Application_Course_Name :=?)",[Application_Course_Name],callback);
},

Search_Application_Courses_Fees_Typeahead:function(Application_Course_Name,Student_Id,callback)
{ 
  if (Application_Course_Name===undefined || Application_Course_Name==="undefined" )
  Application_Course_Name='';
  return db.query("CALL Search_Application_Courses_Fees_Typeahead(@Application_Course_Name :=?,@Student_Id :=?)",[Application_Course_Name,Student_Id],callback);
}



 };
 module.exports=Application_Course;

