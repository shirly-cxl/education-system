//字数统计
$(document).ready(function() {
	var len1 = $("div#edit textarea.one").val().length;
	$(".textColor1").html(10-len1);
	$(document).keyup(function() {
		len1 = $("div#edit textarea.one").val().length;
		if(len1 > 10) {
			$("div#edit input").attr("disabled", true);//超出字数，按钮变为禁选
			$(".textColor1").html("对不起，您输入的内容超出字数限制！");
		} else {
			$("div#edit input").removeAttr("disabled");//修改字数，按钮回复可选状态
			$(".textColor1").html(10-len1);
		}
	})
	var len2 = $("div#edit textarea.two").val().length;
	$(".textColor2").html(10-len2);
	$(document).keyup(function() {
		len2 = $("div#edit textarea.two").val().length;
		if(len2 > 10) {
			$("div#edit input").attr("disabled", true);
			$(".textColor2").html("对不起，您输入的内容超出字数限制！");
		} else {
			//$("div#edit input").removeAttr("disabled");
			$(".textColor2").html(10-len2);
		}
	});
})