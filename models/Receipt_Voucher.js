var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure = require('../helpers/stored-procedure');
var Receipt_Voucher=
{ 
// Save_Receipt_Voucher:function(Receipt_Voucher_,callback)
//     { 
//             console.log(Receipt_Voucher_)
//     return db.query("CALL Save_Receipt_Voucher("+"@Receipt_Voucher_Id_ :=?,"+"@Date_ :=?,"+
//     "@From_Account_Id_ :=?,"+"@Amount_ :=?,"+"@To_Account_Id_ :=?,"+"@Employee_Id_ :=?,"+
//     "@Payment_Mode_ :=?,"+ "@User_Id_ :=?,"+"@Payment_Status_ :=?,"+"@Description_ :=?"+")"
//     ,[Receipt_Voucher_.Receipt_Voucher_Id,Receipt_Voucher_.Date,Receipt_Voucher_.From_Account_Id,
//     Receipt_Voucher_.Amount,Receipt_Voucher_.To_Account_Id,Receipt_Voucher_.Employee_Id,Receipt_Voucher_.Payment_Mode,
//     Receipt_Voucher_.User_Id,Receipt_Voucher_.Payment_Status,Receipt_Voucher_.Description,],callback);
//     },
Save_Receipt_Voucher: async function (Receipt_Voucher_) {
    return new Promise(async (rs, rej) => {
        const pool = db.promise();
        let result1;
        var connection = await pool.getConnection();
        try {
            console.log(Receipt_Voucher_)
            const result1 = await (new storedProcedure('Save_Receipt_Voucher', [Receipt_Voucher_.Receipt_Voucher_Id, Receipt_Voucher_.Date, 
                Receipt_Voucher_.From_Account_Id,Receipt_Voucher_.Amount, Receipt_Voucher_.To_Account_Id, Receipt_Voucher_.Payment_Mode,
                Receipt_Voucher_.User_Id, Receipt_Voucher_.Payment_Status, Receipt_Voucher_.Description,Receipt_Voucher_.Fees_Status,Receipt_Voucher_.Master_Id ,Receipt_Voucher_.Student_Id], connection)).result();
            console.log(result1)
            await connection.commit();
            connection.release();
            rs(result1);
        }
        catch (err) {
            console.log(err)
            await connection.rollback();
            rej(err);
            var result2 = [{ 'Receipt_Voucher_Id_': 0 }]
            rs(result2);
        }
        finally {
            connection.release();
        }
    })
},
Save_Receipt_Voucher_Mobile:function(Receipt_Voucher_,callback)
    { 
            console.log(Receipt_Voucher_)
    return db.query("CALL Save_Receipt_Voucher_Mobile("+"@Receipt_Voucher_Id_ :=?,"+
    "@From_Account_Id_ :=?,"+"@Amount_ :=?,"+"@To_Account_Id_ :=?,"+"@Payment_Mode_ :=?,"+
    "@User_Id_ :=?,"+"@Description_ :=?,"+"@Sales_Master_Id_ :=?"+")"
    ,[Receipt_Voucher_.Receipt_Voucher_Id,Receipt_Voucher_.From_Account_Id,
    Receipt_Voucher_.Amount,Receipt_Voucher_.To_Account_Id,Receipt_Voucher_.Payment_Mode,
    Receipt_Voucher_.User_Id,Receipt_Voucher_.Description,Receipt_Voucher_.Sales_Master_Id],callback);
    },
Delete_Receipt_Voucher:function(Receipt_Voucher_Id_,callback)
    { 
    return db.query("CALL Delete_Receipt_Voucher(@Receipt_Voucher_Id_ :=?)",[Receipt_Voucher_Id_],callback);
    },
 Get_Receipt_Voucher_Mobile:function(Receipt_Voucher_Id_,callback)
    { 
    return db.query("CALL Get_Receipt_Voucher(@Receipt_Voucher_Id_ :=?)",[Receipt_Voucher_Id_],callback);
    },
Get_Receipt_Voucher:function(Receipt_Voucher_Id_,callback)
    { 
    return db.query("CALL Get_Receipt_Voucher(@Receipt_Voucher_Id_ :=?)",[Receipt_Voucher_Id_],callback);
    },
Search_Receipt_Voucher:function(From_Date_,To_Date_,From_Account_Id_,To_Account_Id_,Voucher_No_,Is_Date_Check_,Payment_Status_,callback)
    { 
        
    return db.query("CALL Search_Receipt_Voucher(@From_Date_ :=?,@To_Date_ :=?,@From_Account_Id_ :=?,@To_Account_Id_ :=?,@Voucher_No_  :=?,@Is_Date_Check_ :=?,@Payment_Status_ :=?)",
    [From_Date_,To_Date_,From_Account_Id_,To_Account_Id_,Voucher_No_,Is_Date_Check_,Payment_Status_],callback);
    },
Search_Voucher_Type:function(callback)
    { 
    return db.query("CALL Search_Voucher_Type()",[],callback);
    },
Ledger_Report:function(FromDate_,ToDate_,Client_Id_,VoucherType_,callback)
    {   
    return db.query("CALL Ledger_Report(@FromDate_ :=?,@ToDate_ :=?,@Client_Id_ :=?,@VoucherType_ :=?)",[FromDate_,ToDate_,Client_Id_,VoucherType_],callback);
    },
DayBook_Report:function(FromDate_,ToDate_,callback)
    {    
    return db.query("CALL Load_Daybook_Report(@FromDate_ :=?,@ToDate_ :=?)",[FromDate_,ToDate_],callback);
    },
Get_Sales_summary:function(Is_Date_Check_,FromDate_,ToDate_,Client_Id_,VoucherType_,Employee_Id,callback)
    {             
    return db.query("CALL Get_Sales_summary(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Client_Id_ :=?,@VoucherType_ :=?,@Employee_Id :=?)",[Is_Date_Check_,FromDate_,ToDate_,Client_Id_,VoucherType_,Employee_Id],callback);
    },   
Search_Sales_Report_Details:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Employee_Id_,Item_Id_,callback)
    {             
    return db.query("CALL Search_Sales_Report_Details(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@Employee_Id_ :=?,@Item_Id_ :=?)",[Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Employee_Id_,Item_Id_],callback);
    }, 
