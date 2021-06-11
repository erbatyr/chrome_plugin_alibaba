chrome.runtime.onInstalled.addListener(function() {

    console.log("extension was installed!")

    chrome.storage.sync.get(null, function(result) {
        data = result;
        console.log(data)
    });
});