var http = require('http');
var server = http.Server(app);
// var CronJob = require('cron').CronJob;
const fetch = require("node-fetch");
var db=require('./dbconnection');
var apppath = '/';
//var apppath = '/';
 const port = process.env.PORT || 3507;
 process.env.SENDGRID_API_KEY = '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';
// var cron = require('node-cron');
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var multer = require('multer');
var multerupload = multer({ dest: 'fileprint/' })
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var cors = require("cors");
const jwt = require('./helpers//jwt');
var routes = require("./routes/index");
const errorHandler = require('./helpers/error-handler');

var Login = require("./routes/Login");
var Public_Data = require('./routes/Public_Data');
var Accounts = require('./routes/Accounts');
var Account_Years = require('./routes/Account_Years');
var Agent = require('./routes/Agent');
var Agent_Commision = require('./routes/Agent_Commision');
var Agent_Course_Type = require('./routes/Agent_Course_Type');
var Batch = require('./routes/Batch');
var Candidate = require('./routes/Candidate');
var Candidate_Followup = require('./routes/Candidate_Followup');
var Candidate_Job_Apply = require('./routes/Candidate_Job_Apply');
var Category = require('./routes/Category');
var Certificate_Request = require('./routes/Certificate_Request');
var Certificates = require('./routes/Certificates');
var Course = require('./routes/Course');
var Course_Fees = require('./routes/Course_Fees');
var Course_Import_Details = require('./routes/Course_Import_Details');
var Course_Import_Master = require('./routes/Course_Import_Master');
var Course_Subject = require('./routes/Course_Subject');
var Course_Type = require('./routes/Course_Type');
var Document = require('./routes/Document');
var Exam_Details = require('./routes/Exam_Details');
var Exam_Master = require('./routes/Exam_Master');
var Experience = require('./routes/Experience');
var Fees_Instalment = require('./routes/Fees_Instalment');
var Fees_Receipt = require('./routes/Fees_Receipt');
var Fees_Type = require('./routes//Fees_Type');
var Followup_Type = require('./routes/Followup_Type');
var Functionl_Area = require('./routes/Functionl_Area');
var Enquiry_Source = require('./routes/Enquiry_Source');
var Job_Posting = require('./routes/Job_Posting');
var Mark_List = require('./routes/Mark_List');
var Part = require('./routes/Part');
var Qualification = require('./routes/Qualification');
var Question = require('./routes//Question');
var Question_Import = require('./routes/Question_Import');
var Settings = require('./routes/Settings');
var Specialization = require('./routes/Specialization');
var Status = require('./routes/Status');
var Student = require('./routes/Student');
var Student_Course = require('./routes/Student_Course');
var Student_Course_Subject = require('./routes/Student_Course_Subject');
var Student_Followup = require('./routes/Student_Followup');
var Study_Materials = require('./routes/Study_Materials');
var State = require('./routes/State');
var Subject = require('./routes/Subject');
var University = require('./routes/University');
var University_Followup = require('./routes/University_Followup');
var User_Role = require('./routes/User_Role');
var User_Type = require('./routes/User_Type');
var Users = require('./routes/Users');
var Employer_Details = require('./routes/Employer_Details');
var GeneralFunctions = require('./routes/GeneralFunctions');
var Books = require('./routes/Books');
var Client_Accounts = require('./routes/Client_Accounts');
var Company = require('./routes/Company');
var Salary_Calculation_Master = require('./routes/Salary_Calculation_Master');
var Master_Call = require('./routes/Master_Call');
var Attendance_Master = require('./routes//Attendance_Master');
var Leave_Request = require('./routes//Leave_Request');
var Account_Group = require('./routes//Account_Group');
var Contra_Entry = require('./routes//Contra_Entry');
var Journal_Entry = require('./routes//Journal_Entry');
var Location = require('./routes//Location');
var Payment_Reference = require('./routes//Payment_Reference');
var Payment_Voucher = require('./routes//Payment_Voucher');
var Primary_Details = require('./routes//Primary_Details');
var Receipt_Reference = require('./routes//Receipt_Reference');
var Receipt_Voucher = require('./routes//Receipt_Voucher');
var Country = require('./routes//Country');
var Application_Course = require('./routes/Application_Course');
var Application_University = require('./routes/Application_University');
var Import = require('./routes/Import');
var Agent_Details = require('./routes/Agent_Details');
var Purchase_Master = require('./routes/Purchase_Master');
var Payment_Request = require('./routes/Payment_Request');


var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", routes);
app.use("/Login", Login);
app.use('/Public_Data',Public_Data);

app.use(jwt());

