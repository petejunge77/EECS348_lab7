
function checker(){
    const first = document.getElementById("first").value;
    const second = document.getElementById("second").value;

    if (first.length < 8){
        alert("Password must be at least 8 characters.")
    } else if (second.length < 8){
        alert("Password must be at least 8 characters.")
    }
    else if (first != second){
        alert("Passwords must match.")
    } else {
        alert("Password successfully checked.")
    }
}