var db = require("../dbconnection");
var fs = require("fs");
const axios = require('axios');
const fetch = require("node-fetch");
const storedProcedure = require("../helpers/stored-procedure");
const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

var base64str = base64_encode("teamone.PNG");

function base64_encode(file) {
	var bitmap = fs.readFileSync(file);
	return new Buffer.from(bitmap).toString("base64");
}
var Student = {
	// Save_Student:function(Student_,callback)
	// {
	//     return db.query("CALL Save_Student("+"@Student_Id_ :=?,"+"@Student_Name_ :=?,"+"@Address1_ :=?,"+"@Address2_ :=?,"+"@Address3_ :=?,"+
	//     "@Address4_ :=?,"+"@Pincode_ :=?,"+"@Phone_ :=?,"+"@Mobile_ :=?,"+"@Whatsapp_ :=?,"+"@DOB_ :=?,"+"@Gender_ :=?,"+"@Email_ :=?,"+
	//     "@Alternative_Email_ :=?,"+"@Passport_No_ :=?,"+"@Passport_Expiry_ :=?,"+"@User_Name_ :=?,"+"@Password_ :=?,"+"@Photo_ :=?,"+
	//     "@User_Id_ :=?"+")"
	//     ,[Student_.Student_Id,Student_.Student_Name,Student_.Address1,Student_.Address2,Student_.Address3,Student_.Address4,
	//     Student_.Pincode,Student_.Phone,Student_.Mobile,Student_.Whatsapp,Student_.DOB,Student_.Gender,Student_.Email,
	//     Student_.Alternative_Email,Student_.Passport_No,Student_.Passport_Expiry,Student_.User_Name,Student_.Password,
	//     Student_.Photo,Student_.User_Id],callback);
	// } ,
	Save_Student: function (Student_Data, callback) {
		console.log(Student_Data);
		var Student_Value_ = 0;
		let Student_ = Student_Data.Student;
		if (Student_ != undefined && Student_ != "" && Student_ != null)
			Student_Value_ = 1;
		var FollowUp_Value_ = 0;
		let FollowUp_ = Student_Data.Followup;
		if (FollowUp_ != undefined && FollowUp_ != "" && FollowUp_ != null)
			FollowUp_Value_ = 1;
		return db.query(
			"CALL Save_Student(" +
				"@Student_:=?," +
				"@FollowUp_ :=?," +
				"@Student_Value_ :=?," +
				"@FollowUp_Value_ :=? )",
			[Student_, FollowUp_, Student_Value_, FollowUp_Value_],
			callback
		);
	},
	Delete_Student: function (Student_Id_, callback) {
		return db.query(
			"CALL Delete_Student(@Student_Id_ :=?)",
			[Student_Id_],
			callback
		);
	},
	Get_Student: function (Student_Id_, callback) {
		return db.query(
			"CALL Get_Student(@Student_Id_ :=?)",
			[Student_Id_],
			callback
		);
	},
	Search_Student: async function (
		Fromdate_,
		Todate_,
		SearchbyName_,
		By_User_,
		Status_Id_,
		Is_Date_Check_,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount,
		RowCount2,
		Register_Value,
		Qualification_Id,
		Course_Id,
		Batch_Id,
		Enquiry_For_Id
	) {
		var Student = [];
		try {
			if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
				SearchbyName_ = "";
			
			Student = await new storedProcedure("Search_Student", [
				Fromdate_,
				Todate_,
				SearchbyName_,
				By_User_,
				Status_Id_,
				Is_Date_Check_,
				Page_Index1_,
				Page_Index2_,
				Login_User_Id_,
				RowCount,
				RowCount2,
				Register_Value,
				Qualification_Id,
				Course_Id,
				Batch_Id,
				Enquiry_For_Id,
			]).result();
		} catch (e) {}

		return {
			returnvalue: {
				Student,
			},
		};
	},

	Search_Status_Typeahead: function (Status_Name, Group_Id, callback) {
		if (Status_Name === undefined || Status_Name === "undefined")
			Status_Name = "";
		return db.query(
			"CALL Search_Status_Typeahead(@Status_Name :=?,@Group_Id :=?)",
			[Status_Name, Group_Id],
			callback
		);
	},
	Search_Users_Typeahead: function (Status_Name, callback) {
		if (Status_Name === undefined || Status_Name === "undefined")
			Status_Name = "";
		return db.query(
			"CALL Search_Users_Typeahead(@Status_Name :=?)",
			[Status_Name],
			callback
		);
	},

	Search_Faculty_Typeahead: function (Users_Name,Role_Type, callback) {
		if (Users_Name === undefined || Users_Name === "undefined")
		Users_Name = "";
		return db.query(
			"CALL Search_Faculty_Typeahead(@Users_Name :=?,@Role_Type :=?)",
			[Users_Name,Role_Type],
			callback
		);
	},

	Search_Typeahead_Loadfaculty: function (Users_Name, callback) {
		if (Users_Name === undefined || Users_Name === "undefined")
		Users_Name = "";
		return db.query(
			"CALL Search_Typeahead_Loadfaculty(@Users_Name :=?)",
			[Users_Name],
			callback
		);
	},

	Load_Gender: function (callback) {
		return db.query("CALL Load_Gender()", [], callback);
	},

	Load_Document_Type: function (callback) {
		return db.query("CALL Load_Document_Type()", [], callback);
	},

	Load_Attendance_Status: function (callback) {
		return db.query("CALL Load_Attendance_Status()", [], callback);
	},

	Load_Enquiry_Source: function (callback) {
		return db.query("CALL Load_Enquiry_Source()", [], callback);
	},

	Load_Enquiry_For: function (callback) {
		return db.query("CALL Load_Enquiry_For()", [], callback);
	},

	Load_Student_Search_Dropdowns: function (Group_Id_, callback) {
		return db.query(
			"CALL Load_Student_Search_Dropdowns(@Group_Id_ :=?)",
			[Group_Id_],
			callback
		);
	},
	Get_FollowUp_Details: async function (Student_Id_) {
		const FollowUp = await new storedProcedure("Get_FollowUp_Details", [
			Student_Id_,
		]).result();
		return { 0: { FollowUp } };
	},

	Notification_Read_Status: function (Notification_Count_,User_Id_, callback) {
        console.log(Notification_Count_,User_Id_)
        return db.query(
            "CALL Notification_Read_Status(@Notification_Count_ :=?,@User_Id_ :=?)",
            [Notification_Count_,User_Id_],
            callback
        );
    },





	update_Read_Status: function (login_user_, Notification_Id_, callback) {
		return db.query(
			"CALL update_Read_Status(@login_user_ :=?,@Notification_Id_ :=?)",
			[login_user_, Notification_Id_],
			callback
		);
	},
	Reset_Notification_Count: function (User_Id_, callback) {
        return db.query(
            "CALL Reset_Notification_Count(@User_Id_ :=?)",
            [User_Id_],
            callback
        );
    },
    Get_All_Notification: function (Date_, User_Id_, login_Id_, callback) {
        return db.query(
            "CALL Get_All_Notification(@Date_ :=?,@User_Id_ :=?,@login_Id_ :=?)",
            [Date_, User_Id_, login_Id_],
            callback
        );
    },
	Get_Last_FollowUp: function (Users_Id_, callback) {
		return db.query(
			"CALL Get_Last_FollowUp(@Users_Id_ :=?)",
			[Users_Id_],
			callback
		);
	},
	Get_FollowUp_History: async function (Student_Id_) {
		const FollowUp = await new storedProcedure("Get_FollowUp_History", [
			Student_Id_,
		]).result();
		return { 0: { FollowUp } };
	},

	Register_Student: function (Student_Id_, User_Id_,Registration_Fees_,Enquiry_For_Id_, callback) {
		console.log(Student_Id_, User_Id_,Registration_Fees_,Enquiry_For_Id_);
		return db.query(
			"CALL Register_Student(@Student_Id_ :=?,@User_Id_ :=?,@Registration_Fees_ :=?,@Enquiry_For_Id_ :=?)",
			[Student_Id_, User_Id_,Registration_Fees_,Enquiry_For_Id_],
			callback
		);
	},
	
	Remove_Registration: function (Student_Id_, callback) {
		return db.query(
			"CALL Remove_Registration(@Student_Id_ :=?)",
			[Student_Id_],
			callback
		);
	},
	Search_Course_Typeahead: function (Course_Name, callback) {
		if (Course_Name === undefined || Course_Name === "undefined")
			Course_Name = "";
		return db.query(
			"CALL Search_Course_Typeahead(@Course_Name :=?)",
			[Course_Name],
			callback
		);
	},
	Search_Batch_Typeahead: function (Batch_Name, callback) {
		if (Batch_Name === undefined || Batch_Name === "undefined") Batch_Name = "";
		return db.query(
			"CALL Search_Batch_Typeahead(@Batch_Name :=?)",
			[Batch_Name],
			callback
		);
	},

	Search_Batch_Typeahead_1: function (Batch_Name, Course_Id, callback) {
		if (Batch_Name === undefined || Batch_Name === "undefined") Batch_Name = "";
		return db.query(
			"CALL Search_Batch_Typeahead_1(@Batch_Name :=?,@Course_Id :=?)",
			[Batch_Name, Course_Id],
			callback
		);
	},
	Get_Course_Student: function (Course_Id, callback) {
		return db.query(
			"CALL Get_Course_Student(@Course_Id :=?)",
			[Course_Id],
			callback
		);
	},
	Get_Student_Course: function (Student_Id_, callback) {
		return db.query(
			"CALL Get_Student_Course(@Student_Id_ :=?)",
			[Student_Id_],
			callback
		);
	},
	Get_Student_Course_Click: function (
		Student_Id_,
		Student_Course_Id_,
		Course_Id_,
		callback
	) {
		console.log(Student_Id_,Student_Course_Id_, Course_Id_)
		return db.query(
			"CALL Get_Student_Course_Click(@Student_Id_ :=?,@Student_Course_Id_ :=?,@Course_Id_ :=?)",
			[Student_Id_,Student_Course_Id_, Course_Id_],
			callback
		);
	},


	Get_Student_LastCourse_Click: function (
		Student_Id_,
		Course_Id_,
		Fees_Type_Id,
		callback
	) {
		return db.query(
			"CALL Get_Student_LastCourse_Click(@Student_Id_ :=?,@Course_Id_ :=?,@Fees_Type_Id :=?)",
			[Student_Id_, Course_Id_, Fees_Type_Id],
			callback
		);
	},







	Save_Student_Course: async function (Student_Course_) {
		return new Promise(async (rs, rej) => {
			const pool = db.promise();
			let result1;
			var FeesInstallment_Value = 0;
			let FeesInstallment_ = Student_Course_.Student_Fees_Installment_Details;
			if (FeesInstallment_ != undefined && FeesInstallment_ != "" && FeesInstallment_ != null)
				FeesInstallment_Value = 1;
			else
			Student_Course_.Student_Fees_Installment_Details.push('1');
		

			var Syllabus_Value = 0;
			let Syllabus_ = Student_Course_.Student_Course_Subject;
			if (Syllabus_ != undefined && Syllabus_ != "" && Syllabus_ != null)
			Syllabus_Value = 1;

			else
			Student_Course_.Student_Course_Subject.push('2');

			console.log(Syllabus_Value)
			console.log(FeesInstallment_);
			console.log(FeesInstallment_Value)
			var connection = await pool.getConnection();
			try {
				console.log(Student_Course_)
				console.log(Student_Course_.Student_Fees_Installment_Details)
				const result1 = await new storedProcedure(
					"Save_Student_Course",
					[
						Student_Course_.Student_Course_Id,
						Student_Course_.Student_Id,
						Student_Course_.Entry_Date,
						Student_Course_.Course_Name_Details,
						Student_Course_.Course_Id,
						Student_Course_.Course_Name,
						Student_Course_.Start_Date,
						Student_Course_.End_Date,
						Student_Course_.Join_Date,
						Student_Course_.By_User_Id,
						Student_Course_.Status,
						Student_Course_.Course_Type_Id,
						Student_Course_.Course_Type_Name,
						Student_Course_.Agent_Amount,
						Student_Course_.Total_Fees,
						Student_Course_.Batch_Id,
						Student_Course_.Batch_Name,
						Student_Course_.Faculty_Id,
						Student_Course_.Installment_Type_Id,
						Student_Course_.No_Of_Installment,
						Student_Course_.Duration,
						Student_Course_.Laptop_details_Id,
						Student_Course_.Laptop_details_Name,
						Student_Course_.Reading,
						Student_Course_.Speaking,
						Student_Course_.Listening,
						Student_Course_.Writing,
						Student_Course_.Grammer,
						Student_Course_.TotalMark,
						Student_Course_.Markstatus_Id,
						Student_Course_.Markstatus_Name,
						Student_Course_.Revision_Duration,
						Student_Course_.Exam_Date_Check,
						Student_Course_.Exam_Date,
						Student_Course_.Student_Course_Subject,
						Student_Course_.Student_Fees_Installment_Details,
						FeesInstallment_Value,
						Syllabus_Value,
						Student_Course_.End_Date_Check,
						Student_Course_.Offline_Branch_Id,
						Student_Course_.Offline_Branch,
						Student_Course_.reverse_cal,
						Student_Course_.Gst 
                ,Student_Course_.Hsn_code,
				Student_Course_.Cgst,
				Student_Course_.Sgst
						 
					],
					connection
				).result();

				await connection.commit();
				connection.release();
				rs(result1);
			} catch (err) {
				await connection.rollback();
				rej(err);
				var result2 = [{ Student_Id_: 0 }];
				rs(result2);
			} finally {
				connection.release();
			}
		});
	},
	Search_Subject_Course_Typeahead: function (
		Subject_Name,
		Course_Id,
		callback
	) {
		if (Subject_Name === undefined || Subject_Name === "undefined")
			Subject_Name = "";
		return db.query(
			"CALL Search_Subject_Course_Typeahead(@Subject_Name :=?,@Course_Id :=?)",
			[Subject_Name, Course_Id],
			callback
		);
	},

	Get_Installment_Details: function (Installment_Type_Id, Course_Id, callback) {
		return db.query(
			"CALL Get_Installment_Details(@Installment_Type_Id :=?,@Course_Id :=?)",
			[Installment_Type_Id, Course_Id],
			callback
		);
	},
	Load_Exam_Status: function (callback) {
		return db.query("CALL Load_Exam_Status()", [], callback);
	},
	Save_Mark_List_Master: async function (Mark_List_Master_) {
		return new Promise(async (rs, rej) => {
			const pool = db.promise();
			let result1;
			var connection = await pool.getConnection();
			try {
				const result1 = await new storedProcedure(
					"Save_Mark_List_Master",
					[
						Mark_List_Master_.Mark_List_Master_Id,
						Mark_List_Master_.Student_Id,
						Mark_List_Master_.Course_Id,
						Mark_List_Master_.Course_Name,
						Mark_List_Master_.User_Id,
						Mark_List_Master_.Mark_List,
					],
					connection
				).result();
				await connection.commit();
				connection.release();
				rs(result1);
			} catch (err) {
				await connection.rollback();
				rej(err);
				var result2 = [{ Mark_List_Master_Id_: 0 }];
				rs(result2);
			} finally {
				connection.release();
			}
		});
	},
	Get_Student_Mark_List: function (Student_Id_, callback) {
		return db.query(
			"CALL Get_Student_Mark_List(@Student_Id_ :=?)",
			[Student_Id_],
			callback
		);
	},
	Save_Student_Receipt_Voucher: function (Receipt_Voucher_, callback) {
		//  console.log(Receipt_Voucher_);

		console.log(Receipt_Voucher_.Associates_Agent_Id);
		console.log(Receipt_Voucher_.Processing_Agent_Id);
		console.log(Receipt_Voucher_.Associates_Agent_Commission);
		console.log(Receipt_Voucher_.Processing_Agent_Commission);

		return db.query(
			"CALL Save_Student_Receipt_Voucher(" +
				"@Receipt_Voucher_Id_ :=?," +
				"@Date_ :=?," +
				"@Student_Id_ :=?," +
				"@Amount_ :=?," +
				"@Payment_Mode_ :=?," +
				"@User_Id_ :=?," +
				"@Payment_Status_ :=?," +
				"@To_Account_Id_ :=?," +
				"@To_Account_Name_ :=?," +
				"@Description_ :=?," +
				"@Student_Fees_Installment_Details_Id_ :=?," +
				"@Student_Course_Id_ :=?," +
				"@Fees_Type_Id_ :=?," +
				"@Tax_Percentage_ :=?," +
				"@Course_Id_ :=?," +
				"@Hostel_Fees_Details_Id_ :=?," +
				"@Voucher_No_ :=?," +
				"@Is_Agent_ :=?," +
				"@Is_Associate_ :=?," +
				"@Associates_Agent_Id_ :=?," +
				"@Processing_Agent_Id_ :=?," +
				"@Associates_Agent_Commission_ :=?," +
				"@Processing_Agent_Commission_ :=?," +
				"@Discount_ :=?" +
				")",

			[
				Receipt_Voucher_.Receipt_Voucher_Id,
				Receipt_Voucher_.Date,
				Receipt_Voucher_.From_Account_Id,
				Receipt_Voucher_.Amount,
				Receipt_Voucher_.Payment_Mode,
				Receipt_Voucher_.User_Id,
				Receipt_Voucher_.Payment_Status,
				Receipt_Voucher_.To_Account_Id,
				Receipt_Voucher_.To_Account_Name,
				Receipt_Voucher_.Description,
				Receipt_Voucher_.Student_Fees_Installment_Details_Id,
				Receipt_Voucher_.Student_Course_Id,
				Receipt_Voucher_.Fees_Type_Id,
				Receipt_Voucher_.Tax_Percentage,
				Receipt_Voucher_.Course_Id,
				Receipt_Voucher_.Hostel_Fees_Details_Id,
				Receipt_Voucher_.Voucher_No,
				Receipt_Voucher_.Is_Agent,
				Receipt_Voucher_.Is_Associate,
				Receipt_Voucher_.Associates_Agent_Id,
				Receipt_Voucher_.Processing_Agent_Id,
				Receipt_Voucher_.Associates_Agent_Commission,
				Receipt_Voucher_.Processing_Agent_Commission,
				Receipt_Voucher_.Discount
			],
			callback
		);
	},
	
	Send_Receipt_Sms_Email: async function ( Mobile_,Email_,Sms,Student_Name,Amount_,Date_,Total_Amount_,Instalment_Date_,BalanceAmount_) 
{  
	console.log(Mobile_,Email_,Sms,Student_Name,Amount_,Date_,Total_Amount_,Instalment_Date_,BalanceAmount_)
    var location_path="http://adyaconnect.co.in/httpapi/smsapi?uname=GETABOSS&password=getaboss2018&sender=ONETEM&receiver="
    +Mobile_+"&route=TA&msgtype=1&sms="+Sms+ "";
    // console.log(location_path)
        const response =await fetch(location_path);
      //  console.log(12)
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
       port: 587,
       secure: false,
       requireTLS: true,
        auth: {
          user: 'training@oneteamsolutions.co.in', 
          pass: 'Onteam@train9070'
        }
      });
     const mailOptions = {
      
      //  from: '<b>One Team Solutions</b> '+ '< ' + 'hr@ufstechnologies.com ' + '>',
      from: 'training@oneteamsolutions.co.in' ,
       to: Email_,
       subject: 'Payment Received - One Team Solutions ! ', 
        
       attachments: [
         {
           filename: 'teamone.PNG',          
           type:  'image/PNG',
           content_id:   'myimagecid',
           content:      base64str ,
           disposition : "inline"
         }], 
       html:   "Dear "+Student_Name +" , <br/>"
       
       +"<br> Thank You for Making the Payment ! <br/>"
       
       +"<br/> We have received a Payment of Rs." + Amount_ +" on "+  Date_+". <br/>"
// if(BalanceAmount_ = 0)
// {

// }
       

    +"<br/> <b>Total Fee Paid Till Now : </b>"+Total_Amount_+"<br/>"
    +" <b>Next Due Date : </b> "+Instalment_Date_+"<br/>"
    +" <b>Next Due Amount : </b> "+BalanceAmount_+"<br/>"
    
    +"<br/> For any Queries regarding Fee Payments contact our Team on any of the below Numbers. <br/>"
    +"<br></br>"
    +" <b style='margin-left: 30px'; >  &#9679;  +91 95674 34151  </b> <br>"
    +" <b style='margin-left: 30px'; >  &#9679;  +91 85907 49146  </b> <br>"
    +" <b style='margin-left: 30px'; >  &#9679;  +91 90749 51347 </b><br/>"
    +" <b style='margin-left: 30px'; >  &#9679;  +91 80751 87029 </b><br/> "
    +" <b style='margin-left: 30px'; >  &#9679;  +91 95674 40597 </b> <br/>"
    +"<br></br>"

    +"<br/> -- <br/>"
    +" Thanks & Regards <br/>"

    +"<br> <b >Training Team </b><br/>"
    +"<b> One Team Solutions </b><br/>"
    +"oneteamsolutions.in <br/>"
    +"<br></br>"  
    +"<img src='cid:myimagecid' alt=''/>  "
     }
   
     sgMail
     var d = await sgMail.send(mailOptions);
     
  return {response};  
},  
	// Send_Receipt_Sms_Email: async function (
	// 	Mobile_,
	// 	Email_,
	// 	Sms,
	// 	Student_Name,
	// 	Amount_,
	// 	Date_,
	// 	Total_Amount_,
	// 	Instalment_Date_,
	// 	BalanceAmount_
	// ) {
	// 	var location_path =
	// 		"http://adyaconnect.co.in/httpapi/smsapi?uname=GETABOSS&password=getaboss2018&sender=ONETEM&receiver=" +
	// 		Mobile_ +
	// 		"&route=TA&msgtype=1&sms=" +
	// 		Sms +
	// 		"";
	// 	//  console.log(location_path)
	// 	const response = await fetch(location_path);
	// 	//  console.log(12)
	// 	let transporter = nodemailer.createTransport({
	// 		host: "smtp.gmail.com",
	// 		port: 587,
	// 		secure: false,
	// 		requireTLS: true,
	// 		auth: {
	// 			user: "training@oneteamsolutions.co.in",
	// 			pass: "Onteam@train9070",
	// 		},
	// 	});
	// 	const mailOptions = {
	// 		//  from: '<b>One Team Solutions</b> '+ '< ' + 'hr@ufstechnologies.com ' + '>',
	// 		from: "training@oneteamsolutions.co.in",
	// 		to: Email_,
	// 		subject: "Payment Received - One Team Solutions ! ",

	// 		attachments: [
	// 			{
	// 				filename: "teamone.PNG",
	// 				type: "image/PNG",
	// 				content_id: "myimagecid",
	// 				content: base64str,
	// 				disposition: "inline",
	// 			},
	// 		],
	// 		html:
	// 			"Dear " +
	// 			Student_Name +
	// 			" , <br/>" +
	// 			"<br> Thank You for Making the Payment ! <br/>" +
	// 			"<br/> We have received a Payment of Rs." +
	// 			Amount_ +
	// 			" on " +
	// 			Date_ +
	// 			". <br/>" +
	// 			// if(BalanceAmount_ = 0)
	// 			// {

	// 			// }

	// 			"<br/> <b>Total Fee Paid Till Now : </b>" +
	// 			Total_Amount_ +
	// 			"<br/>" +
	// 			" <b>Next Due Date : </b> " +
	// 			Instalment_Date_ +
	// 			"<br/>" +
	// 			" <b>Next Due Amount : </b> " +
	// 			BalanceAmount_ +
	// 			"<br/>" +
	// 			"<br/> For any Queries regarding Fee Payments contact our Team on any of the below Numbers. <br/>" +
	// 			"<br></br>" +
	// 			" <b style='margin-left: 30px'; >  &#9679;  +91 95674 34151  </b> <br>" +
	// 			" <b style='margin-left: 30px'; >  &#9679;  +91 85907 49146  </b> <br>" +
	// 			" <b style='margin-left: 30px'; >  &#9679;  +91 90749 51347 </b><br/>" +
	// 			" <b style='margin-left: 30px'; >  &#9679;  +91 80751 87029 </b><br/> " +
	// 			" <b style='margin-left: 30px'; >  &#9679;  +91 95674 40597 </b> <br/>" +
	// 			"<br></br>" +
	// 			"<br/> -- <br/>" +
	// 			" Thanks & Regards <br/>" +
	// 			"<br> <b >Training Team </b><br/>" +
	// 			"<b> One Team Solutions </b><br/>" +
	// 			"oneteamsolutions.in <br/>" +
	// 			"<br></br>" +
	// 			"<img src='cid:myimagecid' alt=''/>  ",
	// 	};

	// 	sgMail;
	// 	var d = await sgMail.send(mailOptions);

	// 	return { response };
	// },
	Get_Student_Receipt_History: function (Student_Id_, Course_Id_, callback) {
		return db.query(
			"CALL Get_Student_Receipt_History(@Student_Id_ :=?,@Course_Id_ :=?)",
			[Student_Id_, Course_Id_],
			callback
		);
	},
	Delete_Student_Receipt_Voucher: function (Receipt_Voucher_Id_, callback) {
		return db.query(
			"CALL Delete_Student_Receipt_Voucher(@Receipt_Voucher_Id_ :=?)",
			[Receipt_Voucher_Id_],
			callback
		);
	},
	Send_Sms: async function (Mobile_, Sms) {
		// var location_path="http://sapteleservices.com/SMS_API/sendsms.php?username=mikpsuser&password=mik@pss1050&mobile="
		// +Mobile_+"&sendername=MIKPSS&message="+Sms+" &routetype=1";
		// var location_path="http://adyaconnect.co.in/httpapi/smsapi?uname=Getaboss&password=getaboss2018&sender=ONETEM&receiver="
		// +Mobile_+"&route= PA&msgtype=1&sms="+Sms+ "";
		// var location_path="http://adyaconnect.co.in/httpapi/smsapi?uname=GETABOSS&password=getaboss2018&sender=ONETEM&receiver="
		// +Mobile_+"&route=TA&msgtype=1&sms=Hi,%20sudheesh%20Thank%20you%20for%20Your%20Enquiry%20at%20ONE%20TEAM.%20Our%20Experienced%20trainers%20look%20forward%20to%20Train%20you.%20Visit%20oneteamsolutions.in%20or%20call%209099090ONE%20TEAM%20SOLUTIONS"
		// console.log(location_path)
		var location_path =
			"http://adyaconnect.co.in/httpapi/smsapi?uname=GETABOSS&password=getaboss2018&sender=ONETEM&receiver=" +
			Mobile_ +
			"&route=TA&msgtype=1&sms=" +
			Sms +
			"";

		// console.log(location_path)
		const response = await fetch(location_path);
		console.log(response);
		return { response };
	},
	Send_Sms_Email: async function (Mobile_, Email_, Sms, Student_Name) {
		var location_path =
			"http://adyaconnect.co.in/httpapi/smsapi?uname=GETABOSS&password=getaboss2018&sender=ONETEM&receiver=" +
			Mobile_ +
			"&route=TA&msgtype=1&sms=" +
			Sms +
			"";
			console.log(location_path);
		const response = await fetch(location_path);
		console.log(response);

		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			requireTLS: true,
			auth: {
				user: "training@oneteamsolutions.co.in",
				pass: "Onteam@train9070",
			},
		});
		const mailOptions = {
			from: "training@oneteamsolutions.co.in",
			to: Email_,
			subject: "One Team Solutions-Course Details !",
			attachments: [
				{
					filename: "teamone.PNG",
					type: "image/PNG",
					content_id: "myimagecid",
					content: base64str,
					disposition: "inline",
				},
			],
			html:
				"Hello " +
				Student_Name +
				" ,<br/>" +
				"<br/> Thank you for showing interest in Training Programs at One Team Solutions ! <br/>" +
				"<br/> <b>👉 5 Top Reasons to Join One Team :</b> <br/>" +
				"<br/><b style='margin-left: 30px'; >  &#9679;  Fully Hands on </b>Online/Offline Training handled by Experienced Professionals <br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> Own <b>Job Portal with 110+ Freshers Jobs</b> Posted Every Month <br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> 10 Year old Multinational IT Company with Presence in India <b>(Infopark Phase 2, Kochi)</b>,US and Saudi Arabia <br/>" +
				"<b style='margin-left: 30px'; >  &#9679;  Special HR Training Sessions</b> for students on all Saturdays to Equip a Student for Recruitment Process. <br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> One Team will arrange <b>Unlimited Number of Interviews </b>for you till you get placed - <b> YES THAT IS A PROMISE ☺ </b> <br/>" +
				"<br/> <b>👉 Placed Students List :</b><br/>" +
				"<br/><b style='margin-left: 30px'; >  &#9679;  Python-Django -</b> https://drive.google.com/drive/folders/1qphbq_a6rnHJOxQLBHnl41vyzA376SyG?usp=sharing <br/>" +
				"<b style='margin-left: 30px'; >  &#9679;  Digital Marketing -</b> https://drive.google.com/drive/folders/1BtjI6Ws9LnfcB8qqFqGaBJf-7UeI6aIX?usp=sharing <br/>" +
				"<b style='margin-left: 30px'; >  &#9679;  PHP -</b> https://drive.google.com/drive/folders/1KL7WFlUdMvXQQzguqBJSiCEsTQSIb-kt?usp=sharing <br/>" +
				"<b style='margin-left: 30px'; >  &#9679;  IOS - </b> https://drive.google.com/drive/folders/1HD1BwPo8F90P3iIuYGUaEPBSKl-GfNVL?usp=sharing <br/>" +
				// +"https://drive.google.com/drive/folders/1HD1BwPo8F90P3iIuYGUaEPBSKl-GfNVL?usp=sharing <br/>"
				"<b style='margin-left: 30px'; >  &#9679;  Dot Net -</b> https://drive.google.com/drive/folders/1hqeyDsll05xzB3cZmt7SMagd34XNMWrP?usp=sharing <br/>" +
				"<b style='margin-left: 30px'; >  &#9679;  Android - </b>https://drive.google.com/drive/folders/1qb1aAR46zNqZSapwKnSwdCAGDHjnyv6c?usp=sharing <br/>" +
				"<br/> <b> 👉 Other Important Links : </b><br/>" +
				"<br/><b style='margin-left: 30px'; >  &#9679;  One Team got Featured in Mathrubhoomi News - </b>https://www.youtube.com/watch?v=7mxRTnA64Ds <br/>" +
				"<b style='margin-left: 30px'; >  &#9679;  Why Should you Join One Team -</b> https://www.youtube.com/watch?v=wJd0woYR50w <br/>" +
				"<b style='margin-left: 30px'; >  &#9679;  Our Placement Track Record - </b> https://oneteamsolutions.in/software-it-courses-placement-training-kochi/ <br/>" +
				"<b style='margin-left: 30px'; >  &#9679;  Training Team -</b> https://oneteamsolutions.in/experienced-it-software-training-team-kochi <br/>" +
				"<br/>  <b> 👉Bank Accounting Details of One Team Solutions :</b>  <br/>" +
				"Account Name : ONE TEAM SOLUTIONS <br/>" +
				"A/c no:-626405020662  <br/>" +
				"IFSC code:-ICIC0006264 <br/>" +
				"BRANCH:- EDAPALLY <br/>" +
				"Account Type : Current <br/>" +
				"<br/> <b style='font-size:18px;'>Feel Free to Contact us for any Further Queries - 9946870803 </b>  <br/>" +
				"<br/> -- <br/>" +
				"Thanks & Regards <br/>" +
				"<br/><b> Training Team </b><br/>" +
				"<b>One Team Solutions</b><br/>" +
				"oneteamsolutions.in <br/>" +
				"Ph : 9946870803 <br/>" +
				"<br></br>" +
				"<img src='cid:myimagecid' alt=''/>  ",
		};

		sgMail;
		var d = await sgMail.send(mailOptions);
		console.log(d);
		return { response };
	},

	Send_course_Email_1: async function (Email_, Student_Name, Course_Name) {
		//     var location_path="http://adyaconnect.co.in/httpapi/smsapi?uname=GETABOSS&password=getaboss2018&sender=ONETEM&receiver="
		//     +Mobile_+"&route=TA&msgtype=1&sms="+Sms+ "";

		//         const response =await fetch(location_path);
		// console.log(response)
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			requireTLS: true,
			auth: {
				user: "training@oneteamsolutions.co.in",
				pass: "Onteam@train9070",
			},
		});
		const mailOptions = {
			from: "training@oneteamsolutions.co.in",
			to: Email_,
			subject: "Welcome to One Team Family !",
			attachments: [
				{
					filename: "teamone.PNG",
					type: "image/PNG",
					content_id: "myimagecid",
					content: base64str,
					disposition: "inline",
				},
			],
			html:
				"Dear " +
				Student_Name +
				" ,<br/>" +
				"<br/> We are glad to enroll you at One Team Solutions for the Training and Internship Program! <br/>" +
				"<br/> Please note and understand that this is not a Job Offer. <br/>" +
				"<br/> <b>What we are offering for you:</b> <br/>" +
				"<br/><b style='margin-left: 30px'; >  &#9679;</b>Training in " +
				Course_Name +
				"  <br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> HR Training - Interview Preparation, Mock Interviews, CV Preparation & Correction<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> Assured Interviews at our Client Companies after your Course. One Team will arrange Unlimited Interviews for you till you get Placed. We will support you till you get placed.<br/>" +
				//    +"<b style='margin-left: 30px'; >  &#9679;  Special HR Training Sessions</b> for students on all Saturdays to Equip a Student for Recruitment Process. <br/>"
				//    +"<b style='margin-left: 30px'; >  &#9679; </b> One Team will arrange <b>Unlimited Number of Interviews </b>for you till you get placed - <b> YES THAT IS A PROMISE ☺ </b> <br/>"
				"<br/> <b>Rules and Regulations:</b> <br/>" +
				"<br/><b style='margin-left: 30px'; >  &#9679;</b>You are allowed to take only one leave Per Month (Both Medical and Casual) during the course of the Training and Internship. If you took<br/>" +
				"<br/> <b style='margin-left: 50px'; ></b>leaves more than allowed, you will miss the concepts to be taught on that particular day as per the syllabus. <br/>" +
				"<br/> <b style= 'margin-left: 30px''font-size:18px;' 'color:#f14e4e'>&#9679;Students will not be allowed to skip any interviews arranged by One Team. One Team has the right to take back all the placement support if this rule is violated </b>  <br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> It is also mandatory to attend all Placement Training Sessions organized by One Team.<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> It is highly advisable to behave like a professional during your Internship Period. Most of the companies will be calling us for reference(To know your attitude and conduct) once when you get placed.<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> One Team has all rights to take back the Placement Support if the student<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Skips any of the Interviews/Placement Drives/Job Fairs intimated by One Team.<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Fails to provide all documents including but not limited to address proof, identity proof, educational certificates, etc. to complete the<br/>" +
				"<br/><b style='margin-left: 50px'; ></b> background verification process.<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Discontinues the Training program<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Fails to pay the Training Fee On Time<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Rejects Offers from more than 2 Companies<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> You will be Terminated from the Training Program, with immediate effect, and without notice if:<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Any Declaration given by you or testimonials furnished by you to the company proves to be false<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> You are Found to have been convicted for or indulged in criminal, subversive, or immoral activities<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> You are found to have Indulged in Financial irregularities.<br/>" +
				"<br/> -- <br/>" +
				"Thanks & Regards <br/>" +
				"<br/><b> Training Team </b><br/>" +
				"<b>One Team Solutions</b><br/>" +
				"oneteamsolutions.in <br/>" +
				"Ph : 9946870803 <br/>" +
				"<br></br>" +
				"<img src='cid:myimagecid' alt=''/>  ",
		};
		sgMail;
		var d = await sgMail.send(mailOptions);
		//   return {response};
	},
	Send_course_Email_2: async function (Email_, Student_Name, Course_Name) {
		//     var location_path="http://adyaconnect.co.in/httpapi/smsapi?uname=GETABOSS&password=getaboss2018&sender=ONETEM&receiver="
		//     +Mobile_+"&route=TA&msgtype=1&sms="+Sms+ "";

		//         const response =await fetch(location_path);
		// console.log(response)
		console.log(Email_);
		console.log(Student_Name);
		console.log(Course_Name);
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			requireTLS: true,
			auth: {
				user: "training@oneteamsolutions.co.in",
				pass: "Onteam@train9070",
			},
		});
		const mailOptions = {
			from: "training@oneteamsolutions.co.in",
			to: Email_,
			subject: "Welcome to One Team Family !",
			attachments: [
				{
					filename: "teamone.PNG",
					type: "image/PNG",
					content_id: "myimagecid",
					content: base64str,
					disposition: "inline",
				},
			],
			html:
				"Dear " +
				Student_Name +
				" ,<br/>" +
				"<br/> We are glad to enroll you at One Team Solutions for the Training and Internship Program! <br/>" +
				"<br/> Please note and understand that this is not a Job Offer. <br/>" +
				"<br/> <b>What we are offering for you:</b> <br/>" +
				"<br/><b style='margin-left: 30px'; >  &#9679;</b>Training in " +
				Course_Name +
				"  <br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> HR Training - Interview Preparation, Mock Interviews, CV Preparation & Correction<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> Assured Interviews at our Client Companies after your Course. One Team will arrange Unlimited Interviews for you till you get Placed. We will support you till you get placed.<br/>" +
				//    +"<b style='margin-left: 30px'; >  &#9679;  Special HR Training Sessions</b> for students on all Saturdays to Equip a Student for Recruitment Process. <br/>"
				//    +"<b style='margin-left: 30px'; >  &#9679; </b> One Team will arrange <b>Unlimited Number of Interviews </b>for you till you get placed - <b> YES THAT IS A PROMISE ☺ </b> <br/>"
				"<br/> <b>Rules and Regulations:</b> <br/>" +
				"<br/><b style='margin-left: 30px'; >  &#9679;</b>You are allowed to take only one leave Per Month (Both Medical and Casual) during the course of the Training and Internship. If you took<br/>" +
				" <b style='margin-left: 32px'; ></b>leaves more than allowed, you will miss the concepts to be taught on that particular day as per the syllabus. <br/>" +
				"<br/> <b style= 'margin-left: 30px''font-size:18px;'>&#9679;&font-color:#ef071e;Students will not be allowed to skip any interviews arranged by One Team. One Team has the right to take back all the placement support if this rule is violated </b>  <br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> It is also mandatory to attend all Placement Training Sessions organized by One Team.<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> It is highly advisable to behave like a professional during your Internship Period. Most of the companies will be calling us for reference(To know your attitude and conduct) once when you get placed.<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> One Team has all rights to take back the Placement Support if the student<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Skips any of the Interviews/Placement Drives/Job Fairs intimated by One Team.<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Fails to provide all documents including but not limited to address proof, identity proof, educational certificates, etc. to complete the<br/>" +
				"<b style='margin-left: 52px'; ></b> background verification process.<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Discontinues the Training program<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Fails to pay the Training Fee On Time<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Rejects Offers from more than 2 Companies<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> You will be Terminated from the Training Program, with immediate effect, and without notice if:<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Any Declaration given by you or testimonials furnished by you to the company proves to be false<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> You are Found to have been convicted for or indulged in criminal, subversive, or immoral activities<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> You are found to have Indulged in Financial irregularities.<br/>" +
				"<br/> -- <br/>" +
				"Thanks & Regards <br/>" +
				"<br/><b> Training Team </b><br/>" +
				"<b>One Team Solutions</b><br/>" +
				"oneteamsolutions.in <br/>" +
				"Ph : 9946870803 <br/>" +
				"<br></br>" +
				"<img src='cid:myimagecid' alt=''/>  ",
		};
		sgMail;
		var d = await sgMail.send(mailOptions);
		//   return {response};
	},

	Send_course_Email: async function (
		Mobile_,
		Email_,
		Sms,
		Student_Name,
		Course_Name
	) {
		// var location_path="http://adyaconnect.co.in/httpapi/smsapi?uname=GETABOSS&password=getaboss2018&sender=ONETEM&receiver="
		//   +Mobile_+"&route=TA&msgtype=1&sms="+Sms+ "";

		// console.log(location_path)

		var location_path =
			"http://adyaconnect.co.in/httpapi/smsapi?uname=GETABOSS&password=getaboss2018&sender=ONETEM&receiver=" +
			Mobile_ +
			"&route=TA&msgtype=1&sms=" +
			Sms +
			"";

		const response = await fetch(location_path);
		console.log(response);
		// console.log(Email_)
		// console.log(Student_Name)
		// console.log(Course_Name)
		// console.log(Mobile_)
		//console.log(Sms)
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			requireTLS: true,
			auth: {
				user: "training@oneteamsolutions.co.in",
				pass: "Onteam@train9070",
			},
		});
		const mailOptions = {
			from: "training@oneteamsolutions.co.in",
			to: Email_,
			subject: "Welcome to One Team Family !",
			attachments: [
				{
					filename: "teamone.PNG",
					type: "image/PNG",
					content_id: "myimagecid",
					content: base64str,
					disposition: "inline",
				},
			],
			html:
				"Dear " +
				Student_Name +
				" ,<br/>" +
				"<br/> We are glad to enroll you at One Team Solutions for the Training and Internship Program! <br/>" +
				"<br/> Please note and understand that this is not a Job Offer. <br/>" +
				"<br/> <b>What we are offering for you:</b> <br/>" +
				"<br/><b style='margin-left: 30px'; >  &#9679;</b>Training in " +
				Course_Name +
				"  <br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> HR Training - Interview Preparation, Mock Interviews, CV Preparation & Correction<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> Assured Interviews at our Client Companies after your Course. One Team will arrange Unlimited Interviews for you till you get Placed. We will support you till you get placed.<br/>" +
				//    +"<b style='margin-left: 30px'; >  &#9679;  Special HR Training Sessions</b> for students on all Saturdays to Equip a Student for Recruitment Process. <br/>"
				//    +"<b style='margin-left: 30px'; >  &#9679; </b> One Team will arrange <b>Unlimited Number of Interviews </b>for you till you get placed - <b> YES THAT IS A PROMISE ☺ </b> <br/>"
				"<br/> <b>Rules and Regulations:</b> <br/>" +
				"<br/><b style='margin-left: 30px'; >  &#9679;</b>You are allowed to take only one leave Per Month (Both Medical and Casual) during the course of the Training and Internship. If you took<br/>" +
				" <b style='margin-left: 38px'; ></b>leaves more than allowed, you will miss the concepts to be taught on that particular day as per the syllabus. <br/>" +
				" <b style= 'margin-left: 30px;font-size:12px;color:#ef071e;'>&#9679;Students will not be allowed to skip any interviews arranged by One Team. One Team has the right to take back all the placement support if this rule is violated </b>  <br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> It is also mandatory to attend all Placement Training Sessions organized by One Team.<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> It is highly advisable to behave like a professional during your Internship Period. Most of the companies will be calling us for reference(To know your attitude and conduct) once when you get placed.<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> One Team has all rights to take back the Placement Support if the student<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Skips any of the Interviews/Placement Drives/Job Fairs intimated by One Team.<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Fails to provide all documents including but not limited to address proof, identity proof, educational certificates, etc. to complete the<br/>" +
				"<b style='margin-left: 58px'; ></b> background verification process.<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Discontinues the Training program<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Fails to pay the Training Fee On Time<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Rejects Offers from more than 2 Companies<br/>" +
				"<b style='margin-left: 30px'; >  &#9679; </b> You will be Terminated from the Training Program, with immediate effect, and without notice if:<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> Any Declaration given by you or testimonials furnished by you to the company proves to be false<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> You are Found to have been convicted for or indulged in criminal, subversive, or immoral activities<br/>" +
				"<b style='margin-left: 50px'; >  &#9679; </b> You are found to have Indulged in Financial irregularities.<br/>" +
				"<br/> -- <br/>" +
				"Thanks & Regards <br/>" +
				"<br/><b> Training Team </b><br/>" +
				"<b>One Team Solutions</b><br/>" +
				"oneteamsolutions.in <br/>" +
				"Ph : 9946870803 <br/>" +
				"<br></br>" +
				"<img src='cid:myimagecid' alt=''/>  ",
		};
		sgMail;
		var d = await sgMail.send(mailOptions);
		return { response };
	},
	Search_Attendance: function ( Batch_, Faculty_, callback) {
		return db.query(
			"CALL Search_Attendance(@Batch_ :=?,@Faculty_ :=?)",
			[Batch_, Faculty_],
			callback
		);
	},
	Save_Attendance: async function (Attendance_Master_) {
		console.log(Attendance_Master_);
		return new Promise(async (rs, rej) => {
			const pool = db.promise();
			let result1;
			var connection = await pool.getConnection();
			// await connection.beginTransaction();

			// var Absent_Value_ =0;
			// let Absent_Student_ = Attendance_Master_.Absent_Student;
			// if (Absent_Student_ != undefined && Absent_Student_ != '' && Absent_Student_ != null)
			// Absent_Value_ = 1
			// else{
			//   Absent_Student_=['{"name":"John", "age":30, "car":null}']
			// }
			// var Attendance_Student_Value_ =0;
			// let Attendance_Student_ = Attendance_Master_.Attendance_Student;
			// if (Attendance_Student_ != undefined && Attendance_Student_ != '' && Attendance_Student_ != null)
			// Attendance_Student_Value_ = 1
			// else{
			//   Attendance_Student_=['{"name":"John", "age":30, "car":null}']
			// }
			// var Attendance_Subject_Value_ =0;
			// let Attendance_Subject_ = Attendance_Master_.Attendance_Subject;
			// if (Attendance_Subject_ != undefined && Attendance_Subject_ != '' && Attendance_Subject_ != null)
			// Attendance_Subject_Value_ = 1
			// else{
			//   Attendance_Subject_=['{"name":"John", "age":30, "car":null}']
			// }

			try {
				const result1 = await new storedProcedure(
					"Save_Attendance",
					[
						Attendance_Master_.Attendance_Master_Id,
						// Attendance_Master_.Course_Id,
						Attendance_Master_.Batch_Id,
						Attendance_Master_.Faculty_Id,
						Attendance_Master_.Duration,
						Attendance_Master_.Session_Id,
						Attendance_Master_.Session_Name,
						Attendance_Master_.Percentage,
						Attendance_Master_.Description,
						Attendance_Master_.Revision_Duration,
						Attendance_Master_.Timing,
						
						Attendance_Master_.Attendance_Student,
						Attendance_Master_.Attendance_Subject,
						Attendance_Master_.Attendance_Student_Value,
						Attendance_Master_.Attendance_Subject_Value,
						Attendance_Master_.Date,
						
					],
					connection
				).result();
				// await connection.commit();

				connection.release();
				rs(result1);
			} catch (err) {
				// await connection.rollback();
				rej(err);
			}
		});
	},

	Search_Attendance_Report: function (
		From_Date,
		To_Date,
		Faculty_Id,
		Course_,
		Batch_,
		Attendance_Status_Id,
		User_Id_,
		SearchbyName_,
		callback
	) {
		console.log(From_Date,
		To_Date,
		Faculty_Id,
		Course_,
		Batch_,
		Attendance_Status_Id,
		User_Id_,
		SearchbyName_);

		return db.query(
			"CALL Search_Attendance_Report(@From_Date :=?,@To_Date :=?,@Faculty_Id :=?,@Course_ :=?,@Batch_ :=?,@Attendance_Status_Id :=?,@User_Id_ :=?,@SearchbyName_ :=?)",
			[
				From_Date,
				To_Date,
				Faculty_Id,
				Course_,
				Batch_,
				Attendance_Status_Id,
				User_Id_,
				SearchbyName_,
			],
			callback
		);
	},
	Delete_Attendancereportdata:function(Attendance_Master_Id_,callback)
{ 
return db.query("CALL Delete_Attendancereportdata(@Attendance_Master_Id_ :=?)",[Attendance_Master_Id_],callback);
},



