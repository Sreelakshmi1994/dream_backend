var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure=require('../helpers/stored-procedure');
var Purchase_Master=
{ 
 

Save_Purchase_Master: function (Purchase_Data, callback)
{
console.log(Purchase_Data)
     var Purchase_Value_ = 0;
     var Purchase_Value_document_Value_=0
     let Purchase_ = Purchase_Data.Purchase;
     console.log('Purchase_: ', Purchase_);
     console.log('Purchase_Value_: ', Purchase_Value_);
   
     if (Purchase_ != undefined && Purchase_ != '' && Purchase_ != null)
     Purchase_Value_ = 1
   
     
       Purchase_Value_document_Value_ = 1;
      //  console.log(Purchase_Details_)
    // if (Purchase_Value_>0){
      return db.query("CALL Save_Purchase_Master(@Purchase_:=?," + 
      "@Purchase_Value_ :=?)"
   , [
    Purchase_,
    Purchase_Value_],callback);
    // }
    
},
Load_Purchase_Status: function (callback) {
    return db.query("CALL Load_Purchase_Status()", [], callback);
},

Delete_Purchase_Master:function(Purchase_Master_Id_,callback)
    { 
    return db.query("CALL Delete_Purchase_Master(@Purchase_Master_Id_ :=?)",[Purchase_Master_Id_],callback);
    } ,
Get_Purchase_Master:function(Purchase_Master_Id_,callback)
    { 
    return db.query("CALL Get_Purchase_Master(@Purchase_Master_Id_ :=?)",[Purchase_Master_Id_],callback);
    } ,
Search_Purchase_Master:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,InvoiceNo_,Status_,callback)
    { 
    return db.query("CALL Search_Purchase_Master(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@InvoiceNo_ :=?,@Status_ :=?)",
    [Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,InvoiceNo_,Status_],callback);
    },
Search_Item_Typeahead:function(Item_Name_,callback)
 { 
        if (Item_Name_==='undefined'||Item_Name_===''||Item_Name_===undefined )
        Item_Name_='';
    return db.query("CALL Search_Item(@Item_Name_ :=?)",[Item_Name_],callback);
 },
Get_Purchase_Item_Typeahead:function(ItemName_,callback)
{ 
    if (ItemName_==='undefined'||ItemName_===''||ItemName_===undefined )
    ItemName_='';
    return db.query("CALL Get_Purchase_Item_Typeahead(@ItemName_ :=?)",[ItemName_],callback);
},
Get_Purchase_Typeahead:function(ItemName_,callback)
{ 
    if (ItemName_==='undefined'||ItemName_===''||ItemName_===undefined )
    ItemName_='';
    return db.query("CALL Get_Purchase_Typeahead(@ItemName_ :=?)",[ItemName_],callback);
},
Get_Barcode_Purchase:function(Barcode_,callback)
{ 
    if (Barcode_==='undefined'||Barcode_===''||Barcode_===undefined )
    Barcode_='';
    return db.query("CALL Get_Barcode_Purchase(@Barcode_ :=?)",[Barcode_],callback);
 },
