var translate = document.querySelector("#btn-translate");
var input_translate = document.querySelector("#input-translate")
var output_translate = document.querySelector("#output-translate")

var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" + "?" + "text=" + input_translate.value

function callback() {
    fetch(url)
        .then(response => response.json())
        .then(json => { 
            var output_text = json.contents.translated;
            output_translate.innerText = output_text;

        })
    output_translate.innerText = input_translate.value;
}

translate.addEventListener("click", callback)