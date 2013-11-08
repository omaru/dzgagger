var Render ={
	render:function(image){
		var rendered=false;
		if(image.src){
		 var article =$('<article>');
		 var header =$('<header>');
		 header.append('<h4 class="navbar-text">'+image.title+'</h4>');
		 var img = $('<img>');
		 img.addClass('img-rounded');
		 img.attr('src',image.src);
		 article.append(header);
		 article.append(img);
		 article.attr('id',image.id);
		 $('#content').append(article);	
		 rendered= true;
  	  	}
  	  	return rendered;
	}

};

