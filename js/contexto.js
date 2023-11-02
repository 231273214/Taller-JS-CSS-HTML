function searchAndHighlight() {
    const searchText = document.getElementById("search-input").value;
    const userText = document.getElementById("user-text").value;
    const highlightedText = document.getElementById("highlighted-text");
    const regex = new RegExp(searchText, "g");
    const resultText = userText.replace(regex, '<span class="highlight">$&</span>');
    highlightedText.innerHTML = resultText;
}
