let submit = document.getElementById("submit");
const xhttp = new XMLHttpRequest();
const endPointRoot = "http://localhost:8080/COMP4537/labs/4/";
let resource = "store/";

function post() {
    let word = document.getElementById("word").value;
    let def = document.getElementById("definition").value;
    let params = "?word=" + word +"&&definition=" + def;
    xhttp.open("POST", endPointRoot + resource, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;        }
    }
}

submit.onclick = post;