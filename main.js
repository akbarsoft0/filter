const input = document.querySelector('input');
const ol = document.querySelector('ol');
input.addEventListener('input', () => {
    let searchText = input.value.toLowerCase().replace(/\s/g, '');

    let li = ol.querySelectorAll('li');
    for (var i = 0; i < li.length; i++) {
        let a = li[i].textContent.toLowerCase().replace(/\s/g, '');

        if (a.indexOf(searchText) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});