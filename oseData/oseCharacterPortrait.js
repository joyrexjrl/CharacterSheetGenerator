const oseFileInput = document.querySelector("#file_input");
const osePortaitDisplay = document.querySelector("#image_display");

oseFileInput.addEventListener("change", (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        osePortaitDisplay.src = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});