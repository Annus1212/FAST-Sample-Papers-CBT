var isnn,isie
if(navigator.appName=='Microsoft Internet Explorer') //check the browser
{  isie=true }

if(navigator.appName=='Netscape')
{  isie=true }

function key(k)   
{
	if(isie) {
//disable keys 
//windows , shift, alt, ctrl, properties, backspace, spacebar, function keys

	if(event.keyCode==91 || event.keyCode==16 || event.keyCode==17 || event.keyCode==18 || event.keyCode==93 || event.keyCode==122 || event.keyCode==32 || event.keyCode==8 || ((event.keyCode>=112)&&(event.keyCode<=123)) )  {
			//alert("Sorry, you do not have permission to press this key.")
			//showModelessDialog("../NoUnwantedKeys.htm",null,"resizable:no;status:no;center:1;unadorned:1;dialogHeight:100pc;dialogWidth:100pc;");
			//window.open('NoUnwantedKeys.htm','nonothing','toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,fullscreen=yes,left = 0,top = 0');
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