const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Hannah"];
const searchInput = document.getElementById("searchInput");
const autocompleteList = document.getElementById("autocompleteList");

let autocomplete=(e)=> {
    const inputText = searchInput.value.toLowerCase();
    const matchingNames = names.filter(name => name.toLowerCase().includes(inputText));

    autocompleteList.innerHTML = "";
    matchingNames.forEach(name => {
        const option = document.createElement("div");
        option.textContent = name;
        option.addEventListener("click", () => {
            searchInput.value = name;
            autocompleteList.innerHTML = "";
        });
        autocompleteList.appendChild(option);
    });
}