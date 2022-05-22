
let blackwords = [];
let word;

function hadiOlm(comment) {
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
      console.log("Comment label ID: " + result + "\n")      
      // const parseResult = JSON.parse(result);
      // parseResult.forEach(word => {
      //   console.log(word.name);
      //   blackwords.push(word.name);
      // });
    })
    .catch(error => console.log('error', error));
}

chrome.storage.sync.get(['word'], function(result) {
  console.log('Value currently is ' + result.word);
  word = result.word;
});

let counter = 0;

$(document).ready(function () {
  blackwords.push(word);
  var divArray = document.getElementById('react-root'); //BURAYA BAK OBSERVER,react-root bakılıcak
  var observer = new MutationObserver(function () {
      const values = document.getElementsByClassName('MOdxS'); //tüm yorumlar bu class'ın içinde
      //values[index].innerText = yorum demek
      for (let index = 0; index < values.length; index++) {
        hadiOlm(values[index].innerText);
        for(let i = 0;i < blackwords.length; i++){
          if (values[index].innerText.includes(blackwords[i])){
            counter++;
            console.log(values[index].innerText);
            values[index].innerText = values[index].innerText.replaceAll(blackwords[i], "**Censored**")
          }
        }
      }
      console.log(`${counter} message censored due to problematic language use`);
  })
  observer.observe(divArray, { attributes: false, childList: true, subtree: true });
});