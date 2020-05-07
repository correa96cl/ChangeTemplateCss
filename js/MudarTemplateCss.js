var temaElementoEstilo = document.getElementById('tema_css');
var temaElementoExercicio = document.getElementById('tema_css_exercicio');
var checkbox = document.getElementById('checkboxTemplate');
console.log('#1 tema:', temaElementoEstilo.href);
console.log('#1 tema EXERCICIO', temaElementoExercicio.href);
console.log('#! check', checkbox.checked);

function cambiarTemaCss() {
	console.log(checkbox.checked);
    var temaUrls = {
        true: './css/estilo-black.css',
        false: './css/estilo-white.css'
    };
	var estiloExercicio ={ 
		true: './css/exercicios-black.css',
        false: './css/exercicios-white.css'
	};
	
  var temaUrl = temaUrls[checkbox.checked];
	temaElementoEstilo.href = temaUrl;
	console.log('#2 tema:', temaElementoEstilo.href);
	temaElementoExercicio.href = estiloExercicio[checkbox.checked];
	console.log('#2 tema EXERCICIO:', temaElementoExercicio.href);

}
