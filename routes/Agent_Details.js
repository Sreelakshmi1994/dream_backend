var express = require('express');
var router = express.Router();
var Agent_Details=require('../models/Agent_Details');
router.post('/Save_Agent_Details/',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Save_Agent_Details(req.body, function (err, rows) 
  {
  if (err) 
  {
  res.json(err);
  
  }
  else 
  {
  res.json(rows);
  console.log(rows);
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


// router.post('/Save_Agent_Details/',upload.array('myFile'), (req, res, next) =>
//  { 
//  try 
//  {
//   const file = req.files
//   console.log(file.length)
//   var Photo_ = [];
//   if (!file)
//   {

//   }
//   else
//   {
//     for (var i = 0; i < file.length; i++)
//     {
//       Photo_.push({  File_name: file[i].filename })
//     }
//   }

//   var Logo="";
//   if (Photo_.length>0)
//   {
//     Logo=Photo_[0].File_name;
//   }

//   var Photo_json = JSON.stringify(Photo_)
//   var Agent_Details_ = 
//   {
//     "Agent_Details_Id": req.body.Agent_Details_Id,
//     "Agent_Details_Name": req.body.Agent_Details_Name,
//     "Center_Code": req.body.Center_Code,
//     "Center_Name": req.body.Center_Name,
//     "Comm_Address1": req.body.Comm_Address1,
//     "Address1": req.body.Address1,
//     "Comm_Address2": req.body.Comm_Address2,
//     "Address2": req.body.Address2,
//     "Comm_Address3": req.body.Comm_Address3,
//     "Address3": req.body.Address3,
//     "Comm_Address4": req.body.Comm_Address4,
//     "Address4": req.body.Address4,
//     "Comm_Pincode": req.body.Comm_Pincode,
//     "Comm_Address1": req.body.Comm_Address1,
//     "Approval_Status": req.body.Approval_Status,
//     "Mobile": req.body.Mobile,
//     "Reg_No": req.body.Reg_No,
//     "Email": req.body.Email,
//     "Approval_date": req.body.Approval_date,
//     "Category_Id": req.body.Category_Id,
//     "Agent_Details_Fees": req.body.Agent_Details_Fees,
//     "Commission": req.body.Commission,
//     "Photo": Photo
//   };
//   //console.log(Company_)
//   Agent_Details.Save_Company(Agent_Details_, function(err, rows)
//   {
//     if (err)
//     {
//       return 1;
//     }
//     else
//     {
//       return res.json(rows);
//     }
//   });

// }
//  catch (err) 
//  {
//    const error = new Error('Please upload a file')
//    error.httpStatusCode = 400
//    return next(error)
//  }
//  finally 
//  {

//  }
//   });


router.get('/Search_Agent_Details/',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Search_Agent_Details(req.query.Agent_Details_Name, function (err, rows) 
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
  router.get('/Get_Agent_Details/:Agent_Details_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Get_Agent_Details(req.params.Agent_Details_Id_, function (err, rows) 
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
router.get('/Delete_Agent_Details/:Agent_Details_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Delete_Agent_Details(req.params.Agent_Details_Id_, function (err, rows) 
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
router.get("/Load_Agent_Details_Dropdowns",async (req, res, next) =>
  {
  try
  {
  const result = await Agent_Details.Load_Agent_Details_Dropdowns();
  res.json(result);
  console.log(result);
  } 
  catch (e) 
  {
  
  res.send(e);
  } 
  finally 
  {
  }
  });
router.get('/Load_Category_Commission/:Category_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Load_Category_Commission(req.params.Category_Id_, function (err, rows) 
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
router.get('/Save_Agent_Details_Registration/:Agent_Details_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Save_Agent_Details_Registration(req.params.Agent_Details_Id_, function (err, rows) 
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
router.get('/Delete_Agent_Details/:Agent_Details_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Delete_Agent_Details(req.params.Agent_Details_Id_, function (err, rows) 
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
router.get('/Remove_Registration/:Agent_Details_Id_?',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Remove_Registration(req.params.Agent_Details_Id_, function (err, rows) 
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
router.get('/Get_Menu_Status/:Menu_Id_?/:Login_User_?',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Get_Menu_Status(req.params.Menu_Id_,req.params.Login_User_, function (err, rows)
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
router.get('/Load_Mode',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Load_Mode( function (err, rows)
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


  router.get('/Load_Markstatus',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Load_Markstatus( function (err, rows)
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



router.get('/Accounts_Typeahead',function(req,res,next)
  { 
  try 
  {
  Agent_Details.Accounts_Typeahead(req.query.Account_Group_Id_,req.query.Client_Accounts_Name_, function (err, rows)
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
router.post('/Save_Receipt_Voucher/',function(req,res,next)
  { 
  try 
  {
    Agent_Details.Save_Receipt_Voucher(req.body, function (err, rows) 
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
  router.get('/Get_Receipt_History/:Agent_Details_Id_',function(req,res,next)
    { 
    try 
    {
    Agent_Details.Get_Receipt_History(req.params.Agent_Details_Id_, function (err, rows)
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
    router.get('/Delete_Receipt_Voucher/:Receipt_Voucher_Id_',function(req,res,next)
      { 
      try 
      {
      Agent_Details.Delete_Receipt_Voucher(req.params.Receipt_Voucher_Id_, function (err, rows)
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

      router.get('/Get_Agent_Detailsdetails_print/:User_Id_?',function(req,res,next)
      { 
      try 
      {
      Agent_Details.Get_Agent_Detailsdetails_print(req.params.User_Id_, function (err, rows) 
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
module.exports = router;

