chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "updatePopup") {
      chrome.storage.local.set({ selectedText: request.selectedText });
    }
  });
  