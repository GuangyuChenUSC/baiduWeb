var wrapper = document.querySelector('#table-wrapper');
var table = document.createElement("table");
table.setAttribute("id", "table");

function createTable() {
    table.innerHTML = "";
    var tr = document.createElement("tr");
    tr.innerHTML = "<th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th>" ;
    table.appendChild(tr);
    wrapper.appendChild(table);
    for (var i = 0; i < list.length; i++) {
        var tr = document.createElement("tr");
        // 遍历数组中每一个对象
        for (var key in list[i]) {
            if (list[i].hasOwnProperty(key)) {
                // 判断list[i]的value是否是数组，非数组则直接添加到td里
                if (!Array.isArray(list[i][key])) {
                    var td = document.createElement("td");
                    td.innerHTML = list[i][key];
                    tr.appendChild(td);
                } else {
                    // 如果是数组，则遍历数组，将数组中的每一项分别创建并添加到td
                    for (var k = 0; k < list[i][key].length; k++) {
                        var td = document.createElement("td");
                        td.innerHTML = list[i][key][k];
                        tr.appendChild(td);
                    }
                }
            }
        }
        table.appendChild(tr);
    }
    wrapper.appendChild(table);
}
