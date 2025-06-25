const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
dropdown.addEventListener('click', () => {
	dropdownContent.classList.toggle('dropdown-content-active');
});
