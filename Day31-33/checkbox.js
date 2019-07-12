var regionCheck = document.querySelector("#region-wrapper");
var productCheck = document.querySelector("#product-wrapper");
var items1 = [];
var items2 = [];

function getItem(items, k) {
    for (var i = 0; i < sourceData.length; i++) {
        if (items.indexOf(sourceData[i][k]) === -1) {
            items.push(sourceData[i][k])
        }
    }
    return items;
}
items1 = getItem(items1, "region"); // ["华东", "华北", "华南"]
items2 = getItem(items2, "product"); // ["手机", "笔记本", "智能音箱"]

function createCheckbox(items, e, id) {
    var ipt1 = document.createElement("input");
    ipt1.setAttribute("type", "checkbox");
    ipt1.setAttribute("id", id);
    ipt1.checked = true;
    var text1 = document.createTextNode("全选");
    for (var i = 0; i < items.length; i++) {
        var ipt2 = document.createElement("input");
        ipt2.setAttribute("type", "checkbox");
        ipt2.value = items[i];
        ipt2.checked = true;
        var text2 = document.createTextNode(items[i]);
        e.appendChild(ipt2);
        e.appendChild(text2);
    }
    e.appendChild(ipt1);
    e.appendChild(text1);
}


function choose(el, id) {
    el.addEventListener('click', function (e) {
        var target = e.target ;
        var allIpt = document.getElementById(id);
        var ipts = el.querySelectorAll("input");
        if (target.id) {
                for (var i = 0; i < ipts.length; i++) {
                    ipts[i].checked = true;
                }
        }
        else{
            // 临时创建一个数组，然后对除全选外的checkbox遍历，如果是选中状态，则添加到数组
            var checkedArr = [];
            for (var i = 0; i < ipts.length - 1; i++) {
                if (ipts[i].checked === true) {
                    checkedArr.push(ipts[i]);
                }
            }
            // 如果点击后checkArr长度是3说明全都选上了，将全选的checked设为true
            if (checkedArr.length === 3) {
                allIpt.checked = true;
            } else if (checkedArr.length === 0) {
                // 如果点击后数组的长度为0，说明当前点击是最后一个，那么再将其checked设为true
                target.checked = true;
            } else {
                // 全选checked设为false
                allIpt.checked = false;
            }
        }
    });
}