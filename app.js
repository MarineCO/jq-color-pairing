// good luck !

/* # Color Pairing

## 1ere étape 
Les boutons doivent avoir leur fond de la couleur qui se trouve dans le
data attribute data-color */

var content = $('input');

var len = content.length;


for (i = 0; i < len; i++){

	var couleur = ($(content[i]).data('color'));

	$(content[i]).css("backgroundColor", couleur);
}


/*## 2e étape 
Un click sur le bouton doit mettre cette couleur en fond*/

$('input').click(function(){
	console.log('ok');

	var coloring = $(this).data('color');
	$("html").css("backgroundColor", coloring);
	

/*## 3e étape
quand la case #modify-texte est cochée, la couleur du texte
doit etre modifiée */

	function cocher(){
		$('#modify-texte').is(':checked')
	};

	if (cocher()){	
		$('.main').css("color", coloring);
 // coloring ne fonctionne pas pour faire changer la couleur du texte avec les carres 
 // seul une couleur unique fonctionne pr changer couleur qd sélectionné
 // voir comment appliquer pls couleurs.
	};

});