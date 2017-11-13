var jdbc = require('../jdbc/connection')
var enCryption = require('../tools/enCryption')
var statisticsDao = {}

statisticsDao.getTotalExpend=function(data){
	return new Promise(function(resolve,reject){
	    var sql = 'SELECT baccount,bcategory,bincomeorpay,bdate FROM account_book WHERE uid = ' + data.uid
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

statisticsDao.getJanIncome=function(data){ // 1月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-01-01" and bdate < "2017-02-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getFebIncome=function(data){ // 2月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-02-01" and bdate < "2017-03-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getMarIncome=function(data){ // 三月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-03-01" and bdate < "2017-04-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getAprIncome=function(data){ // 四月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-04-01" and bdate < "2017-05-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getMayIncome=function(data){ // 五月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-05-01" and bdate < "2017-06-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getJuneIncome=function(data){ // 六月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-06-01" and bdate < "2017-07-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getJulyIncome=function(data){ // 七月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-07-01" and bdate < "2017-08-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getAugIncome=function(data){ // 八月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-08-01" and bdate < "2017-09-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getSeptIncome=function(data){ // 九月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-09-01" and bdate < "2017-10-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getOctIncome=function(data){ // 十月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-10-01" and bdate < "2017-11-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getNovIncome=function(data){ // 十一月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-11-01" and bdate < "2017-12-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getDecIncome=function(data){ // 十二月收入
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 1 and uid = '+ data.uid +' and bdate >= "2017-12-01" and bdate < "2018-01-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}

statisticsDao.getJanExpend=function(data){ // 1月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-01-01" and bdate < "2017-02-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}

statisticsDao.getFebExpend=function(data){ // 2月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-02-01" and bdate < "2017-03-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getMarExpend=function(data){ // 3月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-03-01" and bdate < "2017-04-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getAprExpend=function(data){ // 4月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-04-01" and bdate < "2017-05-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getMayExpend=function(data){ // 5月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-05-01" and bdate < "2017-06-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getJuneExpend=function(data){ // 6月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-06-01" and bdate < "2017-07-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getJulyExpend=function(data){ // 7月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-07-01" and bdate < "2017-08-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getAugExpend=function(data){ // 8月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-08-01" and bdate < "2017-09-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getSeptExpend=function(data){ // 9月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-09-01" and bdate < "2017-10-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getOctExpend=function(data){ // 10月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-10-01" and bdate < "2017-11-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getNovExpend=function(data){ // 11月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-11-01" and bdate < "2017-12-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
statisticsDao.getDecExpend=function(data){ // 12月支出
	return new Promise(function(resolve, reject) {
		var sql = 'SELECT sum(baccount) account from account_book WHERE bincomeorpay = 0 and uid = '+ data.uid +' and bdate >= "2017-12-01" and bdate < "2018-01-01"'
		jdbc.query(sql, function(error, results, fields) {
			if (error) {
				return jdbc.rollback(function() {
			        throw error
			    });
			} else {
				resolve(results)
			}
		})
	})
}
module.exports = statisticsDao