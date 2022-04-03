// //const activate = document.getElementById('activate');
// console = chrome.extension.getBackgroundPage().console;

// document.getElementById('automate-form1').onsubmit = event => {
//   event.preventDefault();
//   const values = document.getElementsByClassName("_7UhW9   xLCgt      MMzan   KV-D4           se6yk       T0kll");
//   console.log(document);
// }

// document.getElementById('automate-form').onsubmit = event => {
//   event.preventDefault();
//   const instatag = document.getElementById("instatag").value;
//   chrome.tabs.create({url: `https://www.instagram.com/p/CbV11ois8n4/`});
//   console.log('instada ilgili hashtag kısmına gidildi');
// }

// // _7UhW9   xLCgt      MMzan   KV-D4           se6yk       T0kll
// // _7UhW9   xLCgt      MMzan   KV-D4           se6yk       T0kll 
// // _7UhW9   xLCgt      MMzan   KV-D4           se6yk       T0kll 

//console.log("scriptjs")

//$('._7UhW9   xLCgt      MMzan   KV-D4           se6yk       T0kll ').each(function() {
//  console.log($(this))
//})
// console.log(comments)


$(document).ready(function () {
  var divArray = document.getElementById('react-root'); //BURAYA BAK OBSERVER,react-root bakılıcak
  var observer = new MutationObserver(function () {
      const values = document.getElementsByClassName('MOdxS'); //tüm yorumlar bu class'ın içinde
      console.log(values.length) //values[index].innerText = yorum demek
      for (let index = 0; index < values.length; index++) {
          if (values[index].innerText.includes("kabul"))
              values[index].innerText = values[index].innerText.replaceAll("kabul", "**censored**")
              
      }
  })
  observer.observe(divArray, { attributes: false, childList: true, subtree: true });
  
});
// event.preventDefault();
// const values = document.getElementsByClassName("_7UhW9   xLCgt      MMzan   KV-D4           se6yk       T0kll");
// console.log(values);