// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

  

  function openTab(){
    return function(info, tab){
        let text = info.selectionText;
        let instalink = "https://twitter.com/explore"; //sağ click yaptıktan sonra direkt bu sayfayı açıyor
        chrome.tabs.create ({index: tab.index + 1, url: instalink, 
        selected: true});
       
    }
};
  var contextMenuItem = {
    "id": "indir",
    "title" : " Misogynistic Language Detector", //herhangi bir websitesinde sağ tık yapınca bu görünüyor 
    "onclick": openTab(),
  
  };
  
  chrome.contextMenus.create(contextMenuItem);

  chrome.contextMenus.onClicked.addListener(function(clickData){ 
    alert("Let's eliminate hostility towards women!!!"); //tıkladıktan sonra alert veriliyor ekranda
    console.log('website is loaded');
  
      });
      
     
     