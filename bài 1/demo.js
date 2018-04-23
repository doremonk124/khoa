document.addEventListener("DOMContentLoaded",function(){
	var lol= new Array;
	for (var i = 1; i < 11; i++){
		var text=""
		for ( var j = 1; j < 11; j++){
			nhan = i * j;
            text +='<table><tr><td style="width:50px">' + i +" x "+ j + "</td><td>" + "=" + "</td><td>" + nhan + '</td></tr></table>';         
         }   
 	    lol.push(text);
    }
           
    var table = '<table border="1" style="width: 500px;">'
                + "<tr><td>"
                + lol[0] + "</td><td>" + lol[1] + "</td><td>" + lol[2] + "</td><td>" + lol[3] + "</td><td>" + lol[4]
                + "</td></tr>"
                + "<tr><td>"
                + lol[5] + "</td><td>" + lol[6] + "</td><td>" + lol[7] + "</td><td>" + lol[8] + "</td><td>" + lol[9]
                + "</td></tr></table>";
        document.getElementsByClassName('cay_vl')[0].innerHTML= table;

},false)