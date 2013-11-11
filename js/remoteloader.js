/**
Input Functionality handler for viewing gags from a given url.
**/
var RemoteLoader ={

    init:function(){
      var _this = this;
      _this._input=$('#gag-host');
      _this._postContainer = $('#url-gag');
      _this._postContainer.hide();
      _this._postContainer.find('span').click(function(){
      	var span = $(this);
      	 span.parent().hide();
      	 _this._hideIcon('ok');
      });
	  _this._input.click(function(){
      	 var input = $(this);
      	 input.val('');
      });
      _this._input.blur(function(){
      	_this._getGag();
      });
    },
    _getGag:function(){
    	var input =this._input;
    	var url = input.val();
    	if(Util.is9gag(url)){
    		this._hideIcon('error');
    		this._showIcon('ok');
    		this.load(url);
    	}else{
    		this._hideIcon('ok');
    		this._showIcon('error');
    	}
	 
    },
    load:function(url){
      var _this = this;
      $.ajax({
  	    type:'GET',
  	    url:url
  	  }).done(function(html){
  	   	  var html = $(html)
  	   	  var article =  html.find('#individual-post article:first');
   	  	  var image = ImageFactory.create(article);
  	  	  Service.toImgUr(image,_this);
  	  });
    },
    _render:function(image){
    	var article=ImageFactory.createArticle(image);
    	this._postContainer.find('article').remove();
    	this._postContainer.append(article);
    	this._postContainer.show();
    },
    _hideIcon:function(icon){
   	   var input = this._input;
   	   input.parent().find('.input-group-addon #'+icon).hide();
    },

   _showIcon:function(icon){
   	   var input = this._input;
   	   input.parent().find('.input-group-addon #'+icon).show().tooltip('show');
   }

};