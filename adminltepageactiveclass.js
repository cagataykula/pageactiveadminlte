$( document ).ready(function() {
            $('li a').each(function(){
		        var href =     $(this)[0].href;
		        if (href == $(location)[0].href) {
			        $(this).parent().addClass('active');
			        $(this).parent().parent().parent().addClass('menu-open');
			        $(this).parent().parent().parent().addClass('active');
                }
                if(window.location.origin + "/" == $(location)[0].href){
                    $('.treeview:first').addClass('active');
                    $('.treeview:first > ul > li:first').addClass('active');
                }

        });
});