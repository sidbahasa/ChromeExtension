document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get(["selectedText"], function (result) {
      var selectedText = result.selectedText || "No text selected";
      document.getElementById("selectedText").textContent = selectedText;
    });
  });
  