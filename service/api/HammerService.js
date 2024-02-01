function getHammers() {
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
                                        <td>${item.preis} €</td>
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
}

function postHammer() {
    const url = "http://localhost:8080/api/hammer/create";
    const formData = {
        "bezeichnung": $("#bezeichnung").val(),
        "preis": $("#preis").val(),
        "quality": $("#quality").val()
    };

    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json",
        data: JSON.stringify(formData),
        success: function (data) {
            console.log("Hammer created successfully:", data);
            getHammers();
        },
        error: function (error) {
            console.error("Error creating hammer:", error);
        }
    });
}

$("#getHammered").click(getHammers);

$("#postHammered").click(postHammer);