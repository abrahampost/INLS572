let tldr = document.querySelector("#tldr");
tldr.addEventListener("click", (event) => {
    let tldrDesc = document.querySelector("#tldr .description");
    let tldrPlus = document.querySelector("#tldr .fa-plus");
    let tldrMinus = document.querySelector("#tldr .fa-minus");
    toggle(tldrDesc, 'hidden');
    toggle(tldrPlus, 'hidden');
    toggle(tldrMinus, 'hidden');
})


function toggle(node, className) {
    if (node.classList.contains(className)){
        node.classList.remove(className);
    } else {
        node.classList.add(className);
    }
}