var jdbc = require('../jdbc/connection')
var enCryption = require('../tools/enCryption')
var statisticsDao = {}

statisticsDao.getTotalExpend=function(data){
	return new Promise(function(resolve,reject){
	    var sql = 'SELECT baccount,bcategory,bincomeorpay FROM account_book'
	    // console.log(sql)
	    jdbc.query(sql, function (error, results, fields) {
		    if (error) {
		      return jdbc.rollback(function() {
		        throw error
		      });
		    }else{
		      resolve(results)
		    }
		})
	})
}
module.exports = statisticsDao