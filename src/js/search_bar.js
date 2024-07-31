function search(text) {
    const tree = [...document.getElementsByTagName("p")];
    tree.forEach((child) => {
        if (child.innerHTML.includes(text)) {
            child.className += " bg-yellow-100"
        }
    })
}