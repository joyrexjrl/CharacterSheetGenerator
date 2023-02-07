const osePageDisplayer = document.getElementById("ose_sheet_display");
const oseLogoButton = document.getElementById("ose_logo_button");

function openOsePage(){
    osePageDisplayer.classList.toggle("hide");
    oseLogoButton.classList.toggle("logo_outline");
}