Get_Purchase_Details:function(Purchase_Master_Id_,callback)
{ 
    return db.query("CALL Get_Purchase_Details(@Purchase_Master_Id_ :=?)",[Purchase_Master_Id_],callback);
} ,
    Search_Purchase_Report: function (Is_Date_Check_, From_date_, To_date_, Account_Party_Id_, Voucher_No,callback)
{
        return db.query("call Search_Purchase_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Account_Party_Id_ :=?,@Voucher_No :=?)",
        [Is_Date_Check_, From_date_, To_date_, Account_Party_Id_, Voucher_No],callback)
},
Search_Purchase_Return_Report: function (Is_Date_Check_, From_date_, To_date_, Account_Party_Id_, Voucher_No,callback)
{
        return db.query("call Search_Purchase_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Account_Party_Id_ :=?,@Voucher_No :=?)",
        [Is_Date_Check_, From_date_, To_date_, Account_Party_Id_, Voucher_No],callback)
},
Search_Purchase_Details_Report:function(Is_Date_Check_,From_date_,To_date_,Account_Party_Id_,Voucher_No,Item_Id_,callback)
{
    return db.query("call Search_Purchase_Details_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Account_Party_Id_ :=?,@Voucher_No :=?,@Item_Id_ :=?)",
        [Is_Date_Check_, From_date_, To_date_, Account_Party_Id_, Voucher_No, Item_Id_],callback)
},
Load_Hsn_Service_Report:function(From_date_,To_date_,callback)
{
    return db.query("call Load_Hsn_Service_Report(@From_date_ :=?,@To_date_ :=?)",[ From_date_, To_date_],callback)
},
Load_Hsn_Purchase_Report:function(From_date_,To_date_,callback)
{
    return db.query("call Load_Hsn_Purchase_Report(@From_date_ :=?,@To_date_ :=?)",[ From_date_, To_date_],callback)
},
Load_Hsn_Purchase_Return_Report:function(From_date_,To_date_,callback)
{
    return db.query("call Load_Hsn_Purchase_Return_Report(@From_date_ :=?,@To_date_ :=?)",[ From_date_, To_date_],callback)
},
Load_Purchase_SaleTax_Report:function(From_date_,To_date_,callback)
{
    return db.query("call Load_Purchase_SaleTax_Report(@From_date_ :=?,@To_date_ :=?)",[ From_date_, To_date_],callback)
},
Load_Purchase_Return_Tax_Report:function(From_date_,To_date_,callback)
{
    return db.query("call Load_Purchase_Return_Tax_Report(@From_date_ :=?,@To_date_ :=?)",[ From_date_, To_date_],callback)
},
Load_Service_Tax_Report:function(From_date_,To_date_,callback)
{
    return db.query("call Load_Service_Tax_Report(@From_date_ :=?,@To_date_ :=?)",[ From_date_, To_date_],callback)
},
Search_Purchase_Return_Details_Report:function(Is_Date_Check_,From_date_,To_date_,Account_Party_Id_,Voucher_No,Item_Id_,callback)
{
    return db.query("call Search_Purchase_Return_Details_Report(@Is_Date_Check_ :=?,@From_date_ :=?,@To_date_ :=?,@Account_Party_Id_ :=?,@Voucher_No :=?,@Item_Id_ :=?)",
        [Is_Date_Check_, From_date_, To_date_, Account_Party_Id_, Voucher_No, Item_Id_],callback)
},
Search_Service_Type_Typeahead: function (Service_Type_Name_,callback)
{ 
        if (Service_Type_Name_ === 'undefined' || Service_Type_Name_ === '' || Service_Type_Name_===undefined )
            Service_Type_Name_='';
        return db.query("CALL Search_Service_Type_Typeahead(@Service_Type_Name_ :=?)", [Service_Type_Name_],callback);
 },
Save_Service: async function (Service_) {
         return new Promise(async (rs,rej)=>{
           const pool = db.promise();
           let result1;
           var connection = await pool.getConnection();
    try {
    const result1 = await(new storedProcedure('Save_Service',[Service_.Service_Id,Service_.Account_Party_Id,Service_.Entry_Date,
        Service_.InvoiceNo, Service_.GrossTotal, Service_.TaxableAmount, Service_.TotalDiscount, Service_.TotalGST, Service_.TotalCGST, Service_.TotalSGST, Service_.TotalIGST, Service_.NetTotal,
        Service_.Tot_Cess, Service_.Roundoff,  Service_.TotalAmount, Service_.BillType, Service_.User_Id, Service_.Description, Service_.Service_Details]
    , connection)).result();
                await connection.commit();
                 connection.release();
                 rs( result1);
               }
            catch (err) {              
            await connection.rollback();
            rej(err);
            var result2=[{'Service_Id_':0}]      
            rs(result2);
          }
          finally 
          {
          connection.release();
       }
    })
},


Delete_Service:function(Service_Id_,callback)
    { 
    return db.query("CALL Delete_Service(@Service_Id_ :=?)",[Service_Id_],callback);
    } ,
Get_Service:function(Service_Id_,callback)
    { 
    return db.query("CALL Get_Service(@Service_Id_ :=?)",[Service_Id_],callback);
    } ,
Search_Service:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,InvoiceNo_,callback)
    { 
    return db.query("CALL Search_Service(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@InvoiceNo_ :=?)",
    [Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,InvoiceNo_],callback);
    },
Search_Service_Details_Report:function(Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,InvoiceNo_,Service_Type_Id,callback)
    { 
    return db.query("CALL Search_Service_Details_Report(@Is_Date_Check_ :=?,@FromDate_ :=?,@ToDate_ :=?,@Account_Party_Id_ :=?,@InvoiceNo_ :=?,@Service_Type_Id :=?)",
    [Is_Date_Check_,FromDate_,ToDate_,Account_Party_Id_,InvoiceNo_,Service_Type_Id],callback);
    },
};
module.exports=Purchase_Master;



















