 var express = require('express');
 var router = express.Router();
 var Leave_Request=require('../models/Leave_Request');
 router.post('/Save_Leave_Request/',function(req,res,next)
 { 
 try 
 {
Leave_Request.Save_Leave_Request(req.body, function (err, rows) 
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
  router.post('/Save_Leave_Request_Admin/',function(req,res,next)
  { 
  try 
  {
 Leave_Request.Save_Leave_Request_Admin(req.body, function (err, rows) 
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
 router.get('/Search_Leave_Request/',function(req,res,next)
 { 
 try 
 {
Leave_Request.Search_Leave_Request(req.query.Client_Accounts_Id,req.query.Status_Id_, function (err, rows) 
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
  router.get('/Search_Leave_Request_Admin/',function(req,res,next)
  { 
  try 
  {
 Leave_Request.Search_Leave_Request_Admin(req.query.Fromdate_,req.query.Todate_,req.query.Leave_Request_Party_Name_,req.query.Date_Value_,req.query.Store_Id_,req.query.Status_Id_, function (err, rows) 
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
   router.get('/Search_Leave_Report_Admin/',function(req,res,next)
   { 
   try 
   {
  Leave_Request.Search_Leave_Report_Admin(req.query.Fromdate_,req.query.Todate_,req.query.Leave_Request_Party_Name_,req.query.Store_Id_, function (err, rows) 
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
   router.get('/Load_Leave_Type_Dropdown/',function(req,res,next)
   { 
   try 
   {
     Leave_Request.Load_Leave_Type_Dropdown( function (err, rows)
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
   router.get('/Get_Leave_Count/:Client_Accounts_Id?',function(req,res,next)
     { 
     try 
     {
     Leave_Request.Get_Leave_Count(req.params.Client_Accounts_Id, function (err, rows) 
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
 router.get('/Get_Leave_Request/:Leave_Request_Id_?',function(req,res,next)
 { 
 try 
 {
Leave_Request.Get_Leave_Request(req.params.Leave_Request_Id_, function (err, rows) 
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
 router.get('/Delete_Leave_Request/:Leave_Request_Id_?',function(req,res,next)
 { 
 try 
 {
Leave_Request.Delete_Leave_Request(req.params.Leave_Request_Id_, function (err, rows) 
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