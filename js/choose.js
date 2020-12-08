function openwindow(obj) {
	alert("选课成功");//选课成功弹出提示
	$("#choose tr td input").attr("disabled",true);  //选课按钮变为禁选
	var $col = $(obj).parent().parent().find("td");	
	console.log($col.eq(1).html());	
	var table = document.getElementById("order");
	var index = table.rows.length;
	var newRow = table.insertRow(index); //插入行
	var td1 = newRow.insertCell(0); //插入单元格
	var td2 = newRow.insertCell(1);
	var td3 = newRow.insertCell(2);
	var td4 = newRow.insertCell(3);
	var td5 = newRow.insertCell(4);	
	//获取表格当前行的值
	td1.innerHTML = $col.eq(0).text();  
	td2.innerHTML = $col.eq(1).text();
	td3.innerHTML = $col.eq(2).text();
	td4.innerHTML = $col.eq(3).text();
	td5.innerHTML = "<input type='button' value='退选' class='btn btn-danger' onclick='delRow(this) ' />"	
}
function delRow(obj) {
	//退选课程
	var index = obj.parentNode.parentNode.rowIndex; 
	document.getElementById("order").deleteRow(index);
	$("#choose tr td input").removeAttr("disabled");
}

