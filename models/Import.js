 var db=require('../dbconnection');
 var fs = require('fs');
 var Import=
 { 	Save_Data_Migration: function (Student_Details, callback) {

    console.log(Student_Details);
            return db.query(
                "CALL Save_Data_Migration(@Student_Import_Details_ :=?,@By_User_Id_ :=?,@Branch_ :=?,@Department_ :=?,@Status_ :=?,@To_User_ :=?,@Enquiry_Source_ :=?,@Next_FollowUp_Date_ :=?,@Login_Branch_ :=?,@User_Sub_Data_ :=?)",
                [
                    JSON.stringify(Student_Details.Student_Import_Details),
                    Student_Details.By_User_Id,
                    Student_Details.Branch,
                    Student_Details.Department,
                    Student_Details.Status,
                    Student_Details.To_User,
                    Student_Details.Enquiry_Source,
                    Student_Details.Next_FollowUp_Date,
                    Student_Details.Login_Branch,
                    JSON.stringify(Student_Details.User_Sub_Data),
                ],
                callback
            );
        },





    Student_duplicate_Import_Check: function (Student_Details, callback) {
        return db.query(
            "CALL Student_duplicate_Import_Check(@Student_Import_Details_ :=?,@By_User_Id_ :=?,@Branch_ :=?,@Department_ :=?,@Status_ :=?,@Enquiry_Source_ :=?,@Next_FollowUp_Date_ :=?,@Login_Branch_ :=?)",
            [
                JSON.stringify(Student_Details.Student_Import_Details),
                Student_Details.By_User_Id,
                Student_Details.Branch,
                Student_Details.Department,
                Student_Details.Status,
                
                Student_Details.Enquiry_Source,
                Student_Details.Next_FollowUp_Date,
                Student_Details.Login_Branch,
            ],
            callback
        );
    },
    Get_ToStaff_Student_DataCount_Excel:function(Branch_,Followup_Date_,Department_,callback)
    { console.log(Branch_,Followup_Date_,Department_)
        
   return db.query("CALL Get_ToStaff_Student_DataCount_Excel(@Branch_ :=?,"+"@Followup_Date_ :=?,"+"@Department_ :=?)",[Branch_,Followup_Date_,Department_],callback);
    }
    ,
  };
  module.exports=Import;

