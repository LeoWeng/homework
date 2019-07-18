var today = new Date();
var hourNow = today.getHours();

var math99 = {
	gape: 9,
	mathN: function(){
		var N=this.gape;
		var i=0,j=0;
		var mathTable="<table id='customers'>";
		for(i=0;i<N+1;i++){
			mathTable=mathTable+"<tr>"
			for(j=0;j<N+1;j++)
				if(i===0 && j===0)
					mathTable=mathTable+"<td>"+N+"X"+N+"</td>";
				else if(i===0)
					mathTable=mathTable+"<td>被乘數："+j+"</td>";
				else if(j===0)
					mathTable=mathTable+"<td>乘數："+i+"</td>";
				else
					mathTable=mathTable+"<td>"+i*j+"</td>";
			mathTable=mathTable+"</tr>";
		}
		mathTable=mathTable+"</table>";
		document.getElementById("Math").innerHTML=mathTable;
	}
}

var colorSet = {
	str: "Default string",
	colors: ['#FF0000','#FF7D00','#FFFF00','#00FF00','#0000FF','#00FFFF','#FF00FF'],
	get: function(num){
		return this.colors[num-1]?this.colors[num-1]:'#000000';
	}
};

var methodMy=function(){
	colorSet.str=prompt("Window inside string","Default string");
	value_color=parseInt(prompt("Input number [1~7]","1"));
	document.getElementById("string").innerHTML=colorSet.str;
	document.getElementById("string").style.color=colorSet.get(value_color);
	math99.gape=parseInt(prompt("乘法表基數：","9"));
	math99.mathN();
};

window.onload=function(){methodMy()};