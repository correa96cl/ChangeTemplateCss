var temaElementoEstilo = document.getElementById('tema_css');
var temaElementoExercicio = document.getElementById('tema_css_exercicio');
console.log('#1 tema:', temaElementoEstilo.href);
console.log('#1 tema EXERCICIO', temaElementoExercicio.href);

function cambiarTemaCss(tema) {
	console.log(tema);
    var temaUrls = {
        noite: './css/estilo-black.css',
        dia: './css/estilo-white.css'
    };
	var estiloExercicio ={ 
		noite: './css/exercicios-black.css',
        dia: './css/exercicios-white.css'
	};
	
  var temaUrl = temaUrls[tema];
	temaElementoEstilo.href = temaUrl;
	console.log('#2 tema:', temaElementoEstilo.href);
	temaElementoExercicio.href = estiloExercicio[tema];
	console.log('#2 tema EXERCICIO:', temaElementoExercicio.href);

}
