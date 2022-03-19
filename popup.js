//const activate = document.getElementById('activate');

document.getElementById('automate-form').onsubmit = event => {
  event.preventDefault();
  const instatag = document.getElementById("instatag").value;
  chrome.tabs.create({url: `https://instagram.com/explore/tags/${instatag}`}); 
  console.log('instada ilgili hashtag kısmına gidildi');
}