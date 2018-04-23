document.addEventListener("DOMContentLoaded",function(){
	var y = document.getElementsByClassName('minh')[0];
    y.onclick = function(){
    	var x = document.getElementsByClassName('huy')[0].value;
    	if (x <=0||isNaN(x) == true|| x%1 !=0){
    		alert('bạn đã nhập sai');
    	}
    	var m1= 0;
    	var m2= 0;
    	var cho = '<div style="width:13px;float:left;height:10px"></div>';
        var khunglong="";
    	for (i=1; i<=x; i++) {
    		if (i%2 != 0){
    		    voi ="";
                hama="";
                sutu="";
    			n = i-m1;
    			meo = '<div style="width:13px;float:left;height:10px">' + n + '</div>';
    			if (n>1){
    				for (z = n + 1; z<=i; z++){
    					l = n + i +1 -z;
    					if (z>9){
    						h = z.toString();
    					    h = h.slice(h.length-1,h.length);
    					    ho ='<div style="width:13px;float:left;height:10px">' + h + '</div>';
    					}else {
    						ho = '<div style="width:13px;float:left;height:10px">' + z + '</div>';
    					}
    					if (l>9){
    						k = l.toString();
    					    k = k.slice(k.length-1,k.length);
    					    bao ='<div style="width:13px;float:left;height:10px">' + k + '</div>';
    					} else{
    						 bao= '<div style="width:13px;float:left;height:10px">' + l + '</div>';
    					}
                        voi += cho + ho;
                        hama+= bao + cho;
    			    }
    			}
    			m1 = m1+1;
    			sutu =  hama + meo + voi;
    			var j = x-i;
    	        j = j+1;
    	        j = j*13; 
    		}
    		if (i%2 == 0){
    			voi ="";
                hama="";
                sutu="";
    			n = i-m2;
    			for (z= n; z<=i; z++){
    				l = n + i -z;
    				if (z>9){
    				    h = z.toString();
    					h = h.slice(h.length-1,h.length);
    					ho ='<div style="width:13px;float:left;height:10px">' + h + '</div>';
    			    }else {
    			    	ho ='<div style="width:13px;float:left;height:10px">' + z + '</div>';
    			    }
    			    if (l>9){
    					k = l.toString();
    					k = k.slice(k.length-1,k.length);
    					bao ='<div style="width:13px;float:left;height:10px">' + k + '</div>';
    				}else {
    					bao ='<div style="width:13px;float:left;height:10px">' + l + '</div>';
    				}
    				voi += ho + cho;
    				hama+= cho + bao;
    		    }
    		    sutu =  hama + cho +voi;
    		    m2 = m2+1;
    		    var j = x-i;
    	        j = j*13;
    	    }
    	    khunglong += '<tr><td><div style="height:10px"><div style="width:' 
    	                    + j + 'px;float:left; height:10px"></div>' 
                            + sutu + '</div></td></tr>';
    	}
    	var inra = '<table>'
    	            +  khunglong
    	            + '</table>';
    	document.getElementsByClassName('khoa')[0].innerHTML = inra;
    }
},false)