var statisticsControl = {}
var statisticsDao = require('../dao/statisticsDao')
var userLang = require('../lang/userLang')

statisticsControl.getTotalExpend=function(app){
  app.get('/get-totalExpend',function(req,res){
  	statisticsDao.getTotalExpend(req.query).then(function(data){
      res.status(200),
      res.json(data)
  	})
  })
}

module.exports=statisticsControl