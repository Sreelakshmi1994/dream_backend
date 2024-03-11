 var express = require('express');
 var router = express.Router();
 var Master_Call=require('../models/Master_Call');

    router.get('/Search_Account_Group_Typeahead/',function(req,res,next)
    { 
    try 
    {
   
      Master_Call.Search_Account_Group_Typeahead(req.query.Group_Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Search_Department_Typeahead/',function(req,res,next)
    { 
    try 
    {
   
      Master_Call.Search_Department_Typeahead(req.query.Department_Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Search_HSN_Typeahead/',function(req,res,next)
    { 
    try 
    {
   
      Master_Call.Search_HSN_Typeahead(req.query.HSN_Id_,req.query.HSN_Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Search_Employee_Details_Typeahead/',function(req,res,next)
    { 
    try 
    {
      Master_Call.Search_Employee_Details_Typeahead(req.query.Client_Accounts_Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Search_Item_Typeahead/',function(req,res,next)
    { 
    try 
    {
      Master_Call.Search_Item_Typeahead(req.query.Item_Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Search_Store_Typeahead/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Search_Store_Typeahead(req.query.Store_Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    
    router.get('/Search_From_Partie_Typeahead/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Search_From_Partie_Typeahead(req.query.Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Search_To_Partie_Typeahead/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Search_To_Partie_Typeahead(req.query.Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Search_Customer_Typeahead/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Search_Customer_Typeahead(req.query.Customer_Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Attendance_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Attendance_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    // router.get('/Load_Gender_Dropdown/',function(req,res,next)
    // { 
    // try 
    // {
    //  Master_Call.Load_Gender_Dropdown(req.query.Gender_,function (err, rows) 
    // {
    // if (err) 
    // {
     
    // res.json(err);
    // }
    // else 
    // {
    // res.json(rows);
    // }
    // });
    // }
    // catch (e) 
    // {
      
    // }
    // finally 
    // {
    // }
    // });



    router.get('/Load_Gender_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Gender_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });

    router.get('/Load_OpeningType/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_OpeningType(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });


    router.get('/Load_Payment_Mode_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Payment_Mode_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Designation_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Designation_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Leave_Type_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Leave_Type_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Loan_Request_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Loan_Request_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Leave_Request_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Leave_Request_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Advance_Request_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Advance_Request_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Level_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Level_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Payment_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Payment_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Sales_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Sales_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Store_Preorder_Sales_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Store_Preorder_Sales_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Store_Expense_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Store_Expense_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Neft_Request_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Neft_Request_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Bank_Statement_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Bank_Statement_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Salary_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Salary_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Store_Commision_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Store_Commision_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Transportation_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Transportation_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Stock_Status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Stock_Status_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Item_Group_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Item_Group_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Sales_Unit_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Sales_Unit_Dropdown(function (err, rows) 
    {
    if (err) 
    {     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {      
    }
    finally 
    {
    }
    });


    router.get('/Load_store_preorder_sales_status_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_store_preorder_sales_status_Dropdown(function (err, rows) 
    {
    if (err) 
    {     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {      
    }
    finally 
    {
    }
    });


    router.get('/Load_Document_Type/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Document_Type(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Cancellation/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Cancellation(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    
router.get('/Get_Dashboard_Count/:Client_Accounts_Id?',function(req,res,next)
{ 
try 
{
  Master_Call.Get_Dashboard_Count(req.params.Client_Accounts_Id, function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});
router.get('/Get_Leave_Count/:Client_Accounts_Id?',function(req,res,next)
      { 
      try 
      {
        Master_Call.Get_Leave_Count(req.params.Client_Accounts_Id, function (err, rows) 
      {
      if (err) 
      {
      res.json(err);
      }
      else 
      {
      res.json(rows);
      }
      });
      }
      catch (e) 
      {
      }
      finally 
      {
      }
      });
     
     
     
     
      router.get('/Load_Document_Type/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Document_Type(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Leave_Mode_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Leave_Mode_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Department_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Department_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_General_Settings/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_General_Settings(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Search_Under_Group_Typeahead/',function(req,res,next)
    { 
    try 
    {
   
      Master_Call.Search_Under_Group_Typeahead(req.query.Under_Group_,function (err, rows) 
    {
    if (err) 
    {
      console.log(err)
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Updatedat_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Updatedat_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Deposited/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Deposited(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Search_Client_Accounts_Typeahead/',function(req,res,next)
    { 
    try 
    {
   
      Master_Call.Search_Client_Accounts_Typeahead(req.query.Client_Accounts_Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Search_Client_Group_Typeahead/',function(req,res,next)
    { 
    try 
    {
      Master_Call.Search_Client_Group_Typeahead(req.query.Account_Group_Id_,req.query.Client_Accounts_Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_Primary_Details_Dropdown/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_Primary_Details_Dropdown(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_For_Month_Data/',function(req,res,next)
    { 
    try 
    {
      Master_Call.Load_For_Month_Data(function (err, rows) 
    {
    if (err) 
    {
     console.log(err)
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Load_alphabet/',function(req,res,next)
    { 
    try 
    {
     Master_Call.Load_alphabet(function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
    router.get('/Accounts_Typeahead/',function(req,res,next)
    { 
    try 
    {
      Master_Call.Accounts_Typeahead(req.query.Account_Group_Id_,req.query.Client_Accounts_Name_,function (err, rows) 
    {
    if (err) 
    {
     
    res.json(err);
    }
    else 
    {
    res.json(rows);
    }
    });
    }
    catch (e) 
    {
      
    }
    finally 
    {
    }
    });
  module.exports = router;

