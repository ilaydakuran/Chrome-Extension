let blackwords = [];
let counter = 0;

function getData(comment,callback) {
  var requestOptions = {
    method: 'POST',
    body: JSON.stringify({
      message: comment
  }),
  // Adding headers to the request
  headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
  };

  fetch("http://127.0.0.1:5000/api", requestOptions)
    .then(response => response.text())
    .then(result => {      
      callback(result);
    })
    .catch(error => console.log('error', error));

}

chrome.storage.sync.get(['word'], function(result) {
  for (const item of result.word){
    blackwords.push(item);
  }
});

$(document).ready(function () {
  var divArray = document.querySelector('div[id^="mount_0_0"]'); 
  var observer = new MutationObserver(function () {
      const values = document.getElementsByClassName('_a9zs'); 
      for (let index = 1; index < values.length; index++) {
        getData(values[index].innerText, function(e){
          if(e === '1\n'){
            values[index].innerText = "***Censored***";
          }
        });
        for(let i = 0;i < blackwords.length; i++){
          if (values[index].innerText.includes(blackwords[i])){
            counter++;
            values[index].innerText = "***Censored***";
          }
        }
      }
      console.log(`${counter} message censored due to problematic language use`);
  })
  observer.observe(divArray, { attributes: false, childList: true, subtree: true});
});