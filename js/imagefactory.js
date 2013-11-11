var ImageFactory ={
	create:function(article){
		var img = article.find('img');
		var title = $.trim(img.attr('alt'));
		var src = img.attr('src');
		var id = $.trim(article.attr("data-entry-id"));

		return{
			title:title,
			src:src,
			id:id,
		};
		
	},
	createArticle:function(image){
		var article = null;
		if(image.src){
		 article =$('<article>');
		 var header =$('<header>');
		 header.append('<h4 class="navbar-text">'+image.title+'</h4>');
		 var img = $('<img>');
		 img.addClass('img-rounded');
		 img.attr('src',image.src);
		 article.append(header);
		 article.append(img);
		 article.attr('id',image.id);
  	  	}
  	  	return article;

	}

};
