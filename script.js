function searchBus() {

    let searchText =
        document.getElementById("searchBox")
        .value.toLowerCase();


    let buses =
        document.querySelectorAll(".bus-card");


    buses.forEach(function(bus) {

        let busText =
            bus.innerText.toLowerCase();


        if (busText.includes(searchText)) {

            bus.style.display = "block";

        } else {

            bus.style.display = "none";

        }

    });

}


function showMessage(route) {

    document.getElementById("message")
        .innerText =
        route + " selected successfully!";

}
