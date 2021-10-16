let search = document.getElementById("submitSearch");
const xhttp = new XMLHttpRequest();
const endPointRoot = "http://localhost:8080/COMP4537/labs/4/";
let resource = "search/";

function getAll(){
    let word = document.getElementById("word").value;
    let params = "?search=" + word;
    const url = endPointRoot + resource + params;
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let response = this.responseText;
            let responseOBJ = JSON.parse(response);
            let definition = undefined;
            responseOBJ.dictionary.forEach(element => {
                if (element.word === word){
                    definition = element.definition;
                } else {
                    definition = `Request#${responseOBJ.count}, word '${word}' not found!`
                }
            })    
            document.getElementById("foundDefinition").innerHTML = definition;
        }
    };
}

search.onclick = getAll;