/*!
 * Slide Accessibility
 *
 * The default CSS and JavaScript of Reveal.js has poor keyboard and screen reader
 * accessibility because slides are not fully hidden after animating. This plugin wraps slide
 * contents in an element that can be hidden with CSS and not affect slide transitions.
 * It requires the 'linear' transition to effectively move between slides when CSS is
 * applied.
 *
 * It also includes an auto-generated skip links plugin.
 *
 * MIT licensed
 *
 * Copyright (C) 2015 Marcy Sutton, http://marcysutton.com
 */

var PLUGIN_SLIDES = [];

var SlideAccessibility = (function(){

	'use strict';

  var SLIDE_SELECTOR = '.slides > section';

  // get slides, wrap contents in 'accessibilityWrapper'
	// only wrap sections containing content
  var slides = document.querySelectorAll( SLIDE_SELECTOR );

  for (var i=0; i<slides.length; i++) {
		// if slide has child sections, loop through those instead
		var nestedSlides = slides[i].querySelectorAll('section');
		if (nestedSlides.length > 0) {
			for (var k=0; k < nestedSlides.length; k++) {
				decorateSlide(nestedSlides, k, i);
			}
    }
		else {
			// filter out nested slides
			if (!slides[i].classList.contains('stack')) {
				decorateSlide(slides, i);
			}
		}
  }
	function decorateSlide (slideArray, index, outerIndex) {
		// populate new array of actual slides
		PLUGIN_SLIDES.push(slideArray[index]);

		// provide nested URL fragments
		var urlFragment = outerIndex !== undefined ? (outerIndex + '/' + index) : index;
		slideArray[index].setAttribute('data-id', urlFragment);

    var contents = slideArray[index].innerHTML;
    slideArray[index].innerHTML = '<div class="accessibilityWrapper">' + contents + '</div>';
	}
})();

/*!
 * Skip Links Plugin
 * MIT licensed
 *
 * Copyright (C) 2014 Marcy Sutton, http://marcysutton.com
 */

