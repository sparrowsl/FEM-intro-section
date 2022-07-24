'use strict';

const extraNavs = document.querySelectorAll('span.extraNav');

extraNavs.forEach((nav) => {
	nav.addEventListener('click', () => {
		const ulInNav = nav.parentElement.parentElement.querySelector('ul');
		const navIcon = nav.parentElement.querySelector('img');

		if (ulInNav.classList.contains('hidden')) {
			ulInNav.classList.remove('hidden');
			ulInNav.classList.add('flex');

			// display up arrow if nav is open
			navIcon.src = './static/images/icon-arrow-up.svg';
		} else if (ulInNav.classList.contains('flex')) {
			ulInNav.classList.remove('flex');
			ulInNav.classList.add('hidden');

			// display up arrow if nav is close
			navIcon.src = './static/images/icon-arrow-down.svg';
		}
	});
});
