// JavaScript Document

	//账号密码
	var uid = "abcd";
	var psw = "1234";

	//初始值,用于判空操作
	var iniID = document.getElementById("exampleInputUsername1").value;
	var iniPsw = document.getElementById("exampleInputPassword1").value;
        imgVer({
            el:'$("#imgVer")',
            width:'260',
            height:'116',
			
			//图片集
            img:[
                'img/ver.png',
                'img/ver-1.png',
                'img/ver-2.png',
                'img/ver-3.png'
            ],
			
			//成功重合时执行
            success:function () {
                //验证成功后验证框消失并把登录按钮可用化
				$(".verBox").css("opacity","0");
				$("#login").removeAttr("disabled")
				setInterval(function(){
					 $(".verBox").css("display","none");
				},800)
            },
			
			//不重合时执行
            error:function () {
                //空操作
            }
        });
	
	$(document).ready(function(){
		//为登录按钮绑定验证表单的功能
		$("#login").click(function(){
			if(document.getElementById("exampleInputUsername1").value == iniID){
				alert("小朋友,你是不是没账号呀?!");
				window.location.href="login.html";
			}else if(document.getElementById("exampleInputPassword1").value == iniPsw){
				alert("小盆友,你是不是不知道密码呀?!(捂嘴偷笑)");
				window.location.href="login.html";
			}else if(!(document.getElementById("exampleInputUsername1").value == uid && document.getElementById("exampleInputPassword1").value == psw)){
				alert("小盆友,账号密码错啦!");
				window.location.href="login.html";
			}else{
				window.location.href="webapp/home.html";
			}
		})
	})