var SkipLinks = (function(){

  'use strict';


  var DO_SKIP_LINKS = true,

    // if you change element ID's,
    // be sure to update the CSS as well
    GLOBAL_SKIP_LINK_ID = 'global-skip-link',
    SLIDE_SKIP_LINKS_ID = 'table-of-contents',
    GLOBAL_SKIP_LINK_TEXT = 'Show navigation',

    SKIP_LINK_TARGET_SELECTOR = '.accessibilityWrapper',
    CONTROLS_SELECTOR = '.controls',

    SLIDES = PLUGIN_SLIDES,
    NUM_SLIDES = SLIDES.length,

    // Cached references to DOM elements
    dom = {};

    // Copy options over to our config object
    if( typeof options === 'object' ) extend( config, options );

    // if controls are present, we'll insert table of contents after them
    if( document.querySelector( CONTROLS_SELECTOR )){
      dom.controls = document.querySelector( CONTROLS_SELECTOR );
    }

    if ( DO_SKIP_LINKS ) { buildSkipLinks(); }

  /**
   * Build skip links.
   */
  function buildSkipLinks() {
    dom.wrapper = document.querySelector( '.reveal' );

    insertGlobalSkipLink();

    var skipLinkHTML = '';
    for (var i = 0; i < NUM_SLIDES; i++) {
			var wrappedSlide = SLIDES[i].querySelector(SKIP_LINK_TARGET_SELECTOR);
      var slideText = wrappedSlide.children[0].textContent;
			if (slideText === '') {
				slideText = wrappedSlide.textContent.substring(0, 40);
			}
      skipLinkHTML += '<li><a href="#/' + SLIDES[i].getAttribute('data-id') + '">' + (i + 1) + '. ' + slideText + '</a></li>';
    }
    skipLinkHTML += '</ul>';

    dom.skipLinks = createNodeAfterSibling( dom.wrapper, 'ul', SLIDE_SKIP_LINKS_ID, skipLinkHTML, dom.controls, {'aria-hidden': true} );

    initSkipLinks();
  }

  /**
   * Insert link that jumps you to the list of slides.
   */
  function insertGlobalSkipLink() {
    var globalSkipLink = document.createElement( 'a' );
    globalSkipLink.setAttribute( 'id', GLOBAL_SKIP_LINK_ID );
    globalSkipLink.setAttribute( 'href', '#'+SLIDE_SKIP_LINKS_ID );
    globalSkipLink.textContent = GLOBAL_SKIP_LINK_TEXT;

    dom.wrapper.insertBefore( globalSkipLink, document.querySelector( '.slides' ));
  }
  /**
   * Enable skip links.
   */
  function initSkipLinks() {
    dom.skipToNavLink = document.querySelector( '#'+GLOBAL_SKIP_LINK_ID );

    var skipLinkListItems = document.querySelectorAll( SKIP_LINK_TARGET_SELECTOR );
    for(var g=skipLinkListItems.length; g--;){
      skipLinkListItems[g].setAttribute('tabIndex', '-1');
    }

    dom.slideSkipLinks = dom.skipLinks.querySelectorAll('a');

    dom.skipToNavLink.addEventListener('focus', globalSkipLinkFocus);
    dom.skipToNavLink.addEventListener('blur', skipLinkBlur);
    dom.skipToNavLink.addEventListener('click', skipToNavLinkClick);

    var numSkipLinks = dom.slideSkipLinks.length;
    for(var i=numSkipLinks; i--;){
      dom.slideSkipLinks[i].addEventListener('focus', skipLinksFocus);
      dom.slideSkipLinks[i].addEventListener('blur', skipLinkBlur);
      dom.slideSkipLinks[i].addEventListener('click', skipLinkClick);
    }
    document.addEventListener('keydown', blurSkipLink);
  }
  function blurSkipLink(event) {
    if(event.which === 27){
      event.preventDefault();
      event.target.blur();
    }
  }
  function skipToNavLinkClick(event) {
    event.preventDefault();
    dom.skipLinks.setAttribute('aria-hidden', false);
    dom.slideSkipLinks[0].focus();
  }
  /**
   * Change visibility of skip links on focus
   */
  function globalSkipLinkFocus(event) {
    event.currentTarget.style.left = '0px';
  }
  function skipLinksFocus(event){
    globalSkipLinkFocus(event);
    dom.skipLinks.setAttribute('aria-hidden', false);
  }
  /**
   * Hide skip links on blur
   */
  function skipLinkBlur(event) {
    dom.skipLinks.setAttribute('aria-hidden', true);
    // dom.skipToNavLink.focus();
    event.currentTarget.style.left = '-50000px';
  }
  /**
   * Send focus to selected slide
   */
  function skipLinkClick(event) {
    skipLinkBlur(event);
    var href = event.currentTarget.getAttribute('href');
    var section = document.querySelector('[data-id="'+href.split('#/')[1]+'"]');
    // section.querySelector( SKIP_LINK_TARGET_SELECTOR ).focus();
  }


  /**
   * Extend object a with the properties of object b.
   * If there's a conflict, object b takes precedence.
   */
  function extend( a, b ) {

    for( var i in b ) {
      a[ i ] = b[ i ];
    }

  }
  /**
   * Creates an HTML element and returns a reference to it.
   * If a sibling element is passed through, element is
   * inserted after.
   */
  function createNodeAfterSibling( container, tagname, id, innerHTML, sibling, options ) {

    var node = document.createElement( tagname );
    node.setAttribute('id', id);
    if( innerHTML !== null ) {
      node.innerHTML = innerHTML;
    }
    if(options){
      for(var option in options){
        node.setAttribute(option, options[option]);
      }
    }
    if(sibling) {
      container.insertBefore( node, sibling.nextSibling );
    }
    else {
      container.appendChild( node );
    }
    return node;
  }
})();
