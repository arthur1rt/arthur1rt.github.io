
function exportAllData() {
    var dataJson = {};

    console.log(document.getElementById("AllBattleNames"))
    // grab battle info
    dataJson['BattleInfo'] = {
        'nameId': document.getElementById("AllBattleNames").value,
        'edition': document.getElementById("EditionNumber").value,
        'day': document.getElementById("BattleDay").value,
        'month': document.getElementById("BattleMonth").value,
        'year': document.getElementById("BattleYear").value
    }

    downloadJson(dataJson, "Teste");
}

function downloadJson(json, filename) {
    var jsonString = JSON.stringify(json);
    var jsonBlob = new Blob([jsonString], { type: "application/json" });
    var jsonUrl = URL.createObjectURL(jsonBlob);
    var link = document.createElement("a");
    link.setAttribute("href", jsonUrl);
    link.setAttribute("download", filename + ".json");
    link.click();
}