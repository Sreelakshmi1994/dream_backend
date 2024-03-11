var express = require('express');
var router = express.Router();
var Application_Course=require('../models/Application_Course');
router.post('/Save_Application_Course/',function(req,res,next)
{ 
try 
{
Application_Course.Save_Application_Course(req.body, function (err, rows) 
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
  console.log(e)
}
finally 
{
}
 });


 router.post('/Save_Application_Course_Import/',function(req,res)
 { 
 try 
 {
   
Application_Course.Save_Application_Course_Import(req.body, function (err, rows) 
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


  router.get('/Search_Application_Course_Import/:From_Date_?/:To_Date_?/:Is_Date_Check_?/',function(req,res,next)
{ 
try 
{
Application_Course.Search_Application_Course_Import(req.query.From_Date_,req.query.To_Date_,req.query.Is_Date_Check_, function (err, rows) 
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


 

router.get('/Search_Application_Course/',function(req,res,next)
{ 
try 
{
  
Application_Course.Search_Application_Course(req.query.Application_Course_Name_,req.query.Level_Id_,req.query.Country_Id_,req.query.Internship_Id_,req.query.Duration_Id_,req.query.University_Id_,req.query.Subject_Id_,req.query.Sub_Section_Id_,req.query.Pointer_Start_,req.query.Pointer_Stop_,req.query.Page_Length_, function (err, rows) 
{
 if (err)                                                                                                                                                     
 {
   
 res.json(err);
 }
 else 
 {
 // 
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
 
router.get('/Get_Application_Course/:Application_Course_Id_?',function(req,res,next)
{ 
try 
{
Application_Course.Get_Application_Course(req.params.Application_Course_Id_, function (err, rows) 
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

 router.get('/Get_Application_Course_Import/:Import_Master_Id_?',function(req,res,next)
 { 
 try 
 {
Application_Course.Get_Application_Course_Import(req.params.Import_Master_Id_, function (err, rows) 
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





router.get('/Delete_Application_Course/:Application_Course_Id_?',function(req,res,next)
{ 
try 
{
Application_Course.Delete_Application_Course(req.params.Application_Course_Id_, function (err, rows) 
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
  console.log(e)
}
finally 
{
}
 });



 router.get('/Search_Application_Course_Typeahead/:Country_Id_?/:Subject_Id_?/:Sub_Section_Id_?/:Level_Id_?/:Application_Course_Name_?/:Duration_Id_?/:Ielts_Minimum_Score_?/:Intake_Id_?/:Internship_Id_?/',function(req,res,next)
 {    
 try 
 {
Application_Course.Search_Application_Course_Typeahead(req.query.Country_Id_,req.query.Subject_Id_,req.query.Sub_Section_Id_,req.query.Level_Id_,req.query.Application_Course_Name_,req.query.Duration_Id_,req.query.Ielts_Minimum_Score_,req.query.Intake_Id_,req.query.Internship_Id_,  function (err, rows) 
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

 //  router.get('/Get_Menu_Status/:Menu_Id_?/:Login_User_?',function(req,res,next)
 //  { 
 //  try 
 //  {
 //   Application_Course.Get_Menu_Status(req.params.Menu_Id_,req.params.Login_User_, function (err, rows)
 //  {
 //  if (err) 
 //  {
 ;
 //  res.json(err);
 //  }
 //  else 
 //  {
 //  res.json(rows);
 //  }
 //  });
 //  }
 //  catch (e) 
 //  {
 
 //  }
 //  finally 
 //  {
 //  }
 //  });

 router.get('/Search_Application_Courses_Typeahead/',function(req,res,next)
 { 
 try 
 {
  
   Application_Course.Search_Application_Courses_Typeahead(req.query.Application_Course_Name,function (err, rows) 
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


 router.get('/Search_Application_Courses_Fees_Typeahead/',function(req,res,next)
 { 
 try 
 {
  
   Application_Course.Search_Application_Courses_Fees_Typeahead(req.query.Application_Course_Name,req.query.Student_Id,function (err, rows) 
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

