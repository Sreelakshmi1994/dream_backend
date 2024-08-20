 var express = require('express');
 var router = express.Router();
 var Payment_Request=require('../models/Payment_Request');
 const upload = require('../helpers/multer-helper');
 
      router.post('/Save_Payment_Request', (req, res, next) =>
      {
       try
       {
         const file = req.files
      var Doc_Image = ""
         var Photo_ = [];
         if (!file) 
         {
         }
         else
         {
           
          for (var i = 0; i < req.body.Document_File_Array; i++) {
            if (i == req.body.ImageFile_Doc) Doc_Image = file[i].filename;
          }
      
         }
           var Photo_json = JSON.stringify(Photo_)
           var Payment_D
           console.log('req.body.Payment_Details: ', req.body.Payment_Request_Details);
       
           Payment_D =
           {
              "Payment_Request_Id": req.body.Payment_Request_Id,
             "Account_Party_Id":req.body.Account_Party_Id,
             "Entry_Date":req.body.Entry_Date,
             "PaymentDate":req.body.PaymentDate,
             "InvoiceNo":req.body.InvoiceNo,
             "Discount":req.body.Discount,
             "Roundoff":req.body.Roundoff,
             "Total":req.body.Total,
             "TotalDiscount":req.body.TotalDiscount,
             "TaxableAmount":req.body.TaxableAmount,
             "TotalCGST":req.body.TotalCGST,
             "TotalSGST":req.body.TotalSGST,             
             "Other_Charges":req.body.Other_Charges,
             "GrossTotal":req.body.GrossTotal,
             "NetTotal":req.body.NetTotal,
             "BillType":req.body.BillType,
             "User_Id":req.body.User_Id,
             "Description":req.body.Description,
              "Payment_Request_Details":req.body.Payment_Request_Details,
              "Document_Name": req.body.Document_Name,
              "File_Name": Doc_Image,
              "Item_Group_Id": req.body.Item_Group_Id,
              "Item_Group_Name": req.body.Item_Group_Name,
              "Payment_Status_Id":req.body.Payment_Status_Id,
              "Approved_By":req.body.Approved_By,
              "User_Id":req.body.User_Id,
              "title": req.body.title
           };
  
          
         var jsondata1 = JSON.stringify(Payment_D)
       
      
         var Payment_Data=
         {
           "Payment": jsondata1,
           "Payment_document":Photo_json,
      
         };
         Payment_Request.Save_Payment_Request(Payment_Data, function (err, rows)
             {
      
             if (err) 
             {
               console.log(err)
               return 1;
             }
             else
             {
               return res.json(rows);
             }
           });
         
       }
      
       catch (err) 
       {
         
         const error = new Error('Please upload a file')
         error.httpStatusCode = 400
         return next(error)
       }
         finally 
         {
         }
       }
      );   
