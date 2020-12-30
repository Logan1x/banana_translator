var translate = document.querySelector("#btn-translate");
var input_translate = document.querySelector("#input-translate")
var output_translate = document.querySelector("#output-translate")

// mock server
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"


// actual server
var url = "https://api.funtranslations.com/translate/minion.json"

function urlfunc(url){
    return url + "?" + "text=" + input_translate.value
}

function errorhandler(error){
    alert("Something wrong with the server. Please try again later.")
}

function callback() {
    fetch(urlfunc(url))
        .then(response => response.json())
        .then(json => { 
            var output_text = json.contents.translated;
            output_translate.innerText = output_text;
        })
        .catch(errorhandler)
}

translate.addEventListener("click", callback)