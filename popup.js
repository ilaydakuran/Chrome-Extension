//const activate = document.getElementById('activate');
console = chrome.extension.getBackgroundPage().console;
/*
document.getElementById('automate-form1').onsubmit = event => {
  event.preventDefault();
  const values = document.getElementsByClassName("_7UhW9   xLCgt      MMzan   KV-D4           se6yk       T0kll");
  console.log(document);
}
*/
document.getElementById('automate-form').onsubmit = event => {
  event.preventDefault();
  //const instatag = document.getElementById("instatag").value;
  chrome.tabs.create({url: `https://www.instagram.com/p/CbUfq_cMToQ/`});
  console.log('instada ilgili hashtag kısmına gidildi');
}

document.getElementById('automate-form1').onsubmit = event => {
  event.preventDefault();
  chrome.runtime.openOptionsPage()
}

// _7UhW9   xLCgt      MMzan   KV-D4           se6yk       T0kll
// _7UhW9   xLCgt      MMzan   KV-D4           se6yk       T0kll 
// _7UhW9   xLCgt      MMzan   KV-D4           se6yk       T0kll 