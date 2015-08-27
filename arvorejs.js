/**
 * @author: Jedarc
 * 
 * @verion: 1.0
 * 
 * www.arvorejs.org
 */

	console.debug("Script da Arvore foi carregada");
	
	function Arvore(canvasName){
		
		var valores = [];
		
		var c = document.getElementById(canvasName);
		var ctx = c.getContext("2d");
		
		this.Adicionar = function(valor){
			console.debug(valor);
			ctx.beginPath();
			ctx.arc(95,50,40,0,2*Math.PI);
			ctx.stroke();
		};
		
		
		
		this.Falar = function(string){
			console.debug(string);
		};
		
	};
	