function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
/* alert("天才的开始！"); */
function toolu(){
	alert("天才的开始！");
}

function myFunction(){
	x=document.getElementById("demo");
	x.innerHTML="这是改变后的内容";
}

function changeImage(){
	Element=document.getElementById("myimage")
	if(Element.src.match("bulbon"))
	{
		Element.src="img/pic_bulboff.gif";
	}
	else{
		Element.src="img/pic_bulbon.gif";
	}
}