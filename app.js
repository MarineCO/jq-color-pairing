
var content = $('input');
var len = content.length;


for (i = 0; i < len; i++){

	var couleur = ($(content[i]).data('color'));
	$(content[i]).css("backgroundColor", couleur);
}

$('.color').click(function(){
	
	var couleur = $(this).data('color');
	var fond = test();

	if (fond){
		$('.main').css("color", couleur);
	} else {
		$("html").css("backgroundColor", couleur);
	}

});

function test(){
	return $('#modify-texte').is(':checked');
}
