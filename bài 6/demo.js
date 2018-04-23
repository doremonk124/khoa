document.addEventListener("DOMContentLoaded",function(){
   var b = document.getElementsByClassName('tru')[0];
   var c = document.getElementsByClassName('nhan')[0];
   var d = document.getElementsByClassName('chia')[0];
   var e = document.getElementsByClassName('mu')[0];
   var a = document.getElementsByClassName('cong')[0];
   a.onclick = function(){
   	    x = document.getElementsByClassName('khoa')[0];
        y = document.getElementsByClassName('minh')[0]; 
   	   if(isNaN(x.value)== true|| isNaN(y.value) == true){
   	  	alert('Nhập cái éo gì vậy =_=');
        }
        x= Number(x.value);
        y= Number(y.value);
        congg = x + y;
        document.getElementsByClassName('huy')[0].value = congg;
   }
   b.onclick = function(){
   	    x = document.getElementsByClassName('khoa')[0];
        y = document.getElementsByClassName('minh')[0]; 
   	   if(isNaN(x.value)== true|| isNaN(y.value) == true){
   	  	alert('Nhập cái éo gì vậy =_=');
        }
        x= Number(x.value);
        y= Number(y.value);
        congg = x - y;
        document.getElementsByClassName('huy')[0].value = congg;
   }
   c.onclick = function(){
   	    x = document.getElementsByClassName('khoa')[0];
        y = document.getElementsByClassName('minh')[0]; 
   	   if(isNaN(x.value)== true|| isNaN(y.value) == true){
   	  	alert('Nhập cái éo gì vậy =_=');
        }
        x= Number(x.value);
        y= Number(y.value);
        congg = x*y;
        document.getElementsByClassName('huy')[0].value = congg;
   }
   d.onclick = function(){
   	    x = document.getElementsByClassName('khoa')[0];
        y = document.getElementsByClassName('minh')[0]; 
   	   if(isNaN(x.value)== true|| isNaN(y.value) == true){
   	  	alert('Nhập cái éo gì vậy =_=');
        }
        x= Number(x.value);
        y= Number(y.value);
        congg = x/y;
        document.getElementsByClassName('huy')[0].value = congg;
   }
   e.onclick = function(){
   	    x = document.getElementsByClassName('khoa')[0];
        y = document.getElementsByClassName('minh')[0]; 
   	   if(isNaN(x.value)== true|| isNaN(y.value) == true){
   	  	alert('Nhập cái éo gì vậy =_=');
        }
        x= Number(x.value);
        y= Number(y.value);
        congg = x;
        for (i=1; i<y;i++){
        	congg *= x
        }
        document.getElementsByClassName('huy')[0].value = congg;
   }
   	  
},false)