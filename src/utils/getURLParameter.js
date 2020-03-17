export const getURLParameter = (URLString, paramName) => {
  URLString = URLString.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + paramName + '=([^&#]*)');
  var results = regex.exec(URLString);


  if (results && results.length > 0) {
    return decodeURIComponent(results[1].replace(/\+/g, ' '));
  } else {
    return '';
  }
}