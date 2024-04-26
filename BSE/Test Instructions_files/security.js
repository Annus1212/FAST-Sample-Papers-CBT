/********************************************************************
	created:	2003/04/21
	created:	21:4:2003   19:14
	filename: 	c:\inetpub\wwwroot\questionpaper\scripts\security.js
	file path:	c:\inetpub\wwwroot\questionpaper
	file base:	security
	file ext:	js
	author:		Khurram Javaid
	
	purpose:	Disables keys and right mouse click in the broswer
				lauches warning window on an unwanted key press
*********************************************************************/

var isnn,isie
if(navigator.appName=='Microsoft Internet Explorer') //check the browser
{  isie=true }
if(navigator.appName=='Google Chrome')
{  isnn=true }
if(navigator.appName=='Netscape')
{  isnn=true }

function key(k)   
{

		
			if(isie) {
		//disable keys 
		//windows , shift, alt, ctrl, properties, backspace, spacebar, function keys
		
			if(event.keyCode==91 || event.keyCode==16 || (event.keyCode==78||event.keyCode==82||event.keyCode==17) || event.keyCode==18 || event.keyCode==93 || event.keyCode==122 || event.keyCode==32 || event.keyCode==8 || ((event.keyCode>=112)&&(event.keyCode<=123)) )  {
					//alert("Sorry, you do not have permission to press this key.")
					//showModelessDialog("../NoUnwantedKeys.htm",null,"resizable:no;status:no;center:1;unadorned:1;dialogHeight:100pc;dialogWidth:100pc;");
					window.open('NoUnwantedKeys.htm','nonothing','toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,fullscreen=yes,left = 0,top = 0');
					window.event.keyCode = 0;
					window.event.cancelBubble=true;
					return false;
				}
			}
		
			if(isnn){
				alert("Sorry, you do not have permission to press this key.") 
				return false; }
		
}

if (document.layers) window.captureEvents(Event.KEYPRESS);  
document.onkeydown=key;

IE4plus = (document.all) ? true : false;
NS4 = (document.layers) ? true : false;

function clickIE()
{
    return false;
}

function clickNS(e)
{
	if (e.which==2 || e.which==3) 
     {
       return false;
     }
}
if (!IE4plus) 
{
   document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);
   document.onmousedown=clickNS;
   document.onmouseup= clickNS;
   document.oncontextmenu=clickIE; // For NS 6+
} 
else 
{
   document.onmouseup= clickIE;
   document.oncontextmenu=clickIE;
}