(function($){
 
    $.fn.extend({ 
         
        leanModal: function(options) {
            var defaults = {
                top: 100,
                overlay: 0.5
            }
                 
            options =  $.extend(defaults, options);
 
            var o = options;
           
            var overlay = $("<div id='overlay'></div>");
          	var modal = $(this);
			$("body").append(overlay);
            
			$("#overlay").click(function() { 
                 close_modal(modal);                    
            });
                     	
          	var modal_height = modal.outerHeight();
    	  	var modal_width = modal.outerWidth();

    		$('#overlay').css({ 'display' : 'block', opacity : 0 });

    		$('#overlay').fadeTo(200, o.overlay);

    		modal.css({ 
                'border':   '2px solid black',
                'background': 'white',
                'padding':  '10px',
    			'display' : 'block',
    			'position' : 'fixed',
    			'opacity' : 0,
    			'z-index': 11000,
    			'left' : 50 + '%',
    			'margin-left' : -(modal_width/2) + "px",
    			'top' : o.top + "px"
    		});

    		$(modal).fadeTo(200,1);

            $(document).bind('keydown', function(e) {
             if (e.keyCode == 27) {
                 e.preventDefault();
                 close_modal(modal);
             }
            });

			function close_modal(modal){
        		$("#overlay").fadeOut(200);
                modal.html('');
        		$(modal).css({ 'display' : 'none' });
			}
        }
    });
     
})(jQuery);