Delete_Employee_Attendance:function(Attendance_Master_Id_,callback)
{ 
return db.query("CALL Delete_Employee_Attendance(@Attendance_Master_Id_ :=?)",[Attendance_Master_Id_],callback);
},


	Search_Fees_Outstanding_Report: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Course_,
		Batch_,
		SearchbyName_,
		User_Id_,
		callback
	) {
		console.log(SearchbyName_)
		if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
			SearchbyName_ = "";
		return db.query(
			"CALL Search_Fees_Outstanding_Report(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Course_ :=?,@Batch_ :=?,@SearchbyName_ :=?,@User_Id_ :=?)",
			[
				Is_Date_,
				From_Date_,
				To_Date_,
				Course_,
				Batch_,
				SearchbyName_,
				User_Id_,
			],
			callback
		);
	},
	Search_Fees_Collection_Report: function (
		Is_Date_,
		From_Date,
		To_Date,
		User_Id_,
		Login_User_,
		Mode_,
		callback
	) {
		return db.query(
			"CALL Search_Fees_Collection_Report(@Is_Date_ :=?,@From_Date :=?,@To_Date :=?,@User_Id_ :=?,@Login_User_ :=?,@Mode_ :=?)",
			[Is_Date_, From_Date, To_Date, User_Id_, Login_User_, Mode_],
			callback
		);
	},
	Search_Admission_Report: function (
		Is_Date_,
		From_Date,
		To_Date,
		User_Id_,
		Login_User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Admission_Report(@Is_Date_ :=?,@From_Date :=?,@To_Date :=?,@User_Id_ :=?,@Login_User_Id_:=?)",
			[Is_Date_, From_Date, To_Date, User_Id_, Login_User_Id_],
			callback
		);
	},
	Search_Lead_Report: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Enquiry_Source_,
		Login_User_,
		User_Id_,
		status_,
		Course_Id_,
		Enquiry_For_Id_,MasterCourse_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Lead_Report(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Enquiry_Source_ :=?,@Login_User_:=?,@User_Id_:=?,@status_:=?,@Course_Id_:=?,@Enquiry_For_Id_:=?,@MasterCourse_Id_:=?)",
			[
				Is_Date_,
				From_Date_,
				To_Date_,
				Enquiry_Source_,
				Login_User_,
				User_Id_,
				status_,
				Course_Id_,
				Enquiry_For_Id_,
				MasterCourse_Id_,
			],
			callback
		);
	},


	Search_Followup_History_Report: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Enquiry_Source_,
		Login_User_,
		User_Id_,
		status_,
		Course_Id_,
		Enquiry_For_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Followup_History_Report(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Enquiry_Source_ :=?,@Login_User_:=?,@User_Id_:=?,@status_:=?,@Course_Id_:=?,@Enquiry_For_Id_:=?)",
			[
				Is_Date_,
				From_Date_,
				To_Date_,
				Enquiry_Source_,
				Login_User_,
				User_Id_,
				status_,
				Course_Id_,
				Enquiry_For_Id_,
			],
			callback
		);
	},



	Search_Transaction: function (Course_, Portion_Covered_, callback) {
		return db.query(
			"CALL Search_Transaction(@Course_ :=?,@Portion_Covered_ :=?)",
			[Course_, Portion_Covered_],
			callback
		);
	},
	Save_Transaction: async function (Transaction_Master_) {
		return new Promise(async (rs, rej) => {
			const pool = db.promise();
			let result1;
			var connection = await pool.getConnection();
			await connection.beginTransaction();
			try {
				console.log(Transaction_Master_);
				const result1 = await new storedProcedure(
					"Save_Transaction",
					[
						Transaction_Master_.Transaction_Master_Id,
						Transaction_Master_.Course_Id,
						Transaction_Master_.Batch_Id,
						Transaction_Master_.User_Id,
						Transaction_Master_.Employer_Details_Id,
						Transaction_Master_.Portion_Covered,
						Transaction_Master_.Description,
						Transaction_Master_.Transaction_Student,
					],
					connection
				).result();
				await connection.commit();
				connection.release();
				for (var i = 0; i < result1.length; i++) {
					var location_path =
						"http://sapteleservices.com/SMS_API/sendsms.php?username=mikpsuser&password=mik@pss1050&mobile=" +
						result1[i].Phone +
						"&sendername=MIKPSS&message=RESUME SHARING ALERT:Your Resume has been send to " +
						result1[i].Description_ +
						" by " +
						result1[i].Company_Name_ +
						" PLACEMENT TEAM.You can expect a Call/Message/Email from them.Support 6282202033 ";
					const response = await fetch(location_path);
				}
				rs([{ Transaction_Master_Id_: result1[0].Transaction_Master_Id_ }]);
			} catch (err) {
				await connection.rollback();
				rej(err);
			}
		});
	},
	Search_Interview: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Course_,
		callback
	) {
		return db.query(
			"CALL Search_Interview(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Course_ :=?)",
			[Is_Date_, From_Date_, To_Date_, Course_],
			callback
		);
	},
	Save_Interview: async function (Interview_Master_) {
		return new Promise(async (rs, rej) => {
			const pool = db.promise();
			let result1;
			var connection = await pool.getConnection();
			await connection.beginTransaction();
			try {
				const result1 = await new storedProcedure(
					"Save_Interview",
					[
						Interview_Master_.Interview_Master_Id,
						Interview_Master_.Course_Id,
						Interview_Master_.Batch_Id,
						Interview_Master_.User_Id,
						Interview_Master_.Employer_Details_Id,
						Interview_Master_.Description,
						Interview_Master_.Interview_Date,
						Interview_Master_.Interview_Student,
					],
					connection
				).result();
				await connection.commit();
				connection.release();
				for (var i = 0; i < result1.length; i++) {
					var location_path =
						"http://sapteleservices.com/SMS_API/sendsms.php?username=mikpsuser&password=mik@pss1050&mobile=" +
						result1[i].Phone +
						"&sendername=MIKPSS&message=INTERVIEW ALERT:A New interview has been scheduled for you by " +
						result1[i].Company_Name_ +
						" PLACEMENT TEAM on " +
						result1[i].Interview_Date_ +
						" at " +
						result1[i].Description_ +
						" .Please check your Email more details.Call 6282202033";
					const response = await fetch(location_path);
				}
				rs([{ Interview_Master_Id_: result1[0].Interview_Master_Id_ }]);
			} catch (err) {
				await connection.rollback();
				rej(err);
			}
		});
	},

	Search_Placed: function (Is_Date_, From_Date_, To_Date_, Course_, callback) {
		return db.query(
			"CALL Search_Placed(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Course_ :=?)",
			[Is_Date_, From_Date_, To_Date_, Course_],
			callback
		);
	},
	Save_Placed: async function (Placed_Master_) {
		return new Promise(async (rs, rej) => {
			const pool = db.promise();
			let result1;
			var connection = await pool.getConnection();
			await connection.beginTransaction();
			try {
				const result1 = await new storedProcedure(
					"Save_Placed",
					[
						Placed_Master_.Placed_Master_Id,
						Placed_Master_.Course_Id,
						Placed_Master_.Batch_Id,
						Placed_Master_.User_Id,
						Placed_Master_.Employer_Details_Id,
						Placed_Master_.Description,
						Placed_Master_.Placed_Date,
						Placed_Master_.Placed_Student,
					],
					connection
				).result();

				await connection.commit();
				connection.release();
				rs(result1);
			} catch (err) {
				await connection.rollback();
				rej(err);
			}
		});
	},

	Search_Placed_Report: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Course_,
		Company_,
		User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Placed_Report(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Course_ :=?,@Company_ :=?,@User_Id_ :=?)",
			[Is_Date_, From_Date_, To_Date_, Course_, Company_, User_Id_],
			callback
		);
	},
	Search_Interview_Report: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Course_,
		Company_,
		User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Interview_Report(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Course_ :=?,@Company_ :=?,@User_Id_ :=?)",
			[Is_Date_, From_Date_, To_Date_, Course_, Company_, User_Id_],
			callback
		);
	},
	Search_Transaction_Report: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Course_,
		Company_,
		User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Transaction_Report(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Course_ :=?,@Company_ :=?,@User_Id_ :=?)",
			[Is_Date_, From_Date_, To_Date_, Course_, Company_, User_Id_],
			callback
		);
	},
	Search_Application_Outstanding_Report: function (
		From_Date_,
		To_Date_,
	
		callback
	) {
		return db.query(
			"CALL Search_Application_Outstanding_Report(@From_Date_ :=?,@To_Date_ :=?)",
			[ From_Date_, To_Date_,],
			callback
		);
	},
	Get_Dashboard_Count: async function (By_User_,From_Date_,To_Date_) {
		var Leads = [];
		try {
			Leads = await new storedProcedure("Get_Dashboard_Count", [
				By_User_,From_Date_,To_Date_,
			]).result();
			console.log(Leads);
		} catch (e) {}
		return { returnvalue: { Leads } };
	},



	
	Search_Registration_Report: async function (
		Fromdate_,
		Todate_,
		Search_By_,
		SearchbyName_,
		Status_Id_,
		By_User_,
		Is_Date_Check_,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount,
		RowCount2,
		Enquiry_For_Id_
	) {
		var Leads = [];
		try {
			if (
				SearchbyName_ === "0" ||
				SearchbyName_ === undefined ||
				SearchbyName_ === "undefined" ||
				SearchbyName_ === 0
			)
				SearchbyName_ = "";
			console.log(Search_By_, SearchbyName_);
			Leads = await new storedProcedure("Search_Registration_Report", [
				Fromdate_,
				Todate_,
				Search_By_,
				SearchbyName_,
				Status_Id_,
				By_User_,
				Is_Date_Check_,
				Page_Index1_,
				Page_Index2_,
				Login_User_Id_,
				RowCount,
				RowCount2,
				Enquiry_For_Id_,
			]).result();
			//console.log(Leads);
		} catch (e) {}
		return { returnvalue: { Leads } };
	},

	Search_Attendance_Student: function (
		Is_Date_,
		From_Date_,
		To_Date_,
	 
		Batch_,
		Faculty_,
		callback
	) {
		return db.query(
			"CALL Search_Attendance_Student(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?, @Batch_ :=?,@Faculty_ :=?)",
			[Is_Date_, From_Date_, To_Date_,  Batch_, Faculty_],
			callback
		);
	},







	Search_Employee_Attendance: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Employee_Attendance(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@User_Id_ :=?)",
			[Is_Date_, From_Date_, To_Date_, User_Id_],
			callback
		);
	},


	Search_Employee_Attendance_Report: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Employee_Attendance_Report(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@User_Id_ :=?)",
			[Is_Date_, From_Date_, To_Date_, User_Id_],
			callback
		);
	},

	Search_Employees_List: function (
		Is_Date_,
		From_Date_,
		To_Date_,User_Id_,Working_Status_,
		callback
	) {
		return db.query(
			"CALL Search_Employees_List(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@User_Id_ :=?,@Working_Status_ :=?)",
			[Is_Date_, From_Date_, To_Date_,User_Id_,Working_Status_],
			callback
		);
	},




	Get_Attendance: function (
		Attendance_Master_Id_,
	 
		Batch_,
		Faculty_,
		callback
	) {
		return db.query(
			"CALL Get_Attendance(@Attendance_Master_Id_ :=?,@Batch_ :=?,@Faculty_ :=?)",
			[Attendance_Master_Id_,   Batch_, Faculty_],
			callback
		);
	},


	Get_Employee_Attendance: function (
		Attendance_Master_Id_,
		User_Id_,
		callback
	) {
		return db.query(
			"CALL Get_Employee_Attendance(@Attendance_Master_Id_ :=?,@User_Id_ :=?)",
			[Attendance_Master_Id_,User_Id_],
			callback
		);
	},


	Search_Transaction_Student: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Course_,
		Faculty_,
		Employer_Details_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Transaction_Student(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Course_ :=?,@Faculty_ :=?,@Employer_Details_Id_ :=?)",
			[Is_Date_, From_Date_, To_Date_, Course_, Faculty_, Employer_Details_Id_],
			callback
		);
	},
	Get_Transaction: function (Transaction_Master_Id_, Course_, callback) {
		return db.query(
			"CALL Get_Transaction(@Transaction_Master_Id_ :=?,@Course_ :=?)",
			[Transaction_Master_Id_, Course_],
			callback
		);
	},
	Search_Interview_Student: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Course_,
		Faculty_,
		Employer_Details_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Interview_Student(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Course_ :=?,@Faculty_ :=?,@Employer_Details_Id_ :=?)",
			[Is_Date_, From_Date_, To_Date_, Course_, Faculty_, Employer_Details_Id_],
			callback
		);
	},
	Get_Interview: function (Interview_Master_Id_, Course_, callback) {
		return db.query(
			"CALL Get_Interview(@Interview_Master_Id_ :=?,@Course_ :=?)",
			[Interview_Master_Id_, Course_],
			callback
		);
	},
	Search_Placed_Student: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Course_,
		Faculty_,
		callback
	) {
		return db.query(
			"CALL Search_Placed_Student(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Course_ :=?,@Faculty_ :=?)",
			[Is_Date_, From_Date_, To_Date_, Course_, Faculty_],
			callback
		);
	},
	Get_Placed: function (Placed_Master_Id_, Course_, callback) {
		return db.query(
			"CALL Get_Placed(@Placed_Master_Id_ :=?,@Course_ :=?)",
			[Placed_Master_Id_, Course_],
			callback
		);
	},
	Load_Installment_Type: function (callback) {
		return db.query("CALL Load_Installment_Type()", [], callback);
	},
	Load_State: function (callback) {
		return db.query("CALL Load_State()", [], callback);
	},
	Load_Qualification: function (callback) {
		return db.query("CALL Load_Qualification()", [], callback);
	},
	Search_State_District_Typeahead: function (
		District_Name_,
		State_Id_,
		callback
	) {
		if (District_Name_ === undefined || District_Name_ === "undefined")
			District_Name_ = "";
		return db.query(
			"CALL Search_State_District_Typeahead(@District_Name_ :=?,@State_Id_ :=?)",
			[District_Name_, State_Id_],
			callback
		);
	},
	Load_Employer_Details: function (callback) {
		return db.query("CALL Load_Employer_Details()", [], callback);
	},
	Get_Lead_Load_Data: async function () {
		const Users = await new storedProcedure("Dropdown_Users", []).result();
		const Status = await new storedProcedure("Dropdown_Status", []).result();
		return { returnvalue: { Users, Status } };
	},
	FollowUp_Summary: async function (By_User_, Login_User_) {
		var Leads = [];

		try {
			Leads = await new storedProcedure("FollowUp_Summary", [
				By_User_,
				Login_User_,
			]).result();
		} catch (e) {}

		return {
			returnvalue: {
				Leads,
			},
		};
	},
	Pending_FollowUp: async function (By_User_, Login_User_) {
		var Leads = [];
		try {
			Leads = await new storedProcedure("Pending_FollowUp", [
				By_User_,
				Login_User_,
			]).result();
		} catch (e) {}

		return {
			returnvalue: {
				Leads,
			},
		};
	},
	Get_Lead_Load_Data_ByUser: function (Login_User, callback) {
		return db.query(
			"CALL Get_Lead_Load_Data_ByUser(@Login_User :=?)",
			[Login_User],
			callback
		);
	},
	Get_Course_Details_Student_Check: function (Student_Id_, callback) {
		return db.query(
			"CALL Get_Course_Details_Student_Check(@Student_Id_ :=?)",
			[Student_Id_],
			callback
		);
	},

	Search_Fees_Due_Report: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Course_,
		Batch_,
		SearchbyName_,
		User_Id_,
		callback
	) {
		if (SearchbyName_ === undefined || SearchbyName_ === "undefined")
			SearchbyName_ = "";
		return db.query(
			"CALL Search_Fees_Due_Report(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Course_ :=?,@Batch_ :=?,@SearchbyName_ :=?,@User_Id_ :=?)",
			[
				Is_Date_,
				From_Date_,
				To_Date_,
				Course_,
				Batch_,
				SearchbyName_,
				User_Id_,
			],
			callback
		);
	},


	Search_Batch_Report: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		Batch_,
		Faculty_,
		
		User_Id_,
		callback
	) {
		
		return db.query(
			"CALL Search_Batch_Report(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Batch_ :=?,@Faculty_ :=?,@User_Id_ :=?)",
			[
				Is_Date_,
				From_Date_,
				To_Date_,
				Batch_,
				Faculty_,
				
				User_Id_,
			],
			callback
		);
	},


	Load_Interview_Student: function (Transaction_Master_id_, callback) {
		return db.query(
			"CALL Load_Interview_Student(@Transaction_Master_id_ :=?)",
			[Transaction_Master_id_],
			callback
		);
	},
	Load_Placement_Student: function (Interview_Master_Id_, callback) {
		return db.query(
			"CALL Load_Placement_Student(@Interview_Master_Id_ :=?)",
			[Interview_Master_Id_],
			callback
		);
	},

	Get_Load_Dropdowns_Data: function (callback) {
		return db.query("CALL Get_Load_Dropdowns_Data()", [], callback);
	},

	Save_Student_Import: function (Student_Details, callback) {
		console.log(Student_Details);
		return db.query(
			"CALL Save_Student_Import(@Student_Import_Details_ :=?,@By_User_Id_ :=?,@Status_ :=?,@To_User_ :=?,@Enquiry_Source_ :=?,@Next_FollowUp_Date_ :=?,@Status_Name_ :=?,@Enquiry_Source_Name_ :=?,@To_User_Name_ :=?,@By_User_Name_ :=?,@Status_FollowUp_ :=?,@Remark_ :=?)",
			[
				JSON.stringify(Student_Details.Student_Import_Details),
				Student_Details.By_User_Id,
				Student_Details.Status,
				Student_Details.To_User,
				Student_Details.Enquiry_Source,
				Student_Details.Next_FollowUp_Date,
				Student_Details.Status_Name,
				Student_Details.Enquiry_Source_Name,
				Student_Details.To_User_Name,
				Student_Details.By_User_Name,
				Student_Details.Status_FollowUp,
				Student_Details.Remark,
			],
			callback
		);
	},






	Save_Level_Import: function (Student_Details, callback) {
		console.log(Student_Details);
		return db.query(
			"CALL Save_Level_Import(@Student_Import_Details_ :=?,@By_User_Id_ :=?,@Status_ :=?,@To_User_ :=?,@Enquiry_Source_ :=?,@Next_FollowUp_Date_ :=?,@Status_Name_ :=?,@Enquiry_Source_Name_ :=?,@To_User_Name_ :=?,@By_User_Name_ :=?,@Status_FollowUp_ :=?,@Remark_ :=?,@MasterCourse_Id_ :=?,@MasterCourse_Name_ :=?,@Course_Id_ :=?,@CourseName_ :=?,@Laptop_details_Id_ :=?,@Laptop_details_Name_ :=?,@Duration_ :=?,@Revision_Duration_ :=?,@Installment_Type_Id_ :=?,@Installment_Type_Name_ :=?,@Course_Details_ :=?,@Join_Date_ :=?,@Start_Date_ :=?,@End_Date_ :=?,@Reading_ :=?,@Speaking_ :=?,@Listening :=?,@Writing_ :=?,@Grammer_ :=?,@TotalMark_ :=?,@Markstatus_Id_ :=?,@Markstatus_Name_ :=?,@Course_Name_Details_ :=?,@Batch_Id_ :=?,@Batch_Name_ :=?,@Faculty_Id_ :=?,@Course_Type_Id :=?,@Course_Type_Name :=?,@End_Date_Check :=?)",
			[
				JSON.stringify(Student_Details.Student_Import_Details),
				Student_Details.By_User_Id,
				Student_Details.Status,
				Student_Details.To_User,
				Student_Details.Enquiry_Source,
				Student_Details.Next_FollowUp_Date,
				Student_Details.Status_Name,
				Student_Details.Enquiry_Source_Name,
				Student_Details.To_User_Name,
				Student_Details.By_User_Name,
				Student_Details.Status_FollowUp,
				Student_Details.Remark,

				Student_Details.MasterCourse_Id,
				Student_Details.MasterCourse_Name,
				Student_Details.Course_Id,
				Student_Details.Course_Name,
				Student_Details.Laptop_details_Id,
				Student_Details.Laptop_details_Name,
				
				Student_Details.Duration,
				Student_Details.Revision_Duration,
				Student_Details.Installment_Type_Id,
				Student_Details.Installment_Type_Name,
				Student_Details.Course_Details,
				Student_Details.Join_Date,
				Student_Details.Start_Date,
				Student_Details.End_Date,
				Student_Details.Reading,
				Student_Details.Speaking,
				Student_Details.Listening,
				Student_Details.Writing,
				Student_Details.Grammer,
				Student_Details.TotalMark,
				Student_Details.Markstatus_Id,
				Student_Details.Markstatus_Name,
				Student_Details.Course_Name_Details,
				Student_Details.Batch_Id,
				Student_Details.Batch_Name,
				Student_Details.Faculty_Id,
				Student_Details.Course_Type_Id,
				Student_Details.Course_Type_Name,
				Student_Details.End_Date_Check,

			],
			callback
		);
	},



















	Search_Student_Import: function (
		From_Date_,
		To_Date_,
		Is_Date_Check_,
		callback
	) {
		return db.query(
			"CALL Search_Student_Import(@From_Date_ :=?,@To_Date_ :=?,@Is_Date_Check_ :=?)",
			[From_Date_, To_Date_, Is_Date_Check_],
			callback
		);
	},

	Search_Company_Typeahead: function (Company_Name, callback) {
		if (Company_Name === undefined || Company_Name === "undefined")
			Company_Name = "";
		return db.query(
			"CALL Search_Company_Typeahead(@Company_Name :=?)",
			[Company_Name],
			callback
		);
	},


	Search_Book_Name_Typeahead: function (Book_Name, callback) {
		if (Book_Name === undefined || Book_Name === "undefined")
			Book_Name = "";
		return db.query(
			"CALL Search_Book_Name_Typeahead(@Book_Name :=?)",
			[Book_Name],
			callback
		);
	},

	Search_District_Typeahead: function (District_Name, callback) {
		if (District_Name === undefined || District_Name === "undefined")
			District_Name = "";
		return db.query(
			"CALL Search_District_Typeahead(@District_Name :=?)",
			[District_Name],
			callback
		);
	},

	Search_Transaction_Report_Tab: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		User_Id_,
		Student_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Transaction_Report_Tab(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@User_Id_ :=?,@Student_Id_ :=?)",
			[Is_Date_, From_Date_, To_Date_, User_Id_, Student_Id_],
			callback
		);
	},
	Search_Interview_Report_Tab: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		User_Id_,
		Student_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Interview_Report_Tab(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@User_Id_ :=?,@Student_Id_ :=?)",
			[Is_Date_, From_Date_, To_Date_, User_Id_, Student_Id_],
			callback
		);
	},
	Search_Placed_Report_Tab: function (
		Is_Date_,
		From_Date_,
		To_Date_,
		User_Id_,
		Student_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Placed_Report_Tab(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@User_Id_ :=?,@Student_Id_ :=?)",
			[Is_Date_, From_Date_, To_Date_, User_Id_, Student_Id_],
			callback
		);
	},

	Save_Student_Report_FollowUp: function (Student_Followup_, callback) {
		console.log(Student_Followup_);
		return db.query(
			"CALL Save_Student_Report_FollowUp(@Student_Id_ :=?,@Status_ :=?,@To_User_Id_ :=?,@Remark_ :=?,@Next_FollowUp_Date_ :=?,@By_User_Id_ :=?,@StatusName_ :=?,@ToUserName_ :=?,@ByUserName_ :=?,@Status_FollowUp_ :=?,@Remark_Id_ :=?)",
			[
				Student_Followup_.Student_Id,
				Student_Followup_.Status,
				Student_Followup_.To_User_Id,
				Student_Followup_.Remark,
				Student_Followup_.Next_FollowUp_Date,
				Student_Followup_.By_User_Id,
				Student_Followup_.Status_Name,
				Student_Followup_.To_User_Name,
				Student_Followup_.By_User_Name,
				Student_Followup_.FollowUp,
				Student_Followup_.Remark_Id,
			],
			callback
		);
	},

	Load_Laptopdetails:function(callback)
	{ 
	  return db.query("CALL Load_Laptopdetails()", [],callback);
	},
	Search_Course_Report: function (
		Is_Date_,
		From_Date,
		To_Date,
		User_Id_,
		Login_User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Course_Report(@Is_Date_ :=?,@From_Date :=?,@To_Date :=?,@User_Id_ :=?,@Login_User_Id_:=?)",
			[Is_Date_, From_Date, To_Date, User_Id_, Login_User_Id_],
			callback
		);
	},
	Save_Hostel_Fees: async function (Hostel_Fees_Master_) {
		return new Promise(async (rs, rej) => {
			const pool = db.promise();
			let result1;
			var connection = await pool.getConnection();
			try {
				console.log(Hostel_Fees_Master_)
				const result1 = await new storedProcedure(
					"Save_Hostel_Fees",
					[
						Hostel_Fees_Master_.Hostel_Fees_Master_Id,
						Hostel_Fees_Master_.Student_Id,
						Hostel_Fees_Master_.User_Id,
						Hostel_Fees_Master_.From_Date,
						Hostel_Fees_Master_.To_Date,
						Hostel_Fees_Master_.Duration,
						Hostel_Fees_Master_.Per_Month_Amount,
						Hostel_Fees_Master_.Total_Amount,
						Hostel_Fees_Master_.Fees_Type_Id,
						Hostel_Fees_Master_.Fees_Type_Name,
						Hostel_Fees_Master_.Application_Fees,
						Hostel_Fees_Master_.Food_Fees,
						Hostel_Fees_Master_.Security_Deposit,
						Hostel_Fees_Master_.Checkout_Date_Check,
						Hostel_Fees_Master_.Checkout_Date,
						Hostel_Fees_Master_.Hostel_Fees_Details,
					],
					connection
				).result();

				await connection.commit();
				connection.release();
				rs(result1);
			} catch (err) {
				await connection.rollback();
				rej(err);
				var result2 = [{ Student_Id_: 0 }];
				rs(result2);
			} finally {
				connection.release();
			}
		});
	},


	Get_Totalportioncovered: function (Course_Id_, Batch_Id_,Login_User_Id_, callback) {
		return db.query(
			"CALL Get_Totalportioncovered(@Course_Id_ :=?,@Batch_Id_ :=?,@Login_User_Id_ :=?)",
			[Course_Id_, Batch_Id_,Login_User_Id_],
			callback
		);
	},

	Load_Exam: function (callback) {
		return db.query("CALL Load_Exam()", [], callback);
	},

	Load_ExamType: function (callback) {
		return db.query("CALL Load_ExamType()", [], callback);
	},
	
	Save_ExamResult:function(ExamResult_,callback)
	{ 
		console.log(ExamResult_)
   return db.query("CALL Save_ExamResult("+
   "@Exam_Result_Id_ :=?,"+
   "@Student_Id_ :=?,"+
   "@Course_Id_ :=?,"+
   "@Exam_Id_ :=?,"+
   "@Exam_Type_Id_ :=?,"+
   "@Mark_ :=?,"+
   "@Maxmium_Mark_ :=?,"+
   "@User_Id_ :=?,"+
   "@Student_Course_Id_ :=?,"+
   "@Exam_Date_ :=?,"+
   "@Exam_Status_Id_ :=?"+")"
	,[ExamResult_.Exam_Result_Id,
	  ExamResult_.Student_Id,
	  ExamResult_.Course_Id,
	  ExamResult_.Exam_Id,
	  ExamResult_.Exam_Type_Id,
	  ExamResult_.Mark,
	  ExamResult_.Maxmium_Mark,
	  ExamResult_.User_Id,
	  ExamResult_.Student_Course_Id,
	  ExamResult_.Exam_Date,
	  ExamResult_.Exam_Status_Id,
   ],callback);
	}
	,


	Get_ExamResult:function(Student_Id_,Student_Course_Id_,callback)
	{ 
   return db.query("CALL Get_ExamResult(@Student_Id_ :=?,@Student_Course_Id_ :=?)",[Student_Id_,Student_Course_Id_],callback);
	}
	,


	Get_Hosteldetails:function(Student_Id_,callback)
	{ 
   return db.query("CALL Get_Hosteldetails(@Student_Id_ :=?)",[Student_Id_],callback);
	}
	,

	Get_Hostelfeesdetails:function(Hostel_Fees_Master_Id_,callback)
	{ 
   return db.query("CALL Get_Hostelfeesdetails(@Hostel_Fees_Master_Id_ :=?)",[Hostel_Fees_Master_Id_],callback);
	}
	,

	Delete_ExamResult:function(Exam_Result_Id_,callback)
	{ 
   return db.query("CALL Delete_ExamResult(@Exam_Result_Id_ :=?)",[Exam_Result_Id_],callback);
	}
	,


	Delete_Hosteldetails:function(Hostel_Fees_Master_Id_,callback)
	{ 
   return db.query("CALL Delete_Hosteldetails(@Hostel_Fees_Master_Id_ :=?)",[Hostel_Fees_Master_Id_],callback);
	}
	,


	Search_Course_Typeahead_Formastercourse: function (Course_Name,MasterCourse_Id, callback) {
		if (Course_Name === undefined || Course_Name === "undefined")
			Course_Name = "";
			console.log(Course_Name,MasterCourse_Id)
			return db.query(
			"CALL Search_Course_Typeahead_Formastercourse(@Course_Name :=?,@MasterCourse_Id:=?)",
			[Course_Name,MasterCourse_Id],
			callback
		);
	},


	Search_Course_Typeahead_Forcandidatelist: function (Course_Name, callback) {
		if (Course_Name === undefined || Course_Name === "undefined")
			Course_Name = "";
			console.log(Course_Name)
			return db.query(
			"CALL Search_Course_Typeahead_Forcandidatelist(@Course_Name :=?)",
			[Course_Name],
			callback
		);
	},


	
	Search_CandidateList: function (
		       Is_Date_,
				From_Date_,
				To_Date_,
				Login_User_,
				User_Id_,
				Course_Id_,
				Batch_Id_,
				ReadingSearch_,
				SpeakingSearch_,
				ListeningSearch_,
				WritingSearch_,
				GrammerSearch_,
				Markstatus_Id_,
				Markvalue_,
				Markfrom_,
				Markto_,
				callback
	) {
		if (ReadingSearch_ === undefined || ReadingSearch_ === "undefined"  || ReadingSearch_ === "null")
		ReadingSearch_ = 0;
		if (SpeakingSearch_ === undefined || SpeakingSearch_ === "undefined"  || SpeakingSearch_ === "null")
		SpeakingSearch_ = 0;
		if (ListeningSearch_ === undefined || ListeningSearch_ === "undefined"  || ListeningSearch_ === "null")
		ListeningSearch_ = 0;
		if (WritingSearch_ === undefined || WritingSearch_ === "undefined"  || WritingSearch_ === "null")
		WritingSearch_ = 0;
		if (GrammerSearch_ === undefined || GrammerSearch_ === "undefined"  || GrammerSearch_ === "null")
		GrammerSearch_ = 0;
		if (Markfrom_ === undefined || Markfrom_ === "undefined"  || Markfrom_ === "null")
		Markfrom_ = 0;
		if (Markto_ === undefined || Markto_ === "undefined"  || Markto_ === "null")
		Markto_ = 0;
		return db.query(
			"CALL Search_CandidateList(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Login_User_:=?,@User_Id_:=?,@Course_Id_:=?,@Batch_Id_ :=?,@ReadingSearch_ :=?,@SpeakingSearch_ :=?,@ListeningSearch_ :=?,@WritingSearch_ :=?,@GrammerSearch_ :=?,@Markstatus_Id_ :=?,@Markvalue_ :=?,@Markfrom_ :=?,@Markto_ :=?)",
			[
				Is_Date_,
				From_Date_,
				To_Date_,
				Login_User_,
				User_Id_,
				Course_Id_,
				Batch_Id_,
				ReadingSearch_,
				SpeakingSearch_,
				ListeningSearch_,
				WritingSearch_,
				GrammerSearch_,
				Markstatus_Id_,
				Markvalue_,
				Markfrom_,
				Markto_
			],
			callback
		);
	},



	Save_Student_Course_Candidatelist: async function (Student_Course_) {
		return new Promise(async (rs, rej) => {
			const pool = db.promise();
			let result1;
			var connection = await pool.getConnection();
			console.log(Student_Course_)
			try {
				const result1 = await new storedProcedure(
					"Save_Student_Course_Candidatelist",
					[
						Student_Course_.Student_Course_Id,
						Student_Course_.Student_Id,
						Student_Course_.Entry_Date,
						Student_Course_.Course_Name_Details,
						Student_Course_.Course_Id,
						Student_Course_.Course_Name,
						Student_Course_.Start_Date,
						Student_Course_.End_Date,
						Student_Course_.Join_Date,
						Student_Course_.By_User_Id,
						Student_Course_.Status,
						Student_Course_.Course_Type_Id,
						Student_Course_.Course_Type_Name,
						Student_Course_.Agent_Amount,
						Student_Course_.Total_Fees,
						Student_Course_.Batch_Id,
						Student_Course_.Batch_Name,
						Student_Course_.Faculty_Id,
						Student_Course_.Installment_Type_Id,
						Student_Course_.No_Of_Installment,
						Student_Course_.Duration,
						Student_Course_.Laptop_details_Id,
						Student_Course_.Laptop_details_Name,
						Student_Course_.Reading,
						Student_Course_.Speaking,
						Student_Course_.Listening,
						Student_Course_.Writing,
						Student_Course_.Grammer,
						Student_Course_.TotalMark,
						Student_Course_.Markstatus_Id,
						Student_Course_.Markstatus_Name,
						Student_Course_.Revision_Duration,
						Student_Course_.Student_Course_Subject,
						Student_Course_.Student_Fees_Installment_Details,
						Student_Course_.Student_Selected_Details,
						Student_Course_.End_Date_Check,
					],
					connection
				).result();

				await connection.commit();
				connection.release();
				rs(result1);
			} catch (err) {
				console.log(err)
				await connection.rollback();
				rej(err);
				var result2 = [{ Student_Id_: 0 }];
				rs(result2);
			} finally {
				connection.release();
			}
		});
	},



	Search_StudentMark_Report: function (
		Is_Date_,
		From_Date,
		To_Date,
		User_Id_,
		Login_User_Id_,
		Batch_Id_,
		Course_Id_,
		Markstatus_Id_,
		Markvalue_,
		Markfrom_,
		Markto_,Exam_Id_,Exam_Type_Id_,
		callback
	) {
		return db.query(
			"CALL Search_StudentMark_Report(@Is_Date_ :=?,@From_Date :=?,@To_Date :=?,@User_Id_ :=?,@Login_User_Id_:=?,@Batch_Id_ :=?,@Course_Id_ :=?,@Markstatus_Id_ :=?,@Markvalue_ :=?,@Markfrom_ :=?,@Markto_ :=?,@Exam_Id_ :=?,@Exam_Type_Id_ :=?)",
			[Is_Date_, From_Date, To_Date, User_Id_, Login_User_Id_,Batch_Id_,Course_Id_,Markstatus_Id_,Markvalue_,Markfrom_,Markto_,Exam_Id_,Exam_Type_Id_],
			callback
		);
	},
	Save_Student_Process: async function (Student_Process_) {
		return new Promise(async (rs, rej) => {
			const pool = db.promise();
			let result1;
			var connection = await pool.getConnection();
			try {
				const result1 = await new storedProcedure(
					"Save_Student_Process",
					[
						Student_Process_.Student_Process_Id,
						Student_Process_.Student_Id,
						Student_Process_.Process_Type_Id,
						Student_Process_.Process_Date, 
						Student_Process_.Remark,
					],
					connection
				).result();
				await connection.commit();
				connection.release();
				rs(result1);
			} catch (err) {
				await connection.rollback();
				rej(err);
				var result2 = [{ Mark_List_Master_Id_: 0 }];
				rs(result2);
			} finally {
				connection.release();
			}
		});
	},
	Save_Student_Remark: async function (Student_Remark_) {
		return new Promise(async (rs, rej) => {
			const pool = db.promise();
			let result1;
			var connection = await pool.getConnection();
			try {
				const result1 = await new storedProcedure(
					"Save_Student_Remark",
					[
						Student_Remark_.Student_Remark_Id,
						Student_Remark_.Student_Id,
						Student_Remark_.Remark_Details_Id,
						Student_Remark_.Eneterd_By,
						Student_Remark_.Eneterd_By_Name,
						Student_Remark_.Remark,
					],
					connection
				).result();
				await connection.commit();
				connection.release();
				rs(result1);
			} catch (err) {
				await connection.rollback();
				rej(err);
				var result2 = [{ Mark_List_Master_Id_: 0 }];
				rs(result2);
			} finally {
				connection.release();
			}
		});
	},
	Get_Student_Remark_History: function (Student_Id_, callback) {
		return db.query(
			"CALL Get_Student_Remark_History(@Student_Id_ :=?)",
			[Student_Id_],
			callback
		);
	},
	Get_Student_Process_History: function (Student_Id_, callback) {
		return db.query(
			"CALL Get_Student_Process_History(@Student_Id_ :=?)",
			[Student_Id_],
			callback
		);
	},
