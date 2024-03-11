var express = require('express');
var router = express.Router();
var Attendance_Master=require('../models/Attendance_Master');
router.post('/Save_Attendance_Master/',function(req,res,next)
{ 
try 
{
Attendance_Master.Save_Attendance_Master(req.body, function (err, rows) 
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
router.get('/Search_Attendance_Master/',function(req,res,next)
{ 
try 
{
Attendance_Master.Search_Attendance_Master(req.query.Attendance_Master_Name, function (err, rows) 
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
router.get('/Get_Attendance_Master/:Attendance_Master_Id_?',function(req,res,next)
{ 
try 
{
Attendance_Master.Get_Attendance_Master(req.params.Attendance_Master_Id_, function (err, rows) 
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
router.get('/Delete_Attendance_Master/:Attendance_Master_Id_?',function(req,res,next)
{ 
try 
{
Attendance_Master.Delete_Attendance_Master(req.params.Attendance_Master_Id_, function (err, rows) 
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
 router.get('/Search_Attendance_Master_Admin/',function(req,res,next)
 { 
 try 
 {
   Attendance_Master.Search_Attendance_Master_Admin(req.query.From_Date_,req.query.To_Date_,req.query.Store_Id_, function (err, rows) 
  {
  if (err) 
  {
    console.log(err);
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
   console.log(e);
  }
  finally 
  {
  }
  });
  router.get('/Search_Attendance_Master_Import/',function(req,res,next)
  { 
  try 
  {
   Attendance_Master.Search_Attendance_Master_Import(req.query.From_Date_,req.query.To_Date_,req.query.Is_Date_Check_,req.query.Store_Id_,function (err, rows) 
   {
   if (err) 
   {
   res.json(err);
   }
   else 
   {
   res.json(rows);
   //console.log(rows);
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
   router.post('/Save_Attendance_Master_Import/',async function(req,res,next)
   { 
   try 
   {
   const resp=await Attendance_Master.Save_Attendance_Master_Import(req.body);
   return res.send(resp);
   }
   catch(e)
   {
     console.log(e)
   return res.send(e);
   }
   });

   router.get('/Load_Employee/',function(req,res,next)
    { 
    try 
    {
      Attendance_Master.Load_Employee(function (err, rows) 
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

