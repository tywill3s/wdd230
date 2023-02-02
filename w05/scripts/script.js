const input = document.getElementById("favchap");
const button = document.getElementById("button");
const list = document.getElementById('list');
console.log(list);

function generate() {
    const value = document.getElementById("favchap").value;
    if (value != "") {
        var li = document.createElement("li");
        var delButton = document.createElement("button");
        li.innerHTML = value;
        delButton.textContent = "❌";
        li.append(delButton);
        list.appendChild(li);
        console.log(li)
    }
}