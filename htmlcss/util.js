//Lightweight JSONP fetcher - www.nonobtrusive.com
var JSONP = (function(){
  var counter = 0, head, query, key, window = this;
  function load(url) {
    var script = document.createElement('script'),
      done = false;
    script.src = url;
    script.async = true;

    script.onload = script.onreadystatechange = function() {
      if ( !done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") ) {
        done = true;
        script.onload = script.onreadystatechange = null;
        if ( script && script.parentNode ) {
          script.parentNode.removeChild( script );
        }
      }
    };
    if ( !head ) {
      head = document.getElementsByTagName('head')[0];
    }
    head.appendChild( script );
  }
  function jsonp(url, params, callbackParam, callbackFunc) {
    query = "?";
    params = params || {};
    for ( key in params ) {
      if ( params.hasOwnProperty(key) ) {
        query += key + "=" + params[key] + "&";
      }
    }
    var jsonp = "json" + (++counter);
    window[ jsonp ] = function(data){
      callbackFunc(data);
      window[ jsonp ] = null;
      try {
        delete window[ jsonp ];
      } catch (e) {}
    };
    var callbackParam = callbackParam || 'callback'; 
    load(url + query + callbackParam + "=" + jsonp);
    return jsonp;
  }
  return {
    get:jsonp
  };
}());




var AJAX = (function(){

	function createXmlHttpRequest() {
	 try {
	   if (typeof ActiveXObject != 'undefined') {
		 return new ActiveXObject('Microsoft.XMLHTTP');
	   } else if (window["XMLHttpRequest"]) {
		 return new XMLHttpRequest();
	   }
	 } catch (e) {
	   changeStatus(e);
	 }
	 return null;
	};

	function downloadUrl(url, data, callback) {
	 var status = -1;
	 var request = createXmlHttpRequest();
	 if (!request) {
	   return false;
	 }
	 request.onreadystatechange = function() {
	   if (request.readyState == 4) {
		 try {
		   status = request.status;
		 } catch (e) {
		   // Usually indicates request timed out in FF.
		 }
		 if (status == 200) {
		   callback(request.responseText, request.status);
		   request.onreadystatechange = function() {};
		 }
	   }
	 }
	 request.open('POST', url, true);
	 try {
     request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	   request.send(data);
	 } catch (e) {
	   changeStatus(e);
	 }
  }
	
  return {
    post: downloadUrl
  };
}());