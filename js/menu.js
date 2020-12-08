//级联菜单
var college = document.getElementById("college");
var major = document.getElementById("major");
var course = document.getElementById("course");
var cos = ["计算机工程技术学院", "大数据与人工智能学院"];
cos["计算机工程技术学院"] = ["软件技术", "网络技术", "移动应用开发"];
cos["大数据与人工智能学院"] = ["云计算", "人工智能"];
cos["计算机工程技术学院"]["软件技术"] = ["用户交互设计与实现", "数据结构与算法", "网络布局与实现"];
cos["计算机工程技术学院"]["网络技术"] = ["计算机数学", "C语言", "SQL Sever"];
cos["计算机工程技术学院"]["移动应用开发"] = ["C语言", "计算机数学"];
cos["大数据与人工智能学院"]["云计算"] = ["linux", "Java"];
cos["大数据与人工智能学院"]["人工智能"] = ["linux", "C语言"];

function myInit() {
	for(var i = 0; cos.length > i; ++i) {
		college.innerHTML += "<option>" + cos[i] + "</option>";
	}
}
window.onload = myInit;

function loadMajor(){
	major.options.length = 0;
	var collegeName = college.value;
	for(var i = 0; cos[collegeName].length > i; ++i) {
		major.innerHTML += "<option>" + cos[collegeName][i] + "</option>";
	}
}

function loadCourse(){
	course.options.length = 0;
	var collegeName = college.value;
	var majorName = major.value;
	console.log(collegeName);
	console.log(majorName);
	for(var i = 0; cos[collegeName][majorName].length > i; ++i) {
		course.innerHTML += "<option>" + cos[collegeName][majorName][i] + "</option>";
	}
}
	