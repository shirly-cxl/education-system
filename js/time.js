// JavaScript Document
function time(){
		//定义变量并获取值
		var vWeek,vWeek_s,vDay;
		vWeek = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
		var date =  new Date();
		year = date.getFullYear();
		month = date.getMonth() + 1;
		day = date.getDate();
		hours = date.getHours();
		minutes = date.getMinutes();
		seconds = date.getSeconds();
		vWeek_s = date.getDay();
	
		//给个位数数字前加"0"
		if(hours < 10)
			hours = "0" + hours;
		if(minutes < 10)
			minutes = "0" + minutes;
		if(seconds < 10)
			seconds = "0" + seconds;
		//输出
		document.getElementById("time").innerHTML = year + "年" + month + "月" + day + "日" + "\t" + vWeek[vWeek_s] + "<br>" + hours + "时" + minutes +"分" + seconds + "秒" ;

	};
	//每秒更新一次
	setInterval("time()",1000);
