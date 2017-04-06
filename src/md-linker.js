var copyPage = function() {
  chrome.tabs.getSelected(null, function(tab){
    copy("[" + tab.title + "](" + tab.url + ")");
  });
}
var menuOptions = {
  title: "Copy link with markdown-format",
  contexts: ["image", "link", "page", "selection"],
  onclick: function(target, tab) {
    copyPage();
  }
}
var contextMenu = chrome.contextMenus.create(menuOptions);

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == 'copyPage') {
      copyPage();
    }
  }
);
