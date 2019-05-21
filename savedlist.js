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

javascript: if (frames.length > 1) alert('Sorry,%20frames%20detected.');
else {
  void (document.body.style.color = prompt(
    'Change%20to%20which%20text%20color?',
    'yellow'
  ));
}
