// ==UserScript==
// @name        sanseido-query-title
// @namespace   https://github.com/tsudoko
// @description Adds search query to the title tag on sanseido.net
// @include     http://www.sanseido.net/User/Dic/Index.aspx*
// @version     1
// @grant       none
// ==/UserScript==

function getQueryParams(qs) {
  qs = qs.split('+').join(' ');
  
  var params = {},
      tokens,
      re = /[?&]?([^=]+)=([^&]*)/g;

  while(tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

let title = document.getElementsByTagName("title")[0],
    query = getQueryParams(document.location.search)["TWords"];

if(query) {
  title.innerHTML = query + " - " + title.innerHTML;
}
