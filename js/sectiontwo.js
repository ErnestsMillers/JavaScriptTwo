$('.tab-list').each(function(){                   // Find lists of tabs
  var $this = $(this);                            // Store this list
  var $tab = $this.find('li.activetab');             // Get the active list item
  var $link = $tab.find('a');                     // Get link from active tab
  var $panel = $($link.attr('href'));             // Get active panel

  $this.on('click', '.tab-control', function(e) { // When click on a tab
    e.preventDefault();                           // Prevent link behavior
    var $link = $(this),                          // Store the current link
        id = this.hash;                           // Get href of clicked tab

    if (id && !$link.is('.activetab')) {             // If not currently active
      $panel.removeClass('activetab');               // Make panel inactive
      $tab.removeClass('activetab');                 // Make tab inactive

      $panel = $(id).addClass('activetab');          // Make new panel active
      $tab = $link.parent().addClass('activetab');   // Make new tab active
    }
  });
});
