$(function() {
    $('#charger').click(function(){ 
      console.log('chargement en cours...');
      var url = 'json/concert.json';
      $.ajax({
        dataType: "json",
        url: url,
        success: function(donnees) {
            console.log('les donnees du fichier :');
            console.log(donnees);
            $.each(donnees, function (index, voiture){
              console.log('boucle : ' + index);
              console.log(voiture);
              $('#r').append('<p><b>Couleur</b> : ' + voiture.couleur + '</p>');
              $('#r').append('<p><b>Voiture</b> : ' + voiture.voiture + '</p>');
              $('#r').append('<p><b>Année</b> : ' + voiture.annee + '</p>');
            });
          },
        error :function(jqXHR, textStatus, errorThrown) {
            console.log("error ! " + textStatus + ' : '   + jqXHR.responseText);
          }
      });
    });
  });
/*
$(function() {
  $('#charger').click(function() { 
     console.log('chargement en cours...');
     $.getJSON('json/concert.json', function(donnees) {
            console.log('les donnees du fichier :');
            console.log(donnees);
            $.each(donnees, function (index, voiture) {
                console.log('boucle : ' + index);
                console.log(voiture);
                $('#r').append('<p><b>Couleur</b> : ' + voiture.couleur + '</p>');
                $('#r').append('<p><b>Voiture</b> : ' + voiture.voiture + '</p>');
              $('#r').append('<p><b>Année</b> : ' + voiture.annee + '</p>');
            });
      }).error(function(jqXHR, textStatus, errorThrown) {
            console.log("error ! " + textStatus + ' : '   + jqXHR.responseText);
      });
   }); 
});
*/


/*$(function() {
	$('#charger').click(function() { 
		
		$.getJSON('json/concert.json', function(donnees) {
			$.each(donnees, function (index, voiture) {
				console.log(voiture);
				$('#r').html('<p><b>Couleur</b> : ' + donnees.couleur + '</p>');
				$('#r').append('<p><b>Voiture</b> : ' + donnees.voiture + '</p>');
				$('#r').append('<p><b>Année</b> : ' + donnees.annee + '</p>');
			});
		});
	}); 
});*/

   //ici ton code pour utiliser le contenu de ta boucle...   
   //par exemple
