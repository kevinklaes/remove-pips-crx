window.onload = function() {
    var allImages = document.getElementsByTagName("img");
    for (var i = 0, len = allImages.length; i < len; ++i) {
        if (allImages[i].hasAttribute("alt")) {
            if (allImages[i].alt == "Pip") {
                allImages[i].parentNode.removeChild(allImages[i])
            }
        }
    }
}
