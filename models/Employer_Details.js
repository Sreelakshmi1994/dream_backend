var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure=require('../helpers/stored-procedure');
var Employer_Details=
{ 
  Save_Employer_Details: async function (Employer_Details_) 
{
return new Promise(async (rs,rej)=>{
const pool = db.promise();
let result1;
var connection = await pool.getConnection();
await connection.beginTransaction();
var Employer_Details_Menu_Selection_ = Employer_Details_.Employer_Details_Menu_Selection_Data;
try
{
  console.log(Employer_Details_)
  const result1 = await(new storedProcedure('Save_Employer_Details',[Employer_Details_.Employer_Details_Id,Employer_Details_.Company_Name,Employer_Details_.Contact_Person,
    Employer_Details_.Contact_Number,Employer_Details_.Email_Id,Employer_Details_.Company_Location,Employer_Details_.Website,
], connection)).result();
  await connection.commit();
  
  connection.release();
rs( result1);
}
catch (err) {
  
await connection.rollback();
rej(err);
}   
})
},

// Save_Company: async function (Company_) 
// {
// return new Promise(async (rs,rej)=>{
// const pool = db.promise();
// let result1;
// var connection = await pool.getConnection();
// await connection.beginTransaction();

// try
// {
//   console.log(Company_)
//   const result1 = await(new storedProcedure('Save_Company',[Company_.Company_Id,Company_.Company_Name,Company_.Phone,
//     Company_.Address1,Company_.Address2,Company_.Address3,Company_.Email_Id,Company_.Website,
// ], connection)).result();
//   await connection.commit();
  
//   connection.release();
// rs( result1);
// }
// catch (err) {
  
// await connection.rollback();
// rej(err);
// }   
// })
// },

Save_Company:function(Company_,callback)
{ 
 var Company_value_=1;
return db.query("CALL Save_Company("+"@Company_ :=?,"+"@Company_value_ :=?)" ,[JSON.stringify(Company_),Company_value_],callback); 
},


Delete_Employer_Details:function(Employer_Details_Id_,callback)
{ 
return db.query("CALL Delete_Employer_Details(@Employer_Details_Id_ :=?)",[Employer_Details_Id_],callback);
} ,
Search_Employer_Details_Typeahead:function(Company_Name_,callback)
{ 
if (Company_Name_==='undefined'||Company_Name_===''||Company_Name_===undefined )
Company_Name_='';
return db.query("CALL Search_Employer_Details_Typeahead(@Company_Name_ :=?)",[Company_Name_],callback);
},
Get_Employer_Details:function(Employer_Details_Id_,callback)
{ 
return db.query("CALL Get_Employer_Details(@Employer_Details_Id_ :=?)",[Employer_Details_Id_],callback);
} ,
Search_Employer_Details: async function (Company_Name_)
{
  var Leads = [];
  try {
    
  if(Company_Name_=='undefined' || Company_Name_==null || Company_Name_=="")
  Company_Name_="";
   
    Leads = await (new storedProcedure('Search_Employer_Details', [Company_Name_])).result();
     
  }
  catch (e) {
  }

  return {
  returnvalue: {  Leads}
};
},

Get_Menu_Permission:function(Employer_Details_Id_,callback)
{ 
return db.query("CALL Get_Menu_Permission(@Employer_Details_Id_ :=?)",[Employer_Details_Id_],callback);
},
// Get_Menu_Status:function(Menu_Id_,Employer_Details_Id_,callback)
// { 
//   return db.query("CALL Get_Menu_Status(@Menu_Id_ :=?,@Employer_Details_Id_ :=?)", [Menu_Id_,Employer_Details_Id_],callback);
// },
Employer_Details_Employee:function(Employer_Details_Id_,callback)
{ 
return db.query("CALL Employer_Details_Employee(@Employer_Details_Id_ :=?)",[Employer_Details_Id_],callback);
},
Get_Employer_Details_Type:function(callback)
{ 
return db.query("CALL Get_Employer_Details_Type()",[],callback);
},
Get_Employer_Details_Load_Data: async function () 
{
  const Employer_Details_Type=await (new storedProcedure('Get_Employer_Details_Type',  [])).result();
  const Employer_Details_Menu_Selection = await (new storedProcedure('Search_Employer_Details_Menu_Selection', [])).result();
  const Employer_Details_Status = await (new storedProcedure('Get_Employer_Details_Status', [])).result();
  const Agent = await (new storedProcedure('Load_Agent', [])).result();
  // const Branch = await (new storedProcedure('Dropdown_Branch', [])).result();
  // const User_Department = await (new storedProcedure('Get_Department_InEmployer_Detailsr', [])).result();
  return { Employer_Details_Type, Employer_Details_Menu_Selection,Employer_Details_Status,Agent};
},
Get_Employer_Details_Edit: async function (Employer_Details_Id_) 
{
const Menu = await (new storedProcedure('Get_Employer_Details_Edit', [Employer_Details_Id_])).result();
return {[0]:{Menu}};  
},
Search_Employer_Details_Role:function(Employer_Details_Role_Name_,callback)
{ 
if(Employer_Details_Role_Name_==='undefined'||Employer_Details_Role_Name_===''||Employer_Details_Role_Name_===undefined )
Employer_Details_Role_Name_='';
return db.query("CALL Search_Employer_Details_Role(@Employer_Details_Role_Name_ :=?)",[Employer_Details_Role_Name_],callback);
}
};
module.exports=Employer_Details;

