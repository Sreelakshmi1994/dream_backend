var db=require('../dbconnection');
const storedProcedure=require('../helpers/stored-procedure');
var fs = require('fs');
var Master_Call=
{ 
Search_Account_Group_Typeahead:function(Group_Name_,callback)
        { 
        if (Group_Name_===undefined ||Group_Name_==="undefined" )
        Group_Name_='';
        return db.query("CALL Search_Account_Group_Typeahead(@Group_Name_ :=?)",[Group_Name_],callback);
        },
Search_Department_Typeahead:function(Department_Name_,callback)
        { 
        if (Department_Name_===undefined ||Department_Name_==="undefined" )
        Department_Name_='';
        return db.query("CALL Search_Department_Typeahead(@Department_Name_ :=?)",[Department_Name_],callback);
        },
Search_HSN_Typeahead:function(HSN_Id,HSN_Name_,callback)
        { 
        if (HSN_Name_===undefined ||HSN_Name_==="undefined" )
        HSN_Name_='';
        return db.query("CALL Search_Department_Typeahead(@HSN_Id_ :=?,@HSN_Name_ :=?)",[HSN_Id,HSN_Name_],callback);
        },
Search_Employee_Details_Typeahead:function(Client_Accounts_Name_,callback)
        { 
        if (Client_Accounts_Name_===undefined ||Client_Accounts_Name_==="undefined" )
        Client_Accounts_Name_='';
        return db.query("CALL Search_Employee_Details_Typeahead(@Client_Accounts_Name_ :=?)",[Client_Accounts_Name_],callback);
        },
Search_Item_Typeahead:function(Item_Name_,callback)
        { 
        if (Item_Name_===undefined ||Item_Name_==="undefined" )
        Item_Name_='';
        return db.query("CALL Search_Item_Typeahead(@Item_Name_ :=?)",[Item_Name_],callback);
        },
Search_Store_Typeahead:function(Store_Name_,callback)
        { 
        if (Store_Name_===undefined ||Store_Name_==="undefined" )
        Store_Name_='';
        return db.query("CALL Search_Store_Typeahead(@Store_Name_ :=?)",[Store_Name_],callback);
        }, 

Search_From_Partie_Typeahead:function(Name_,callback)
        { 
        if (Name_===undefined ||Name_==="undefined" )
        Name_='';
        return db.query("CALL Search_From_Partie_Typeahead(@Name_ :=?)",[Name_],callback);
        },
Search_To_Partie_Typeahead:function(Name_,callback)
        { 
        if (Name_===undefined ||Name_==="undefined" )
        Name_='';
        return db.query("CALL Search_To_Partie_Typeahead(@Name_ :=?)",[Name_],callback);
        }, 
Search_Customer_Typeahead:function(Customer_Name_,callback)
        { 
        if (Customer_Name_===undefined ||Customer_Name_==="undefined" )
        Customer_Name_='';
        return db.query("CALL Search_To_Partie_Typeahead(@Customer_Name_ :=?)",[Customer_Name_],callback);
        },
Load_Attendance_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Attendance_Status_Dropdown()",[],callback);
        }, 
// Load_Gender_Dropdown:function(Gender_,callback)
//         { 
//         if (Gender_===undefined ||Gender_==="undefined" )
//         Gender_='';
//         return db.query("CALL Load_Gender_Dropdown(@Gender_ :=?)",[Gender_],callback);
//         }, 

Load_Gender_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Gender_Dropdown()",[],callback);
        },
Load_OpeningType:function(callback)
        { 
        return db.query("CALL Load_OpeningType()",[],callback);
        },
Load_Payment_Mode_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Payment_Mode_Dropdown()",[],callback);
        }, 
Load_Designation_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Designation_Dropdown()",[],callback);
        },
Load_Leave_Type_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Leave_Type_Dropdown()",[],callback);
        },
Load_Loan_Request_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Loan_Request_Status_Dropdown()",[],callback);
        }, 
Load_Leave_Request_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Leave_Request_Status_Dropdown()",[],callback);
        }, 
Load_Advance_Request_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Advance_Request_Status_Dropdown()",[],callback);
        }, 
Load_Level_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Level_Dropdown()",[],callback);
        }, 
Load_Payment_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Payment_Status_Dropdown()",[],callback);
        }, 
Load_Sales_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Sales_Status_Dropdown()",[],callback);
        }, 
Load_Store_Preorder_Sales_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Store_Preorder_Sales_Dropdown()",[],callback);
        }, 
Load_Store_Expense_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Store_Expense_Status_Dropdown()",[],callback);
        }, 
Load_Neft_Request_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Neft_Request_Status_Dropdown()",[],callback);
        }, 
