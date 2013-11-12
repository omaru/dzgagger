// Create one test item for each context type.
var ContextMenu ={
	context:['image'],
	title:'Copy to clipboard',

	init:function(){
		chrome.contextMenus.removeAll();
		chrome.contextMenus.create({	"title": this.title, 
										"contexts":this.context,
                                       "onclick":this._copyUrl
 								});
	},
	_copyUrl:function(info,tab){
		//debugger;
		var background = chrome.extension.getBackgroundPage(); 
		var body = $(background.document.body); 
		var copyUrl = info.srcUrl;
		var text = $('<textarea/>');
		text.val(copyUrl);
		text.text(copyUrl);
		text.hide();
		body.append(text);
		console.debug(text.val());
		text.select();
		background.document.execCommand('copy');
		text.remove();
	}

};