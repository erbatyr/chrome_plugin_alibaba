chrome.storage.sync.get(null, function(result) {
    data = result
    if (data!=null) {
        $(".table").append("<tr>" +
            "<td>"+ data.users.username +"</td>" +
            "<td>"+ data.users.password +"</td>" +
            "</tr>")
    } else {
        $(".table").append("no data")
    }
});


