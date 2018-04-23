document.addEventListener("DOMContentLoaded", function(){
    var a = document.getElementsByClassName('huy')[0];
    var b = document.getElementsByClassName('minh')[0];
    var c = document.getElementsByClassName('dat')[0];
    var x = 0;
    var y = 0;
    var z = 0;
    var t = 0;
    var l = 0;
    a.onclick = function(){
        a.disabled = true;
    	var run = setInterval (function(){
            z += 1;
            if (z == 10){
            	z = 0;
            	l += 1;
            	if (l == 10){
            		l = 0;
            		y += 1;
            		if (y == 6){
            			y = 0;
            			t += 1;
            			if (t == 10){
            				t = 0;
            				x += 1;
            			}
            		}
            	}
            }
            b.onclick = function(){
            	clearInterval(run);
            	a.value = "Tiếp tục";
            	a.disabled = false;
            }
            c.onclick = function(){
            	clearInterval(run);
            	x = 0; y = 0; z = 0; t= 0; l = 0;
            	a.value = "Bắt đầu";
            	a.disabled = false;
            	var inra = '<div style=" float:left"><p style="font-size:150px">'
                            + x + t + ' : </p></div><div style= "float:left"><p style="font-size:150px">' 
                            + y + l + ' . </p></div><div style= "float:left"><p style="font-size:150px">'
                            + z + '</p></div></div>';
            	document.getElementsByClassName('khoa')[0].innerHTML = inra;
            }
            var inra = '<div style=" float:left"><p style="font-size:150px">'
                        + x + t + ' : </p></div><div style= "float:left"><p style="font-size:150px">' 
                        + y + l + ' . </p></div><div style= "float:left"><p style="font-size:150px">'
                        + z + '</p></div></div>';
            document.getElementsByClassName('khoa')[0].innerHTML = inra;
    	},100);
    };
    var inra = '<div style=" float:left"><p style="font-size:150px">'
                + x + t + ' : </p></div><div style= "float:left"><p style="font-size:150px">' 
                + y + l + ' . </p></div><div style= "float:left"><p style="font-size:150px">'
                + z + '</p></div></div>';
    document.getElementsByClassName('khoa')[0].innerHTML = inra;
},false)