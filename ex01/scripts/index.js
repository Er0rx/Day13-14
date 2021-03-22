// Get the modal
var modal = document.getElementById("myModal");
// Get Modal Content
var modalPage = document.getElementsByClassName("modal-page");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the overlay/image, open the modal
function runModal(arg) {
    modal.style.display = "block";
    modalPage[0].data = arg;
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
