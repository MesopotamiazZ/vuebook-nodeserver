var allControl={}
var userControl=require('./userControl')
var bookControl=require('./bookControl')
var statisticsControl=require('./statisticsControl')
var managements=[userControl, bookControl, statisticsControl];
allControl.setAllControl=function(app){
	for(m in managements){
		for(f in managements[m]){
		  managements[m][f](app)	  
	    }
	}
}
module.exports=allControl