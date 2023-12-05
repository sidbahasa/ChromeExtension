chrome.contextMenus.create({
    title: "Send to Popup",
    contexts: ["selection"],
    onclick: function (info, tab) {
      chrome.tabs.sendMessage(tab.id, { action: "updatePopup", selectedText: info.selectionText });
    }
  });
  
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "updatePopup") {
      chrome.browserAction.setPopup({
        tabId: sender.tab.id,
        popup: "popup.html"
      });
      chrome.storage.local.set({ selectedText: request.selectedText });
    }
  });
  