const rutaNamn = document.querySelector("input");
const meny = document.querySelector("select");
const knapp = document.querySelector("button");
const lista = document.querySelector("ul");

knapp.addEventListener("click", function () {
    console.log("Du har klickat på knappen!");

    var namn = rutaNamn.value;
    console.log(namn);

    var cpu = meny.value;
    console.log(cpu);
    // Skriv i ul-listan
    if (cpu == "Ryzen3") {
        lista.innerHTML = "<li>" +
                            "<img src=\"https://inetimg.se/img/86x86/5303157_0.jpg\
                            "AMD Ryzen 3 3100 3.6GHz 18MB" +
                            "Antal kärnor: 4 st | Antal trådar: 8 st | TDP: 65 W" +
                            "<li>";

});