app.use('/Accounts', Accounts);
app.use('/Account_Years', Account_Years);
app.use('/Agent', Agent);
app.use('/Agent_Commision', Agent_Commision);
app.use('/Agent_Course_Type', Agent_Course_Type);
app.use('/Batch', Batch);
app.use('/Candidate', Candidate);
app.use('/Candidate_Followup', Candidate_Followup);
app.use('/Candidate_Job_Apply', Candidate_Job_Apply);
app.use('/Category', Category);
app.use('/Certificate_Request', Certificate_Request);
app.use('/Certificates', Certificates);
app.use('/Course', Course);
app.use('/Course_Fees', Course_Fees);
app.use('/Course_Import_Details', Course_Import_Details);
app.use('/Course_Import_Master', Course_Import_Master);
app.use('/Course_Subject', Course_Subject);
app.use('/Course_Type', Course_Type);
app.use('/Document', Document);
app.use('/Exam_Details', Exam_Details);
app.use('/Exam_Master', Exam_Master);
app.use('/Experience', Experience);
app.use('/Fees_Instalment', Fees_Instalment);
app.use('/Fees_Receipt', Fees_Receipt);
app.use('/Fees_Type', Fees_Type);
app.use('/Followup_Type', Followup_Type);
app.use('/Functionl_Area', Functionl_Area);
app.use('/Enquiry_Source', Enquiry_Source);
app.use('/Job_Posting', Job_Posting);
app.use('/Mark_List', Mark_List);
app.use('/Part', Part);
app.use('/Qualification', Qualification);
app.use('/Question', Question);
app.use('/Question_Import', Question_Import);
app.use('/Settings', Settings);
app.use('/Specialization', Specialization);
app.use('/Status', Status);
app.use('/Student', Student);
app.use('/Student_Course', Student_Course);
app.use('/Student_Course_Subject', Student_Course_Subject);
app.use('/Student_Followup', Student_Followup);
app.use('/Study_Materials', Study_Materials);
app.use('/Subject', Subject);
app.use('/University', University);
app.use('/University_Followup', University_Followup);
app.use('/User_Role', User_Role);
app.use('/User_Type', User_Type);
app.use('/Users', Users);
app.use('/State', State);
app.use('/Employer_Details', Employer_Details);
app.use('/GeneralFunctions', GeneralFunctions);
app.use('/Books', Books);
app.use('/Client_Accounts', Client_Accounts);
app.use('/Company', Company);
app.use('/Salary_Calculation_Master', Salary_Calculation_Master);
app.use('/Master_Call', Master_Call);
app.use('/Attendance_Master', Attendance_Master);
app.use('/Leave_Request', Leave_Request);
app.use('/Account_Group', Account_Group);
app.use('/Contra_Entry', Contra_Entry);
app.use('/Journal_Entry', Journal_Entry);
app.use('/Location', Location);
app.use('/Payment_Reference', Payment_Reference);
app.use('/Payment_Voucher', Payment_Voucher);
app.use('/Primary_Details', Primary_Details);
app.use('/Receipt_Reference', Receipt_Reference);
app.use('/Receipt_Voucher', Receipt_Voucher);
app.use('/Country',Country);
app.use('/Application_Course', Application_Course);
app.use('/Application_University', Application_University);
app.use('/Import', Import);
app.use('/Agent_Details', Agent_Details);
app.use('/Purchase_Master', Purchase_Master);
app.use('/Payment_Request', Payment_Request);

// app.use(function(req, res, next) {
//   var err = new Error("Not Found");
//   err.status = 404;
//   next(err); 
// });
// async function getUserAsync(name) 
// {
//   let response = await fetch(name);
//   let data = await response.json()
//   return data;
// }
// var Get_Data = function(callback)
//  {   
//         return db.query("CALL Get_Absent_Student()",[],callback);
// };
// var job = cron.schedule('00 24 17 * * *',function()  {
//   // console.log(1)
// // });
// // var job = new CronJob('1,2,4,5 * * * *', function() 
// // {
//   try 
//    {
//     Get_Data(function (err, rows)
//     {
//     if (err) 
//       {
//       console.log(err)
//       }
//     else
//       {
//         console.log(rows)
//         var values = [];
//         var t = [];
//          values = rows;
//        console.log(rows)
//         t= values[0]
//     for(var i = 0; i < t.length; i++)
//         {
//          console.log(t)
//         //  var mob='9562813713';
//         //   var Sms='Fee Reminder from One Team Solutions.Your Fee of '+t[i].Amount+' is due on '+t[i].DueDate+'.Please pay the Fee on or before '+t[i].DueDate+'.Ignore if already paid.Contact '+t[i].Mobile+' ONETEAM';
//         //   var location_path="http://adyaconnect.co.in/httpapi/smsapi?uname=GETABOSS&password=getaboss2018&sender=ONETEM&receiver="+t[i].Phone+"&route=TA&msgtype=1&sms="+Sms+ "";
//           // getUserAsync(location_path);
//           console.log(location_path);
//         }
//       }   
//     }
//   );
// }
// catch(e){console.log(e)}
// } , null, true, 'America/Los_Angeles'); 
// job.start();

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
module.exports = app;