HNSpecial.settings.registerModule("highlight_author", function () {

  function highlightAuthors() {
    post_author = _.$('.subtext a')[0].innerHTML;
    _.$('div span.comhead :nth-child(1)').forEach(function(author) {
      if(author.innerHTML === post_author) {
        author.style.backgroundColor = '#ff8937'
        author.style.color = '#ffffff'
      }
    });
  }

  if(window.location.pathname == '/item') {
    highlightAuthors()
  }
});
