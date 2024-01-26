/**
 * Gets a Hammer by its id
 */
$(document).ready(function () {
    $("#getHammered").click(function () {
        let url = "http://localhost:8080/api/hammer/2";

        $.get(url, function (data) {
            try{
                $("#hammerTable").html(
                    "<table>" +
                    "<tr>" +
                    "<td>" + data?.bezeichnung + "</td>" +
                    "<td>" + data?.preis + "</td>" +
                    "<td>" + data?.quality + "</td>" +
                    "</tr> + " +
                    "</table>");
                console.log(data);
            } catch (error) {
                console.log("es konnten keine Daten geholt werden bzw gab es dabei ein fehler" + error)
            }
        })
    });
});