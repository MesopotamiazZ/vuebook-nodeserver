var statisticsControl = {}
var statisticsDao = require('../dao/statisticsDao')
var userLang = require('../lang/userLang')

statisticsControl.getTotalExpend=function(app){ // 统计总共支出
  app.get('/get-totalExpend',function(req,res){
  	statisticsDao.getTotalExpend(req.query).then(function(data){
      res.status(200),
      res.json(data)
  	})
  })
}

statisticsControl.getechartsData=function(app){
  app.get('/get-echartsData',function(req,res){
  	// income
  	let income1 = statisticsDao.getJanIncome(req.query)
  	let income2 = statisticsDao.getFebIncome(req.query)
  	let income3 = statisticsDao.getMarIncome(req.query)
  	let income4 = statisticsDao.getAprIncome(req.query)
  	let income5 = statisticsDao.getMayIncome(req.query)
  	let income6 = statisticsDao.getJuneIncome(req.query)
  	let income7 = statisticsDao.getJulyIncome(req.query)
  	let income8 = statisticsDao.getAugIncome(req.query)
  	let income9 = statisticsDao.getSeptIncome(req.query)
  	let income10 = statisticsDao.getOctIncome(req.query)
  	let income11 = statisticsDao.getNovIncome(req.query)
  	let income12 = statisticsDao.getDecIncome(req.query)
  	// expend
  	let expend1 = statisticsDao.getJanExpend(req.query)
  	let expend2 = statisticsDao.getFebExpend(req.query)
  	let expend3 = statisticsDao.getMarExpend(req.query)
  	let expend4 = statisticsDao.getAprExpend(req.query)
  	let expend5 = statisticsDao.getMayExpend(req.query)
  	let expend6 = statisticsDao.getJuneExpend(req.query)
  	let expend7 = statisticsDao.getJulyExpend(req.query)
  	let expend8 = statisticsDao.getAugExpend(req.query)
  	let expend9 = statisticsDao.getSeptExpend(req.query)
  	let expend10 = statisticsDao.getOctExpend(req.query)
  	let expend11 = statisticsDao.getNovExpend(req.query)
  	let expend12 = statisticsDao.getDecExpend(req.query)
  	Promise.all([income1, income2, income3, income4, income5, income6, income7, income8, income9, income10, income11, income12, expend1, expend2, expend3, expend4, expend5, expend6, expend7, expend8, expend9, expend10, expend11, expend12]).then(values => { 
  	  res.status(200),
      res.json(values)
	  })
  })
}

module.exports=statisticsControl