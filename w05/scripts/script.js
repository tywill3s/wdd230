const input = document.getElementById("favchap");
const button = document.getElementById("button");
const list = document.getElementById("list");
console.log(list);

function generate() {
    var value = document.getElementById("favchap").value;
    if (value != "") {
        var li = document.createElement("li");
        var delButton = document.createElement("button");
        var txtNode = document.createTextNode(value);
        li.appendChild(txtNode);
        delButton.textContent = "❌";
        delButton.addEventListener('click',function() {
            li.innerHTML = "";
        })
        li.append(delButton);
        console.log(li);
        list.appendChild(li);
        input.value.textContent = "";
        value = "";
    }
}
