//添加公告
function addRow() {
	var table = document.getElementById("order");
	var title = document.getElementById("title").value;
	var unit = document.getElementById("unit").value;
	var date = document.getElementById("date").value;
	var eDate = document.getElementById("eDate").value;
	var index = table.rows.length;
	var newRow = table.insertRow(index); //插入行
	var td1 = newRow.insertCell(0); //插入单元格
	var td2 = newRow.insertCell(1);
	var td3 = newRow.insertCell(2);
	var td4 = newRow.insertCell(3);
	var td5 = newRow.insertCell(4);
	var td6 = newRow.insertCell(5);
	td1.innerHTML = "<input type='checkbox' name='Select'/>";
	td2.innerHTML = title;
	td3.innerHTML = unit;
	td4.innerHTML = date;
	td5.innerHTML = eDate;
	td6.innerHTML = "<input type='button' value='修改' class='button one' onclick='editRow(this)'/> <input type='button' value='删除' class='button two' onclick='delRow(this)' />"
	$(document).ready(function() {
		$("#order tr td").css("height", "50px");
		$("#order tr:odd").css("background-color", "azure");
		$("#order tr:odd").mouseover(function() {
			$(this).css("background-color", "aliceblue");
		}).mouseout(function() {
			$(this).css("background-color", "#F0FFFF")
		});
	})
}
//修改
function editRow(obj) {
	var row = obj.parentNode.parentNode.rowIndex;
	var cols = obj.parentNode.parentNode.cells;
	var txt2 = cols[2].innerHTML;
	var txt3 = cols[3].innerHTML;
	var txt4 = cols[4].innerHTML;
	cols[2].innerHTML = "<input type='text' value='" + txt2 + "' style='width:100px;'/>";
	cols[3].innerHTML = "<input type='text' value='" + txt3 + "' style='width:100px;'/>";
	cols[4].innerHTML = "<input type='text' value='" + txt4 + "' style='width:100px;'/>";
	cols[5].firstChild.value = "确定";
	cols[5].firstChild.setAttribute("onclick", "upRow(this)");
}

function upRow(obj) {
	var row = obj.parentNode.parentNode.rowIndex;
	var cols = obj.parentNode.parentNode.cells;
	var txt2 = cols[2].firstChild.value;
	var txt3 = cols[3].firstChild.value;
	var txt4 = cols[4].firstChild.value;
	cols[2].innerHTML = txt2;
	cols[3].innerHTML = txt3;
	cols[4].innerHTML = txt4;
	cols[5].firstChild.value = "修改";
	cols[5].firstChild.setAttribute("onclick", "editRow(this)");

}

//删除
function delRow(obj) {


	var index = obj.parentNode.parentNode.rowIndex; //删除按钮所在行的位置

	document.getElementById("order").deleteRow(index);

}

$(document).ready(function() {
	$("div.warp div a:first").click(function() {
		var $cks = $("div.warp input[name='Select']");
		if($cks.is(":checked")) {
			$cks.prop("checked", false);
		} else {
			$cks.prop("checked", true);
		}

	});
	$("body").on("click", "div.warp div a:last", function() {
		$("div.warp input[name='Select']").each(function() {
			if($(this).is((":checked"))) {
				$(this).parent().parent().remove();
			}
		})
	});
	$('tr:first').css("background-color", "lightblue");
	$("#order tr td").css("height", "50px");
	$("#order tr:odd").css("background-color", "azure");
	$("#order tr:odd").mouseover(function() {
		$(this).css("background-color", "aliceblue");
	}).mouseout(function() {
		$(this).css("background-color", "#F0FFFF")
	});
})