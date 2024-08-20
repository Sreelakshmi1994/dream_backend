var express = require("express");
var router = express.Router();
var Student = require("../models/Student");
const upload = require("../helpers/multer-helper");
router.post("/Save_Student", upload.array("myFile"), (req, res, next) => {
	try {
		const file = req.files;
		var Photo_ = [];
		var tempFile_Nmae = "";
		if (!file) {
			// const error = new Error('Please upload a file')
			//error.httpStatusCode = 400
		} else {
			for (var i = 0; i < file.length; i++) {
				Photo_.push({ File_name: file[i].filename });
				tempFile_Nmae = Photo_[0].File_name;
			}
		}
		//,adhphoto,edudoc var Photo_json = JSON.stringify(Photo_)
		console.log(Student1);
		var Student1;
		if (
			req.body.Student_Name != "" &&
			req.body.Student_Name != undefined &&
			req.body.Student_Name != null
		) 
		
		// if (
		// 	req.body.Aadhar_Photo === 'true'
		// ) 
		
	
		// if (
		// req.body.Education_Documents === 'true'
		// ) 
		
		
		{
			Student1 = {
				Student_Id: req.body.Student_Id_Student,
				Student_Name: req.body.Student_Name,
				Address1: req.body.Address1,
				Address2: req.body.Address2,
				Address3: req.body.Address3,
				Address4: req.body.Address4,
				Pincode: req.body.Pincode,
				Phone: req.body.Phone,
				Mobile: req.body.Mobile,
				Whatsapp: req.body.Whatsapp,
				DOB: req.body.DOB,
				Gender: req.body.Gender,
				Email: req.body.Email,
				User_Name: req.body.User_Name,
				Password: req.body.Password,
				Photo: tempFile_Nmae,
				User_Id: req.body.User_Id,
				Registration_No: req.body.Registration_No,
				Role_No: req.body.Role_No,
				Enquiry_Source: req.body.Enquiry_Source,
				// Course_Id: req.body.Course_Id,
				Qualification_Id: req.body.Qualification_Id,
				Course_Name: req.body.Course_Name,
				Qualification_Name: req.body.Qualification_Name,
				Age: req.body.Age,
				Father_Name: req.body.Father_Name,
				Father_Whatsapp: req.body.Father_Whatsapp,
				Father_Email: req.body.Father_Email,
				Mother_Name: req.body.Mother_Name,
				Mother_Whatsapp: req.body.Mother_Whatsapp,
				Mother_Email: req.body.Mother_Email,
				Local_Gurdian_Name: req.body.Local_Gurdian_Name,
				Local_Gurdian_Whatsapp: req.body.Local_Gurdian_Whatsapp,
				Local_Gurdian_Email: req.body.Local_Gurdian_Email,
				Enquiry_Source_Name: req.body.Enquiry_Source_Name,


				Aadhar_Photo: req.body.Aadhar_Photo,
				Education_Documents:req.body.Education_Documents ,
				Student_Photo: req.body.Student_Photo,

				MasterCourse_Id: req.body.MasterCourse_Id,
				MasterCourse_Name: req.body.MasterCourse_Name,

				Enquiry_For_Id: req.body.Enquiry_For_Id,
				Enquiry_For_Name: req.body.Enquiry_For_Name,

				Admission_Branch_Id: req.body.Admission_Branch_Id,
				Admission_Branch: req.body.Admission_Branch,

				Mode_Of_Study_Id: req.body.Mode_Of_Study_Id,
				Mode_Of_Study: req.body.Mode_Of_Study,

				
				Associates_Agent_Id: req.body.Associates_Agent_Id,
				
				Processing_Agent_Id: req.body.Processing_Agent_Id,
				 
				Preffered_Course: req.body.Preffered_Course,
				 

			};
		}
		var jsondata1 = JSON.stringify(Student1);
		var Followup;
		if (
			req.body.Status != "" &&
			req.body.Status != undefined &&
			req.body.Status != null
		) {
			var Followup = {
				Student_Id: req.body.Student_Id,
				Entry_Date: req.body.Entry_Date,
				Next_FollowUp_Date: req.body.Next_FollowUp_Date,
				FollowUp_Difference: req.body.FollowUp_Difference,
				Status: req.body.Status,
				By_User_Id: req.body.By_User_Id,
				To_User_Id: req.body.To_User_Id,
				Remark: req.body.Remark,
				Remark_Id: req.body.Remark_Id,
				FollowUp_Type: req.body.FollowUp_Type,
				FollowUP_Time: req.body.FollowUP_Time,
				Actual_FollowUp_Date: req.body.Actual_FollowUp_Date,
				Status_Name: req.body.Status_Name,
				To_User_Name: req.body.To_User_Name,
				By_User_Name: req.body.By_User_Name,
				FollowUp: req.body.FollowUp,
			};
		}
		var jsondata2 = JSON.stringify(Followup);

		var Student_Data = {
			Student: jsondata1,
			Followup: jsondata2,
		};
		Student.Save_Student(Student_Data, function (err, rows) {
			if (err) {
				console.log(err)
				return 1;
			} else {
				return res.json(rows);
			}
		});
	} catch (err) {
		const error = new Error("Please upload a file");
		error.httpStatusCode = 400;
		return next(error);
	} finally {
	}
});
// router.get('/Search_Student/',function(req,res,next)
//   {
//   try
//   {
//   Student.Search_Student(req.query.Student_Name, function (err, rows)
//   {
//   if (err)
//   {
//   res.json(err);
//   }
//   else
//   {
//   res.json(rows);
//   }
//   });
//   }
//   catch (e)
//   {
//   }
//   finally
//   {
//   }
//   });

