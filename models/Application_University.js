var db=require('../dbconnection');
var fs = require('fs');
var Application_University=
{ 


  Save_Application_University:function(Application_University_,callback)
  { 
 return db.query("CALL Save_Application_University("+
 "@Application_University_Id_ :=?,"+
 "@Application_University_Name_ :=?"+")"
  ,[Application_University_.Application_University_Id,
 Application_University_.Application_University_Name
 ],callback);
  }
  ,
  Delete_Application_University:function(Application_University_Id_,callback)
  { 
 return db.query("CALL Delete_Application_University(@Application_University_Id_ :=?)",[Application_University_Id_],callback);
  }
  ,
  Get_Application_University:function(Application_University_Id_,callback)
  { 
 return db.query("CALL Get_Application_University(@Application_University_Id_ :=?)",[Application_University_Id_],callback);
  }
  ,
 
  Application_University_Typeahead:function(Application_University_Name,callback)
{ 
   if (Application_University_Name===undefined || Application_University_Name==="undefined" )
   Application_University_Name='';    
   return db.query("CALL Application_University_Typeahead(@Application_University_Name :=?)",[Application_University_Name],callback);
},
 
  Search_Application_University_Typeahead:function(Application_University_Name,callback)
  { 
     if (Application_University_Name===undefined || Application_University_Name==="undefined" )
     Application_University_Name='';
     return db.query("CALL Search_Application_University_Typeahead(@Application_University_Name :=?)",[Application_University_Name],callback);
  },
 
 
 
  Search_Application_University:function(Application_University_Name_,callback)
  { 
  if (Application_University_Name_===undefined || Application_University_Name_==="undefined" )
 Application_University_Name_='';
 return db.query("CALL Search_Application_University(@Application_University_Name_ :=?)",[Application_University_Name_],callback);
  }
   };



//  Save_Application_University:function(Application_University_,callback)
//  { 
// return db.query("CALL Save_Application_University("+"@Application_University_Id_ :=?,"+"@Application_University_Name_ :=?,"+"@About_ :=?,"+
// "@About1_ :=?,"+"@About2_ :=?,"+"@Location_ :=?,"+"@Address_ :=?,"+"@Founded_In_ :=?,"+
// "@Institution_Type_ :=?,"+"@Cost_Of_Living_ :=?,"+"@Tution_Fee_ :=?,"+"@Application_Fee_ :=?,"+"@Type_Of_Accomodation_ :=?,"+
// "@Contact_Number_ :=?,"+"@Email_ :=?,"+"@Web_ :=?,"+"@Fb_ :=?,"+"@Linkedin_ :=?,"+"@Twitter_ :=?,"+
// "@Googlemap_ :=?,"+"@Status_ :=?,"+"@Application_University_Id_ :=?,"+"@Sub_Heading1_ :=?,"+"@Sub_Heading2_ :=?,"+"@Sub_Heading3_ :=?,"+
// "@School_Rank_ :=?,"+"@Video_Link_ :=?,"+"@Sub_Heading_Colored_ :=?,"+
// "@Banner_Image_ :=?"+")"
//  ,[Application_University_.Application_University_Id,Application_University_.Application_University_Name,Application_University_.About,Application_University_.About1,
//    Application_University_.About2,Application_University_.Location,Application_University_.Address,Application_University_.Founded_In,
//    Application_University_.Institution_Type,Application_University_.Cost_Of_Living,Application_University_.Tution_Fee,Application_University_.Application_Fee,
//    Application_University_.Type_Of_Accomodation,Application_University_.Contact_Number,Application_University_.Email,Application_University_.Web,
//    Application_University_.Fb,Application_University_.Linkedin,Application_University_.Twitter,Application_University_.Googlemap,Application_University_.Status,
//    Application_University_.Application_University_Id,Application_University_.Sub_Heading1,Application_University_.Sub_Heading2,Application_University_.Sub_Heading3,
//    Application_University_.School_Rank,Application_University_.Video_Link,Application_University_.Sub_Heading_Colored,Application_University_.Banner_Image,
// ],callback);
//  } ,
//  Save_Application_University_Photos: function (Application_University_, callback) 
//   {  
    
//         return db.query("CALL Save_Application_University_Photos(" +"@Application_University_Id_ :=?,"  +"@Photo :=?"+")"
//         ,[Application_University_.Application_University_Id,Application_University_.Photo],callback);
//   },
//  Delete_Application_University:function(Application_University_Id_,callback)
//  { 
// return db.query("CALL Delete_Application_University(@Application_University_Id_ :=?)",[Application_University_Id_],callback);
//  } ,
//  Load_Status:function(callback)
//  { 
// return db.query("CALL Load_Status()",[],callback);
//  } ,
//  Load_Application_University:function(callback)
//  { 
// return db.query("CALL Load_Application_University()",[],callback);
//  } ,
//  Get_Application_University_Photos:function(Application_University_Id_,callback)
//  { 
// return db.query("CALL Get_Application_University_Photos(@Application_University_Id_ :=?)",[Application_University_Id_],callback);
//  } ,

//  Application_University_Typeahead_with_Level_Application_University:function(Application_University_Id,Level_Detail_Id,Application_University_Name,callback)
//  { 
//     if (Application_University_Name===undefined || Application_University_Name==="undefined" )
//     Application_University_Name='';
//     if (Application_University_Id===undefined )
//     Application_University_Id=0;
//     if (Level_Detail_Id===undefined  )
//     Level_Detail_Id=0;
//     return db.query("CALL Application_University_Typeahead_with_Level_Application_University(@Application_University_Id :=?,@Level_Detail_Id :=?,@Application_University_Name :=?)",[Application_University_Id,Level_Detail_Id,Application_University_Name],callback);
//  },
//  Search_Application_University:function(Application_University_Name_,Application_University_,Status_,callback)
//  { 
//  if (Application_University_Name_===undefined || Application_University_Name_==="undefined" )
// Application_University_Name_='';
// return db.query("CALL Search_Application_University(@Application_University_Name_ :=?,@Application_University_ :=?,@Status_ :=?)",[Application_University_Name_,Application_University_,Status_,],callback);
//  },
//  Search_Application_University_Typeahead:function(Application_University_Name,callback)
//  { 
//     if (Application_University_Name===undefined || Application_University_Name==="undefined" )
//     Application_University_Name='';
//     return db.query("CALL Search_Application_University_Typeahead(@Application_University_Name :=?)",[Application_University_Name],callback);
//  }

//   };
 module.exports=Application_University;

