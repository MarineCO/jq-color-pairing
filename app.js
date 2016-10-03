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

$('.color').click(function(){
	var couleur = $(this).data('color');

	var fond = test();
	console.log(fond);

	if (fond){
		$('.main').css("color", couleur);
	} else {
		$("html").css("backgroundColor", couleur);
	}

});

function test(){
	return $('#modify-texte').is(':checked');
}




/*## 2e étape 
Un click sur le bouton doit mettre cette couleur en fond*/


/*## 3e étape
quand la case #modify-texte est cochée, la couleur du texte
doit etre modifiée */