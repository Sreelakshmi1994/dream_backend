var express = require('express');
var router = express.Router();

var Application_University=require('../models/Application_University');
const upload=require('../helpers/multer-helper');

router.post('/Save_Application_University/',function(req,res,next)
{ 
try 
{
Application_University.Save_Application_University(req.body, function (err, rows) 
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



 router.get('/Search_Application_University_Typeahead/',function(req,res,next)
 { 
 try 
 {
  
   Application_University.Search_Application_University_Typeahead(req.query.Application_University_Name,function (err, rows) 
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



router.get('/Search_Application_University/',function(req,res,next)
{ 
try 
{
Application_University.Search_Application_University(req.query.Application_University_Name, function (err, rows) 
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
router.get('/Get_Application_University/:Application_University_Id_?',function(req,res,next)
{ 
try 
{
Application_University.Get_Application_University(req.params.Application_University_Id_, function (err, rows) 
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
router.get('/Delete_Application_University/:Application_University_Id_?',function(req,res,next)
{ 
try 
{
Application_University.Delete_Application_University(req.params.Application_University_Id_, function (err, rows) 
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
 router.get('/Application_University_Typeahead/',function(req,res,next)
 { 
 try 
 {
 Application_University.Application_University_Typeahead(req.query.Application_University_Name,function (err, rows) 
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

// router.post('/Save_Application_University', upload.array('myFile'), (req, res, next) => {
//   try {
//     const file = req.files
//     var Photo_=[];
//     if (!file) {
//       const error = new Error('Please upload a file')
//       error.httpStatusCode = 400
//     } 
//     else
//     {
//       for(var i=0;i<file.length;i++)
//       {
//         Photo_.push({File_name:file[i].filename})
//       }
//     }
//     var Image_Detail=''
// if(Photo_.length>0)
// {
//   Image_Detail=Photo_[0].File_name;
// }
//     {
//       var Photo_json = JSON.stringify(Photo_)
//       var Application_University_ =
//       {
//         "Application_University_Id":req.body.Application_University_Id,
//         "Application_University_Name":req.body.Application_University_Name,
//         "About":req.body.About,
//         "About1":req.body.About1,
//         "About2":req.body.About2,
//         "Location":req.body.Location,
//         "Address":req.body.Address,
//         "Founded_In":req.body.Founded_In,
//         "Institution_Type":req.body.Institution_Type,
//         "Cost_Of_Living":req.body.Cost_Of_Living,
//         "Tution_Fee":req.body.Tution_Fee,
//         "Application_Fee":req.body.Application_Fee,
//         "Type_Of_Accomodation":req.body.Type_Of_Accomodation,
//         "Contact_Number":req.body.Contact_Number,
//         "Email":req.body.Email,
//         "Web":req.body.Web,
//         "Fb":req.body.Fb,
//         "Linkedin":req.body.Linkedin,
//         "Twitter":req.body.Twitter,
//         "Googlemap":req.body.Googlemap,
//         "Status":req.body.Status,
//         "Application_University_Id":req.body.Application_University_Id,
//         "Sub_Heading1":req.body.Sub_Heading1,
//         "Sub_Heading2":req.body.Sub_Heading2,
//         "Sub_Heading3":req.body.Sub_Heading3,
//         "School_Rank":req.body.School_Rank,
//         "Video_Link":req.body.Video_Link,
//         "Sub_Heading_Colored":req.body.Sub_Heading_Colored,
//       "Banner_Image":Image_Detail
//    };
   
//    Application_University.Save_Application_University(Application_University_, function (err, rows) {
//         if (err) {
//           return 1;
//         }
//         else {
//           return res.json(rows);
//         }
//       });
//     }
//   }
//   catch (err) {
//     const error = new Error('Please upload a file')
//     error.httpStatusCode = 400
//     return next(error)
//   }
// });
// router.post('/Save_Application_University_Photos', upload.array('myFile'), (req, res, next) => {
//   try {
//     const file = req.files
//     var Photo_=[];
//     if (!file) {
//       const error = new Error('Please upload a file')
//       error.httpStatusCode = 400
//     } 
//     else
//     {
//       for(var i=0;i<file.length;i++)
//       {
//         Photo_.push({File_name:file[i].filename})
//       }
  
//     }

//     {
//       var Photo_json = JSON.stringify(Photo_)
//       var Application_University_ =
//       {
//         "Application_University_Id":req.body.Application_University_Id,
//       "Photo":Photo_json
//    };
//    Application_University.Save_Application_University_Photos(Application_University_, function (err, rows) {
//         if (err) {
//           return 1;
//         }
//         else {
//           return res.json(rows);
//         }
//       });
//     }
//   }
//   catch (err) {
//     const error = new Error('Please upload a file')
//     error.httpStatusCode = 400
//     return next(error)
//   }
// });
// router.get('/Application_University_Typeahead/',function(req,res,next)
//   { 
//   try 
//   {
//   Application_University.Application_University_Typeahead(req.query.Application_University_Name,function (err, rows) 
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
//   router.get('/Application_University_Typeahead_with_Level_Application_University/',function(req,res,next)
//   { 
//   try 
//   {
//   Application_University.Application_University_Typeahead_with_Level_Application_University(req.query.Application_University_Id,req.query.Level_Detail_Id,req.query.Application_University_Name,function (err, rows) 
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

// router.get('/Load_Status/',function(req,res,next)
//   { 
//   try 
//   {
//   Application_University.Load_Status(function (err, rows) 
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
// router.get('/Load_Application_University/',function(req,res,next)
//   { 
//   try 
//   {
//   Application_University.Load_Application_University(function (err, rows) 
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
// router.get('/Search_Application_University/',function(req,res,next)
//   { 
//   try 
//   {
//   Application_University.Search_Application_University(req.query.Application_University_Name, req.query.Application_University_,req.query.Status_,function (err, rows) 
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
// router.get('/Get_Application_University_Photos/:Application_University_Id_?',function(req,res,next)
//   { 
//   try 
//   {
//   Application_University.Get_Application_University_Photos(req.params.Application_University_Id_, function (err, rows) 
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
// router.get('/Delete_Application_University/:Application_University_Id_?',function(req,res,next)
//   { 
//   try 
//   {
//   Application_University.Delete_Application_University(req.params.Application_University_Id_, function (err, rows) 
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
//   router.get('/Search_Application_University_Typeahead/',function(req,res,next)
//   { 
//   try 
//   {
  
//    Application_University.Search_Application_University_Typeahead(req.query.Application_University_Name,function (err, rows) 
//   {
//   if (err) 
//   {
//    
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
 module.exports = router;

