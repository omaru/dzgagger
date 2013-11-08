var Render ={
	render:function(image){
		var rendered=false;
		if(image.src){
		 var article =$('<article>');
		 var header =$('<header>');
		 header.append(image.title);
		 var img = $('<img>');
		 img.attr('src',image.src);
		 img.hover(function(){
		 	$(this).css('width','100%');
		 	$(this).css('height','100%');
		 },function(){
		 	$(this).css('width','75px');
		 	$(this).css('height','75px');
		 });
		 article.append(header);
		 article.append(img);
		 article.attr('id',image.id);
		 $('#content').append(article);	
		 rendered= true;
  	  	}
  	  	return rendered;
	}

};

