function applyAllChanges() {
    document.getElementById("canvas").style.backgroundColor = document.getElementById("colorPicker").value;
    document.getElementById("canvas").style.borderRadius = document.getElementById("cornerShape").value;
    updateTextStyle();
    updateTextBox();
}

function resetChanges() {
    document.getElementById("canvas").style.backgroundColor = "white";
    document.getElementById("canvas").style.borderRadius = "0px";
    document.getElementById("textOverlay").innerText = "";
    document.getElementById("textOverlay").style = "";
}

function updateText() {
    document.getElementById("textOverlay").innerText = document.getElementById("textInput").value;
}

function updateTextStyle() {
    let text = document.getElementById("textOverlay");
    text.style.fontFamily = document.getElementById("fontStyle").value;
    text.style.textAlign = document.getElementById("textAlign").value;
    text.style.color = document.getElementById("textColor").value;
}

function updateTextBox() {
    let text = document.getElementById("textOverlay");
    text.style.background = "rgba(255,255,255,0.5)";
    text.style.borderRadius = document.getElementById("textBoxShape").value;
}