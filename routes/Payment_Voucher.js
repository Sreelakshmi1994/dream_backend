var express = require('express');
var router = express.Router();
var Payment_Voucher=require('../models/Payment_Voucher');
// router.post('/Save_Payment_Voucher/',function(req,res,next)
//   { 
//   try 
//   {
//   Payment_Voucher.Save_Payment_Voucher(req.body, function (err, rows) 
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
  
router.post('/Save_Payment_Voucher/',async function(req,res,next)
      { 
      try 
      {         
        const resp = await Payment_Voucher.Save_Payment_Voucher(req.body);
      return res.send(resp);
      }
      catch(e){
        
      
      return res.send(e);
      }
    });
router.get('/Search_Payment_Voucher/:From_Date_?/:To_Date_?/:From_Account_Id_?/:To_Account_Id_?/:Voucher_No_?/:Is_Date_Check_?',function(req,res,next)
  { 
  try 
  {
  Payment_Voucher.Search_Payment_Voucher(req.params.From_Date_,req.params.To_Date_,  req.params.From_Account_Id_,
  req.params.To_Account_Id_, req.params.Voucher_No_,req.params.Is_Date_Check_,function (err, rows) 
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
router.get('/SelectSettledBills/:Account_Party_Id_?',function(req,res,next)
  { 
  try 
  {
    Payment_Voucher.SelectSettledBills(req.params.Account_Party_Id_, function (err, rows)
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
router.get('/Get_Purchase_Payment/:Payment_Voucher_Id_?',function(req,res,next)
  { 
  try 
  {
    Payment_Voucher.Get_Purchase_Payment(req.params.Payment_Voucher_Id_, function (err, rows)
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
router.get('/Delete_Payment_Voucher/:Payment_Voucher_Id_?',function(req,res,next)
  { 
  try 
  {
  Payment_Voucher.Delete_Payment_Voucher(req.params.Payment_Voucher_Id_, function (err, rows) 
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
router.get('/Get_Payment_Mode/',function(req,res,next)
  { 
  try 
  {
  Payment_Voucher.Get_Payment_Mode( function (err, rows) 
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

