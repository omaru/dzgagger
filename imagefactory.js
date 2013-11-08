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
		
	}

};
