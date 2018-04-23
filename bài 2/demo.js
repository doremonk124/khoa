document.addEventListener("DOMContentLoaded", function(){
    var a = document.getElementsByClassName('dat')[0];
    var d ="";
    a.onclick = function(){
    	var b = prompt("Số đồ thị cần vẽ :",'');
    	while (b <= 0|| isNaN(b) == true|| b% 1 != 0){
    		alert('bạn đã nhận sai');
    		b = prompt("yêu cầu nhập số đồ thị cần vẽ là số nguyên dương :",'');
    	}
    	var c = new Array;
    	
        for (i = 0; i < b; i++){
        	c[i] = prompt("Nhập tên đồ thị "+ i +" : ",'');
            d += '<tr><td>' + c[i] + '</td><td><input type="text" class="thang" /></td>';      
        }
        var nhapsolieu = '<table>' + d +'</table></br>' + '<button class="khoa">Xác nhận</button>';
        document.getElementsByClassName('huy')[0].innerHTML = nhapsolieu;
        var e = document.getElementsByClassName('khoa')[0];
        var f = new Array;
        var g = "";
        e.onclick = function(){
        for (i = 0; i < c.length; i++){
        	f[i] = document.getElementsByClassName('thang')[i].value;
        	     if (f[i] <= 0|| isNaN(f[i]) == true|| f[i]% 1 != 0){
    		        alert('bạn đã nhận sai');
    	        }
            g += '<tr><td>' + c[i] 
            + '</td><td style="width: 150px"><div style="width:100px"><div style="border: solid red; width:'
            + f[i] +'%; float: left; margin:4px"></div></div>'
            +'<div style="float:left; margin:2px"><p>'+ f[i] + '%</p></div>'+'</td></tr>';            
        }
        console.log(f);
        var bieudo = '<table border="3">' 
                    + g + '</table>';
        document.getElementsByClassName('minh')[0].innerHTML = bieudo;
        }
    }   
},false)