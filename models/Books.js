const { log } = require('console');
var db=require('../dbconnection');
var fs = require('fs');
var Books=
{ 
    Save_Books:function(Books_,callback)
{ 
    console.log(Books_)
return db.query("CALL Save_Books("+"@Books_Id_ :=?,"+"@Books_Name_ :=?,"+"@Authors_ :=?,"+"@Description_ :=?,"+"@Books_No_ :=?"+","+"@Rack_No_ :=?"+","+"@Book_Status_ :=?"+","+"@Book_Count_ :=?"+")"
,[Books_.Books_Id,Books_.Books_Name,Books_.Authors,Books_.Description,Books_.Books_No,Books_.Rack_No,Books_.Book_Status,Books_.Book_Count],callback);
},

Save_Books_Issued:function(Books_Issued_,callback)
{ 
    console.log(Books_Issued_)
return db.query("CALL Save_Books_Issued("+"@Books_Issued_Id_ :=?,"+"@Books_Id_ :=?,"+"@Student_Id_ :=?,"+"@Users_Id_ :=?,"+"@Books_Issued_EntryDate_ :=?"+","+"@Actual_Return_Date_ :=?"+","+"@Return_Status_ :=?"+")"
,[Books_Issued_.Books_Issued_Id,Books_Issued_.Books_Id,Books_Issued_.Student_Id,Books_Issued_.Users_Id,Books_Issued_.Books_Issued_EntryDate,Books_Issued_.Actual_Return_Date,Books_Issued_.Return_Status],callback);
},






Get_Books:function(Books_Id_,callback)
{ 
return db.query("CALL Get_Books(@Books_Id_ :=?)",[Books_Id_],callback);
},



Search_Books_Report: function (
   
    search_name_,
    Books_No_,
    callback
) {
    console.log(search_name_,Books_No_);
    return db.query(
        "CALL Search_Books_Report(@search_name_ :=?,@Books_No_:=?)",
        [
            
            search_name_,
            Books_No_,
        ],
        callback
    );
},



Search_BooksViewdetails_Report: function (
   
    Books_Id_,

    callback
) {
    return db.query(
        "CALL Search_BooksViewdetails_Report(@Books_Id_ :=?)",
        [
            
            Books_Id_,
           
        ],
        callback
    );
},









Search_BooksIssued_Report: function (
   

    Books_No_,
    Registration_No_,
    Search_By_,
    callback
) {
    
    console.log(Books_No_,Registration_No_,Search_By_)
    return db.query(
        "CALL Search_BooksIssued_Report(@Books_No_:=?,@Registration_No_ :=?,@Search_By_:=?)",
        [
            
            
            Books_No_,
            Registration_No_,
            Search_By_,
        ],
        callback
    );
},



Search_Books_Issued_Report: function (
   
    Is_Date_,
    From_Date_,
    To_Date_,
    Books_No_,
    Registration_No_,
   
    callback
) {
    console.log(Books_No_,Registration_No_)
    return db.query(
        "CALL Search_Books_Issued_Report(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Books_No_:=?,@Registration_No_ :=?)",
        [
            Is_Date_,
            From_Date_,
            To_Date_,
            Books_No_,
            Registration_No_,
           
        ],
        callback
    );
},
Search_Books_Return_Report: function (
   
    Is_Date_,
    From_Date_,
    To_Date_,
    Books_No_,
    Registration_No_,
   
    callback
) {
    return db.query(
        "CALL Search_Books_Return_Report(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Books_No_:=?,@Registration_No_ :=?)",
        [
            Is_Date_,
            From_Date_,
            To_Date_,
            Books_No_,
            Registration_No_,
           
        ],
        callback
    );
},



Search_Books_Typeahead: function (Books_Name, callback) {
    if (Books_Name === undefined || Books_Name === "undefined")
    Books_Name = "";
    return db.query(
        "CALL Search_Books_Typeahead(@Books_Name :=?)",
        [Books_Name],
        callback
    );
},



Search_Books_Issued_Typeahead: function (Books_Name, callback) {
    if (Books_Name === undefined || Books_Name === "undefined")
    Books_Name = "";
    return db.query(
        "CALL Search_Books_Issued_Typeahead(@Books_Name :=?)",
        [Books_Name],
        callback
    );
},








Search_BooksNo_Typeahead: function (Books_No, callback) {
    if (Books_No === undefined || Books_No === "undefined")
    Books_No = "";
    return db.query(
        "CALL Search_BooksNo_Typeahead(@Books_No :=?)",
        [Books_No],
        callback
    );
},


Search_BooksNo_Issued_Typeahead: function (Books_No, callback) {
    if (Books_No === undefined || Books_No === "undefined")
    Books_No = "";
    return db.query(
        "CALL Search_BooksNo_Issued_Typeahead(@Books_No :=?)",
        [Books_No],
        callback
    );
},

Search_Booksissued_Typeahead: function (Books_Id,Books_Name,Books_No, callback) {
    if (Books_No === undefined || Books_No === "undefined")
    Books_No = "";
    if (Books_Name === undefined || Books_Name === "undefined")
    Books_Name = "";
    return db.query(
        "CALL Search_Booksissued_Typeahead(@Books_Id :=?,@Books_Name :=?,@Books_No :=?)",
        [Books_Id,Books_Name,Books_No],
        callback
    );
},


Search_Student_Reg_Typeahead: function (Registration_No_, callback) {
    console.log(Registration_No_)
    if (Registration_No_ === undefined || Registration_No_ === "undefined")
    Registration_No_ = "";
    return db.query(
        "CALL Search_Student_Reg_Typeahead(@Registration_No_ :=?)",
        [Registration_No_],
        callback
    );
},


Search_Student_Phonenumber_Typeahead: function (Phone, callback) {
    if (Phone === undefined || Phone === "undefined")
    Phone = "";
    return db.query(
        "CALL Search_Student_Phonenumber_Typeahead(@Phone :=?)",
        [Phone],
        callback
    );
},

Delete_Books:function(Books_Id_,callback)
{ 
  return db.query("CALL Delete_Books(@Books_Id_ :=?)",[Books_Id_],callback);
},


Delete_BooksIssued:function(Books_Id_,callback)
{ 
  return db.query("CALL Delete_BooksIssued(@Books_Id_ :=?)",[Books_Id_],callback);
},






BookIssued_Return:function(Books_Issued_Id_,callback)
{ 
  return db.query("CALL BookIssued_Return(@Books_Issued_Id_ :=?)",[Books_Issued_Id_],callback);
},
BookIssued_Cancel:function(Books_Issued_Id_,callback)
{ 
  return db.query("CALL BookIssued_Cancel(@Books_Issued_Id_ :=?)",[Books_Issued_Id_],callback);
},
Get_Books_IssuedDetails:function(Books_Id_,callback)
{ 
return db.query("CALL Get_Books_IssuedDetails(@Books_Id_ :=?)",[Books_Id_],callback);
},



};
module.exports=Books;

