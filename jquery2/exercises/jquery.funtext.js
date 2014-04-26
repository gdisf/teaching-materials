;(function( $, window, document, undefined ) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // plugin name
    var pluginName = 'funText';

    $[pluginName] = function(el, shadowSize, shadowColor){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        // Zepto only supports the following use of data() through the optional data plugin
        // Therefore reverse reference is only supported with jQuery or custom Zepto build
        //base.$el.data("pbjCarousel", base);

        // define known color palettes
        // palettes are ordered like the color spectrum, from violet to red
        var pantone = {
        	rainbow: ['#8641ce', '#43237e', '#0044f7', '#387919', '#fff84a', '#ef8834', '#ea412c'],
        	candy: ['#78c5d6', '#459ba8', '#79c267', '#c5d647', '#f5d63d', '#f28c33', '#e868a2', '#bf62a6']
        }

        // reverse things
        pantone.reverseRainbow = pantone.rainbow.slice(0).reverse();
        pantone.reverseCandy = pantone.candy.slice(0).reverse();

        var switches = {
        	solidColor: true
        };

        var methods = {

  			// throttle function from Underscore 1.4.4
	        //
			// > http://underscorejs.org
			// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
			// > Underscore may be freely distributed under the MIT license.
	        throttle: function(func, wait) {
				var context, args, timeout, result;
				var previous = 0;
				var later = function() {
					previous = new Date;
					timeout = null;
					result = func.apply(context, args);
				};
				return function() {
					var now = new Date;
					var remaining = wait - (now - previous);
					context = this;
					args = arguments;
					if (remaining <= 0) {
						clearTimeout(timeout);
						timeout = null;
						previous = now;
						result = func.apply(context, args);
					} else if (!timeout) {
						timeout = setTimeout(later, remaining);
					}
					return result;
				};
			},

			// output the current shadow
			buildShadow: function(ratioX, ratioY) {
				var counter = 0,
					shadowRule = '';

				while (counter++ < base.shadowSize) {
					if (counter !== 1) shadowRule += ',';
					shadowRule += ' ' + parseInt(counter * ratioX) + 'px ' + parseInt(counter * ratioY) + 'px 0 ' + ((switches.solidColor) ? base.shadowColor : base.shadowColor[parseInt((base.shadowColor.length / base.shadowSize) * (counter - 1))]);
				}

				return shadowRule;
			},

			watchMouse: function(e) {
				// divide the "window" into 4 quadrants with the center of page at 0,0. then create a ratio for the X and Y axis of where the mouse is relative to the window
				base.$el.css('text-shadow', methods.buildShadow(((e.pageX - window.innerWidth / 2) / (window.innerWidth / 2)) * -1, ((e.pageY - window.innerHeight / 2) / (window.innerWidth / 2)) * -1));
			},

	        init: function() {
	        	if (typeof(shadowSize) === 'undefined' || shadowSize === null) {
	        		shadowSize = 10;
	        	} else if (typeof(shadowSize) !== 'number' && (typeof(shadowColor) === 'undefined' || shadowColor === null)) {
	        		shadowColor = shadowSize;
	        		shadowSize = 10;
	        	}

	        	if (typeof(shadowColor) === 'undefined' || shadowColor === null) {
	        		shadowColor = '#e74c3c';
	        	} else if (typeof(pantone[shadowColor]) !== 'undefined') {
					switches.solidColor = false;
	        		shadowColor = pantone[shadowColor];
	        	} else if (typeof(shadowColor) === 'object' || Object.prototype.toString.call(shadowColor) === '[object Array]') {
					if (shadowColor.length === 1) shadowColor = shadowColor[0];
					else switches.solidColor = false;
	        	}

	            base.shadowSize = shadowSize;
	            base.shadowColor = shadowColor;

	            // when first called load the shadow pointing down and to the right
	            base.$el.css('text-shadow', methods.buildShadow(1, 1));

	            // in case this isn't the first time this is called, go ahead and unbind any previous instances
	            $(document).off('mousemove.' + pluginName);
	            // register throttled mousemove event
	            $(document).on('mousemove.' + pluginName, methods.throttle(methods.watchMouse, 50));
	        }

	    };

        // Run initializer
        methods.init();
    };

    $.fn[pluginName] = function(shadowSize, shadowColor) {
        return this.each(function() {
            (new $[pluginName](this, shadowSize, shadowColor));
        });
    };

// to use with jQuery/Zepto uncomment the desired library
})( jQuery, window, document );