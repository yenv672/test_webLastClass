var CronJob = require('cron').CronJob,
		 fs = require('fs');

//seconds, minutes, hours, days, months, weekdays
new CronJob('0,5,10,15,20,25,30,35,40,45,50,55 * * * * *', function(){
	
	saveCurrTime();
	
}, null, true, 'UTC');

function saveCurrTime(){
	
	var myData = new Date();
	myData = myData.toString() + '\n';

	fs.appendFile('timestamps.txt', myData, function(err) {
		if (err) {
			console.log('error');
		} else {
			console.log('Writing file Async: ' + myData);
		}
	});
}