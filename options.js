$(function(){
  $('#words').click(function(){
    // console.log($('#word').val());
    chrome.storage.sync.set({'word': $('#word').val()}, function() {
      console.log('Value is set to ' + $('#word').val());
    });
  })
})