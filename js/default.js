// JavaScript Document
$(document).ready(function(){
	//使用自定义动画改变右侧边栏的宽度和改变样式
	$(".side ul li").hover(function(){
		$(this).find(".sidebox").stop().animate({"width":"127px"},200).css({"opacity":"1","filter":"Alpha(opacity=100)","background":"#ae1c1c"})	
	},function(){
		$(this).find(".sidebox").stop().animate({"width":"54px"},200).css({"opacity":"0.8","filter":"Alpha(opacity=80)","background":"#131E28"})	
	});
	
	//改变左侧边栏的访问颜色
	$("li.nd a").hover(function(){
		$(this).addClass("clickOn");
	},function(){
		$(this).removeClass("clickOn");
	})
	
	//左侧边栏展开动画
	$("#leftNavigation li").click(function(){
		$(this).find("ul").slideToggle("slow");
	})
	
});

//回到顶部
function goTop(){
	$('html,body').animate({'scrollTop':0},600);
}