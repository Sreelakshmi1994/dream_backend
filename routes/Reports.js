var express = require("express");
var router = express.Router();
var Reports = require("../models/Reports");

router.get("/Search_Booking_Arrival_Report/", function (req, res, next) {
  try {
    Reports.Search_Booking_Arrival_Report(
      req.query.Fromdate_,
      req.query.Todate_,
      req.query.Is_Date_Check_,
      req.query.Enquiry_No_,
      req.query.Booking_No_,
      req.query.Country_Id_,
      req.query.Guest_Name_,
      req.query.File_Handler_Id_,
      req.query.Enquiry_Status_Id_,
      req.query.Login_User_Id_,

      function (err, rows) {
        if (err) {
          console.log(err);
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

router.get("/Search_Staff_Productivity_Report/", function (req, res, next) {
  try {
    Reports.Search_Staff_Productivity_Report(
      req.query.Fromdate_,
      req.query.Todate_,
      req.query.Is_Date_Check_,
      req.query.File_Handler_Id_,
      req.query.Login_User_Id_,
      function (err, rows) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});

router.get("/Search_Agent_Productivity_Report/", function (req, res, next) {
  try {
    Reports.Search_Agent_Productivity_Report(
      req.query.Fromdate_,
      req.query.Todate_,
      req.query.Is_Date_Check_,
      req.query.Agent_Id_,
      req.query.Login_User_Id_,
      function (err, rows) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});

router.get("/Search_Team_Productivity_Report/", function (req, res, next) {
  try {
    Reports.Search_Team_Productivity_Report(
      req.query.Fromdate_,
      req.query.Todate_,
      req.query.Is_Date_Check_,
      req.query.Team_Id_,
      req.query.Login_User_Id_,
      function (err, rows) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});

router.get("/Search_Guest_Movement_Chart/", function (req, res, next) {
  try {
    Reports.Search_Guest_Movement_Chart(
      req.query.Fromdate_,
      req.query.Todate_,
      req.query.Is_Date_Check_,
      req.query.Supplier_Id_,
      req.query.Booking_No_,
      req.query.Login_User_Id_,
      function (err, rows) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});

router.get("/Search_Supplier_Payable_Report/", function (req, res, next) {
  try {
    Reports.Search_Supplier_Payable_Report(
      req.query.Fromdate_,
      req.query.Todate_,
      req.query.Is_Date_Check_,
      req.query.Supplier_Id_,
      req.query.Login_User_Id_,
      function (err, rows) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});
router.get("/Search_Sales_Report/", function (req, res, next) {
  try {
    Reports.Search_Sales_Report(
      req.query.Fromdate_,
      req.query.Todate_,
      req.query.Is_Date_Check_,
      req.query.Booking_No_,
      req.query.Party_,
      req.query.Payment_Status_Id_,

      function (err, rows) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});

router.get("/Search_Purchase_Report/", function (req, res, next) {
  try {
    Reports.Search_Purchase_Report(
      req.query.Fromdate_,
      req.query.Todate_,
      req.query.Is_Date_Check_,
      req.query.Invoice_No_,
      req.query.Party_,
      req.query.Payment_Status_Id_,
      function (err, rows) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});

// router.get("/Search_Sales_Report/", function (req, res, next) {
//   try {
//     Reports.Search_Sales_Report(
//       req.query.Fromdate_,
//       req.query.Todate_,
//       req.query.Is_Date_Check_,
//       req.query.Booking_No_,
//       req.query.Party_,
//       function (err, rows) {
//         if (err) {
//           console.log(err);
//           res.json(err);
//         } else {
//           res.json(rows);
//         }
//       }
//     );
//   } catch (e) {
//     console.log(e);
//   } finally {
//   }
// });

// router.get("/Search_Purchase_Report/", function (req, res, next) {
//   try {
//     Reports.Search_Purchase_Report(
//       req.query.Fromdate_,
//       req.query.Todate_,
//       req.query.Is_Date_Check_,
//       req.query.Invoice_No_,
//       req.query.Party_,
//       function (err, rows) {
//         if (err) {
//           console.log(err);
//           res.json(err);
//         } else {
//           res.json(rows);
//         }
//       }
//     );
//   } catch (e) {
//     console.log(e);
//   } finally {
//   }
// });

router.get("/Search_Hotel_Productivity_Report/", function (req, res, next) {
  try {
    Reports.Search_Hotel_Productivity_Report(
      req.query.Fromdate_,
      req.query.Todate_,
      req.query.Is_Date_Check_,
      req.query.Hotel_Id_,
      req.query.Login_User_Id_,
      function (err, rows) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});
router.get("/Search_Profit_Loss_Account_Report/", function (req, res, next) {
  try {
    Reports.Search_Profit_Loss_Account_Report(
      req.query.Fromdate_,
      req.query.Todate_,
      function (err, rows) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});
router.get("/Search_Agent_Receivable_Report/", function (req, res, next) {
  try {
    Reports.Search_Agent_Receivable_Report(
      req.query.Fromdate_,
      req.query.Todate_,
      req.query.Is_Date_Check_,
      req.query.Login_User_Id_,
      function (err, rows) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});
router.get("/Search_Notifications/", function (req, res, next) {
  try {
    Reports.Search_Notifications(
      req.query.Fromdate_,
      req.query.Todate_,
      req.query.Is_Date_Check_,
      req.query.Notification_Type_Id_,
      req.query.Login_User_Id_,
      req.query.Page_Index_,
      req.query.Page_Length_,
      function (err, rows) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } catch (e) {
    console.log(e);
  } finally {
  }
});

router.get(
  "/Search_Account_Group_Report/:FromDate_?/:ToDate_?",
  function (req, res, next) {
    try {
      console.log(req.params);
      Reports.Search_Account_Group_Report(
        req.params.FromDate_,
        req.params.ToDate_,
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
  }
);
router.get(
  "/Search_Trail_Balance_Report/:FromDate_?/:ToDate_?",
  function (req, res, next) {
    try {
      console.log(req.params);
      Reports.Search_Trail_Balance_Report(
        req.params.FromDate_,
        req.params.ToDate_,
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
  }
);


router.get(
  "/Search_Balance_Sheet_Report/:FromDate_?/:ToDate_?",
  function (req, res, next) {
    try {
      console.log(req.params);
      Reports.Search_Balance_Sheet_Report(
        req.params.FromDate_,
        req.params.ToDate_,
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
  }
);

router.get(
  "/Search_Closing_Balance_Report/:FromDate_?/:ToDate_?",
  function (req, res, next) {
    try {
      console.log(req.params);
      Reports.Search_Closing_Balance_Report(
        req.params.FromDate_,
        req.params.ToDate_,
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
  }
);

// router.get('/Search_Account_Group_Report/:Fromdate_?/:Todate_?', async function (req, res, next) {
// 	var result = '';
// 	try {

// 		result = await Reports.Search_Account_Group_Report(req.params.Fromdate_, req.params.Todate_);

// 		res.json(result);
// 	}
// 	catch (e) {

// 	}
// 	finally {

// 	}
//   });
router.get(
  "/Search_Trail_Balance/:FromDate_?/:ToDate_?",
  function (req, res, next) {
    try {
      console.log("nnnnnhnhnh",req.params);
      Reports.Search_Trail_Balance(
        req.params.FromDate_,
        req.params.ToDate_,
        function (err, rows) {
          if (err) {
            res.json(err);
            console.log(err);
          } else {
            res.json(rows);
            console.log(rows);
          }
        }
      );
    } catch (e) {
      console.log(e);
    } finally {
    }
  }
);

module.exports = router;
