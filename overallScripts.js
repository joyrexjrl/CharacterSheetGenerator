const osePageDisplayer = document.getElementById("ose_sheet_display");
const oseLogoButton = document.getElementById("ose_logo_button");
const welcomeScreen = document.getElementById("welcome_screen");

function openOsePage(){
    welcomeScreen.classList.toggle("hide");
    osePageDisplayer.classList.toggle("hide");
    oseLogoButton.classList.toggle("logo_outline");
}