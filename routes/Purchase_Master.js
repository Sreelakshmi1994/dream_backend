 var express = require('express');
 var router = express.Router();
 var Purchase_Master=require('../models/Purchase_Master');
 const upload = require('../helpers/multer-helper');
 
      router.post('/Save_Purchase_Master', (req, res, next) =>
      {
       try
       {
        
           var Purchase_D
       
           console.log('req.body: ', req.body);
           Purchase_D =
           {
              "Purchase_Master_Id": req.body.Purchase_Master_Id,
             "Account_Party_Id":req.body.Account_Party_Id,
             //"Entry_Date":req.body.Entry_Date,
             "PurchaseDate":req.body.PurchaseDate,
             "InvoiceNo":req.body.InvoiceNo,
            //  "Discount":req.body.Discount,
            //  "Roundoff":req.body.Roundoff,
            //  "Total":req.body.Total,
            //  "TotalDiscount":req.body.TotalDiscount,
            //  "TaxableAmount":req.body.TaxableAmount,
            //  "TotalCGST":req.body.TotalCGST,
            //  "TotalSGST":req.body.TotalSGST,             
            //  "Other_Charges":req.body.Other_Charges,
            //  "GrossTotal":req.body.GrossTotal,
             "NetTotal":req.body.NetTotal,
            // "BillType":req.body.BillType,
             "User_Id":req.body.User_Id,
             "Description":req.body.Description,
             "Purchase_Details":req.body.Purchase_Details,
              // "Document_Name": req.body.Document_Name,
              // "File_Name": Doc_Image,
              "Item_Group_Id": req.body.Item_Group_Id,
              "Purchase_Status_Id":req.body.Purchase_Status_Id,
              "Approved_By":req.body.Approved_By,
              "title": req.body.title
           };
  
          
         var jsondata1 = JSON.stringify(Purchase_D)
       
      
         console.log('Purchase_Data: ', Purchase_Data);
         var Purchase_Data=
         {
           "Purchase": jsondata1,
          // "Purchase_document":Photo_json,
      
         };
         Purchase_Master.Save_Purchase_Master(Purchase_Data, function (err, rows)
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
         
        //  const error = new Error('Please upload a file')
        //  error.httpStatusCode = 400
         return next(error)
       }
         finally 
         {
         }
       }
      );   
      router.get("/Load_Purchase_Status/", function (req, res, next) {
        try {
          Purchase_Master.Load_Purchase_Status(function (err, rows) {
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
router.get('/Search_Item_Typeahead/:Item_Name_?',function(req,res,next)
    { 
    try 
    {
    Purchase_Master.Search_Item_Typeahead(req.params.Item_Name_, function (err, rows) 
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

router.get('/Search_Purchase_Master/:Is_Date_Check_?/:FromDate_?/:ToDate_?/:Account_Party_Id_?/:InvoiceNo_?/:Status_?',function(req,res,next)
    { 
    try 
    {
    Purchase_Master.Search_Purchase_Master(req.params.Is_Date_Check_,req.params.FromDate_,req.params.ToDate_,req.params.Account_Party_Id_,req.params.InvoiceNo_,req.params.Status_, function (err, rows) 
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

router.get('/Get_Purchase_Master/:Purchase_Master_Id_?',function(req,res,next)
    { 
    try 
    {
    Purchase_Master.Get_Purchase_Master(req.params.Purchase_Master_Id_, function (err, rows) 
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
router.get('/Delete_Purchase_Master/:Purchase_Master_Id_?',function(req,res,next)
    { 
    try 
    {
    Purchase_Master.Delete_Purchase_Master(req.params.Purchase_Master_Id_, function (err, rows) 
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

router.get('/Get_Purchase_Typeahead/:ItemName_?',function(req,res,next)
  { 
  try 
  {
    Purchase_Master.Get_Purchase_Typeahead(req.params.ItemName_, function (err, rows)
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
router.get('/Get_Purchase_Item_Typeahead/:ItemName_?',function(req,res,next)
  { 
  try 
  {
    Purchase_Master.Get_Purchase_Item_Typeahead(req.params.ItemName_, function (err, rows) 
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
  
  router.get('/Get_Barcode_Purchase/:Barcode_?',function(req,res,next)
  { 
  try 
  {
    Purchase_Master.Get_Barcode_Purchase(req.params.Barcode_, function (err, rows) 
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
    Purchase_Master.Search_Service_Type_Typeahead(req.query.Service_Type_Name_, function (err, rows)
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

router.get('/Get_Purchase_Details/:Purchase_Master_Id_?',function(req,res,next)
{ 
try 
{
Purchase_Master.Get_Purchase_Details(req.params.Purchase_Master_Id_, function (err, rows) 
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

router.get('/Search_Purchase_Report',function(req,res,next)
{
    try
    {
      Purchase_Master.Search_Purchase_Report(req.query.Is_Date_Check_, req.query.From_Date_, req.query.To_Date_, req.query.Account_Party_Id_,
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
router.get('/Search_Purchase_Details_Report',function(req,res,next)
{
    try
    {
      Purchase_Master.Search_Purchase_Details_Report(req.query.Is_Date_Check_, req.query.From_Date_, req.query.To_Date_, req.query.Account_Party_Id_,
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

router.get('/Load_Hsn_Purchase_Report',function(req,res,next)
{
    try
    {
      Purchase_Master.Load_Hsn_Purchase_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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
      Purchase_Master.Load_Hsn_Service_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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
router.get('/Load_Hsn_Purchase_Return_Report',function(req,res,next)
{
    try
    {
      Purchase_Master.Load_Hsn_Purchase_Return_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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

router.get('/Load_Purchase_SaleTax_Report',function(req,res,next)
{
    try
    {
      Purchase_Master.Load_Purchase_SaleTax_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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
router.get('/Load_Purchase_Return_Tax_Report',function(req,res,next)
{
    try
    {
      Purchase_Master.Load_Purchase_Return_Tax_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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
      Purchase_Master.Load_Service_Tax_Report(req.query.From_Date_, req.query.To_Date_, function(err,rows)
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


router.get('/Search_Purchase_Return_Report',function(req,res,next)
{
    try
    {
      Purchase_Master.Search_Purchase_Return_Report(req.query.Is_Date_Check_, req.query.From_Date_, req.query.To_Date_, req.query.Account_Party_Id_,
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
  

router.get('/Search_Purchase_Return_Details_Report',function(req,res,next)
{
    try
    {
      Purchase_Master.Search_Purchase_Return_Details_Report(req.query.Is_Date_Check_, req.query.From_Date_, req.query.To_Date_, req.query.Account_Party_Id_,
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
        const resp=await Purchase_Master.Save_Service(req.body);
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
      Purchase_Master.Search_Service(req.query.Is_Date_Check_, req.query.FromDate_, req.query.ToDate_, req.query.Account_Party_Id_, req.query.InvoiceNo_, function (err, rows)
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
      Purchase_Master.Search_Service_Details_Report(req.query.Is_Date_Check_, req.query.FromDate_, req.query.ToDate_, req.query.Account_Party_Id_,
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
      Purchase_Master.Get_Service(req.params.Service_Id_, function (err, rows)
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
      Purchase_Master.Delete_Service(req.params.Service_Id_, function (err, rows)
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

