var registerLink = document.getElementById('registerLink');
var loginLink = document.getElementById('loginLink');

registerLink.addEventListener('click', function() {

    console.log('Registrieren-Link wurde geklickt!');
});


loginLink.addEventListener('click', function() {

    console.log('Anmelden-Link wurde geklickt!');
});

// async function simulateImageLoading() {
    function simulateImageLoading() {
    var images = document.getElementsByClassName("gallery-img");

    for (var i = 0; i < images.length; i++) {
        images[i].onload = function() {
            // images[i].style.visibility=hidden
            console.log("Bild geladen: " + this.src);
        };

        images[i].onerror = function() {
            console.log("Fehler beim Laden des Bildes: " + this.src);
        };

        images[i].src = images[i].getAttribute("src");
        // await new Promise(r => setTimeout(r, 2000));
         }
}

window.onload = function() {
    simulateImageLoading();
};
