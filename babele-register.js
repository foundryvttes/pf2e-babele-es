Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {

		Babele.get().register({
			module: 'pf2e-babele-es',
			lang: 'es',
			dir: 'compendium'
		});
		
		document.getElementById("logo").src="/modules/rqg-babele-es/images/fvtt-pf2e-es.webp";
		
	}
	
});
