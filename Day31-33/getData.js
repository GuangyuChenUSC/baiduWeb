var list = [];

function getData() {
    var ipts = document.querySelectorAll("input[type=checkbox]:checked");
    var arr = [];
    list = [];

    for (var i = 0; i < ipts.length; i++) {
        if (!ipts[i].id) {
            arr.push(ipts[i].value);
        }
    }

    for (var i = 0; i < sourceData.length; i++) {
        if (arr.indexOf(sourceData[i].region) !== -1 && arr.indexOf(sourceData[i].product) !== -1) {
            list.push(sourceData[i]);
        }
    }
    return list;
}