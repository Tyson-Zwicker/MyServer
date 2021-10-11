export function getUnixTime(){
	return new Date.Now;
}
export function getUnixTimeSpan(startTime, endTime){
	return endTime-startTime;
}
export function getTimeStamp() {
	const now = new Date(Date.now());
	return {
		'year': now.getFullYear(),
		'month': now.getMonth() + 1,
		'date': now.getDate(),
		'hour': now.getHours(),
		'minute': now.getMinutes(),
		'second': now.getSeconds()
	};
}
export function getTimeStampString() {
	const stamp = getTimeStamp();
	var year = stamp.year.toString();
	var month = stamp.month.toString().padStart(2, '0');
	var date = stamp.date.toString().padStart(2, '0');
	var hour = stamp.hour.toString().padStart(2, '0');
	var minute = stamp.minute.toString().padStart(2, '0');
	var second = stamp.second.toString().padStart(2, '0');
	return year + month + date + ':' + hour + minute + second;
}