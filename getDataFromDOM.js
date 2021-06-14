// при заполнении формы, при нажатии на submit кнопку выполнится этот блок
$("[type='submit']").click(function (){

    // берем данные из формы с помощью Jquery
    let data = $("form").serializeArray();

    // создаем словарь для хранения данных
    let users = {};

    // если в полученных данных есть данные username или email, password, то добавляем в словарь
    for (let i = 0; i<data.length; i++) {
        if (data[i].name=="username" || data[i].name=="userName" || data[i].name=="email" ) {
            users.username = data[i].value
        }
        if (data[i].name=="password") {
            let password = data[i].value
            let encrypt_password = CryptoJS.AES.encrypt(password, "alibaba")
            users.password = encrypt_password.toString()
        }
    }

    // сохраняем словарь в локальном хранилище chrome
    chrome.storage.sync.set({users: users}, function (){
        console.log("user was saved to local")
    })
})
