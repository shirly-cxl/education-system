 //js.js

// JavaScript Document

$(document).ready(function(){
	
	//验证用户名
	$("input:eq(0)").focusout(function(){
//		console.log(1);
		var reg=/^[^0-9]{4,17}$/;
		if($(this).val() == ""){
			$(this).parent().parent().next().html("用户名不能为空").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else if(!reg.test($(this).val())){
			$(this).parent().parent().next().html("用户名必须是4-16位字母组成").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else{
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
		}
	}).focusin(function(){
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
	})
	
	//验证密码
	$("input:eq(1)").focusout(function(){
//		console.log(1);
		var reg=/^\S{4,11}$/;
		if($(this).val() == ""){
			$(this).parent().parent().next().html("密码不能为空").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else if(!reg.test($(this).val())){
			$(this).parent().parent().next().html("密码必须是4-10位字符组成").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else{
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
		}
	}).focusin(function(){
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
	})
	
	//验证确认密码
	$("input:eq(2)").focusout(function(){
//		console.log(1);
		if($(this).val() == ""){
			$(this).parent().parent().next().html("密码不能为空").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else if(!($("input:eq(2)").val() == $("input:eq(1)").val())){
			$(this).parent().parent().next().html("两次输入的密码不一致").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else{
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
		}
	}).focusin(function(){
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
	})
	
	//验证学号
	$("input:eq(3)").focusout(function(){
		console.log(1);
		var reg=/^[0-9]{4,17}$/;
		if($(this).val() == ""){
			$(this).parent().parent().next().html("学号不能为空").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else if(!reg.test($(this).val())){
			$(this).parent().parent().next().html("学号必须是4-16位数字组成").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else{
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
		}
	}).focusin(function(){
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
	})
	
	//验证邮箱
	$("input:eq(4)").focusout(function(){
//		console.log(1);
		var reg=/^\w+@\w+\.com|cn|net$/;
		if($(this).val() == ""){
			$(this).parent().parent().next().html("邮箱不能为空").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else if(!reg.test($(this).val())){
			$(this).parent().parent().next().html("所填邮箱不是一个合法的邮箱").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else{
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
		}
	}).focusin(function(){
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
	})
	
	//验证手机
	$("input:eq(5)").focusout(function(){
//		console.log(1);
		var reg=/^1[34578]\d{9}$/;
		if($(this).val() == ""){
			$(this).parent().parent().next().html("手机不能为空").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else if(!reg.test($(this).val())){
			$(this).parent().parent().next().html("手机格式不正确").css("display","block");//显示错误信息
			$(this).addClass("alert alert-danger");	//增加红色警示框
		}else{
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
		}
	}).focusin(function(){
			$(this).removeClass("alert alert-danger");//移除红色警示框
			$(this).parent().parent().next().css("display","none");//移除错误信息
	})
	
	
})
