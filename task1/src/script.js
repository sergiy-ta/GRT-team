const popup = document.getElementById("popup");

let close_popup_boolean = true;

function openPopup() {
    popup.style.display = "block";
}

function closePopup() {
    if (close_popup_boolean) popup.style.display = "none";
    close_popup_boolean = true;
    console.log("closePopup");
}

function noClosePopup() {
    close_popup_boolean = false;
    console.log("noClosePopup");
}