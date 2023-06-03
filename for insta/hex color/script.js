function myColor() {
    let color = document.getElementById('colorPicker').value;
    document.body.backgroundColor = color;
    document.getElementById('colorPicker').addEventListener(
        'input', myColor);
}