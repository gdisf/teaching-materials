/**
* Returns an XMLHttp instance to use for asynchronous
* downloading. This method will never throw an exception, but will
* return NULL if the browser does not support XmlHttp for any reason.
* @return {XMLHttpRequest|Null}
*/
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

/**
* This functions wraps XMLHttpRequest open/send function.
* It lets you specify a URL and will call the callback if
* it gets a status code of 200.
* @param {String} url The URL to retrieve
* @param {Function} callback The function to call once retrieved.
*/
function downloadUrl(url, type, data, callback) {
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
     callback(request.responseText, request.status);
     request.onreadystatechange = function() {};
   }
 }
 request.open(type, url, true);
 if (type == "POST") {
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.setRequestHeader("Content-length", data.length);
  request.setRequestHeader("Connection", "close"); 
 }

 try {
   request.send(data);
 } catch (e) {
   changeStatus(e);
 }
};

function downloadScript(url) {
  var script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
}

/* This is the main program entry after the page loads completely. */
function highlightUser(me, div) {
	if (me == '') return;
    var meFinder = new RegExp('@' + me);
    var highlighting = {
    	'me': { 'backgroundColor': '#bedded', 'fontWeight': 'bold' }
	};

	var chatLines = div.childNodes;
	for(var a = 0; a < chatLines.length; a++) {
		var node = chatLines[a];
        if(node.tagName == 'DIV') {
          var result = meFinder.exec(node.innerHTML);
            if(result) {
              for(var cssStyle in highlighting.me) {
                node.style[cssStyle] = highlighting.me[cssStyle];
              }
            }
         }
     }
}

// Linkifier, from http://userscripts.org/scripts/review/6128

var nodesWithUris = new Array();
var uriRe = /\b(?:((?:https?|ftp|telnet|ldap|irc|nntp|news|irc):\/\/[^\s'"<>()]*|[-\w]+@(?:[-\w]+\.)+[\w]{2,6})\b|([\w\-])+(\.([\w\-])+)*@((([a-zA-Z0-9])+(([\-])+([a-zA-Z0-9])+)*\.)+([a-zA-Z])+(([\-])+([a-zA-Z0-9])+)*)|about:[A-Z0-9._?=%-]{4,19}|mailto:[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4})/gi;

function fixlinks()
{
	var replacements, regex, key, textnodes, node, s; 

	replacements = { 
	"h..p:\/\/": "http://",
	"/\bftp\.": "ftp://ftp."
	};

	regex = {}; 
	for (key in replacements) { 
		regex[key] = new RegExp(key, 'g'); 

		textnodes = document.evaluate( "//body//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null); 

		for (var i = 0; i < textnodes.length; i++) { 
		    node = textnodes[i]; 
		    s = node.data; 
		    for (key in replacements) { 
		        s = s.replace(regex[key], replacements[key]); 
		    } 
		    node.data = s; 
		} 

	}

}


function makeLinks(baseNode)
{
	getNodesWithUris(baseNode);

	for (var i in nodesWithUris)
	{
		var nodes = new Array(nodesWithUris[i]);	// We're going to add more nodes as we find/make them
		while (nodes.length > 0)
		{
			var node = nodes.shift();
			if (node) {
			var uriMatches = node.nodeValue.match(uriRe);	// array of matches
			if (uriMatches == null) continue;
			var firstMatch = uriMatches[0].toLowerCase();
			var pos = node.nodeValue.toLowerCase().indexOf(firstMatch);

			if (pos == -1) continue;	// shouldn't happen, but you should always have safe regex
			else if (pos == 0)	// if starts with URI
			{
				if (node.nodeValue.length > firstMatch.length)
				{
					node.splitText(firstMatch.length);
					nodes.push(node.nextSibling);
				}

				var linky = document.createElement("a");
				linky.className = "linkifierplus";
				linky.target = "_blank";
				linky.href = (node.nodeValue.indexOf(":") == -1 ? "mailto:" : "") + node.nodeValue.replace(/\.*$/, "");
				node.parentNode.insertBefore(linky, node);
				linky.appendChild(node);
			}
			else	// if URI is in the text, but not at the beginning
			{
				node.splitText(pos);
				nodes.unshift(node.nextSibling);
			}
			}
		}
	}
}

function getNodesWithUris(node)
{
	if (node.nodeType == 3)
	{
		if (node.nodeValue.search(uriRe) != -1)
			nodesWithUris.push(node);
	}
	else if (node && node.nodeType == 1 && node.hasChildNodes() && !node.tagName.match(/^(a|head|object|embed|script|style|frameset|frame|iframe|textarea|input|button|select|option)$/i))
		for (var i in node.childNodes)
			getNodesWithUris(node.childNodes[i]);
}
