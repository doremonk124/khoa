document.addEventListener("DOMContentLoaded", function(){
    var a = document.getElementsByClassName('khoa')[0];
    var b = document.getElementsByClassName('huy')[0];
    var c = document.getElementsByClassName('minh')[0];
    b.onclick = function(){
    	var d = a.value;
    	var e = "";
    	for ( i=1; i<= d; i++){
    		var f = "";
    		var j;
    		for (j =i; j> 0; j--){
    			if (j>9){
    			    k = j.toString();
    			    k = k.slice(k.length-1,k.length);
    			    console.log(k);
    			    f +='<td style="width:20px">' + k + '</td>'; 
    		    }
    		    if (j<=9){
    		    	f +='<td style="width:20px">' + j + '</td>'; 
    		    }
    		}
    		e += '<tr>'+ f + '</tr>';
    	}
    	var inra = '<table>' + e + '</table>';
    	c.innerHTML = inra;
    }
},false)