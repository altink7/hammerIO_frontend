$(document).ready(function () {
    $("#getHammered").click(function () {
        let url = "http://localhost:8080/api/hammer/2";

        let quality = $("#quality").val();
        let price = $("#preis").val();
        let bezeichnung = $("#bezeichnung").val();

        console.log("quality: "+ quality, + "preis: " + price,
            "bezeichnung: " + bezeichnung);
        
        $.get(url, function (data) {
            try{
                let dataJson= JSON.stringify(data);
                console.log(dataJson);
            } catch {
                console.log("es konnten keine Daten geholt werden bzw gab es dabei ein fehler")
            }
        })
    });
});