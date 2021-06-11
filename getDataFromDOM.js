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
    chrome.storage.sync.set({users: users}, function (){
        console.log("user was saved to local")
    })
})
