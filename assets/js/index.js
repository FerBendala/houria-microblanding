document.addEventListener("DOMContentLoaded", function () {
	const menuOpen = document.getElementById('menu-open');
	const menuClose = document.getElementById('menu-close');
	const menu = document.querySelector('.header__responsive-menu__menu');
	const menuItems = document.querySelectorAll('.menu__list__item a');


	// Abrir el menú
	menuOpen.addEventListener('change', function () {
		if (menuOpen.checked) menu.classList.add('open');
		else menu.classList.remove('open');
	});

	// Cerrar el menú
	menuClose.addEventListener('change', function () {
		if (menuClose.checked) menu.classList.remove('open');
	});
	
	menuItems.forEach(function(item) {
		item.addEventListener('click', function() {
			menu.classList.remove('open');
			menuClose.checked = true;
		});
	});
});