function merge(row, col) {
    var table = document.querySelector("#table");
    for (var i = row; i < table.rows.length - 1; i++) {
        if (table.rows[row].cells[col].innerHTML === table.rows[i + 1].cells[col].innerHTML) {
            table.rows[i + 1].cells[col].style.display = "none";
            table.rows[row].cells[col].rowSpan += 1;
        } else {
            merge(i + 1, 0);
        }
    }
}