router.get("/Search_Student", async function (req, res, next) {
	var result = "";
	try {
		result = await Student.Search_Student(
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.SearchbyName_,
			req.query.By_User_,
			req.query.Status_Id_,
			req.query.Is_Date_Check_,
			req.query.Page_Index1_,
			req.query.Page_Index2_,
			req.query.Login_User_Id_,
			req.query.RowCount,
			req.query.RowCount2,
			req.query.Register_Value,
			req.query.Qualification_Id,
			req.query.Course_Id,
			req.query.Batch_Id,
			req.query.Enquiry_For_Id,
			
		);

		res.json(result);
	} catch (e) {
	} finally {
	}
});
router.get("/Get_Student/:Student_Id_?", function (req, res, next) {
	try {
		Student.Get_Student(req.params.Student_Id_, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Get_Last_FollowUp/:Users_Id_?", function (req, res, next) {
	try {
		Student.Get_Last_FollowUp(req.params.Users_Id_, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Delete_Student/:Student_Id_?", function (req, res, next) {
	try {
		Student.Delete_Student(req.params.Student_Id_, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Status_Typeahead/", function (req, res, next) {
	try {
		Student.Search_Status_Typeahead(
			req.query.Status_Name,
			req.query.Group_Id,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Users_Typeahead/", function (req, res, next) {
	try {
		Student.Search_Users_Typeahead(req.query.Users_Name, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});

router.get("/Search_Faculty_Typeahead/", function (req, res, next) {
	try {
		Student.Search_Faculty_Typeahead(
			req.query.Users_Name,req.query.Role_Type,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Typeahead_Loadfaculty/", function (req, res, next) {
	try {
		Student.Search_Typeahead_Loadfaculty(
			req.query.Users_Name,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});

router.get("/Load_Document_Type/", function (req, res, next) {
	try {
		Student.Load_Document_Type(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});

router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Gender/", function (req, res, next) {
	try {
		Student.Load_Gender(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Attendance_Status/", function (req, res, next) {
	try {
		Student.Load_Attendance_Status(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});

router.get("/Load_Enquiry_Source/", function (req, res, next) {
	try {
		Student.Load_Enquiry_Source(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});


router.get("/Load_Enquiry_For/", function (req, res, next) {
	try {
		Student.Load_Enquiry_For(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});

router.get(
	"/Load_Student_Search_Dropdowns/:Group_Id_?",
	function (req, res, next) {
		try {
			Student.Load_Student_Search_Dropdowns(
				req.params.Group_Id_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);

router.get("/Notification_Read_Status/:Notification_Count_?/:User_Id_ ?", function (req, res, next) {
    try {
        Student.Notification_Read_Status(req.params.Notification_Count_,req.params.User_Id_, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } catch (e) {
    } finally {
    }
});

router.get("/update_Read_Status/", function (req, res, next) {
	try {
		Student.update_Read_Status(
			req.query.login_user_,
			req.query.Notification_Id_,
			function (err, rows) {
				if (err) {
					;
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Reset_Notification_Count/:User_Id_?", function (req, res, next) {
    try {
        Student.Reset_Notification_Count(req.params.User_Id_, function (err, rows) {
            if (err) {
                ;
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } catch (e) {
    } finally {
    }
});

router.get("/Get_All_Notification/", function (req, res, next) {
    try {
        Student.Get_All_Notification(
            req.query.Date_,
            req.query.User_Id_,
            req.query.login_Id_,
            function (err, rows) {
                if (err) {
                    ;
                    res.json(err);
					console.log(err);
                } else {
                    res.json(rows);
                }
            }
        );
    } catch (e) {
		console.log(e);
    } finally {
    }
});
router.get("/Get_FollowUp_Details/:Student_Id_?", async (req, res, next) => {
	try {
		const result = await Student.Get_FollowUp_Details(req.params.Student_Id_);
		res.json(result);
	} catch (e) {
		res.send(e);
	} finally {
	}
});
router.get("/Get_FollowUp_History/:Student_Id_?", async (req, res, next) => {
	try {
		const result = await Student.Get_FollowUp_History(req.params.Student_Id_);
		res.json(result);
	} catch (e) {
		res.send(e);
	} finally {
	}
});
router.get(
	"/Register_Student/:Student_Id_?/:User_Id_?/:Registration_Fees_?/:Enquiry_For_Id_?",
	function (req, res, next) {
		console.log(req.query)
		try {
			Student.Register_Student(
				req.params.Student_Id_,
				req.params.User_Id_,
				req.params.Registration_Fees_,
				req.params.Enquiry_For_Id_,
				function (err, rows) {
					if (err) {
						console.log(err)
						res.json(err);
					} else {
						console.log(rows)
						res.json(rows);
					}
				}
			);
		} catch (e) {
			console.log(e)
		} finally {
		}
	}
);
router.get("/Remove_Registration/:Student_Id_?", function (req, res, next) {
	try {
		Student.Remove_Registration(req.params.Student_Id_, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Course_Typeahead/", function (req, res, next) {
	try {
		Student.Search_Course_Typeahead(
			req.query.Course_Name,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Batch_Typeahead/", function (req, res, next) {
	try {
		Student.Search_Batch_Typeahead(req.query.Batch_Name, function (err, rows) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});

router.get("/Search_Batch_Typeahead_1/", function (req, res, next) {
	try {
		Student.Search_Batch_Typeahead_1(
			req.query.Batch_Name,
			req.query.Course_Id,
			function (err, rows) {
				if (err) {
					console.log(err);
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Get_Course_Student/:Course_Id?", function (req, res, next) {
	try {
		Student.Get_Course_Student(req.params.Course_Id, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Get_Student_Course/:Student_Id_?", function (req, res, next) {
	try {
		Student.Get_Student_Course(req.params.Student_Id_, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get(
	"/Get_Student_Course_Click/:Student_Id_?/:Student_Course_Id_ ?/:Course_Id_ ?",
	function (req, res, next) {
		console.log(req)
		try {
			Student.Get_Student_Course_Click(
				req.params.Student_Id_,
				req.params.Student_Course_Id_,
				req.params.Course_Id_,
			
				function (err, rows) {
					if (err) {
						console.log(err);
						res.json(err);
					} else {
						console.log(rows);
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);


router.get(
	"/Get_Student_LastCourse_Click/:Student_Id_?/:Course_Id_ ?/:Fees_Type_Id ?",
	function (req, res, next) {
		try {
			Student.Get_Student_LastCourse_Click(
				req.params.Student_Id_,
				req.params.Course_Id_,
				req.params.Fees_Type_Id,
				function (err, rows) {
					if (err) {
						console.log(err);
						res.json(err);
					} else {
						//console.log(rows);
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);






router.post("/Save_Student_Course/", async function (req, res, next) {
	try {
		const resp = await Student.Save_Student_Course(req.body);
		return res.send(resp);
	} catch (e) {
		console.log(e);
		return res.send(e);
	}
});

router.get("/Get_Installment_Details/", function (req, res, next) {
	try {
		Student.Get_Installment_Details(
			req.query.Installment_Type_Id,
			req.query.Course_Id,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Subject_Course_Typeahead/", function (req, res, next) {
	try {
		Student.Search_Subject_Course_Typeahead(
			req.query.Subject_Name,
			req.query.Course_Id,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Exam_Status/", function (req, res, next) {
	try {
		Student.Load_Exam_Status(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.post("/Save_Mark_List_Master/", async function (req, res, next) {
	try {
		const resp = await Student.Save_Mark_List_Master(req.body);
		return res.send(resp);
	} catch (e) {
		return res.send(e);
	}
});
router.get("/Get_Student_Mark_List/:Student_Id_?", function (req, res, next) {
	try {
		Student.Get_Student_Mark_List(req.params.Student_Id_, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.post("/Save_Student_Receipt_Voucher/", function (req, res, next) {
	try {
		Student.Save_Student_Receipt_Voucher(req.body, function (err, rows) {
			if (err) {
				// console.log(err);
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
		// console.log(e);
	} finally {
	}
});
router.get('/Send_Receipt_Sms_Email/:Mobile_?/:Email_?/:Sms?/:Student_Name?/:Amount_ ?/:Date_ ?/:Total_Amount_ ?/:Instalment_Date_ ?/:BalanceAmount_ ?',async (req, res, next) =>
{
try
{
const result = await Student.Send_Receipt_Sms_Email(req.params.Mobile_,req.params.Email_,req.params.Sms,
  req.params.Student_Name,req.params.Amount_,req.params.Date_,req.params.Total_Amount_,req.params.Instalment_Date_,req.params.BalanceAmount_);
res.json(result);
} 
catch (e) 
{
  console.log(e)
res.send(e);
} 
finally
{
}
});
// router.get(
// 	"/Send_Receipt_Sms_Email/:Mobile_?/:Email_?/:Sms?/:Student_Name?/:Amount_ ?/:Date_ ?/:Total_Amount_ ?/:Instalment_Date_ ?/:BalanceAmount_ ?",
// 	async (req, res, next) => {
// 		try {
// 			// console.log(req);
// 			const result = await Student.Send_Receipt_Sms_Email(
// 				req.params.Mobile_,
// 				req.params.Email_,
// 				req.params.Sms,
// 				req.params.Student_Name,
// 				req.params.Amount_,
// 				req.params.Date_,
// 				req.params.Total_Amount_,
// 				req.params.Instalment_Date_,
// 				req.params.BalanceAmount_
// 			);
// 			res.json(result);
// 		} catch (e) {
// 			console.log(e);
// 			res.send(e);
// 		} finally {
// 		}
// 	}
// );
router.get(
	"/Get_Student_Receipt_History/:Student_Id_?/:Course_Id_?",
	function (req, res, next) {
		try {
			Student.Get_Student_Receipt_History(
				req.params.Student_Id_,
				req.params.Course_Id_,
				function (err, rows) {
					if (err) {
					//	console.log(err);
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
			console.log(e)
		} finally {
		}
	}
);
router.get(
	"/Delete_Student_Receipt_Voucher/:Receipt_Voucher_Id_",
	function (req, res, next) {
		try {
			Student.Delete_Student_Receipt_Voucher(
				req.params.Receipt_Voucher_Id_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);

router.get("/Send_Sms/:Mobile_?/:Sms?", async (req, res, next) => {
	try {
		const result = await Student.Send_Sms(req.params.Mobile_, req.params.Sms);
		res.json(result);
	} catch (e) {
		console.log(e);
		res.send(e);
	} finally {
	}
});
router.get(
	"/Send_Sms_Email/:Mobile_?/:Email_?/:Sms?/:Student_Name?",
	async (req, res, next) => {
		 console.log(req, res);
		try {
			const result = await Student.Send_Sms_Email(
				req.params.Mobile_,
				req.params.Email_,
				req.params.Sms,
				req.params.Student_Name
			);
			res.json(result);
		} catch (e) {
			console.log(e);
			res.send(e);
		} finally {
		}
	}
);

router.get(
	"/Send_course_Email/:Mobile_?/:Email_?/:Sms?/:Student_Name?/:Course_Name?",
	async (req, res, next) => {
		try {
			console.log(req);
			const result = await Student.Send_course_Email(
				req.params.Mobile_,
				req.params.Email_,
				req.params.Sms,
				req.params.Student_Name,
				req.params.Course_Name
			);
			res.json(result);
		} catch (e) {
			console.log(e);
			res.send(e);
		} finally {
		}
	}
);

router.get("/Search_Attendance/", function (req, res, next) {
	try {
		Student.Search_Attendance(
			// req.query.Course_,
			req.query.Batch_,
			req.query.Faculty_,
			function (err, rows) {
				if (err) {
					res.json(err);
					console.log(err);
				} else {
					console.log("Result1234",rows);
					res.json(rows);
				}
			}
		);
	} catch (e) {
		console.log(e);
	} finally {
	}
});

router.post("/Save_Attendance/", async function (req, res, next) {
	try {
		const resp = await Student.Save_Attendance(req.body);
		return res.send(resp);
	} catch (e) {
		console.log(e);
		return res.send(e);
	}
});


router.post("/Save_Employee_Attendance/", async function (req, res, next) {
	try {
		const resp = await Student.Save_Employee_Attendance(req.body);
		return res.send(resp);
	} catch (e) {
		console.log(e);
		return res.send(e);
	}
});

router.get("/Search_Attendance_Report/", function (req, res, next) {
	try {
		Student.Search_Attendance_Report(
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Faculty_Id_,
			req.query.Course_,
			req.query.Batch_,
			req.query.Attendance_Status_Id,
			req.query.User_Id_,
			req.query.SearchbyName_,
			function (err, rows) {
				if (err) {
					console.log(err);
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get('/Delete_Attendancereportdata/:Attendance_Master_Id_?',function(req,res,next)
{ 
try 
{
	Student.Delete_Attendancereportdata(req.params.Attendance_Master_Id_, function (err, rows) 
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

router.get('/Delete_Employee_Attendance/:Attendance_Master_Id_?',function(req,res,next)
{ 
try 
{
	Student.Delete_Employee_Attendance(req.params.Attendance_Master_Id_, function (err, rows) 
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


router.get("/Search_Fees_Outstanding_Report/", function (req, res, next) {
	try {
		Student.Search_Fees_Outstanding_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Course_,
			req.query.Batch_,
			req.query.SearchbyName_,
			req.query.User_Id_,
			function (err, rows) {
				if (err) {
					console.log(err);
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Fees_Collection_Report/", function (req, res, next) {
	try {
		Student.Search_Fees_Collection_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.User_Id_,
			req.query.Login_User_,
			req.query.Mode_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Admission_Report/", function (req, res, next) {
	try {
		Student.Search_Admission_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.User_Id_,
			req.query.Login_User_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Lead_Report/", function (req, res, next) {
	try {
		Student.Search_Lead_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Enquiry_Source_,
			req.query.Login_User_,
			req.query.User_Id_,
			req.query.status_,
			req.query.Course_Id_,
			req.query.Enquiry_For_Id_,
			req.query.MasterCourse_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});


router.get("/Search_Followup_History_Report/", function (req, res, next) {
	try {
		Student.Search_Followup_History_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Enquiry_Source_,
			req.query.Login_User_,
			req.query.User_Id_,
			req.query.status_,
			req.query.Course_Id_,
			req.query.Enquiry_For_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});


router.get("/Search_Transaction/", function (req, res, next) {
	try {
		Student.Search_Transaction(
			req.query.Course_,
			req.query.Portion_Covered_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.post("/Save_Transaction/", async function (req, res, next) {
	try {
		const resp = await Student.Save_Transaction(req.body);
		return res.send(resp);
	} catch (e) {
		return res.send(e);
	}
});
router.get("/Search_Interview/", function (req, res, next) {
	try {
		Student.Search_Interview(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Course_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.post("/Save_Interview/", async function (req, res, next) {
	try {
		const resp = await Student.Save_Interview(req.body);
		return res.send(resp);
	} catch (e) {
		return res.send(e);
	}
});
router.get("/Search_Placed/", function (req, res, next) {
	try {
		Student.Search_Placed(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Course_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.post("/Save_Placed/", async function (req, res, next) {
	try {
		const resp = await Student.Save_Placed(req.body);
		return res.send(resp);
	} catch (e) {
		return res.send(e);
	}
});
router.get("/Search_Placed_Report/", function (req, res, next) {
	try {
		Student.Search_Placed_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Course_,
			req.query.Company_,
			req.query.User_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Search_Interview_Report/", function (req, res, next) {
	try {
		Student.Search_Interview_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Course_,
			req.query.Company_,
			req.query.User_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Transaction_Report/", function (req, res, next) {
	try {
		Student.Search_Transaction_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Course_,
			req.query.Company_,
			req.query.User_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

 
router.get("/Get_Dashboard_Count/:By_User_?/:From_Date_?/:To_Date_?", async function (req, res, next) {
	var result = "";
	try {
		result = await Student.Get_Dashboard_Count(req.params.By_User_,req.params.From_Date_,req.params.To_Date_);
		res.json(result);
	} catch (e) {
	} finally {
	}
});

router.get(
	"/Search_Registration_Report/:Fromdate_?/:Todate_?/:Search_By_?/:SearchbyName_?/:Status_Id_?/:By_User_?/:Is_Date_Check_?/:Page_Index1_?/:Page_Index2_?/:Login_User_Id_?/:RowCount?/:RowCount2?/:Enquiry_For_Id_?",
	async function (req, res, next) {
		var result = "";
		try {
			result = await Student.Search_Registration_Report(
				req.params.Fromdate_,
				req.params.Todate_,
				req.params.Search_By_,
				req.params.SearchbyName_,
				req.params.Status_Id_,
				req.params.By_User_,
				req.params.Is_Date_Check_,
				req.params.Page_Index1_,
				req.params.Page_Index2_,
				req.params.Login_User_Id_,
				req.params.RowCount,
				req.params.RowCount2,
				req.params.Enquiry_For_Id_
			);

			res.json(result);
		} catch (e) {
		} finally {
		}
	}
);

router.get("/Search_Attendance_Student/", function (req, res, next) {
	try {
		Student.Search_Attendance_Student(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
		 
			req.query.Batch_,
			req.query.Faculty_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});



router.get("/Search_Employee_Attendance/", function (req, res, next) {
	try {
		Student.Search_Employee_Attendance(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.User_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Employees_List/", function (req, res, next) {
	try {
		Student.Search_Employees_List(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.User_Id_,
			req.query.Working_Status_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});


router.get("/Search_Employee_Attendance_Report/", function (req, res, next) {
	try {
		Student.Search_Employee_Attendance_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.User_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});


router.get("/Search_Application_Outstanding_Report/", function (req, res, next) {
	try {
		Student.Search_Application_Outstanding_Report(
		
			req.query.From_Date_,
			req.query.To_Date_,
		
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});


router.get("/Search_Attendance_Student/", function (req, res, next) {
	try {
		Student.Search_Attendance_Student(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Course_,
			req.query.Batch_,
			req.query.Faculty_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Get_Attendance/", function (req, res, next) {
	try {
		Student.Get_Attendance(
			req.query.Attendance_Master_Id_,
		 
			req.query.Batch_,
			req.query.Faculty_,
			function (err, rows) {
				if (err) {
					console.log(err)
					res.json(err);
				} else {
					res.json(rows);
					console.log(rows);
				}
			}
		);
	} catch (e) {
		console.log(e)
	} finally {
	}
});


router.get("/Get_Employee_Attendance/", function (req, res, next) {
	try {
		Student.Get_Employee_Attendance(
			req.query.Attendance_Master_Id_,
			req.query.User_Id_,
			function (err, rows) {
				if (err) {
					console.log(err)
					res.json(err);
				} else {
					res.json(rows);
					console.log(rows);
				}
			}
		);
	} catch (e) {
		console.log(e)
	} finally {
	}
});


router.get("/Search_Transaction_Student/", function (req, res, next) {
	try {
		Student.Search_Transaction_Student(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Course_,
			req.query.Faculty_,
			req.query.Employer_Details_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Get_Transaction/", function (req, res, next) {
	try {
		Student.Get_Transaction(
			req.query.Transaction_Master_Id_,
			req.query.Course_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Interview_Student/", function (req, res, next) {
	try {
		Student.Search_Interview_Student(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Course_,
			req.query.Faculty_,
			req.query.Employer_Details_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Get_Interview/", function (req, res, next) {
	try {
		Student.Get_Interview(
			req.query.Interview_Master_Id_,
			req.query.Course_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Search_Placed_Student/", function (req, res, next) {
	try {
		Student.Search_Placed_Student(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Course_,
			req.query.Faculty_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Get_Placed/", function (req, res, next) {
	try {
		Student.Get_Placed(
			req.query.Placed_Master_Id_,
			req.query.Course_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Installment_Type/", function (req, res, next) {
	try {
		Student.Load_Installment_Type(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_State/", function (req, res, next) {
	try {
		Student.Load_State(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Qualification/", function (req, res, next) {
	try {
		Student.Load_Qualification(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Search_State_District_Typeahead/", function (req, res, next) {
	try {
		Student.Search_State_District_Typeahead(
			req.query.District_Name,
			req.query.State_Id,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.get("/Load_Employer_Details/", function (req, res, next) {
	try {
		Student.Load_Employer_Details(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});
router.get("/Get_Lead_Load_Data1/", async (req, res, next) => {
	try {
		const result = await Student.Get_Lead_Load_Data();
		res.json(result);
	} catch (e) {
		res.send(e);
	} finally {
	}
});
router.get(
	"/FollowUp_Summary/:By_User_?/:Login_User_?",
	async function (req, res, next) {
		var result = "";
		try {
			result = await Student.FollowUp_Summary(
				req.params.By_User_,
				req.params.Login_User_
			);

			res.json(result);
		} catch (e) {
		} finally {
		}
	}
);
router.get(
	"/Pending_FollowUp/:By_User_?/:Login_User_?",
	async function (req, res, next) {
		var result = "";
		try {
			result = await Student.Pending_FollowUp(
				req.params.By_User_,
				req.params.Login_User_
			);
			res.json(result);
		} catch (e) {
		} finally {
		}
	}
);
router.get(
	"/Get_Lead_Load_Data_ByUser/:Login_User?",
	function (req, res, next) {
		try {
			Student.Get_Lead_Load_Data_ByUser(
				req.params.Login_User,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);

router.get(
	"/Get_Course_Details_Student_Check/:Student_Id_?",
	function (req, res, next) {
		try {
			Student.Get_Course_Details_Student_Check(
				req.params.Student_Id_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);
router.get("/Search_Fees_Due_Report/", function (req, res, next) {
	try {
		Student.Search_Fees_Due_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Course_,
			req.query.Batch_,
			req.query.SearchbyName_,
			req.query.User_Id_,
			function (err, rows) {
				if (err) {
					console.log(err);
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});




router.get("/Search_Batch_Report/", function (req, res, next) {
	try {
		Student.Search_Batch_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Batch_,
			req.query.Faculty_,
			
			req.query.User_Id_,
			function (err, rows) {
				if (err) {
					console.log(err);
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});



router.get(
	"/Load_Interview_Student/:Transaction_Master_id_?",
	function (req, res, next) {
		try {
			Student.Load_Interview_Student(
				req.params.Transaction_Master_id_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);
router.get(
	"/Load_Placement_Student/:Interview_Master_Id_?",
	function (req, res, next) {
		try {
			Student.Load_Placement_Student(
				req.params.Interview_Master_Id_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);

router.get("/Get_Load_Dropdowns_Data/", function (req, res, next) {
	try {
		Student.Get_Load_Dropdowns_Data(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});

router.get("/Search_Company_Typeahead/", function (req, res, next) {
	try {
		Student.Search_Company_Typeahead(
			req.query.Company_Name,
			function (err, rows) {
				if (err) {
					console.log(err);
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
		console.log(e)
	} finally {
	}
});



router.get("/Search_Book_Name_Typeahead/", function (req, res, next) {
	try {
		Student.Search_Book_Name_Typeahead(
			req.query.Book_Name,
			function (err, rows) {
				if (err) {
					console.log(err);
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});



router.get("/Search_District_Typeahead/", function (req, res, next) {
	try {
		Student.Search_District_Typeahead(
			req.query.District_Name,
			function (err, rows) {
				if (err) {
					console.log(err);
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Search_Transaction_Report_Tab/", function (req, res, next) {
	try {
		Student.Search_Transaction_Report_Tab(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.User_Id_,
			req.query.Student_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Search_Interview_Report_Tab/", function (req, res, next) {
	try {
		Student.Search_Interview_Report_Tab(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.User_Id_,
			req.query.Student_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Search_Placed_Report_Tab/", function (req, res, next) {
	try {
		Student.Search_Placed_Report_Tab(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.User_Id_,
			req.query.Student_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.post("/Save_Student_Import/", function (req, res) {
	try {
		Student.Save_Student_Import(req.body, function (err, rows) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});


router.post("/Save_Level_Import/", function (req, res) {
	try {
		Student.Save_Level_Import(req.body, function (err, rows) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});




router.get(
	"/Search_Student_Import/:From_Date_?/:To_Date_?/:Is_Date_Check_?/",
	function (req, res, next) {
		try {
			Student.Search_Student_Import(
				req.query.From_Date_,
				req.query.To_Date_,
				req.query.Is_Date_Check_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);

router.post("/Save_Student_Report_FollowUp/", function (req, res) {
	try {
		Student.Save_Student_Report_FollowUp(req.body, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});


router.get('/Load_Laptopdetails',function(req,res,next)
  { 
  try 
  {
	Student.Load_Laptopdetails( function (err, rows)
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
  ;
  }
  finally 
  {
  }
  });


  router.get("/Search_Course_Report/", function (req, res, next) {
	try {
		Student.Search_Course_Report(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.User_Id_,
			req.query.Login_User_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});
router.post("/Save_Hostel_Fees/", async function (req, res, next) {
	try {
		const resp = await Student.Save_Hostel_Fees(req.body);
		return res.send(resp);
	} catch (e) {
		console.log(e);
		return res.send(e);
	}
});
router.get("/Get_Totalportioncovered/", function (req, res, next) {
	try {
		Student.Get_Totalportioncovered(
			req.query.Course_Id_,
			req.query.Batch_Id_,
			req.query.Login_User_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});


router.get("/Load_Exam/", function (req, res, next) {
	try {
		Student.Load_Exam(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});


router.get("/Load_ExamType/", function (req, res, next) {
	try {
		Student.Load_ExamType(function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});



router.post('/Save_ExamResult/',function(req,res,next)
 { 
 try 
 {
	Student.Save_ExamResult(req.body, function (err, rows) 
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

  router.get("/Get_ExamResult/:Student_Id_ ?/:Student_Course_Id_ ?",function(req,res,next)
  { 
  try 
  {
	Student.Get_ExamResult(req.params.Student_Id_,req.params.Student_Course_Id_,function (err, rows) 
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


   router.get('/Get_Hosteldetails/:Student_Id_?',function(req,res,next)
   { 
   try 
   {
	 Student.Get_Hosteldetails(req.params.Student_Id_,function (err, rows) 
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



	router.get('/Get_Hostelfeesdetails/:Hostel_Fees_Master_Id_?',function(req,res,next)
	{ 
	try 
	{
	  Student.Get_Hostelfeesdetails(req.params.Hostel_Fees_Master_Id_,function (err, rows) 
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

   router.get('/Delete_ExamResult/:Exam_Result_Id_?',function(req,res,next)
   { 
   try 
   {
	Student.Delete_ExamResult(req.params.Exam_Result_Id_, function (err, rows) 
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


	router.get('/Delete_Hosteldetails/:Hostel_Fees_Master_Id_?',function(req,res,next)
	{ 
	try 
	{
	 Student.Delete_Hosteldetails(req.params.Hostel_Fees_Master_Id_, function (err, rows) 
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








	router.get("/Search_Course_Typeahead_Formastercourse/", function (req, res, next) {
		try {
			Student.Search_Course_Typeahead_Formastercourse(
				req.query.Course_Name,
				req.query.MasterCourse_Id,
			
				
				function (err, rows) {
					if (err) {
						console.log(err)
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
			console.log(e)
		} finally {
		}
	});


	router.get("/Search_Course_Typeahead_Forcandidatelist/", function (req, res, next) {
		try {
			Student.Search_Course_Typeahead_Forcandidatelist(
				req.query.Course_Name,
				
				
				function (err, rows) {
					if (err) {
						console.log(err)
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
			console.log(e)
		} finally {
		}
	});


	router.get("/Search_CandidateList/", function (req, res, next) {
		try {
			Student.Search_CandidateList(
				req.query.Is_Date_,
				req.query.From_Date_,
				req.query.To_Date_,
				req.query.Login_User_,
				req.query.User_Id_,
				req.query.Course_Id_,
				req.query.Batch_Id_,
				req.query.ReadingSearch_,
				req.query.SpeakingSearch_,
				req.query.ListeningSearch_,
				req.query.WritingSearch_,
				req.query.GrammerSearch_,
				req.query.Markstatus_Id_,
				req.query.Markvalue_,
				req.query.Markfrom_,
				req.query.Markto_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	});


	router.post("/Save_Student_Course_Candidatelist/", async function (req, res, next) {
		try {
			const resp = await Student.Save_Student_Course_Candidatelist(req.body);
			return res.send(resp);
		} catch (e) {
			console.log(e);
			return res.send(e);
		}
	});




	router.get("/Search_StudentMark_Report/", function (req, res, next) {
		try {
			Student.Search_StudentMark_Report(
				req.query.Is_Date_,
				req.query.From_Date_,
				req.query.To_Date_,
				req.query.User_Id_,
				req.query.Login_User_Id_,
				req.query.Batch_Id_,
				req.query.Course_Id_,
				req.query.Markstatus_Id_,
				req.query.Markvalue_,
				req.query.Markfrom_,
				req.query.Markto_,
				req.query.Exam_Id_,
				req.query.Exam_Type_Id_,
				function (err, rows) {
					if (err) {
						console.log(err)
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
			console.log(e)
		} finally {
		}
	});

	router.post("/Save_Student_Remark/", async function (req, res, next) {
		try {
			const resp = await Student.Save_Student_Remark(req.body);
			return res.send(resp);
		} catch (e) {
			return res.send(e);
		}
	});


	router.post("/Save_Student_Process/", async function (req, res, next) {
		try {
			const resp = await Student.Save_Student_Process(req.body);
			return res.send(resp);
		} catch (e) {
			return res.send(e);
		}
	});
	router.get(
		"/Get_Student_Process_History/:Student_Id_?",
		function (req, res, next) {
			try {
				Student.Get_Student_Process_History(
					req.params.Student_Id_,
					function (err, rows) {
						if (err) {
						//	console.log(err);
							res.json(err);
						} else {
							res.json(rows);
						}
					}
				);
			} catch (e) {
				console.log(e)
			} finally {
			}
		}
	);


	router.get(
		"/Get_Student_Remark_History/:Student_Id_?",
		function (req, res, next) {
			try {
				Student.Get_Student_Remark_History(
					req.params.Student_Id_,
					function (err, rows) {
						if (err) {
						//	console.log(err);
							res.json(err);
						} else {
							res.json(rows);
						}
					}
				);
			} catch (e) {
				console.log(e)
			} finally {
			}
		}
	);
	router.get('/Delete_Student_Remark/:Student_Remark_Id_',function(req,res,next)
	{ 
	try 
	{
		Student.Delete_Student_Remark(req.params.Student_Remark_Id_, function (err, rows)
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
	;
	}
	finally 
	{
	}
	});

	router.get('/Delete_Student_Process/:Student_Process_Id_',function(req,res,next)
	{ 
	try 
	{
		Student.Delete_Student_Process(req.params.Student_Process_Id_, function (err, rows)
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
	;
	}
	finally 
	{
	}
	});
	// router.get(
	// 	"/Search_ExamResult_Report/:Student_Id_?/:Exam_Type_Id_?",
	// 	async function (req, res, next) {
	// 		var result = "";
	// 		try {
	// 			result = await Student.Search_ExamResult_Report(
	// 				req.params.Student_Id_,
	// 				req.params.Exam_Type_Id_
	// 			);
	
	// 			res.json(result);
	// 		} catch (e) {
	// 		} finally {
	// 		}
	// 	}
	// );



	router.get('/Search_ExamResult_Report/',function(req,res,next)
	{ 
	try 
	{
		Student.Search_ExamResult_Report(req.query.Student_Id_,req.query.Exam_Type_Id_,req.query.Student_Course_Id_,req.query.Course_Id_,function (err, rows) 
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



	 router.get('/Search_ExamResult_GraphReport/',function(req,res,next)
	{ 
	try 
	{
		Student.Search_ExamResult_GraphReport(req.query.Student_Id_,req.query.Exam_Type_Id_, function (err, rows) 
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


	 router.get('/Get_Marklistreport_Studentdetails/:Student_Id_?/:Student_Course_Id_ ?/:Course_Id_ ?',function(req,res,next)
	 { 
	 try 
	 {
		Student.Get_Marklistreport_Studentdetails(req.params.Student_Id_,req.params.Student_Course_Id_,req.params.Course_Id_, function (err, rows) 
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

	 router.post("/Register_Whatsapp/", async function (req, res, next) {
        try {
            const resp = await Student.Register_Whatsapp(req.body);
            return res.send(resp);
        } catch (e) {
            console.log(e);
            return res.send(e);
        }
    });

	router.post("/Save_Student_Whatsapp/", async function (req, res, next) {
        try {
            const resp = await Student.Save_Student_Whatsapp(req.body);
            return res.send(resp);
        } catch (e) {
            return res.send(e);
        }
    });

	// router.post("/Update_EndDate/", async function (req, res, next) {
	// 	try {
	// 		const resp = await Student.Update_EndDate(req.body);
	// 		return res.send(resp);
	// 	} catch (e) {
	// 		console.log(e);
	// 		return res.send(e);
	// 	}
	// });



	router.post('/Update_EndDate/',function(req,res,next)
	{ 
	try 
	{
		Student.Update_EndDate(req.body, function (err, rows) 
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


	 router.post('/Save_Exam/',function(req,res,next)
	 { 
	 try 
	 {
		Student.Save_Exam(req.body, function (err, rows) 
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

	  router.get('/Search_Exam/',function(req,res,next)
	  { 
	  try 
	  {
		Student.Search_Exam(req.query.Exam_Name, function (err, rows) 
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

	   router.get('/Delete_Exam/:Exam_Id_?',function(req,res,next)
  { 
  try 
  {
    Student.Delete_Exam(req.params.Exam_Id_, function (err, rows) 
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

  router.get('/Get_AttendanceofStudents/:Student_Id_?/:Course_Id_?',function(req,res,next)
{ 
try 
{
	Student.Get_AttendanceofStudents(req.params.Student_Id_,req.params.Course_Id_, function (err, rows) 
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


router.get("/Search_ExamResult_Interanal/", function (req, res, next) {
	try {
		Student.Search_ExamResult_Interanal(
			 
			req.query.Batch_,
			req.query.Faculty_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});


router.get("/Search_ExamResult_Final/", function (req, res, next) {
	try {
		Student.Search_ExamResult_Final(
			// req.query.Course_,
			req.query.Batch_,
			req.query.Faculty_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});


router.post("/Save_Exam_Result_Internal/", async function (req, res, next) {
	try {
		const resp = await Student.Save_Exam_Result_Internal(req.body);
		return res.send(resp);
	} catch (e) {
		console.log(e);
		return res.send(e);
	}
});



router.get("/Search_Examdetails_Internal/", function (req, res, next) {
	try {
		Student.Search_Examdetails_Internal(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
	 
			req.query.Batch_,
			req.query.Faculty_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});



router.get("/Get_ExamresultdetailsInternal/", function (req, res, next) {
	try {
		Student.Get_ExamresultdetailsInternal(
			req.query.Exam_Result_Id_,
		 
			req.query.Batch_,
			req.query.Faculty_,
			function (err, rows) {
				if (err) {
					console.log(err)
					res.json(err);
				} else {
					res.json(rows);
					console.log(rows);
				}
			}
		);
	} catch (e) {
		console.log(e)
	} finally {
	}
});
router.get('/Delete_ExamResultInternal/:Exam_Result_Id_?',function(req,res,next)
{ 
try 
{
 Student.Delete_ExamResultInternal(req.params.Exam_Result_Id_, function (err, rows) 
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
 router.post("/Save_Exam_Result_Final/", async function (req, res, next) {
	try {
		const resp = await Student.Save_Exam_Result_Final(req.body);
		return res.send(resp);
	} catch (e) {
		console.log(e);
		return res.send(e);
	}
});
router.get("/Search_Examdetails_Final/", function (req, res, next) {
	try {
		Student.Search_Examdetails_Final(
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			// req.query.Course_,
			req.query.Batch_,
			req.query.Faculty_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});



router.get("/Get_ExamresultdetailsFinal/", function (req, res, next) {
	try {
		Student.Get_ExamresultdetailsFinal(
			req.query.Final_Exam_Master_Id_,
			// req.query.Course_,
			req.query.Batch_,
			req.query.Faculty_,
			function (err, rows) {
				if (err) {
					console.log(err)
					res.json(err);
				} else {
					res.json(rows);
					console.log(rows);
				}
			}
		);
	} catch (e) {
		console.log(e)
	} finally {
	}
});



router.get('/Delete_ExamResultFinal/:Final_Exam_Master_Id_?',function(req,res,next)
{ 
try 
{
 Student.Delete_ExamResultFinal(req.params.Final_Exam_Master_Id_, function (err, rows) 
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

 router.get("/Search_Country_Typeahead/", function (req, res, next) {
	try {
		Student.Search_Country_Typeahead(req.query.Country_Name, function (err, rows) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});


router.get("/Search_Application_Course_Typeahead/", function (req, res, next) {
	try {
		Student.Search_Application_Course_Typeahead(req.query.Application_Course_Name, function (err, rows) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});


router.get("/Search_Application_University_Typeahead/", function (req, res, next) {
	try {
		Student.Search_Application_University_Typeahead(req.query.Application_University_Name, function (err, rows) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});

router.post('/Save_Application/',function(req,res,next)
{ 
try 
{
    Student.Save_Application(req.body, function (err, rows) 
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



router.post('/Save_FeesReceipt/',function(req,res,next)
{ 
try 
{
    Student.Save_FeesReceipt(req.body, function (err, rows) 
{
if (err) 
{
    
res.json(err);
console.log(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
	console.log(e);
    
}
finally 
{
}
});

router.post('/Save_Checklist/',function(req,res,next)
{ 
try 
{
	Student.Save_Checklist(req.body, function (err, rows) 
{
if (err) 
{
  
res.json(err);
}
else 
{
  console.log(rows)
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


router.get('/Get_Checklist_Country/:Country_Id_?',function(req,res,next)
{ 
try 
{
	Student.Get_Checklist_Country(req.params.Country_Id_, function (err, rows) 
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

router.get('/Delete_Checklist/:Checklist_Id_?',function(req,res,next)
{ 
try 
{
	Student.Delete_Checklist(req.params.Checklist_Id_, function (err, rows) 
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
  //
}
finally 
{
}
});

router.get("/Get_ApplicationDetails/:Student_Id_?", function (req, res, next) {
	try {
		Student.Get_ApplicationDetails(
			req.params.Student_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});


router.get("/Get_Fees_Receipt_Application/:Student_Id_?", function (req, res, next) {
	try {
		Student.Get_Fees_Receipt_Application(
			req.params.Student_Id_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Delete_Receipt/:Fees_Receipt_Id?/:Application_details_Id?", function (req, res, next) {
	try {
		Student.Delete_Receipt(req.params.Fees_Receipt_Id,req.params.Application_details_Id, function (err, rows) {
			if (err) {
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
	} finally {
	}
});


router.get('/Search_Courses_Fees_Typeahead/',function(req,res,next)
{ 
try 
{
 
	Student.Search_Courses_Fees_Typeahead(req.query.Course_Name,req.query.Student_Id,function (err, rows) 
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



router.get(
	"/Get_ApplicationDetails_History/:Student_Id_?",
	function (req, res, next) {
		try {
			Student.Get_ApplicationDetails_History(
				req.params.Student_Id_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);

router.get(
	"/Get_ApplicationDetailswise_History/:Application_details_Id_?/:Feesdetails_Id_?",
	function (req, res, next) {
		try {
			Student.Get_ApplicationDetailswise_History(
				req.params.Application_details_Id_,req.params.Feesdetails_Id_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);




router.get(
	"/Change_Application_Status/:Application_details_Id_?/:Feesdetails_Id_?/:status_id?/:remark?",
	function (req, res, next) {
		try {
			Student.Change_Application_Status(
				req.params.Application_details_Id_,req.params.Feesdetails_Id_,req.params.status_id,req.params.remark,
				function (err, rows) {
					if (err) {
						console.log(err)
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
			console.log(e)
		} finally {
		}
	}
);


router.get(
	"/Delete_Application_Details/:Student_Id_?",
	function (req, res, next) {
		try {
			Student.Delete_Application_Details(
				req.params.Student_Id_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);
router.get(
	"/Search_ApplicationDetails/:Application_details_Id_?",
	function (req, res, next) {
		try {
			Student.Search_ApplicationDetails(
				req.params.Application_details_Id_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);



router.get(
	"/Delete_Application_History/:Application_details_history_Id_?",
	function (req, res, next) {
		try {
			Student.Delete_Application_History(
				req.params.Application_details_history_Id_,
				function (err, rows) {
					if (err) {
						res.json(err);
					} else {
						res.json(rows);
					}
				}
			);
		} catch (e) {
		} finally {
		}
	}
);


router.get("/Search_Application_Report", async function (req, res, next) {
    var result = "";
    try {
        result = await Student.Search_Application_Report(
            req.query.Fromdate_,
            req.query.Todate_,
            req.query.By_User_,
            req.query.Is_Date_Check_,
            req.query.Login_User_Id_,
           
            req.query.Application_status_Id_,
            req.query.Intake_Id_,
            req.query.Intake_Year_Id_,
            req.query.Country_Id_,
            req.query.University_Id_,
           
        );

        res.json(result);
        console.log(result);
    } catch (e) {
        ;
    } finally {
    }
});
router.get(
	"/Search_Fees_Receipt_Report/:Fromdate_?/:Todate_?/:To_Account_?/:By_User_?/:Is_Date_Check_?/:Page_Index1_?/:Page_Index2_?/:Login_User_Id_?/:RowCount_?/:RowCount2_?/:Fees_id?",
	async function (req, res, next) {

		console.log( res,)
		var result = "";
		try {
			result = await Student.Search_Fees_Receipt_Report(
				req.params.Fromdate_,
				req.params.Todate_,
				req.params.To_Account_,
				req.params.By_User_,
				req.params.Is_Date_Check_,
				req.params.Page_Index1_,
				req.params.Page_Index2_,
				req.params.Login_User_Id_,
				req.params.RowCount_,
				req.params.RowCount2_,
				req.params.Fees_id,
			);

			res.json(result);
		} catch (e) {
			console.log(e)
		} finally {
		}
	}
);

router.get('/Get_Menu_Status/:Menu_Id_?/:Users_Id_?',function(req,res,next)
{ 
try 
{
    Users.Get_Menu_Status(req.params.Menu_Id_,req.params.Users_Id_, function (err, rows)
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
router.get(
	"/Search_Registration_Fees_Report/:Fromdate_?/:Todate_?/:Search_Name?/:By_User_?/:Is_Date_Check_?/:Login_User_Id_?",
	async function (req, res, next) {

		console.log( res,)
		var result = "";
		try {
			result = await Student.Search_Registration_Fees_Report(
				req.params.Fromdate_,
				req.params.Todate_,
				req.params.Search_Name,
				req.params.By_User_,
				req.params.Is_Date_Check_,
				req.params.Login_User_Id_,
				
			
			);

			res.json(result);
		} catch (e) {
			console.log(e)
		} finally {
		}
	}
);





router.post('/Save_Document_Type/',function(req,res,next)
{ 
try 
{
   Student.Save_Document_Type(req.body, function (err, rows) 
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

 router.get('/Search_Document_Type/',function(req,res,next)
 { 
 try 
 {
   Student.Search_Document_Type(req.query.Document_Type_Name, function (err, rows) 
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

  router.get('/Delete_Document_Type/:Document_Type_Id_?',function(req,res,next)
{ 
try 
{
Student.Delete_Document_Type(req.params.Document_Type_Id_, function (err, rows) 
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


router.post('/Save_Process_Type/',function(req,res,next)
{ 
try 
{
   Student.Save_Process_Type(req.body, function (err, rows) 
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

 router.get('/Search_Process_Type/',function(req,res,next)
 { 
 try 
 {
   Student.Search_Process_Type(req.query.Process_Type_Name, function (err, rows) 
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

  router.get('/Delete_Process_Type/:Process_Type_Id_?',function(req,res,next)
{ 
try 
{
Student.Delete_Process_Type(req.params.Process_Type_Id_, function (err, rows) 
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


router.post('/Save_Student_Document/',async function(req,res,next)
      { 
      try 
      {
      const resp=await Student.Save_Student_Document(req.body);
      return res.send(resp);
      }
      catch(e){
       console.log(e) 
      return res.send(e);
      
      }
      });
	  router.get('/Get_Document_Type/:Student_Id_?',function(req,res,next)
	  { 
	  try 
	  {
		  
		  Student.Get_Document_Type(req.params.Student_Id_, function (err, rows) 
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

	   
  router.get('/Search_Branch_User_Typeahead/:Branch_Id_?/:User_Details_Name_?',function(req,res,next)
  { 
  try 
  {
    Student.Search_Branch_User_Typeahead(req.params.Branch_Id_,req.params.User_Details_Name_, function (err, rows) 
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


   router.get('/Search_Branch_Typeahead/:Branch_Name_?',function(req,res,next)
   { 
   try 
   {
    Student.Search_Branch_Typeahead(req.params.Branch_Name_, function (err, rows) 
  
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

	router.post("/Save_Student_Data_FollowUp/", function (req, res) {
		try {
			Student.Save_Student_Data_FollowUp(req.body, function (err, rows) {
			if (err) {
			  res.json(err);
			  console.log(err);
			} else {
			  res.json(rows);
			}
		  });
		} catch (e) {
		} finally {
		}
	  });

	//   router.post("/Fees_Payment_Whatsapp/", async function (req, res, next) {
	// 	try {
	// 		const resp = await Student.Fees_Payment_Whatsapp(req.body);
	// 		return res.send(resp);
	// 	} catch (e) {
	// 		console.log(e)
	// 		return res.send(e);
	// 	}
	// });
	


module.exports = router;



