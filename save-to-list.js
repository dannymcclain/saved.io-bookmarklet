javascript: (function() {
  let list = prompt('List%20name:', '');
  let savedURL;
  let prefix;
  if (list == '') {
    prefix = 'saved.io/';
    savedURL = 'http://' + prefix + window.location.href;
    window.open(savedURL);
  } else {
    prefix = '.saved.io/';
    savedURL = 'http://' + list + prefix + window.location.href;
    window.open(savedURL);
  }
})();
