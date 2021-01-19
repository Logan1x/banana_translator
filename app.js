var translate = document.querySelector("#btn-translate");
var input_translate = document.querySelector("#input-translate")
var output_translate = document.querySelector("#output-translate")

// mock server
// var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"


// actual server
var url = "https://api.funtranslations.com/translate/minion.json"

function urlfunc(url) {
    return url + "?" + "text=" + input_translate.value
}

function errorhandler(error) {
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


// dark theme

// var currentTheme = 'dark';

// function changeTheme() {
//     document.body.classList.toggle('dark-mode');

//     if (currentTheme === 'dark') {
//         document.getElementById('toggleknop').innerHTML = '<i class="fas fa-sun" id="zon" style="color:#d8c658;"></i>';
//         currentTheme = 'sun';
//     } else {
//         document.getElementById('toggleknop').innerHTML = '<i class="fas fa-moon" id="maan" style="color:#737eac;"></i>';
//         currentTheme = 'dark';
//     }
// }

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.getElementById('toggleknop').innerHTML = '<i class="fas fa-sun" id="zon" style="color:#d8c658;"></i>';
  document.body.classList.add("dark-theme");
}

function changeTheme() {
    document.body.classList.toggle("dark-theme");
  
  document.getElementById('toggleknop').innerHTML = '<i class="fas fa-moon" id="maan" style="color:#737eac;"></i>';

  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    document.getElementById('toggleknop').innerHTML = '<i class="fas fa-sun" id="zon" style="color:#d8c658;"></i>';
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
}