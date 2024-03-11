var db=require('../dbconnection');
var fs = require('fs');
const StoredProcedure = require('../helpers/stored-procedure');

var Agent_Details=
{ 
Save_Agent_Details:function(Agent_Details_,callback)
{ 
  console.log(Agent_Details_);
return db.query("CALL Save_Agent_Details("+"@Agent_Details_Id_ :=?,"+"@Agent_Details_Name_ :=?,"+"@Address1_ :=?,"+"@Address2_ :=?,"+"@Address3_ :=?,"+"@Address4_ :=?,"+"@Pincode_ :=?,"
+"@Phone_ :=?,"+"@Mobile_ :=?,"+"@Whatsapp_ :=?,"+"@DOB_ :=?,"+"@Gender_ :=?,"+"@Email_ :=?,"+"@Alternative_Email_ :=?,"+"@User_Name_ :=?,"+"@Password_ :=?,"
+"@Photo_ :=?,"+"@GSTIN_ :=?,"+"@Category_Id_ :=?,"+"@Commission_ :=?,"+"@User_Id_ :=?,"+"@Comm_Address1_ :=?,"+"@Comm_Address2_ :=?,"+"@Comm_Address3_ :=?,"
+"@Comm_Address4_ :=?,"+"@Comm_Pincode_ :=?,"+"@Comm_Mobile_ :=?,"+"@Center_Name_ :=?,"+"@Center_Code_ :=?,"+"@Agent_Details_Fees_ :=?"+")"
,[Agent_Details_.Agent_Details_Id,Agent_Details_.Agent_Details_Name,Agent_Details_.Address1,Agent_Details_.Address2,Agent_Details_.Address3,Agent_Details_.Address4,Agent_Details_.Pincode,Agent_Details_.Phone,Agent_Details_.Mobile,Agent_Details_.Whatsapp,
Agent_Details_.DOB,Agent_Details_.Gender,Agent_Details_.Email,Agent_Details_.Alternative_Email,Agent_Details_.User_Name,Agent_Details_.Password,Agent_Details_.Photo,Agent_Details_.GSTIN,Agent_Details_.Category_Id,
Agent_Details_.Commission,Agent_Details_.User_Id,Agent_Details_.Comm_Address1,Agent_Details_.Comm_Address2,Agent_Details_.Comm_Address3,Agent_Details_.Comm_Address4,Agent_Details_.Comm_Pincode,
Agent_Details_.Comm_Mobile,Agent_Details_.Center_Name,Agent_Details_.Center_Code,Agent_Details_.Agent_Details_Fees],callback);
},
Get_Agent_Details:function(Agent_Details_Id_,callback)
{ 
return db.query("CALL Get_Agent_Details(@Agent_Details_Id_ :=?)",[Agent_Details_Id_],callback);
},
Load_Agent_Details_Dropdowns: async function()
{  
  const Status = await (new StoredProcedure('Get_Status', [])).result();
  const Category = await (new StoredProcedure('Get_Category', [])).result();
  return { Status,Category };
},
Search_Agent_Details:function(Agent_Details_Name_,callback)
{ 
  if (Agent_Details_Name_===undefined || Agent_Details_Name_==="undefined" )
  Agent_Details_Name_='';
  return db.query("CALL Search_Agent_Details(@Agent_Details_Name_ :=?)",[Agent_Details_Name_],callback);
},
Load_Category_Commission:function(Category_Id_)
{
  if(Category_Id_==='undefined'||Category_Id_===''||Category_Id_===undefined )
  Category_Id_='';
  return db.query("CALL Load_Category_Commission(@Category_Id_ :=?)",[Category_Id_]);
},
Save_Agent_Details_Registration:function(Agent_Details_Id_,callback)
{ 
  return db.query("CALL Save_Agent_Details_Registration(@Agent_Details_Id_ :=?)",[Agent_Details_Id_],callback);
},
Delete_Agent_Details:function(Agent_Details_Id_,callback)
{ 
  return db.query("CALL Delete_Agent_Details(@Agent_Details_Id_ :=?)",[Agent_Details_Id_],callback);
},
Remove_Registration:function(Agent_Details_Id_,callback)
{ 
  return db.query("CALL Remove_Registration_Agent_Details(@Agent_Details_Id_ :=?)",[Agent_Details_Id_],callback);
},
Get_Menu_Status:function(Menu_Id_,Login_User_,callback)
{ 
  return db.query("CALL Get_Menu_Status(@Menu_Id_ :=?,@Login_User_:=?)", [Menu_Id_,Login_User_],callback);
},
Load_Mode:function(callback)
{ 
  return db.query("CALL Load_Mode()", [],callback);
},


Load_Markstatus:function(callback)
{ 
  return db.query("CALL Load_Markstatus()", [],callback);
},



Accounts_Typeahead:function(Account_Group_Id_,Client_Accounts_Name_,callback)
{ 
    if (Client_Accounts_Name_ === undefined || Client_Accounts_Name_==="undefined" )
    Client_Accounts_Name_='';
    return db.query("CALL Accounts_Typeahead(@Account_Group_Id_ :=?,@Client_Accounts_Name_ :=?)", [Account_Group_Id_,Client_Accounts_Name_],callback);
},
Save_Receipt_Voucher:function(Receipt_Voucher_,callback)
    { 
    return db.query("CALL Save_Receipt_Voucher("+"@Receipt_Voucher_Id_ :=?,"+"@Date_ :=?,"+
    "@Agent_Details_Id_ :=?,"+"@Amount_ :=?,"+"@Payment_Mode_ :=?,"+ "@User_Id_ :=?,"+"@Payment_Status_ :=?,"+
    "@To_Account_Id_ :=?,"+"@Description_ :=?"+")"
    ,[Receipt_Voucher_.Receipt_Voucher_Id,Receipt_Voucher_.Date,Receipt_Voucher_.From_Account_Id,
    Receipt_Voucher_.Amount,Receipt_Voucher_.Payment_Mode,Receipt_Voucher_.User_Id,Receipt_Voucher_.Payment_Status,
    Receipt_Voucher_.To_Account_Id,Receipt_Voucher_.Description,],callback);
    },
Get_Receipt_History:function(Agent_Details_Id_,callback)
{ 
  return db.query("CALL Get_Receipt_History(@Agent_Details_Id_ :=?)", [Agent_Details_Id_],callback);
},
Delete_Receipt_Voucher:function(Receipt_Voucher_Id_,callback)
{ 
  return db.query("CALL Delete_Receipt_Voucher(@Receipt_Voucher_Id_ :=?)", [Receipt_Voucher_Id_],callback);
},

Get_Agent_Detailsdetails_print:function(User_Id_,callback)
{ 
return db.query("CALL Get_Agent_Detailsdetails_print(@User_Id_ :=?)",[User_Id_],callback);
},

};
module.exports=Agent_Details;

