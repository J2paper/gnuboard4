// ================================================================
//                       CHEditor 5.0
// ----------------------------------------------------------------
// Author: Na Chang Ho
// Homepage: http://www.chcode.com
// EMail: support@chcode.com
// Copyright (c) 1997-2010 CHSOFT
// ================================================================
var button = [
	{ alt : "", img : 'play.gif', cmd : play },
	{ alt : "", img : 'submit.gif', cmd : doSubmit },              
	{ alt : "", img : 'cancel.gif', cmd : popupClose }
];

var oEditor = null;

function init(dialog) {
	oEditor = this;
	oEditor.dialog = dialog;
	
	var dlg = new Dialog(oEditor);
	dlg.showButton(button);
	
	dlg.setDialogHeight();
}

function play()
{
    var file = document.getElementById("fm_linkurl");
    if (!file.value) 
    	return;
    
    var mediaobj = "<embed src='"+file.value+"' autostart='true' loop='true'></embed>";
    var obj = document.getElementById("play");
    obj.innerHTML = mediaobj;
}

function doSubmit()
{
    var file = document.getElementById("fm_linkurl");
    var media = "<embed src='"+file.value+"' autostart='true' loop='true'></embed>";
    oEditor.insertHtmlPopup(media);
    popupClose();
}

function popupClose() {
    oEditor.popupWinClose();
}