Delete_Student_Remark:function(Student_Remark_Id_,callback)
{ 
  return db.query("CALL Delete_Student_Remark(@Student_Remark_Id_ :=?)", [Student_Remark_Id_],callback);
},
Delete_Student_Process:function(Student_Process_Id_,callback)
{ 
  return db.query("CALL Delete_Student_Process(@Student_Process_Id_ :=?)", [Student_Process_Id_],callback);
},
 

// Search_ExamResult_Report: async function (Student_Id_,Exam_Type_Id_) {
// 	var Exam_Result_Data = [];
// 	try {
// 		Exam_Result_Data = await new storedProcedure(
// 			"Search_ExamResult_Report",
// 			[Student_Id_,Exam_Type_Id_]
// 		).result();
// 	} catch (e) {}

// 	return {
// 		returnvalue: {
// 			Exam_Result_Data,
// 		},
// 	};
// },


Search_ExamResult_Report:function(Student_Id_,Exam_Type_Id_,Student_Course_Id_,Course_Id_,callback)
{ 

return db.query("CALL Search_ExamResult_Report(@Student_Id_ :=?,@Exam_Type_Id_ :=?,@Student_Course_Id_ :=?,@Course_Id_ :=?)",[Student_Id_,Exam_Type_Id_,Student_Course_Id_,Course_Id_],callback);
},


