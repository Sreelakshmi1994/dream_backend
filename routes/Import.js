 var express = require('express');
 var router = express.Router();
 var Import=require('../models/Import');
 router.post("/Save_Data_Migration/", function (req, res) {
	try {
        console.log(req);
		Import.Save_Data_Migration(req.body, function (err, rows) {
			if (err) {
				console.log(err);
				res.json(err);
			} else {
				res.json(rows);
			}
		});
	} catch (e) {
        console.log(e)
	} finally {
	}
});
 router.post("/Student_duplicate_Import_Check/", function (req, res) {
    try {
        Import.Student_duplicate_Import_Check(req.body, function (err, rows) {
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } catch (e) {
    } finally {
    }
});



router.get('/Get_ToStaff_Student_DataCount_Excel/:Branch_?/:Followup_Date_?/:Department_?',function(req,res,next)
 { 
 try 
 {
        
    Import.Get_ToStaff_Student_DataCount_Excel(req.params.Branch_,req.params.Followup_Date_,req.params.Department_, function (err, rows) 
 {
  if (err) 
  {
     console.log(err)
  res.json(err);
  }
  else 
  {
    console.log(rows)
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
  module.exports = router;