Load_Bank_Statement_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Bank_Statement_Status_Dropdown()",[],callback);
        },      
Load_Salary_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Salary_Status_Dropdown()",[],callback);
        }, 
Load_Store_Commision_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Store_Commision_Status_Dropdown()",[],callback);
        }, 
Load_Transportation_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Transportation_Status_Dropdown()",[],callback);
        }, 
Load_Stock_Status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Stock_Status_Dropdown()",[],callback);
        }, 
Load_Item_Group_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Item_Group_Dropdown()",[],callback);
        }, 

        Load_Sales_Unit_Dropdown:function(callback)
        { 
        return db.query("CALL Load_Sales_Unit_Dropdown()",[],callback);
        }, 

        Load_store_preorder_sales_status_Dropdown:function(callback)
        { 
        return db.query("CALL Load_store_preorder_sales_status_Dropdown()",[],callback);
        }, 
Load_Document_Type:function(callback)
{ 
   return db.query("CALL Load_Document_Type()",[],callback);
}, 
Load_Cancellation:function(callback)
{ 
   return db.query("CALL Load_Cancellation()",[],callback);
}, 
Get_Dashboard_Count: function (Client_Accounts_Id_,callback)
 { 
     return db.query("CALL Get_Dashboard_Count(@Client_Accounts_Id_ :=?)", [ Client_Accounts_Id_],callback);
 } ,
 Get_Leave_Count: function (Client_Accounts_Id_,callback)
 { 
     return db.query("CALL Get_Leave_Count(@Client_Accounts_Id_ :=?)", [ Client_Accounts_Id_],callback);
 } ,
 Load_Leave_Type_Dropdown:function(callback)
 { 
     return db.query("CALL Load_Leave_Type_Dropdown()", [],callback);
 },
 Load_Leave_Mode_Dropdown:function(callback)
 { 
     return db.query("CALL Load_Leave_Mode_Dropdown()", [],callback);
 },
 Load_Document_Type:function(callback)
{ 
   return db.query("CALL Load_Document_Type()",[],callback);
}, 
Load_Department_Dropdown:function(callback)
{ 
    return db.query("CALL Load_Department_Dropdown()", [],callback);
},
Load_General_Settings:function(callback)
{ 
    return db.query("CALL Load_General_Settings()", [],callback);
},
Search_Under_Group_Typeahead:function(Under_Group_,callback)
{ 
        if (Under_Group_===undefined ||Under_Group_==="undefined" )
        Under_Group_='';
        return db.query("CALL Search_Under_Group_Typeahead(@Under_Group_ :=?)",[Under_Group_],callback);
},
Load_Updatedat_Dropdown:function(callback)
{ 
    return db.query("CALL Load_Updatedat_Dropdown()", [],callback);
},
Load_Deposited:function(callback)
{ 
    return db.query("CALL Load_Deposited()", [],callback);
},
Search_Client_Accounts_Typeahead:function(Client_Accounts_Name_,callback)
{ 
    if (Client_Accounts_Name_===undefined ||Client_Accounts_Name_==="undefined" )
    Client_Accounts_Name_='';
    return db.query("CALL Search_Client_Accounts_Typeahead(@Client_Accounts_Name_ :=?)",[Client_Accounts_Name_],callback);
},
Search_Client_Group_Typeahead:function(Account_Group_Id_,Client_Accounts_Name_,callback)
{ 
    if (Client_Accounts_Name_===undefined ||Client_Accounts_Name_==="undefined" )
    Client_Accounts_Name_='';
    return db.query("CALL Search_Client_Group_Typeahead(@Account_Group_Id_ :=?,@Client_Accounts_Name_ :=?)",[Account_Group_Id_,Client_Accounts_Name_],callback);
},
Load_Primary_Details_Dropdown:function(callback)
{ 
return db.query("CALL Load_Primary_Details_Dropdown()",[],callback);
}, 
Load_For_Month_Data:function(callback)
{ 
return db.query("CALL Load_For_Month_Data()",[],callback);
}, 
Load_alphabet:function(callback)
{ 
   return db.query("CALL Load_alphabet()",[],callback);
}, 
Accounts_Typeahead:function(Account_Group_Id_,Client_Accounts_Name_,callback)
{ 
    if (Client_Accounts_Name_===undefined ||Client_Accounts_Name_==="undefined" )
    Client_Accounts_Name_='';
    return db.query("CALL Accounts_Typeahead(@Account_Group_Id_ :=?,@Client_Accounts_Name_ :=?)",[Account_Group_Id_,Client_Accounts_Name_],callback);
},
  };
  module.exports=Master_Call;