Search_ExamResult_GraphReport:function(Student_Id_,Exam_Type_Id_,callback)
{ 

return db.query("CALL Search_ExamResult_GraphReport(@Student_Id_ :=?,@Exam_Type_Id_ :=?)",[Student_Id_,Exam_Type_Id_],callback);
},

Get_Marklistreport_Studentdetails:function(Student_Id_,Student_Course_Id_,Course_Id_,callback)
 {
    db.query("CALL Get_Marklistreport_Studentdetails(@Student_Id_ :=?,@Student_Course_Id_ :=?,@Course_Id_ :=?)",[Student_Id_,Student_Course_Id_,Course_Id_],callback);
 },


 Register_Whatsapp: async function (Register_Whatsapp_,) {

	try {
		console.log(Register_Whatsapp_)
		Register_Whatsapp_.to=""+Register_Whatsapp_.to+"";
		var response;
		for(var i=0;i<Register_Whatsapp_.length;i++)
		{

		
		response = await axios.post("https://api.telinfy.net/gaca/whatsapp/templates/message", Register_Whatsapp_[i], { headers: {
			'Content-Type': 'application/json',
			'Api-Key': '0ea03cd8-169f-4f50-8254-94f50dbcfdaa'
		} });
		}
		// console.log(response)
		return response.data;
		
	}
	
	 catch (error) {
		// console.log(response)
		// console.log(error)
		throw error;
	}
},


