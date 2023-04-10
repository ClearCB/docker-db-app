function insertarItem() {

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:5000/items/create-one");
    xhttp.setRequestHeader("Content-Type", "application/json");

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let sellIn = document.getElementById("sell_in").value;
    let quality = document.getElementById("quality").value;
    let itemType = document.getElementById("item_type").value;
    let data = { "_id": parseInt(id), "name": name, "sell_in": sellIn, "quality": quality, "item_type": itemType };

    xhttp.onreadystatechange = function () {

        if (xhttp.readyState === XMLHttpRequest.DONE) {
            if (xhttp.status === 200) {
                document.getElementById("itemsInsert").innerHTML = xhttp.responseText;
            } else {
                document.getElementById("itemsInsert").innerHTML = xhttp.status;
            }
        }
    };

    xhttp.send(JSON.stringify(data));
}

function buscarItem() {
    let itemId = document.getElementById("ids").value;
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        if (this.responseText.length > 0) {

            item = this.response;
            document.getElementById("items").innerHTML = item;


        }

    }

    xhttp.open("GET", "http://localhost:5000/items/find-one/" + itemId);
    xhttp.send();
}

function deleteItem() {

    let itemId = document.getElementById("id_eliminar").value;
    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        if (this.responseText.length > 0) {

            item = this.response;
            document.getElementById("itemsd").innerHTML = item;


        }

    }

    xhttp.open("DELETE", "http://localhost:5000/items/delete-one/" + itemId);
    xhttp.send();
}