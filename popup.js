chrome.storage.sync.get(null, function(result) {
    data = result
    if (data!=null && data.users.username && data.users.password) {
        $(".table").append("<tr>" +
            "<td>"+ data.users.username +"</td>" +
            "<td>"+ data.users.password +"</td>" +
            "</tr>")
    } else {
        $(".table").append("no data")
    }
});