Save_Student_Whatsapp: async function (Save_Whatsapp_) {

	try {
		console.log(Save_Whatsapp_.header)
		console.log(Save_Whatsapp_.to)
		var response;
		var data;
		// Save_Whatsapp_.to=""+Save_Whatsapp_.to+"";
		for(var i=0;i<Save_Whatsapp_.length;i++)
		{
			// console.log(body)


			data = {
				"to": ""+Save_Whatsapp_[i].to+"",
				"type": "template",
				"templateName": "api_enquiry_arjun_19thjan2023",
				"language": "en",
				"header": null,
				"body":{
					"parameters": [
						{
							"type": "text",
							"text": Save_Whatsapp_[i].student
						},
						{
							"type": "text",
							"text": Save_Whatsapp_[i].date
						}
					]
				},
				"button": null
			};
			
			response = await axios.post("https://api.telinfy.net/gaca/whatsapp/templates/message", data, { headers: {
				'Content-Type': 'application/json',
				'Api-Key': '0ea03cd8-169f-4f50-8254-94f50dbcfdaa'
			} });

		}
		// console.log(body)
		console.log(response)
		return response.data;
		
	}
	
	 catch (error) {
		// console.log(response)
		console.log(error)
		throw error;
	}
}

,


Update_EndDate:function(Student_Course_,callback)
{ 
console.log(Student_Course_)
return db.query("CALL Update_EndDate("+
"@Student_Course_Id_ :=?,"+
"@Batch_Id_ :=?,"+
"@End_Date_Check_ :=?,"+
"@End_Date_ :=?"+")"
,[Student_Course_.Course_Id,
	Student_Course_.Batch_Id,
	Student_Course_.End_Date_Check,
	Student_Course_.End_Date
],callback);
}
,