Search_Sales_Report_Monthly_Items:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Employee_Id_,Item_Id_,callback)
    {             
    return db.query("CALL Search_Sales_Report_Monthly_Items(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@Employee_Id_ :=?,@Item_Id_ :=?)",[Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Employee_Id_,Item_Id_],callback);
    },
 Customer_Sales_Report:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Item_Id_,callback)
    {             
    return db.query("CALL Customer_Sales_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_  :=?,@Item_Id_ :=?)",[Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Item_Id_],callback);
    },
Employee_Sales_Report:function(Is_Date_Check_,FromDate_,ToDate_,Employee_Id_,Item_Id_,callback)
    {             
    return db.query("CALL Employee_Sales_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Employee_Id_  :=?,@Item_Id_ :=?)",[Is_Date_Check_,FromDate_,ToDate_,Employee_Id_,Item_Id_],callback);
    },
  Search_Sales_Report:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Employee_Id_,Item_Id_,callback)
    {             
    return db.query("CALL Search_Sales_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@Employee_Id_ :=?,@Item_Id_ :=?)",[Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,Employee_Id_,Item_Id_],callback);
    },
Get_Sales_Details_report:function(Is_Date_Check_,FromDate_,ToDate_,Client_Id_,VoucherType_,ItemId_,callback)
    {    
    return db.query("CALL Get_Sales_Details_report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Client_Id_ :=?,@VoucherType_ :=?,@ItemId_ :=?)",
    [Is_Date_Check_,FromDate_,ToDate_,Client_Id_,VoucherType_,ItemId_],callback);
    },
Search_Sales_Return_Details_Report:function(Is_Date_Check_,FromDate_,ToDate_,Client_Id_,VoucherType_,ItemId_,callback)
    {    
    return db.query("CALL Search_Sales_Return_Details_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Client_Id_ :=?,@VoucherType_ :=?,@ItemId_ :=?)",
    [Is_Date_Check_,FromDate_,ToDate_,Client_Id_,VoucherType_,ItemId_],callback);
    },
 Get_Stock_Report:function(Barcode_,ItemId_,GroupId_,Employee_Id_,Is_Check_,callback)
    {    
    if (Barcode_==='undefined'||Barcode_===''||Barcode_===undefined )
    Barcode_='';
    return db.query("CALL Get_Stock_Report(@Barcode_ :=?,@ItemId_ :=?,@GroupId_ :=?,@Employee_Id_ :=?,@Is_Check_ :=?)",[Barcode_,ItemId_,GroupId_,Employee_Id_,Is_Check_],callback);
    },  
Load_DayBook_Report:function(FromDate_,ToDate_,callback)
    {    
    return db.query("CALL Load_DayBook_Report(@FromDate_ :=?,@ToDate_ :=?)", [FromDate_,ToDate_],callback);
    },
Item_Expiry_Report:function(Is_Date_Check_,FromDate_,ToDate_,Barcode_,ItemId_,GroupId_,Employee_Id_,callback)
    {    
    if (Barcode_==='undefined'||Barcode_===''||Barcode_===undefined )
    Barcode_='';
    return db.query("CALL Item_Expiry_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Barcode_ :=?,@ItemId_ :=?,@GroupId_ :=?,@Employee_Id_ :=?)",[Is_Date_Check_,FromDate_,ToDate_,Barcode_,ItemId_,GroupId_,Employee_Id_],callback);
    },    
Client_Accounts_Typeahead:function(Client_Accounts_Name_,callback)
    { 
    if (Client_Accounts_Name_==='undefined'||Client_Accounts_Name_===''||Client_Accounts_Name_===undefined )
    Client_Accounts_Name_='';
    return db.query("CALL Client_Accounts_Typeahead(    @Client_Accounts_Name_ :=?)",[Client_Accounts_Name_],callback);
    },
    Sales_receipt_Bill: function (Account_Party_Id_,callback)
    { 
        return db.query("CALL Sales_receipt_Bill(@Account_Party_Id_ :=?)", [Account_Party_Id_],callback);
    },
Search_Company:function(callback)
    {     
    return db.query("CALL Search_Company()",[],callback);
    },
};
module.exports=Receipt_Voucher;

