$(document).ready(function(){
	
	//更多通知的折叠
	var $content=$("li.tz:gt(7)");
	$content.hide();
	$(".clsBot a").click(function(){
		if($content.is(":visible")){
			$content.hide();
			$(this).html("更多");
		}else{
			$content.show();
			$(this).html("收起");
		}
	});
	
	//通知阅读全文
	$("a#ipt").click(function(){
		$(this).parent().find("div").slideToggle("slow");
	})
})