router.get('/Search_Item_Typeahead/:Item_Name_?',function(req,res,next)
    { 
    try 
    {
    Payment_Request.Search_Item_Typeahead(req.params.Item_Name_, function (err, rows) 
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



    router.post('/Save_Payment_Approval', upload.array('myFile'), (req, res, next) =>
    {
     try
     {
       const file = req.files
    var Doc_Image = ""
       var Photo_ = [];
       if (!file) 
       {
       }
       else
       {
         
        for (var i = 0; i < req.body.Document_File_Array; i++) {
          if (i == req.body.ImageFile_Doc) Doc_Image = file[i].filename;
        }
    
       }
         var Photo_json = JSON.stringify(Photo_)
         var Payment_D
     
         Payment_D =
         {
            "Payment_Request_Id": req.body.Payment_Request_Id,
           "Account_Party_Id":req.body.Account_Party_Id,
           
           "Payment_Status_Id":req.body.Payment_Status_Id,
           "Entry_Date":req.body.Entry_Date,
           "PaymentDate":req.body.PaymentDate,
           "InvoiceNo":req.body.InvoiceNo,
           "Discount":req.body.Discount,
           "Roundoff":req.body.Roundoff,
           "Total":req.body.Total,
           "TotalDiscount":req.body.TotalDiscount,
           "TaxableAmount":req.body.TaxableAmount,
           "TotalCGST":req.body.TotalCGST,
           "TotalSGST":req.body.TotalSGST,             
           "Other_Charges":req.body.Other_Charges,
           "GrossTotal":req.body.GrossTotal,
           "NetTotal":req.body.NetTotal,
           "BillType":req.body.BillType,
           "User_Id":req.body.User_Id,
           "Description":req.body.Description,
            "Payment_Request_Details":req.body.Payment_Details,
            "Document_Name": req.body.Document_Name,
            "File_Name": Doc_Image,
            "Item_Group_Id": req.body.Item_Group_Id,
            "Item_Group_Name": req.body.Item_Group_Name,
         };

        
       var jsondata1 = JSON.stringify(Payment_D)
     
    
       var Payment_Data=
       {
         "Payment": jsondata1,
         "Payment_document":Photo_json,
    
       };
       Payment_Request.Save_Payment_Approval(Payment_Data, function (err, rows)
           {
    
           if (err) 
           {
             console.log(err)
             return 1;
           }
           else
           {
             return res.json(rows);
           }
         });
       
     }
    
     catch (err) 
     {
       
       const error = new Error('Please upload a file')
       error.httpStatusCode = 400
       return next(error)
     }
       finally 
       {
       }
     }
    );  

router.get('/Search_Payment_Request/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Account_Party_Id_?/:InvoiceNo_?/:Status_?',function(req,res,next)
    { 
    try 
    {
    Payment_Request.Search_Payment_Request(req.params.Is_Date_Check_,req.params.FromDate_,req.params.ToDate_,req.params.Account_Party_Id_,req.params.InvoiceNo_,req.params.Status_, function (err, rows) 
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









    router.get('/Search_Payment_Approval/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Account_Party_Id_?/:InvoiceNo_?/:Status_?',function(req,res,next)
    { 
    try 
    {
    Payment_Request.Search_Payment_Approval(req.params.Is_Date_Check_,req.params.FromDate_,req.params.ToDate_,req.params.Account_Party_Id_,req.params.InvoiceNo_,req.params.Status_, function (err, rows) 
    {
    if (err) 
    {
      console.log(err);
    res.json(err);
    }
    else 
    {
      console.log(rows);
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
router.get('/Get_Payment_Request/:Payment_Request_Id_?',function(req,res,next)
    { 
    try 
    {
    Payment_Request.Get_Payment_Request(req.params.Payment_Request_Id_, function (err, rows) 
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
router.get('/Delete_Payment_Request/:Payment_Request_Id_?',function(req,res,next)
    { 
    try 
    {
    Payment_Request.Delete_Payment_Request(req.params.Payment_Request_Id_, function (err, rows) 
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

router.get('/Get_Payment_Typeahead/:ItemName_?',function(req,res,next)
  { 
  try 
  {
    Payment_Request.Get_Payment_Typeahead(req.params.ItemName_, function (err, rows)
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
router.get('/Get_Payment_Item_Typeahead/:ItemName_?',function(req,res,next)
  { 
  try 
  {
    Payment_Request.Get_Payment_Item_Typeahead(req.params.ItemName_, function (err, rows) 
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
  



  router.get('/PR_Change/:InvoiceNo_?',function(req,res,next)
  { 
  try 
  {
    Payment_Request.PR_Change(req.params.InvoiceNo_, function (err, rows) 
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




  router.get('/Get_Barcode_Payment/:Barcode_?',function(req,res,next)
  { 
  try 
  {
    Payment_Request.Get_Barcode_Payment(req.params.Barcode_, function (err, rows) 
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

  
  
router.get('/Search_Service_Type_Typeahead',function(req,res,next)
  { 
  try 
  {
    Payment_Request.Search_Service_Type_Typeahead(req.query.Service_Type_Name_, function (err, rows)
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

router.get('/Get_Payment_Request_Details/:Payment_Request_Id_?',function(req,res,next)
{ 
try 
{
Payment_Request.Get_Payment_Request_Details(req.params.Payment_Request_Id_, function (err, rows) 
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
router.get("/Load_Status/", function (req, res, next) {
	try {
		Payment_Request.Load_Status(function (err, rows) {
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
router.get('/Search_Payment_Report',function(req,res,next)
{
    try
    {
      Payment_Request.Search_Payment_Report(req.query.Is_Date_Check_, req.query.From_Date_, req.query.To_Date_, req.query.Account_Party_Id_,
        req.query.Voucher_No,function(err,rows)
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
router.get('/Search_Payment_Request_Details_Report',function(req,res,next)
{
    try
    {
      Payment_Request.Search_Payment_Request_Details_Report(req.query.Is_Date_Check_, req.query.From_Date_, req.query.To_Date_, req.query.Account_Party_Id_,
        req.query.Voucher_No, req.query.Item_Id,function(err,rows)
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

router.get('/Load_Hsn_Payment_Report',function(req,res,next)
{
    try
    {
      Payment_Request.Load_Hsn_Payment_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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

router.get('/Load_Hsn_Service_Report',function(req,res,next)
{
    try
    {
      Payment_Request.Load_Hsn_Service_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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
router.get('/Load_Hsn_Payment_Return_Report',function(req,res,next)
{
    try
    {
      Payment_Request.Load_Hsn_Payment_Return_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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

router.get('/Load_Payment_SaleTax_Report',function(req,res,next)
{
    try
    {
      Payment_Request.Load_Payment_SaleTax_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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
router.get('/Load_Payment_Return_Tax_Report',function(req,res,next)
{
    try
    {
      Payment_Request.Load_Payment_Return_Tax_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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
router.get('/Load_Service_Tax_Report',function(req,res,next)
{
    try
    {
      Payment_Request.Load_Service_Tax_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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


router.get('/Search_Payment_Return_Report',function(req,res,next)
{
    try
    {
      Payment_Request.Search_Payment_Return_Report(req.query.Is_Date_Check_, req.query.From_Date_, req.query.To_Date_, req.query.Account_Party_Id_,
        req.query.Voucher_No,function(err,rows)
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
  

router.get('/Search_Payment_Return_Details_Report',function(req,res,next)
{
    try
    {
      Payment_Request.Search_Payment_Return_Details_Report(req.query.Is_Date_Check_, req.query.From_Date_, req.query.To_Date_, req.query.Account_Party_Id_,
        req.query.Voucher_No, req.query.Item_Id,function(err,rows)
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
  router.post('/Save_Service/',async function(req,res,next)
        { 
        try 
        {
        const resp=await Payment_Request.Save_Service(req.body);
        return res.send(resp);
        }
        catch(e){
        return res.send(e);
        }
      });
      
router.get('/Search_Service/',function(req,res,next)
    { 
    try 
    {
      Payment_Request.Search_Service(req.query.Is_Date_Check_, req.query.FromDate_, req.query.ToDate_, req.query.Account_Party_Id_, req.query.InvoiceNo_, function (err, rows)
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

      
router.get('/Search_Service_Details_Report/',function(req,res,next)
    { 
    try 
    {
      Payment_Request.Search_Service_Details_Report(req.query.Is_Date_Check_, req.query.FromDate_, req.query.ToDate_, req.query.Account_Party_Id_,
        req.query.InvoiceNo_, req.query.Service_Type_Id, function (err, rows)
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
router.get('/Get_Service/:Service_Id_?',function(req,res,next)
    { 
    try 
    {
      Payment_Request.Get_Service(req.params.Service_Id_, function (err, rows)
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
router.get('/Delete_Service/:Service_Id_?',function(req,res,next)
    { 
    try 
    {
      Payment_Request.Delete_Service(req.params.Service_Id_, function (err, rows)
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

