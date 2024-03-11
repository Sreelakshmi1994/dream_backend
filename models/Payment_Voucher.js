var db=require('../dbconnection');
var fs = require('fs');
const storedProcedure = require('../helpers/stored-procedure');
var Payment_Voucher=
{ 
// Save_Payment_Voucher:function(Payment_Voucher_,callback)
//     { 
//             //  console.log(Payment_Voucher_)
//     return db.query("CALL Save_Payment_Voucher("+"@Payment_Voucher_Id_ :=?,"+"@Date_ :=?,"+
//     "@From_Account_Id_ :=?,"+"@Amount_ :=?,"+"@To_Account_Id_ :=?,"+"@Payment_Mode_ :=?,"+
//     "@User_Id_ :=?,"+"@Payment_Status_ :=?,"+"@Description_ :=?"+")"
//     ,[Payment_Voucher_.Payment_Voucher_Id,Payment_Voucher_.Date,Payment_Voucher_.From_Account_Id,
//     Payment_Voucher_.Amount,Payment_Voucher_.To_Account_Id,Payment_Voucher_.Payment_Mode,
//     Payment_Voucher_.User_Id,Payment_Voucher_.Payment_Status,Payment_Voucher_.Description],callback);Payment_Voucher_.Purchase_Payment,
//     },
Save_Payment_Voucher: async function (Payment_Voucher_) {
        return new Promise(async (rs, rej) => {
            const pool = db.promise();
            let result1;
            var connection = await pool.getConnection();
            try {
                console.log(Payment_Voucher_)
                const result1 = await (new storedProcedure('Save_Payment_Voucher', [Payment_Voucher_.Payment_Voucher_Id, Payment_Voucher_.Date,
                Payment_Voucher_.From_Account_Id,Payment_Voucher_.Amount,Payment_Voucher_.To_Account_Id,Payment_Voucher_.Payment_Mode,
                    Payment_Voucher_.User_Id, Payment_Voucher_.Payment_Status, Payment_Voucher_.Description, Payment_Voucher_.prno,Payment_Voucher_.Payment_Request_Id], connection)).result();
                console.log(result1)
                await connection.commit();
                connection.release();
                rs(result1);
            }
            catch (err) {
                console.log(err)
                await connection.rollback();
                rej(err);
                var result2 = [{ 'Payment_Voucher_Id_': 0 }]
                rs(result2);
            }
            finally {
                connection.release();
            }
        })
    },
Delete_Payment_Voucher:function(Payment_Voucher_Id_,callback)
    { 
    return db.query("CALL Delete_Payment_Voucher(@Payment_Voucher_Id_ :=?)",[Payment_Voucher_Id_],callback);
    },
    Get_Purchase_Payment:function(Payment_Voucher_Id_,callback)
    { 
        return db.query("CALL Get_Purchase_Payment(@Payment_Voucher_Id_ :=?)",[Payment_Voucher_Id_],callback);
    },
SelectSettledBills:function(Account_Party_Id_,callback)
    { 
    return db.query("CALL SelectSettledBills(@Account_Party_Id_ :=?)", [Account_Party_Id_],callback);
    },
Search_Payment_Voucher:function(From_Date_,To_Date_,From_Account_Id_,To_Account_Id_,Voucher_No_,Is_Date_Check_,callback)
    { 
    return db.query("CALL Search_Payment_Voucher(@From_Date_ :=?,@To_Date_ :=?,@From_Account_Id_ :=?,@To_Account_Id_ :=?,@Voucher_No_  :=?,@Is_Date_Check_ :=?)",[From_Date_,To_Date_,From_Account_Id_,To_Account_Id_,Voucher_No_,Is_Date_Check_],callback);
    },
Get_Payment_Mode:function(callback)
    { 
    return db.query("CALL Get_Payment_Mode()",[],callback);
    },
};
module.exports=Payment_Voucher;

