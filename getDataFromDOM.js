$("[type='submit']").click(function (){
    let data = $("form").serializeArray();
    let users = {};
    for (let i = 0; i<data.length; i++) {
        if (data[i].name=="username") {
            users.username = data[i].value
        }
        if (data[i].name=="password") {
            users.password = data[i].value
        }
    }
    // chrome.storage.sync.get(["lenData"], function (result) {
    //     let lenData = result.lenData;
    //     console.log(typeof lenData);
    //     chrome.storage.sync.set({[lenData+1]: users}, function () {
    //         chrome.storage.sync.set({lenData: lenData+1});
    //         console.log("user was added to sync");
    //     })
    // });

    chrome.storage.sync.set({users: users}, function (){
        console.log("user was saved to local")
    })
})
