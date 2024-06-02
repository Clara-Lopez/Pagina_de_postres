function search() {
    let searchValue = document.getElementById('searchInput').value;
    alert('You searched for: ' + searchValue);
}

function increaseLikes(element) {
    let likes = parseInt(element.textContent);
    element.textContent = (likes + 1) + ' ♥';
}
