// код который выполнится при установке плагина
chrome.runtime.onInstalled.addListener(function() {

    //на консоль фоновой страницы выводим сообщение после установки плагина
    console.log("extension was installed!")

    //берем данные из локального харнилища и выводим на консоль фоновой страницы
    chrome.storage.sync.get(null, function(result) {
        data = result;
        console.log(data)
    });
});