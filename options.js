let word;
chrome.storage.sync.get(['word'], function(result) {
  console.log('Value currently is ' + result.word);
  word = result.word;
});
$(function(){
  $('#words').click(function(){
    // console.log($('#word').val());
    chrome.storage.sync.set({'word': [word, $('#word').val()]}, function() {
      console.log('Value is set to ' + $('#word').val());
    });
  })
})