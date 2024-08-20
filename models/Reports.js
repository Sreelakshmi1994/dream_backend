var db = require("../dbconnection");
var fs = require("fs");
var Reports = {
	Search_Booking_Arrival_Report: function (
		Fromdate_,
		Todate_,
		Is_Date_Check_,
		Enquiry_No_,
		Booking_No_,
		Country_Id_,
		Guest_Name_,
		File_Handler_Id_,
		Enquiry_Status_Id_,
		Login_User_Id_,
		callback
	) {
		console.log(
			Guest_Name_,
			File_Handler_Id_,
			Enquiry_Status_Id_,
			Login_User_Id_
		);
		if (Enquiry_No_ === undefined || Enquiry_No_ === "undefined")
			Enquiry_No_ = "";
		if (Booking_No_ === undefined || Booking_No_ === "undefined")
			Booking_No_ = "";
		if (Guest_Name_ === undefined || Guest_Name_ === "undefined")
			Guest_Name_ = "";

		return db.query(
			"CALL Search_Booking_Arrival_Report(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Enquiry_No_ :=?,@Booking_No_ :=?,@Country_Id_ :=?,@Guest_Name_ :=?,@File_Handler_Id_ :=?,@Enquiry_Status_Id_ :=?,@Login_User_Id_ :=?)",
			[
				Fromdate_,
				Todate_,
				Is_Date_Check_,
				Enquiry_No_,
				Booking_No_,
				Country_Id_,
				Guest_Name_,
				File_Handler_Id_,
				Enquiry_Status_Id_,
				Login_User_Id_,
			],
			callback
		);
	},

	Search_Staff_Productivity_Report: function (
		Fromdate_,
		Todate_,
		Is_Date_Check_,
		File_Handler_Id_,
		Login_User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Staff_Productivity_Report(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@File_Handler_Id_ :=?,@Login_User_Id_ :=?)",
			[Fromdate_, Todate_, Is_Date_Check_, File_Handler_Id_, Login_User_Id_],
			callback
		);
	},

	Search_Agent_Productivity_Report: function (
		Fromdate_,
		Todate_,
		Is_Date_Check_,
		Agent_Id_,
		Login_User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Agent_Productivity_Report(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Agent_Id_ :=?,@Login_User_Id_ :=?)",
			[Fromdate_, Todate_, Is_Date_Check_, Agent_Id_, Login_User_Id_],
			callback
		);
	},

	Search_Team_Productivity_Report: function (
		Fromdate_,
		Todate_,
		Is_Date_Check_,
		Team_Id_,
		Login_User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Team_Productivity_Report(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Team_Id_ :=?,@Login_User_Id_ :=?)",
			[Fromdate_, Todate_, Is_Date_Check_, Team_Id_, Login_User_Id_],
			callback
		);
	},

	Search_Guest_Movement_Chart: function (
		Fromdate_,
		Todate_,
		Is_Date_Check_,
		Supplier_Id_,
		Booking_No_,
		Login_User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Guest_Movement_Chart(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Supplier_Id_ :=?,@Booking_No_ :=?,@Login_User_Id_ :=?)",
			[
				Fromdate_,
				Todate_,
				Is_Date_Check_,
				Supplier_Id_,
				Booking_No_,
				Login_User_Id_,
			],
			callback
		);
	},

	Search_Supplier_Payable_Report: function (
		Fromdate_,
		Todate_,
		Is_Date_Check_,
		Supplier_Id_,
		Login_User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Supplier_Payable_Report(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Supplier_Id_ :=?,@Login_User_Id_ :=?)",
			[Fromdate_, Todate_, Is_Date_Check_, Supplier_Id_, Login_User_Id_],
			callback
		);
	},
	Search_Purchase_Report: function (
		Fromdate_,
		Todate_,
		Is_Date_Check_,
		Invoice_No_,
		Party_,Payment_Status_Id_,
		callback
	) {
		if (Invoice_No_ === undefined || Invoice_No_ === "undefined")
			Invoice_No_ = "";

		return db.query(
			"CALL Search_Purchase_Report(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Invoice_No_ :=?,@Party_ :=?,@Payment_Status_Id_ :=?)",
			[Fromdate_, Todate_, Is_Date_Check_, Invoice_No_, Party_,Payment_Status_Id_],
			callback
		);
	},
	
	Search_Sales_Report: function (
		Fromdate_,
		Todate_,
		Is_Date_Check_,
		Booking_No_,
		Party_,Payment_Status_Id_,
		callback
	) {
		if (Booking_No_ === undefined || Booking_No_ === "undefined")
			Booking_No_ = "";

		return db.query(
			"CALL Search_Sales_Report(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Booking_No_ :=?,@Party_ :=?,@Payment_Status_Id_ :=?)",
			[Fromdate_, Todate_, Is_Date_Check_, Booking_No_, Party_,Payment_Status_Id_],
			callback
		);
	},

	// Search_Purchase_Report: function (
	// 	Fromdate_,
	// 	Todate_,
	// 	Is_Date_Check_,
	// 	Invoice_No_,
	// 	Party_,
	// 	callback
	// ) {
	// 	if (Invoice_No_ === undefined || Invoice_No_ === "undefined")
	// 		Invoice_No_ = "";

	// 	return db.query(
	// 		"CALL Search_Purchase_Report(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Invoice_No_ :=?,@Party_ :=?)",
	// 		[Fromdate_, Todate_, Is_Date_Check_, Invoice_No_, Party_],
	// 		callback
	// 	);
	// },
	// Search_Sales_Report: function (
	// 	Fromdate_,
	// 	Todate_,
	// 	Is_Date_Check_,
	// 	Booking_No_,
	// 	Party_,
	// 	callback
	// ) {
	// 	if (Booking_No_ === undefined || Booking_No_ === "undefined")
	// 		Booking_No_ = "";

	// 	return db.query(
	// 		"CALL Search_Sales_Report(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Booking_No_ :=?,@Party_ :=?)",
	// 		[Fromdate_, Todate_, Is_Date_Check_, Booking_No_, Party_],
	// 		callback
	// 	);
	// },

	Search_Hotel_Productivity_Report: function (
		Fromdate_,
		Todate_,
		Is_Date_Check_,
		Hotel_Id_,
		Login_User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Hotel_Productivity_Report(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Hotel_Id_ :=?,@Login_User_Id_ :=?)",
			[Fromdate_, Todate_, Is_Date_Check_, Hotel_Id_, Login_User_Id_],
			callback
		);
	},
	Search_Profit_Loss_Account_Report: function (Fromdate_, Todate_, callback) {
		return db.query(
			"CALL Search_Profit_Loss_Account_Report(@Fromdate_ :=?,@Todate_ :=?)",
			[Fromdate_, Todate_],
			callback
		);
	},
	Search_Agent_Receivable_Report: function (
		Fromdate_,
		Todate_,
		Is_Date_Check_,
		Login_User_Id_,
		callback
	) {
		return db.query(
			"CALL Search_Agent_Receivable_Report(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Login_User_Id_ :=?)",
			[Fromdate_, Todate_, Is_Date_Check_, Login_User_Id_],
			callback
		);
	},
	Search_Notifications: function (
		Fromdate_,
		Todate_,
		Is_Date_Check_,
		Notification_Type_Id_,
		Login_User_Id_,
		Page_Index_,
		Page_Length_,
		callback
	) {
		return db.query(
			"CALL Search_Notifications(@Fromdate_ :=?,@Todate_ :=?,@Is_Date_Check_ :=?,@Notification_Type_Id_ :=?,@Login_User_Id_ :=?,@Page_Index_ :=?,@Page_Length_ :=?)",
			[
				Fromdate_,
				Todate_,
				Is_Date_Check_,
				Notification_Type_Id_,
				Login_User_Id_,
				Page_Index_,
				Page_Length_,
			],
			callback
		);
	},

	//  Search_Account_Group_Report: function (Fromdate_,ToDate_  , callback) {
	// 	return db.query(
	// 		"CALL Search_Account_Group_Report(@Fromdate_ :=?,@Todate_ :=?",
	// 		[Fromdate_,ToDate_ ],
	// 		callback
	// 	);
	// },
	Search_Closing_Balance_Report: function (FromDate_, ToDate_, callback) {
		return db.query(
			"CALL Search_Closing_Balance_Report(@FromDate_ :=?,@ToDate_ :=?)",
			[FromDate_, ToDate_],
			callback
		);
	},

	Search_Balance_Sheet_Report: function (FromDate_, ToDate_, callback) {
		return db.query(
			"CALL Search_Balance_Sheet(@FromDate_ :=?,@ToDate_ :=?)",
			[FromDate_, ToDate_],
			callback
		);
	},
	Search_Trail_Balance_Report: function (FromDate_, ToDate_, callback) {
		return db.query(
			"CALL Search_Trail_Balance_Report(@FromDate_ :=?,@ToDate_ :=?)",
			[FromDate_, ToDate_],
			callback
		);
	},

	Search_Account_Group_Report: function (FromDate_, ToDate_, callback) {
		return db.query(
			"CALL Search_Account_Group_Report(@FromDate_ :=?,@ToDate_ :=?)",
			[FromDate_, ToDate_],
			callback
		);
	},

	Search_Account_Group_Report1: async function (
		Fromdate_,
		ToDate_,
		Is_Date_Check_
	) {
		//  console.log(User_Details_)
		return new Promise(async (rs, rej) => {
			const pool = db.promise();
			let result1;
			var connection = await pool.getConnection();
			await connection.beginTransaction();
			//  var Application_Group_Value_ =0;var Application_Status_Value_ =0,All_time_Department_Value_ = 0;
			//  var User_Menu_Selection_ = User_Details_.User_Menu_Selection_Data;
			//  var User_Department_ = User_Details_.User_Department_Data;
			//  let User_Application_Status_ = User_Details_.User_Application_Status;
			//  let User_Application_Group_ = User_Details_.User_Application_Group;
			//  let All_Time_Departments_ = User_Details_.All_Time_Departments
			//  if (User_Application_Group_ != undefined && User_Application_Group_ != "" && User_Application_Group_ != null) Application_Group_Value_ =1;
			//  if (User_Application_Status_ != undefined && User_Application_Status_ != "" && User_Application_Status_ != null ) Application_Status_Value_ =1;
			//  if (All_Time_Departments_ != undefined && All_Time_Departments_ != "" && All_Time_Departments_ != null ) All_time_Department_Value_ =1;
			try {
				//    console.log(All_Time_Departments_)
				//    const result1 = await (new storedProcedure('Save_User_Details', [User_Details_.User_Details_Id, User_Details_.User_Details_Name, User_Details_.Password,
				//    User_Details_.Working_Status, User_Details_.User_Type, User_Details_.Role_Id, User_Details_.Branch_Id, User_Details_.Address1,
				//    User_Details_.Address2, User_Details_.Address3, User_Details_.Address4, User_Details_.Pincode,
				//    User_Details_.Mobile, User_Details_.Email, 0, User_Details_.Registration_Target, User_Details_.FollowUp_Target,
				//    User_Details_.Department_Id, User_Details_.Department_Name, User_Details_.Backup_User_Id, User_Details_.Backup_User_Name,User_Details_.Default_Application_Status_Id, User_Details_.Default_Application_Status_Name,
				//   User_Menu_Selection_, User_Department_,JSON.stringify(User_Application_Group_),JSON.stringify(User_Application_Status_),User_Details_.Application_View,Application_Group_Value_,Application_Status_Value_,
				//   User_Details_.All_Time_Department_View,All_time_Department_Value_,JSON.stringify(All_Time_Departments_)], connection)).result();
				//   if (result1[0].User_Details_Id_>0)
				{
					var Groups = await new storedProcedure(
						"Search_AccountGroup_For_Report",
						[""]
					).result();
					var accountGrpId = await new storedProcedure(
						"Get_AccountGroup_For_Report",
						[result1[0].Account_Group_Id_]
					).result();
					console.log(accountGrpId);
					var SelectdGroups = [];
					SelectdGroups.push({
						Account_Group_Id: accountGrpId[0].Account_Group_Id,
					});
					var AccountGrpString = "";
					var i = 0,
						j = 0;
					accountGrpId = SelectdGroups[i].Account_Group_Id;
					AccountGrpString = accountGrpId + ",";
					while (SelectdGroups.length > i) {
						accountGrpId = SelectdGroups[i].Account_Group_Id;
						var foundRows = [];
						foundRows = Groups.filter(
							(group_) => group_.Under_Group === accountGrpId
						);
						j = 0;
						GroupExist: boolean = false;
						while (foundRows.length > j) {
							GroupExist = false;
							for (var p = 0; p < SelectdGroups.length; p++) {
								if (
									SelectdGroups[p].Account_Group_Id ===
									foundRows[j].Account_Group_Id
								) {
									GroupExist = true;
									p = SelectdGroups.length;
								}
							}
							if (GroupExist === false) {
								SelectdGroups.push(foundRows[j]);
								AccountGrpString = AccountGrpString.concat(
									foundRows[j].Account_Group_Id,
									","
								);
							}
							j++;
						}
						i++;
					}
					AccountGrpString = AccountGrpString.substring(
						0,
						AccountGrpString.length - 1
					);
					console.log(AccountGrpString);
					const AccountGrpStringnew = await new storedProcedure(
						"Search_Account_Group_Report",
						[AccountGrpString]
					).result();

					//Department selection
					// 	  var BranchId = await (new storedProcedure('Get_User_Branch', [result1[0].User_Details_Id_])).result();
					// 	  BranchId = BranchId[0].Branch_Id;
					// 	  var userDepartments = await (new storedProcedure('Get_Department_Permission_Byuser', [result1[0].User_Details_Id_, result1[0].Branch_Id_])).result();
					// 	  var SelectdDepartments = [];
					// 	  var foundRows = [];
					// 	  var Department_selection="",Alltime_Dept_selection = '0,';
					// 	  var Department_Entry="";
					// 	  var Department_String ='',All_dept_Entry='';
					// 	  Department_String= Department_String.concat("and((student.Followup_Branch_Id=" + BranchId + " and student.To_User_Id=" + result1[0].User_Details_Id_ ," and  Followup_Department_Id in(");
					// 	  foundRows = userDepartments.filter(Departments_ => Departments_.Branch_Id === BranchId);
					// 	  i=0;
					// 	  Department_selection='0,'
					// 	  Alltime_Dept_selection = '0,'
					// 	  while (foundRows.length > i)
					// 	  {
					// 		Department_Entry = foundRows[i].Department_Id;
					// 		Department_selection = Department_selection.concat( Department_Entry + ",");
					// 		i++;
					// 	  }
					// 	  Department_selection = Department_selection.substring(0, Department_selection.length - 1);
					// 	  Department_String = Department_String.concat( Department_selection,"))");
					// 	  userDepartments = await (new storedProcedure('Get_Department_Permission_Byuser_current_Branch', [result1[0].User_Details_Id_, BranchId])).result();
					// 	  var userBranches = await (new storedProcedure('Get_User_Branches', [result1[0].User_Details_Id_, BranchId])).result();
					// 	  var alltime_dept = await (new storedProcedure('Get_AllTime_Dept', [result1[0].User_Details_Id_])).result();
					// 	  i=0;

					// 	  while (userBranches.length > i)
					// 	  {
					// 		Department_selection = '0,';
					// 		BranchId=userBranches[i].Branch_Id
					// 		foundRows = userDepartments

					// 		console.log(foundRows)
					// 		j = 0;
					// 		while (foundRows.length > j)
					// 		 {
					// 		  RoleExist = false;
					// 		  Department_Entry = foundRows[j].Department_Id;
					// 		  Department_selection = Department_selection.concat( Department_Entry + ",");
					// 		  j++;
					// 		 }
					// 		Department_selection = Department_selection.substring(0, Department_selection.length - 1);
					// 		Department_String = Department_String.concat(" or (student.Followup_Branch_Id=", BranchId, " and  student.Followup_Department_Id in(", Department_selection, "))");
					// 		i++;
					// 	  }
					// 	  k=0;
					//   while(alltime_dept.length > k){
					// 	All_dept_Entry = alltime_dept[k].Department_Id;
					// 	Alltime_Dept_selection = Alltime_Dept_selection.concat( All_dept_Entry + ",");
					// 	k++
					//   }
					//   Alltime_Dept_selection = Alltime_Dept_selection.substring(0, Alltime_Dept_selection.length - 1);

					//   Department_String = Department_String.concat( " or ( student.User_List like ","'%*",result1[0].User_Details_Id_,"*%' and  Followup_Department_Id in (",Alltime_Dept_selection,")))");
					// 	  const Role_Department = await (new storedProcedure('Save_Role_Department', [UserRoleString,Department_String,result1[0].User_Details_Id_])).result();
				}
				await connection.commit();
				connection.release();
				rs(result);
			} catch (err) {
				await connection.rollback();
				rej(err);
			}
		});
	},
	Search_Trail_Balance: function (FromDate_, ToDate_, callback) {
		return db.query(
			"CALL Search_Trail_Balance(@FromDate_ :=?,@ToDate_ :=?)",
			[FromDate_, ToDate_],
			callback
		);
	},
};
module.exports = Reports;
