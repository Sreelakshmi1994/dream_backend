var express = require('express');
var router = express.Router();
var Location=require('../models/Location');
router.post('/Save_Location/',function(req,res,next)
    { 
    try 
    {
    Location.Save_Location(req.body, function (err, rows) 
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
router.get('/Search_Location/:Location_Name_?',function(req,res,next)
    { 
    try 
    {
    Location.Search_Location(req.params.Location_Name_, function (err, rows) 
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
router.get('/Get_Location/:Location_Id_?',function(req,res,next)
    { 
    try 
    {
    Location.Get_Location(req.params.Location_Id_, function (err, rows) 
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
router.get('/Delete_Location/:Location_Id_?',function(req,res,next)
    { 
    try 
    {
    Location.Delete_Location(req.params.Location_Id_, function (err, rows) 
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
router.get('/Load_Location/',function(req,res,next)
    { 
    try 
    {
    Location.Load_Location( function (err, rows) 
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

