(function ($) {
    "use strict";
    
		// nav area
		var $nav = $('#nav'),
            $navItem = $nav.find('.nav-item'),
            $mainNavItem = $nav.find('.nav-list-item'),
            $subNavItem = $nav.find('.sub-nav-item'),
            $content = $('#content'),
            $contentSection = $content.find('.content-section');
		
        $('.nav-item .sub-nav').slideUp();
        $('.nav-item.active .sub-nav').slideDown();
        
        // For Nav Item
		$mainNavItem.on('click', function(e){
            e.preventDefault();
            
            var $this = $(this);
			
            if( !$this.parent().hasClass('active')) {
                $this.siblings('.sub-nav').slideDown();
                $this.parent().addClass('active').siblings().removeClass('active').find('.sub-nav').slideUp();
            } else {
                $this.siblings('.sub-nav').slideUp();
                $this.parent().removeClass('active').find('.sub-nav').slideUp();
            }
            
		});
    
        $('.sub-nav-item').click(function(e)
            {
                e.preventDefault();
                window.location = $(this).attr('href');
        });

        
        // For Subnav Item
//		$subNavItem.on('click', function(e){
//            e.preventDefault();
//            
//            var $this = $(this),
//                $thisTarget = $this.attr('href');
//            
//			$subNavItem.removeClass('active');
//			$this.addClass('active');
//			$($thisTarget).fadeIn().siblings('.content-section').hide();
//		});
    
    
    
})(jQuery);