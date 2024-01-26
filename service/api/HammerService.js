/**
 * Gets a Hammer by its id
 */
$(document).ready(function () {
    $("#getHammered").click(function () {
        const url = "http://localhost:8080/api/hammer/all";

        $.get(url, function (data) {
            try {
                let tableContent = `<table>
                            <thead>
                                <tr>
                                    <th>Bezeichnung</th>
                                    <th>Preis</th>
                                    <th>Quality</th>
                                </tr>
                            </thead>
                            <tbody>`;

                data.forEach(item => {
                    tableContent += `
                                <tr>
                                    <td>${item.bezeichnung}</td>
                                    <td>${item.preis}</td>
                                    <td>${item.quality}</td>
                                </tr>`;
                });

                tableContent += `</tbody></table>`;
                $("#hammerTable").html(tableContent);
                console.log(data);
            } catch (error) {
                console.error("Error fetching or processing data: ", error);
            }
        });
    });
});