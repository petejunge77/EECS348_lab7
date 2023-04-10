function paragraphcolor() {
    var br = document.getElementById("br").value;
    var bg = document.getElementById("bg").value;
    var bb = document.getElementById("bb").value;
    var bw = document.getElementById("bw").value;
    var tr = document.getElementById("tr").value;
    var tg = document.getElementById("tg").value;
    var tb = document.getElementById("tb").value;
    var paragraph = document.getElementById("words");

    paragraph.style.borderColor = `rgb(${br},${bg},${bb})`;
    paragraph.style.backgroundColor = `rgb(${tr},${tg},${tb})`;
    paragraph.style.borderWidth = `${bw}px`;


}


