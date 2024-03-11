var express = require('express');
var router = express.Router();
var Salary_Calculation_Master=require('../models/Salary_Calculation_Master');
router.post('/Save_Salary_Calculation_Master/',async function(req,res,next)
{ 
try 
{
const resp=await Salary_Calculation_Master.Save_Salary_Calculation_Master(req.body);
return res.send(resp);
}
catch(e){  
  console.log(e)
return res.send(e);
}
});
router.get('/Search_Salary_Calculation_Master/',function(req,res,next)
{ 
try 
{
Salary_Calculation_Master.Search_Salary_Calculation_Master(req.query.From_Date_,req.query.To_Date_,
  req.query.Is_Date_,req.query.Calculation_No_, function (err, rows) 
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
  console.log(e)
}
finally 
{
}
});
router.get('/Get_Salary_Calculation_Master/:Salary_Calculation_Master_Id_?',function(req,res,next)
{ 
try 
{
Salary_Calculation_Master.Get_Salary_Calculation_Master(req.params.Salary_Calculation_Master_Id_, function (err, rows) 
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
router.get('/Delete_Salary_Calculation_Master/:Salary_Calculation_Master_Id_?',function(req,res,next)
{ 
try 
{
Salary_Calculation_Master.Delete_Salary_Calculation_Master(req.params.Salary_Calculation_Master_Id_, function (err, rows) 
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
router.get('/Search_WPS_Employee/',function(req,res,next)
  { 
  try 
  {
    Salary_Calculation_Master.Search_WPS_Employee(req.query.From_Date_,req.query.To_Date_,
  req.query.Is_Date_,req.query.Store_Id_, function (err, rows)
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
  router.post('/Save_WPS_Salary_Calculation_Master/',async function(req,res,next)
  { 
  try 
  {
  const resp=await Salary_Calculation_Master.Save_WPS_Salary_Calculation_Master(req.body);
  return res.send(resp);
  }
  catch(e){  
  return res.send(e);
  }
  });
  router.get('/Search_WPS_Salary_Calculation_Master/',function(req,res,next)
    { 
    try 
    {
      Salary_Calculation_Master.Search_WPS_Salary_Calculation_Master(req.query.From_Date_,req.query.To_Date_,
    req.query.Is_Date_,req.query.Calculation_No_,req.query.Store_Id_, function (err, rows)
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
    router.get('/Get_WPS_Salary_Calculation_Master/:WPS_Salary_Calculation_Master_Id_?',function(req,res,next)
    { 
    try 
    {
    Salary_Calculation_Master.Get_WPS_Salary_Calculation_Master(req.params.WPS_Salary_Calculation_Master_Id_, function (err, rows) 
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
    router.get('/Delete_WPS_Salary_Calculation_Master/:WPS_Salary_Calculation_Master_Id_?',function(req,res,next)
    { 
    try 
    {
    Salary_Calculation_Master.Delete_WPS_Salary_Calculation_Master(req.params.WPS_Salary_Calculation_Master_Id_, function (err, rows) 
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
  router.get('/Search_Salary_Employee/',function(req,res,next)
    { 
    try 
    {
      Salary_Calculation_Master.Search_Salary_Employee(req.query.From_Date_,req.query.To_Date_,
    req.query.Is_Date_,req.query.Store_Id_, function (err, rows)
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
  router.get('/Get_Salary_Print_Details/:Salary_Calculation_Details_Id_?',function(req,res,next)
    { 
    try 
    {
    Salary_Calculation_Master.Get_Salary_Print_Details(req.params.Salary_Calculation_Details_Id_, function (err, rows) 
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

