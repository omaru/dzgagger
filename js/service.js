var Service ={
	/**
	 Host image on img ur
	
	**/
	_API_CLIENT_ID: 'Client-ID 709d2a1043c93db',
	
	toImgUr: function (image,_that) {
  	  if(!image.src) return ;
  	  
  	  var data = {'image':image.src};
  	  var imgSrc = "" ;
  	  var _this = this;
  	  $.ajax({
  	    async:true,
  	    type:'POST',
  	    headers:{
  	    	    Authorization:'Client-ID 709d2a1043c93db'
  	    },
  	    dataType:'JSON',
  	    url:"https://api.imgur.com/3/image",
  	    data:data
  	  }).done(function(img){
  	  	  image.src = img.data.link;
  	  	  image.isImgur=true;
  	  	  _that._render(image);
  	  	  
  	  });
  }

};

