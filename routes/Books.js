var express = require('express');
var router = express.Router();
var Books=require('../models/Books');
router.post('/Save_Books/',function(req,res,next)
{ 
try 
{
    Books.Save_Books(req.body, function (err, rows) 
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
router.get('/Search_Batch/',function(req,res,next)
{ 
try 
{
Batch.Search_Batch(req.query.Batch_Name, function (err, rows) 
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
router.get('/Get_Books/:Books_Id_?',function(req,res,next)
{ 
try 
{
    Books.Get_Books(req.params.Books_Id_, function (err, rows) 
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
router.get('/Delete_Batch/:Batch_Id_?',function(req,res,next)
{ 
try 
{
Batch.Delete_Batch(req.params.Batch_Id_, function (err, rows) 
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

router.get("/Search_Books_Report/", function (req, res, next) {
	try {
		Books.Search_Books_Report(
			
			req.query.search_name_,
			req.query.Books_No_,
			function (err, rows) {
				if (err) {
                    console.log(err)
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Search_BooksViewdetails_Report/", function (req, res, next) {
	try {
		Books.Search_BooksViewdetails_Report(
			
			req.query.Books_Id_,
			
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});

router.get("/Search_BooksIssued_Report/", function (req, res, next) {
	try {
		Books.Search_BooksIssued_Report(
			
		
			req.query.Books_No_,
            req.query.Registration_No_,
			req.query.Search_By_,
			function (err, rows) {
				if (err) {
					    console.log(err)
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});


router.get("/Search_Books_Issued_Report/", function (req, res, next) {
	try {
		Books.Search_Books_Issued_Report(
			
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Books_No_,
            req.query.Registration_No_,
			function (err, rows) {
				if (err) {
					console.log(err)
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});


router.get("/Search_Books_Return_Report/", function (req, res, next) {
	try {
		Books.Search_Books_Return_Report(
			
			req.query.Is_Date_,
			req.query.From_Date_,
			req.query.To_Date_,
			req.query.Books_No_,
            req.query.Registration_No_,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});



router.get("/Search_Books_Typeahead/", function (req, res, next) {
	try {
		Books.Search_Books_Typeahead(
			req.query.Books_Name,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});




router.get("/Search_Books_Issued_Typeahead/", function (req, res, next) {
	try {
		Books.Search_Books_Issued_Typeahead(
			req.query.Books_Name,
			function (err, rows) {
				if (err) {
					res.json(err);
				} else {
					res.json(rows);
				}
			}
		);
	} catch (e) {
	} finally {
	}
});




router.get("/Search_BooksNo_Typeahead/", function (req, res, next) {
	try {
		Books.Search_BooksNo_Typeahead(
			req.query.Books_No,
            
			function (err, rows) {
				if (err) {
					res.json(err);
                    console.log(err)
				} else {
					res.json(rows);
                    console.log(rows)
				}
			}
		);
	} catch (e) {
        console.log(e)
	} finally {
	}
});


router.get("/Search_BooksNo_Issued_Typeahead/", function (req, res, next) {
	try {
		Books.Search_BooksNo_Issued_Typeahead(
			req.query.Books_No,
            
			function (err, rows) {
				if (err) {
					res.json(err);
                    console.log(err)
				} else {
					res.json(rows);
                    console.log(rows)
				}
			}
		);
	} catch (e) {
        console.log(e)
	} finally {
	}
})



router.get("/Search_Booksissued_Typeahead/", function (req, res, next) {
	try {
		Books.Search_Booksissued_Typeahead(
			req.query.Books_Id,
            req.query.Books_Name,
            req.query.Books_No,
            
			function (err, rows) {
				if (err) {
					res.json(err);
                    console.log(err)
				} else {
					res.json(rows);
                    console.log(rows)
				}
			}
		);
	} catch (e) {
        console.log(e)
	} finally {
	}
});


router.get("/Search_Student_Phonenumber_Typeahead/", function (req, res, next) {
	try {
		Books.Search_Student_Phonenumber_Typeahead(
			req.query.Phone,
            
			function (err, rows) {
				if (err) {
					res.json(err);
                    console.log(err)
				} else {
					res.json(rows);
                    console.log(rows)
				}
			}
		);
	} catch (e) {
        console.log(e)
	} finally {
	}
});

router.get("/Search_Student_Reg_Typeahead/", function (req, res, next) {
	try {
		console.log(req.query.Registration_No_)
		Books.Search_Student_Reg_Typeahead(
			req.query.Registration_No_,
            
			function (err, rows) {
				if (err) {
					res.json(err);
                    console.log(err)
				} else {
					res.json(rows);
                    console.log(rows)
				}
			}
		);
	} catch (e) {
        console.log(e)
	} finally {
	}
});



router.get('/Delete_Books/:Books_Id_?',function(req,res,next)
  { 
  try 
  {
    Books.Delete_Books(req.params.Books_Id_, function (err, rows) 
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


  router.get('/Delete_BooksIssued/:Books_Id_?',function(req,res,next)
  { 
  try 
  {
    Books.Delete_BooksIssued(req.params.Books_Id_, function (err, rows) 
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






  router.post('/Save_Books_Issued/',function(req,res,next)
  { 
  try 
  {
      Books.Save_Books_Issued(req.body, function (err, rows) 
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


  router.get('/BookIssued_Return/:Books_Issued_Id_?',function(req,res,next)
  { 
  try 
  {
    Books.BookIssued_Return(req.params.Books_Issued_Id_, function (err, rows) 
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

  router.get('/BookIssued_Cancel/:Books_Issued_Id_?',function(req,res,next)
  { 
  try 
  {
    Books.BookIssued_Cancel(req.params.Books_Issued_Id_, function (err, rows) 
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

  router.get('/Get_Books_IssuedDetails/:Books_Id_?',function(req,res,next)
  { 
  try 
  {
      Books.Get_Books_IssuedDetails(req.params.Books_Id_, function (err, rows) 
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

