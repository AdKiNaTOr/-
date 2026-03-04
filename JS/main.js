window.onload = function() {
    const url = new URL(window.location.href);
    const fileName = url.pathname.split("/").pop();
    if (fileName == "index.html") {
        let download = document.getElementById("download")
        if (download) {
            download.addEventListener("click", function(){
                alert("ЕЩЕ РАНО")
            })
        }
    }
    if (fileName == "download.html" ) {
        let download = document.getElementById("downloadOnSite")
        let AntonChigur = document.getElementById("AntonChigur")
        download.addEventListener("click", function(){
            AntonChigur.classList.add("MakeVisible")
        })
    }
 
}