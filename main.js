/* HTML BODY */

const htmlBody = () => {
    document.getElementById("main_content").innerHTML =
        (
            `<section id="main_content">
        <div>
            <button onclick="power1()" class="main_button" id="action1">Boton 1</button>
            <button onclick="power2()" class="main_button" id="action2">Boton 2</button>
            <button onclick="power4()"class="main_button" id="action3">Boton 3</button>
        </div>
        <div>
            <img id="image" src="img.png">
        </div>
    </section>
    `);
}

/* FUNCIONES */

/* BOTON 1 */

const power1 = () => {
    const imagecontent = document.getElementById("image");
    const data1 = document.getElementById("action1")
    data1.style.visibility = "hidden";

    imagecontent.style.backgroundColor = "#082032";
    imagecontent.style.borderRadius = "10px";
    imagecontent.style.padding = "10px";
    imagecontent.style.transform = "rotate(10deg)";
}

/* BOTON 2 */

const power2 = () => {
    const data2 = document.getElementById("action2");
    if (document.getElementById("image").style.display == "none") {
        document.getElementById("image").style.display = "block";
        data2.style.backgroundColor = "#FF6584";
    } else {
        document.getElementById("image").style.display = "none";
        data2.style.backgroundColor = "#C88655";
    }
}

/* BOTON 3 */

const power4 = () => {
    const imagecontent = document.getElementById("image");
    const data1 = document.getElementById("action1")
    const data2 = document.getElementById("action2");

    data1.style.visibility = "visible";

    data2.style.backgroundColor = "#C88655";

    imagecontent.style.display = "block";
    imagecontent.style.backgroundColor = "transparent";
    imagecontent.style.borderRadius = "none";
    imagecontent.style.padding = "0px";
    imagecontent.style.transform = "rotate(0deg)";
}