Save_Exam:function(Exam_,callback)
 { 
return db.query("CALL Save_Exam("+
"@Exam_Id_ :=?,"+
"@Exam_Name_ :=?"+")"
 ,[Exam_.Exam_Id,
	Exam_.Exam_Name
],callback);
 }
 ,
 Search_Exam:function(Exam_Name_,callback)
 { 
 if (Exam_Name_===undefined || Exam_Name_==="undefined" )
 Exam_Name_='';
return db.query("CALL Search_Exam(@Exam_Name_ :=?)",[Exam_Name_],callback);
 }
 ,
 Delete_Exam:function(Exam_Id_,callback)
 { 
   return db.query("CALL Delete_Exam(@Exam_Id_ :=?)",[Exam_Id_],callback);
 },
 Get_AttendanceofStudents:function(Student_Id_,Course_Id_,callback)
{ 
    return db.query("CALL Get_AttendanceofStudents(@Student_Id_ :=?,@Course_Id_ :=?)",[Student_Id_,Course_Id_],callback);
},
Search_ExamResult_Interanal: function ( Batch_, Faculty_, callback) {
	return db.query(
		"CALL Search_ExamResult_Interanal( @Batch_ :=?,@Faculty_ :=?)",
		[ Batch_, Faculty_],
		callback
	);
},

