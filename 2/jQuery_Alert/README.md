# jQuery-Alert-Dialogs-Plugin
This is a modified version of jQuery alerts from Cory S.N. LaViska, A Beautiful
Site (http://abeautifulsite.net/notebook/87).

Dual-licensed as GPL and MIT.

# Modifications

- no 'draggable' dependency;
- Add jLoad 
- Fixed for use jQuery 2xxx

# Installation

Just copy and include the .js and .css files.

# Usage
  
  
jLoad for loading content
  jLoad('This is a custom load box', 'Loading');
  setTimeout("$('#popup_container').remove();",'2000');

jAlert for Alert Box
  jAlert('This is a custom alert box', 'Title Alert');
  jConfirm for Confirm Dialog

jConfirm('Can you confirm this?', 'Confirmation Dialog', function(r) {
  
      jAlert('Confirmed: ' + r, 'Confirmation Results');
      
  });


  jPrompt for jPrompt Dialog
  
  
  jPrompt('Type something:', 'Prefilled value', 'Prompt Dialog', function(r) {
  
            if( r ) alert('You entered ' + r);
  
  });


  Exemple custom css
  
  $.alerts.dialogClass = $(this).attr('id'); // set custom style class
  
  jAlert('Alert Custom Style', 'Custom Styles', function() {
  
      $.alerts.dialogClass = null; // reset to default
  
  });


# License

Reseased under MIT License as the original source was.
