//Get Element by id
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
// headerTitle.innertext = 'Goodbye';
headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.border = 'solid 3px #000';