Search_ExamResult_Final: function (Batch_, Faculty_, callback) {
	return db.query(
		"CALL Search_ExamResult_Final(@Batch_ :=?,@Faculty_ :=?)",
		[ Batch_, Faculty_],
		callback
	);
},

Save_Exam_Result_Internal: async function (Exam_Result_) {
	console.log(Exam_Result_);
	return new Promise(async (rs, rej) => {
		const pool = db.promise();
		let result1;
		var connection = await pool.getConnection();
	

		try {
			const result1 = await new storedProcedure(
				"Save_Exam_Result_Internal",
				[
					Exam_Result_.Exam_Result_Id,
					// Exam_Result_.Course_Id,
					Exam_Result_.Exam_Id,
					Exam_Result_.Exam_Type_Id,
					Exam_Result_.Mark,
					Exam_Result_.Maxmium_Mark,
					Exam_Result_.User_Id,
					// Exam_Result_.Student_Course_Id,
					Exam_Result_.Batch_Id,
					// Exam_Result_.Check_Box,
					
					Exam_Result_.Exam_ResultDetails,
					Exam_Result_.Exam_Result_Details_Value,
					
				],
				connection
			).result();
			// await connection.commit();

			connection.release();
			rs(result1);
		} catch (err) {
			// await connection.rollback();
			rej(err);
		}
	});
},


Search_Examdetails_Internal: function (
	Is_Date_,
	From_Date_,
	To_Date_,
 
	Batch_,
	Faculty_,
	callback
) {
	return db.query(
		"CALL Search_Examdetails_Internal(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?,@Batch_ :=?,@Faculty_ :=?)",
		[Is_Date_, From_Date_, To_Date_,   Batch_, Faculty_],
		callback
	);
},


Get_ExamresultdetailsInternal: function (
	Exam_Result_Id_,
	 
	Batch_,
	Faculty_,
	callback
) {
	return db.query(
		"CALL Get_ExamresultdetailsInternal(@Exam_Result_Id_ :=?, @Batch_ :=?,@Faculty_ :=?)",
		[Exam_Result_Id_,  Batch_, Faculty_],
		callback
	);
},

Delete_ExamResultInternal:function(Exam_Result_Id_,callback)
{ 
return db.query("CALL Delete_ExamResultInternal(@Exam_Result_Id_ :=?)",[Exam_Result_Id_],callback);
}
,
Save_Exam_Result_Final: async function (Final_Exam_Master_) {
	console.log(Final_Exam_Master_);
	return new Promise(async (rs, rej) => {
		const pool = db.promise();
		let result1;
		var connection = await pool.getConnection();
	

		try {
			const result1 = await new storedProcedure(
				"Save_Exam_Result_Final",
				[
					Final_Exam_Master_.Final_Exam_Master_Id,
					// Final_Exam_Master_.Course_Id,
					Final_Exam_Master_.User_Id,
					Final_Exam_Master_.Batch_Id,
					
			
					Final_Exam_Master_.Final_Exam_Details,
					Final_Exam_Master_.Final_Exam_Details_Value,
					
				],
				connection
			).result();
			// await connection.commit();

			connection.release();
			rs(result1);
		} catch (err) {
			// await connection.rollback();
			rej(err);
		}
	});
},

Search_Examdetails_Final: function (
	Is_Date_,
	From_Date_,
	To_Date_,
	// Course_,
	Batch_,
	Faculty_,
	callback
) {
	return db.query(
		"CALL Search_Examdetails_Final(@Is_Date_ :=?,@From_Date_ :=?,@To_Date_ :=?, @Batch_ :=?,@Faculty_ :=?)",
		[Is_Date_, From_Date_, To_Date_,   Batch_, Faculty_],
		callback
	);
},



Get_ExamresultdetailsFinal: function (
	Final_Exam_Master_Id_,
	// Course_,
	Batch_,
	Faculty_,
	callback
) {
	return db.query(
		"CALL Get_ExamresultdetailsFinal(@Final_Exam_Master_Id_ :=?, @Batch_ :=?,@Faculty_ :=?)",
		// @Course_ :=?,
		[Final_Exam_Master_Id_,  Batch_, Faculty_],
		// Course_,
		callback
	);
},
Delete_ExamResultFinal:function(Final_Exam_Master_Id_,callback)
{ 
return db.query("CALL Delete_ExamResultFinal(@Final_Exam_Master_Id_ :=?)",[Final_Exam_Master_Id_],callback);
}
,

Search_Country_Typeahead: function (Country_Name, callback) {
	if (Country_Name === undefined || Country_Name === "undefined") Country_Name = "";
	return db.query(
		"CALL Search_Country_Typeahead(@Country_Name :=?)",
		[Country_Name],
		callback
	);
},


Search_Application_Course_Typeahead: function (Application_Course_Name, callback) {
	if (Application_Course_Name === undefined || Application_Course_Name === "undefined") Application_Course_Name = "";
	return db.query(
		"CALL Search_Application_Course_Typeahead(@Application_Course_Name :=?)",
		[Application_Course_Name],
		callback
	);
},


Search_Application_University_Typeahead: function (Application_University_Name, callback) {
	if (Application_University_Name === undefined || Application_University_Name === "undefined") Application_University_Name = "";
	return db.query(
		"CALL Search_Application_University_Typeahead(@Application_University_Name :=?)",
		[Application_University_Name],
		callback
	);

},

Save_Application:function(ApplicationDetails_,callback)
    { 		
    console.log(ApplicationDetails_)
    return db.query("CALL Save_Application("+"@Application_Details_Id_ :=?,"+"@Student_Id_ :=?,"+"@Country_Id_ :=?,"+"@Country_Name_ :=?,"
	+"@University_Id_ :=?,"+"@University_Name_ :=?,"+"@Course_Id_ :=?,"+"@Course_Name_ :=?,"+"@intake_Id_ :=?,"+"@intake_Name_ :=?,"
	+"@Intake_Year_Id_ :=?,"+"@Intake_Year_Name_ :=?,"+"@Remark_ :=?,"+"@Fees_ :=?,"+"@Course_Link_ :=?,"+"@Duration_Id_ :=?,"+"@Preference_ :=?,"
	+"@User_Id_ :=?,"+"@Listening_ :=?,"+"@Reading_ :=?,"+"@Writting_ :=?,"+"@Speaking_ :=?,"+"@German_Course_Id_ :=?,"+"@German_Course_Name_ :=?,"
	+"@Passed_ :=?,"+"@Failed_ :=?,"+"@OverAll_:=?,"+"@Is_Agent_:=?,"+"@Agent_Amount_:=?,"+"@Associate_Amount_:=?,"+"@Is_Associate_:=?)",[ApplicationDetails_.Application_Details_Id,ApplicationDetails_.Student_Id,
		ApplicationDetails_.Country_Id,ApplicationDetails_.Country_Name,ApplicationDetails_.University_Id,ApplicationDetails_.University_Name,
        ApplicationDetails_.Course_Id,ApplicationDetails_.Course_Name,ApplicationDetails_.intake_Id,ApplicationDetails_.intake_Name,
		ApplicationDetails_.Intake_Year_Id,ApplicationDetails_.Intake_Year_Name,ApplicationDetails_.Remark,ApplicationDetails_.Fees,
		ApplicationDetails_.Course_Link,ApplicationDetails_.Duration_Id,ApplicationDetails_.Preference,ApplicationDetails_.User_Id,
		ApplicationDetails_.IELTS_Listening,ApplicationDetails_.IELTS_Reading,ApplicationDetails_.IELTS_Writting,ApplicationDetails_.IELTS_Speaking,
		ApplicationDetails_.German_Course_Id,ApplicationDetails_.German_Course_Name,ApplicationDetails_.Passed,ApplicationDetails_.Failed,
		ApplicationDetails_.IELTS_Overall,
		ApplicationDetails_.Is_Agent,ApplicationDetails_.Agent_Amount,ApplicationDetails_.Associate_Amount,ApplicationDetails_.Is_Associate 
	],callback);
    },

	Save_FeesReceipt:function(Fees_Receipt_,callback)
    { 
        console.log(Fees_Receipt_)
    return db.query("CALL Save_FeesReceipt("+"@Fees_Receipt_Application_Id_ :=?,"+"@Student_Id_ :=?,"+"@Entry_date_ :=?,"+"@User_Id_ :=?,"+"@Description_ :=?,"+"@Fees_Id_ :=?,"+"@Amount_ :=?,"+"@Voucher_No_ :=?,"+"@Currency_ :=?,"+"@To_Account_Id_ :=?,"+"@To_Account_Name_ :=?,"+"@Application_details_Id_ :=?,"+"@Course_Name_ :=?,"+"@Course_Id_ :=?,"+"@Fees_Receipt_Status_ :=?,"+"@Comment_ :=?,"+"@Currency_Id_ :=?)"

    ,[Fees_Receipt_.Fees_Receipt_Application_Id,Fees_Receipt_.Student_Id,Fees_Receipt_.Entry_date,
        Fees_Receipt_.User_Id,Fees_Receipt_.Description,Fees_Receipt_.Fees_Id,
        Fees_Receipt_.Amount,Fees_Receipt_.Voucher_No,Fees_Receipt_.Currency,
        Fees_Receipt_.To_Account_Id,Fees_Receipt_.To_Account_Name,Fees_Receipt_.Application_details_Id,Fees_Receipt_.Course_Name,Fees_Receipt_.Course_Id,
		Fees_Receipt_.Fees_Receipt_Status,Fees_Receipt_.Comment,
        Fees_Receipt_.Currency_Id],callback);
    },

 
	Get_ApplicationDetails: function (Student_Id_, callback) {
		return db.query(
			"CALL Get_ApplicationDetails(@Student_Id_ :=?)",
			[Student_Id_],
			callback
		);
	},

	Get_Fees_Receipt_Application: function (Student_Id_, callback) {
		return db.query(
			"CALL Get_Fees_Receipt_Application(@Student_Id_ :=?)",
			[Student_Id_],
			callback
		);
	},

	Delete_Receipt: function (Fees_Receipt_Id,Application_details_Id, callback) {
		return db.query(
			"CALL Delete_Receipt(@Fees_Receipt_Id :=?,@Application_details_Id :=?)",
			[Fees_Receipt_Id,Application_details_Id],
			callback
		);
	},


	Search_Courses_Fees_Typeahead:function(Course_Name,Student_Id,callback)
{ 
   if (Course_Name===undefined || Course_Name==="undefined" )
   Course_Name='';
   return db.query("CALL Search_Courses_Fees_Typeahead(@Course_Name :=?,@Student_Id :=?)",[Course_Name,Student_Id],callback);
}
,


