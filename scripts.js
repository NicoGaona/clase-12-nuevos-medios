const datos = [
    {
        picsum: "https://picsum.photos/id/1025/900/600",
        title: "Perro",
        text: "Hola perro",
    },
    {
        picsum: "https://picsum.photos/id/1062/900/600",
        title: "Otro perro",
        text: "Hola otro perro",
    },
    {
        picsum: "https://picsum.photos/id/200/900/600",
        title: "Vaca",
        text: "Una vaca",
    },
    {
        picsum: "https://picsum.photos/id/146/900/600",
        title: "Triciclo",
        text: "Yo tenía este mismo triciclo cuando chico",
    },
    {
        picsum: "https://picsum.photos/id/237/900/600",
        title: "No lo puedo creer otro perro",
        text: "Hola soy otro perro",
    }
];

datos.forEach((d, i) => {
    if (i % 2 == 0) {
        // par
        document.getElementById("trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 order-md-2 text-white showcase-img" style="background-image: url('+ d.picsum +');"></div><div class="col-md-6 order-md-1 my-auto showcase-text"><h2>'+ d.title +'</h2><p class="lead mb-0">'+ d.text +'</p></div></div>';
    } else {
        // impar
        document.querySelector("#trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 text-white showcase-img" style="background-image: url('+ d.picsum +');"></div><div class="col-md-6 my-auto showcase-text"><h2>'+ d.title +'</h2><p class="lead mb-0">'+ d.text +'</p></div></div>';
    }
});

async function users() {
    const consulta = await fetch("https://randomuser.me/api/?results=3");
    const data = await consulta.json();
    const resultados = data.results;
    console.log(resultados);
    resultados.forEach((p) => {
        document.getElementById("personas").innerHTML +=
            '<div class="col-lg-4"><div class="testimonial-item mx-auto mb-5 mb-lg-0"><img class="img-fluid rounded-circle mb-3" src="' +
            p.picture.large +
            '" alt="..." /><h5>' +
            p.name.first +
            " " +
            p.name.last +
            '</h5><p class="font-weight-light mb-0">' +
            p.location.city +
            ", " +
            p.location.country +
            "<br>" +
            p.email +
            "</p></div></div>";
    });
}




users().catch((error) => console.error(error));
