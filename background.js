// create a context menu 
browser.contextMenus.create({ 
    id: "wiki", 
    title: "Search on Wikipedia.org", 
    contexts: ["selection"] 
}); 

//add action listener to the context menu 
browser.contextMenus.onClicked.addListener(contextMenuAction); 

console.log('background running'); 
chrome.runtime.onMessage.addListener(receiver); 
//window.word = ""; 
function receiver(request, sender, sendResponse) { 
	console.log(request); 
	word = request.text; 
} 

function contextMenuAction(info, tab) { 
	const url = "https://en.wikipedia.org/wiki/"+info.selectionText; 
    browser.tabs.create({url: url}); 
} 
