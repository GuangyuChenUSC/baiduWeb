function changePos() {
    var ipt1 = regionCheck.querySelectorAll("input[type=checkbox]:checked");
    var ipt2 = productCheck.querySelectorAll("input[type=checkbox]:checked");
    var table = document.querySelector("#table");
    if (ipt1.length === 1 && ipt2.length > 1) {
        for (var i = 0; i < table.rows.length; i++) {
            var temp = table.rows[i].cells[0].innerHTML;
            table.rows[i].cells[0].innerHTML = table.rows[i].cells[1].innerHTML;
            table.rows[i].cells[1].innerHTML = temp;
        }
    }
}