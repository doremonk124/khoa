document.addEventListener("DOMContentLoaded",function(){
	var monthsname = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
	var monthsday = new Array (31,28,31,30,31,30,31,31,30,31,30,31);
	var daynow = new Date();
	var thisday = daynow.getDay();
	var thismonth= daynow.getMonth();
	var thisdate = daynow.getDate();
	var thisyear = daynow.getFullYear();
	if (thisyear % 4 == 0){
		monthsday[1]++;
	}
	var lich = '<tr><td colspan="7" style="padding-left:65px"> ' 
	            + monthsname[thismonth] +' '+ thisyear + ' </td></tr>';
	lich += '<tr><td style="width:30px">Mon</td>' + '<td style="width:30px">Tue</td>' 
	        + '<td style="width:30px">Wed</td>'+'<td style="width:30px">Thu</td>' 
	        + '<td style="width:30px">Fri</td>' + '<td style="width:30px">Sat</td>' 
	        + '<td style="width:30px">Sun</td></tr>';
	var iddate = thisdate;
	while (iddate > 7){
        iddate-= 7;
	}
    for (i = iddate; i>1; i--){
    	thisday-= 1;
    }
    if (thisday <= 0){
    	thisday +=7;
    }
    var k="";
    var h=0;
    for (i = 1; i<thisday; i++){
        k+= '<td style="width:30px height:20px"></td>';
        h+=1;
    }
    var ho = 7-h;
    for(i=1; i<=ho;i++){
    	if (i == thisdate){
    		k+= '<td style="width:30px; height:20px; color:red">' + i + '</td>';
    	}else {
    		k+= '<td style="width:30px;height:20px">' + i + '</td>';
    	}	
    }
    lich += k;
    var lich1="";
    bao=ho+1;
    voi=ho+7;
    for (j=1;j<6; j++){
    	for (i=bao; i<= voi; i++){
    		if (i == thisdate){
    		    lich1 += '<td style="width:30px; height:20px; color:red">' + i + '</td>';
    	    }else {
    		    lich1 += '<td style="width:30px;height:20px">' + i + '</td>';
    	    }
        }
        lich += '<tr>' + lich1 + '</tr>';
        bao +=7;
        voi +=7;
        if (voi>= monthsday[thismonth]){
        	voi = monthsday[thismonth];
        }
        lich1="";
    }   
	var inra = '<table border="1">'+ lich +'</table>';
    document.getElementsByClassName('khoa')[0].innerHTML = inra;
},false)