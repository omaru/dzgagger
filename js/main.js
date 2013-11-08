var Gagger = {
   _url:  'http://9gag.com',
   _posts : 10,
   _gags:{},
   _KEY:'_gags',
   init:function(){   
    var gagsBackup=localStorage.getItem(this._KEY); 
    
    if(gagsBackup){
    	    this._gags = JSON.parse(gagsBackup);
    }
    $('#btn-more').click(this._loadMoreImg);

  },
  
  requestGags: function(url) {
    $('#btn-more').addClass("active");
    var req = new XMLHttpRequest();
    req.open("GET",url, true);
    req.onreadystatechange= this._status.bind(this);
    req.onload = this._showGags.bind(this);
    req.send(null);
  },
  _status:function(e){
  	  if( e.readyState === 4 ){
  	  	  if(e.status === 407){//proxy auth required TODO proxy configuration
  	  	  	  
  	  	  }
  	  }
  },
  _showGags: function (e) {
  	  var html = $(e.target.responseText);
  	  var articles = html.find('.badge-entry-collection article');
  	  var _this = this;
  	  articles.each(function(){
  	  	var article = $(this);
  	  	var image = ImageFactory.create(article);
  	  	var cachedImg = _this._gags[image.id];
  	  	if(cachedImg && cachedImg.isImgur){
  	  		_this._render(cachedImg);
  	  	}else{
  	  		Service.toImgUr(image,_this);
  	  	}
  	  	
  	  });

  },
  _render:function(image){
  	  if(Render.render(image)){
  	    if(!this._gags[image.id]){
  	    	    this._gags[image.id] = image;
  	    	    localStorage.setItem(this._KEY,JSON.stringify(this._gags));
  	    }
  	  }
  	  
  	  $('#btn-more').removeClass("active");
  },
  _loadMoreImg: function() {
    var id = $('article:last').attr('id');
  	 Gagger.requestGags(Gagger._url+'?id='+id+'&c='+Gagger._posts);

  }
};

// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
  Gagger.init();		
  Gagger.requestGags(Gagger._url);
});
