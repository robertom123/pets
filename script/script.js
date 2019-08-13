//import picture

document.getElementById('file').addEventListener("change", (e)=> {
    let image = document.getElementById('output');
    image.src = URL.createObjectURL(e.target.files[0]);

});