Get_ApplicationDetails_History: function (Student_Id_, callback) {
	return db.query(
		"CALL Get_ApplicationDetails_History(@Student_Id_ :=?)",
		[Student_Id_],
		callback
	);
},
Get_ApplicationDetailswise_History: function (
	Application_details_Id_,Feesdetails_Id_,
	callback
) {
	return db.query(
		"CALL Get_ApplicationDetailswise_History(@Application_details_Id_ :=?,@Feesdetails_Id_ :=?)",
		[Application_details_Id_,Feesdetails_Id_],
		callback
	);
},


Change_Application_Status: function (
	Application_details_Id_,Feesdetails_Id_,status_id,remark,
	callback
) {
	return db.query(
		"CALL Change_Application_Status(@Application_details_Id_ :=?,@Feesdetails_Id_ :=?,@status_id :=?,@remark :=?)",
		[Application_details_Id_,Feesdetails_Id_,status_id,remark],
		callback
	);
},


Delete_Application_Details: function (Application_details_Id_, callback) {
	return db.query(
		"CALL Delete_Application_Details(@Application_details_Id_ :=?)",
		[Application_details_Id_],
		callback
	);
},
Search_ApplicationDetails: function (Application_details_Id_, callback) {
	if (
		Application_details_Id_ === "undefined" ||
		Application_details_Id_ === "" ||
		Application_details_Id_ === undefined
	)
		Application_details_Id_ = 0;
	return db.query(
		"CALL Search_ApplicationDetails(@Application_details_Id_ :=?)",
		[Application_details_Id_],
		callback
	);
},

Delete_Application_History: function (
	Application_details_history_Id_,
	callback
) {
	return db.query(
		"CALL Delete_Application_History(@Application_details_history_Id_ :=?)",
		[Application_details_history_Id_],
		callback
	);
},


Search_Application_Report: async function (
	Fromdate_,
	Todate_,
	By_User_,
	Is_Date_Check_,
	Login_User_Id_,
	Application_status_Id_,
	Intake_Id_,
	Intake_Year_Id_,
	Country_Id_,
	University_Id_,
) {
	var Leads = [];
	try {
		//  console.log(Fromdate_, Todate_, Branch_, By_User_, Is_Date_Check_, Login_User_Id_,Status_Value_)
		Leads = await new storedProcedure("Search_Application_Report", [
			Fromdate_,
			Todate_,
			By_User_,
			Is_Date_Check_,
			Login_User_Id_,
			Application_status_Id_,
			Intake_Id_,
			Intake_Year_Id_,
			Country_Id_,
			University_Id_,
		]).result();
	} catch (e) {
		;
	}

	return {
		returnvalue: { Leads },
	};
},

Search_Fees_Receipt_Report: async function (
	Fromdate_,
	Todate_,
	To_Account_,
	By_User_,
	Is_Date_Check_,
	Page_Index1_,
	Page_Index2_,
	Login_User_Id_,
	RowCount_,
	RowCount2_,
	Fees_id,
) {

	console.log(Fromdate_,
	Todate_,
	To_Account_,
	By_User_,
	Is_Date_Check_,
	Page_Index1_,
	Page_Index2_,
	Login_User_Id_,
	RowCount_,
	RowCount2_,
	Fees_id,)
	var Leads = [];
	try {

		console.log(Leads)
	Leads = await new storedProcedure("Search_Fees_Receipt_Report", [
		Fromdate_,
		Todate_,
		To_Account_,
		By_User_,
		Is_Date_Check_,
		Page_Index1_,
		Page_Index2_,
		Login_User_Id_,
		RowCount_,
		RowCount2_,
		Fees_id,
		]).result();
	} catch (e) {console.log(e)}

	return {
		returnvalue: {
			Leads,
		},
	};
},







Search_Registration_Fees_Report: async function (
	Fromdate_,
	Todate_,
	Search_Name,
	By_User_,
	Is_Date_Check_,
	Login_User_Id_,
	
	
) {

	// if (
	// 	Search_Name === "undefined" ||
	// 	Search_Name === "" ||
	// 	Search_Name === undefined
	// )
	// Search_Name='';

	var Leads = [];
	try {

		console.log(Leads)
	Leads = await new storedProcedure("Search_Registration_Fees_Report", [
		Fromdate_,
		Todate_,
		Search_Name,
		By_User_,
		Is_Date_Check_,
		Login_User_Id_,
		
	
		]).result();
	} catch (e) {console.log(e)}

	return {
		returnvalue: {
			Leads,
		},
	};
},

Save_Checklist:function(Checklist_,callback)
{ 
    console.log(Checklist_)
    return db.query("CALL Save_Checklist("+"@Checklist_Id_ :=?,"+"@Checklist_Name_ :=?,"+"@Country_Id_ :=?,"+"@Checklist_Type_ :=?,"+"@Checklist_Type_Name_ :=?"+")"
    ,[Checklist_.Checklist_Id,Checklist_.Checklist_Name,Checklist_.Country_Id,Checklist_.Checklist_Type,Checklist_.Checklist_Type_Name],callback);
},



Get_Checklist_Country:function(Country_Id_,callback)
{ 
return db.query("CALL Get_Checklist_Country(@Country_Id_ :=?)",[Country_Id_],callback);
},


Delete_Checklist:function(Checklist_Id_,callback)
{ 
//   console.log(Checklist_Id_)
return db.query("CALL Delete_Checklist(@Checklist_Id_ :=?)",[Checklist_Id_],callback);
},


Get_Menu_Status:function(Menu_Id_,User_Id_,callback)
{ 
  return db.query("CALL Get_Menu_Status(@Menu_Id_ :=?,@User_Id_ :=?)", [Menu_Id_,User_Id_],callback);
},


Save_Employee_Attendance: async function (Employee_Attendance_Master_) {
	console.log(Employee_Attendance_Master_);
	return new Promise(async (rs, rej) => {
		const pool = db.promise();
		let result1;
		var connection = await pool.getConnection();
		

		try {
			const result1 = await new storedProcedure(
				"Save_Employee_Attendance",
				[
					Employee_Attendance_Master_.Attendance_Master_Id,
					Employee_Attendance_Master_.From_Date,
					Employee_Attendance_Master_.To_Date,
					Employee_Attendance_Master_.Users_Id,
					Employee_Attendance_Master_.Employee_Attendance_Details_,
					Employee_Attendance_Master_.Entry_Date,
					
				],
				connection
			).result();

			connection.release();
			rs(result1);
		} catch (err) {
			rej(err);
		}
	});
},



Save_Document_Type:function(Document_Type_,callback)
 { 
return db.query("CALL Save_Document_Type("+
"@Document_Type_Id_ :=?,"+
"@Document_Type_Name_ :=?"+")"
 ,[Document_Type_.Document_Type_Id,
	Document_Type_.Document_Type_Name
],callback);
 }
 ,
 Search_Document_Type:function(Document_Type_Name_,callback)
 { 
 if (Document_Type_Name_===undefined || Document_Type_Name_==="undefined" )
 Document_Type_Name_='';
return db.query("CALL Search_Document_Type(@Document_Type_Name_ :=?)",[Document_Type_Name_],callback);
 }
 ,
 Delete_Document_Type:function(Document_Type_Id_,callback)
 { 
   return db.query("CALL Delete_Document_Type(@Document_Type_Id_ :=?)",[Document_Type_Id_],callback);
 },



 Save_Process_Type:function(Process_Type_,callback)
 { 
return db.query("CALL Save_Process_Type("+
"@Process_Type_Id_ :=?,"+
"@Process_Type_Name_ :=?"+")"
 ,[Process_Type_.Process_Type_Id,
	Process_Type_.Process_Type_Name
],callback);
 }
 ,
 Search_Process_Type:function(Process_Type_Name_,callback)
 { 
 if (Process_Type_Name_===undefined || Process_Type_Name_==="undefined" )
 Process_Type_Name_='';
return db.query("CALL Search_Process_Type(@Process_Type_Name_ :=?)",[Process_Type_Name_],callback);
 }
 ,
 Delete_Process_Type:function(Process_Type_Id_,callback)
 { 
   return db.query("CALL Delete_Process_Type(@Process_Type_Id_ :=?)",[Process_Type_Id_],callback);
 },

 Save_Student_Document: async function (Student_Document_Type_Master_) {
    console.log(Student_Document_Type_Master_);
    return new Promise(async (rs, rej) => {
      const pool = db.promise();
      let result1;
      var connection = await pool.getConnection();
      await connection.beginTransaction();
      var Student_Document_Type_ =
        Student_Document_Type_Master_.Student_Document_Type_Data;
      try {
        const result1 = await new storedProcedure(
          "Save_Student_Document",
          [
            Student_Document_Type_Master_.Student_Document_Type_Mater_Id,
            Student_Document_Type_Master_.Student_Id,
			Student_Document_Type_Master_.Remark,
            Student_Document_Type_,
          ],
          connection
        ).result();
        await connection.commit();
        connection.release();
        rs(result1);
      } catch (err) {
        await connection.rollback();
        rej(err);
      }
    });
  },
  Get_Document_Type: function (Student_Id_, callback) {
    console.log(Student_Id_);
    return db.query(
      "CALL Get_Document_Type(@Student_Id_ :=?)",
      [Student_Id_],
      callback
    );
  },


  Search_Branch_User_Typeahead:function(Branch_Id_,User_Details_Name_,callback)
{ 
  if(User_Details_Name_==='undefined'||User_Details_Name_===''||User_Details_Name_===undefined )
  User_Details_Name_='';
return db.query("CALL Search_Branch_User_Typeahead(@Branch_Id_ :=?,@User_Details_Name_ :=?)",[Branch_Id_,User_Details_Name_],callback);
},

Search_Branch_Typeahead:function(Branch_Name_,callback)
        { 
        if(Branch_Name_==='undefined'||Branch_Name_===''||Branch_Name_===undefined )
        Branch_Name_='';
        return db.query("CALL Search_Branch_Typeahead(@Branch_Name_ :=?)",[Branch_Name_],callback);
        },

		Save_Student_Data_FollowUp: function (Student_Details, callback) {
			console.log(Student_Details);
			return db.query(
				"CALL Save_Student_Data_FollowUp(@Student_Selected_Details_ :=?,@By_User_Id_ :=?,@Next_FollowUp_Date_ :=?,@User_Id_ :=?,@User_Name_ :=?,@By_User_Name_ :=?,@Full_Transfer_Value_ :=?,@Remark_ :=?)",
				[
					JSON.stringify(Student_Details.Student_Selected_Details),
					Student_Details.By_User_Id,
					Student_Details.Next_FollowUp_Date,
					Student_Details.User_Id,
					Student_Details.User_Name,
					Student_Details.By_User_Name,
					Student_Details.Full_Transfer_Value,
					Student_Details.Remark,
					
				],
				callback
			);
		},    
		


		
 Save_Student_Followup_Pending:function(Student_Followup_,callback)
 { 
return db.query("CALL Save_Student_Followup_Pending("+
"@Student_Id_ :=?,"+
"@Next_FollowUp_Date_ :=?,"+
"@Status_ :=?,"+
"@To_User_Id_ :=?,"+
"@By_User_Id_ :=?,"+
"@Remark_ :=?"+")"
 ,[
Student_Followup_.Student_Id,
Student_Followup_.Next_FollowUp_Date,
Student_Followup_.Status_Id,
Student_Followup_.To_User_Id,
Student_Followup_.By_User_Id,
Student_Followup_.Remark
],callback);
 }
 ,
		
		
// Fees_Payment_Whatsapp: async function (Fees_Whatsapp_) {

// 	try {

// 		const data = {
// 			"to": ""+Fees_Whatsapp_.to+"",
// 			"type": "template",
// 			"templateName": "api_trackbox_fee_jan2023",
// 			"language": "en",
// 			"header": null,
// 			"body":{
// 				"parameters": [
// 					{
// 						"type": "text",
// 						"text": Fees_Whatsapp_.student
// 					},
// 					{
// 						"type": "text",
// 						"text": Fees_Whatsapp_.payment_amount
// 					},
// 					{
// 						"type": "text",
// 						"text": Fees_Whatsapp_.pending_amount
// 					},
// 					{
// 						"type": "text",
// 						"text": Fees_Whatsapp_.next_payment_date
// 					}
// 					,
// 					{
// 						"type": "text",
// 						"text": Fees_Whatsapp_.tostaff
// 					}
// 				]
// 			},
// 			"button": null
// 		};
// 			//  console.log(response)
// 			const response = await axios.post("https://api.telinfy.net/gaca/whatsapp/templates/message", data, { headers: {
// 				'Content-Type': 'application/json',
// 				'Api-Key': '0ea03cd8-169f-4f50-8254-94f50dbcfdaa'
// 			} });
// 		// console.log(body)
// 		console.log(response)
// 		return response.data;
		
// 	}
	
// 	 catch (error) {
// 		// console.log(response)
// 		console.log(error)
// 		throw error;
// 	}
// },


};
module.exports = Student;
