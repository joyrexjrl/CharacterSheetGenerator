const welcomeScreen = document.getElementById("welcome_screen");
const gameGeneratorIcons = document.querySelectorAll(".game_sheet_buttons");
const pageSections = document.querySelectorAll(".page_dislayer");

gameGeneratorIcons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonId = button.getAttribute("id");
        const selectionId = buttonId.replace("logo_button", "sheet_display");
        const section = document.getElementById(selectionId);

        if(section.classList.contains("hide")){
            gameGeneratorIcons.forEach(btn => btn.classList.remove("logo_outline"));
            button.classList.add("logo_outline");

            pageSections.forEach(sect => sect.classList.add("hide"));
            section.classList.remove("hide");
            welcomeScreen.classList.add("hide");
        }else{
            button.classList.remove("logo_outline");
            section.classList.add("hide");
            welcomeScreen.classList.remove("hide");
        }
    });
});

function oseDieRoller(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}