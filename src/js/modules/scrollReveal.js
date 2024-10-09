import ScrollReveal from 'scrollreveal';

// Базовые настройки
ScrollReveal({
	distance: '60px',
	duration: 2100,
	// reset: true,
});

function scrollRevealFunc () {
	ScrollReveal().reveal(`.header, .partners`,{
		origin: 'top',
	  }),
	  ScrollReveal().reveal(`.discover__picture-hint, .discover__title, .popular__title`,{
		origin: 'left',
	  }),
	  ScrollReveal().reveal(`.discover__picture-scroll, .discover__text, .popular__controls`,{
		origin: 'right',
	  }),
	  ScrollReveal().reveal(`.discover__form`,{
		origin: 'bottom',
	  })
}

export default scrollRevealFunc;