var slideIndex =0;


function openNav() {
	var mq = window.matchMedia("(min-width: 1000px)");
	var x = document.getElementById("mySidenav");
    var y = x.getElementsByTagName("a");

	
	if (mq.matches)
	{
		document.getElementById("mySidenav").style.width = "250px";
    	document.getElementById("bigmain").style.marginLeft = "260px"; 
    	document.getElementById("banner").style.marginLeft = "260px"; 
    		
    	for(var i=0 ; i<y.length; i++ )
    	{
    		y[i].style.fontSize = "25px";
    	}	
	}
	else
	{	
	}  
}

function openNavMobile(){
	var mq = window.matchMedia("(max-width: 1000px)");

	if(mq.matches)
	{
		document.getElementById("mySidenav").style.width = "220px";
		document.getElementById("bigmain").style.marginLeft = "230px";
    	document.getElementById("banner").style.marginLeft = "230px";
	}
	
}

function loadlist(){
	if (document.getElementsByClassName("nestedlist")[0].style.display=="none")
	{
		document.getElementsByClassName("nestedlist")[0].style.display="block";	
	}
	else
	{
		document.getElementsByClassName("nestedlist")[0].style.display="none";	
	}	
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("bigmain").style.marginLeft = "0";
    document.getElementById("banner").style.marginLeft = "0px"; 
}

function loadDivs()
{
	slideIndex = 1;
	showDivs(slideIndex);	
}	

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
}

/*function showButtons(){
	document.getElementsByClassName("imgbtnleft")[0].style.display="inline-block";
}

function hideButons(){
	document.getElementsByClassName("imgbtnleft")[0].style.display="inline-block";	
}
*/
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}    
    x[slideIndex-1].style.display="block";  
    setTimeout(carousel, 5000);
}

function changetesti()
{
	var x=document.getElementById("testimonialscontent2");
	var y=document.getElementById("testimonialscontent1");
	if(x.style.display=="none")
	{
		x.style.display="block";
		y.style.display="none";
	}
	else
	{
		x.style.display="none";
		y.style.display="block";
	}
	setTimeout(changetesti, 8000);
}