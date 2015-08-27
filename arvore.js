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
		
		var canvas = document.getElementById(canvasName);
		
		var ctx;
		
		if (canvas.getContext){
		  ctx = canvas.getContext('2d');
		} else {
		  alert("Seu navegador não suporta canvas!");
		}
		
		this.Adicionar = function(valor){
			console.debug(valor);
			//ctx.beginPath();
			ctx.arc(100,75,50,0,2*Math.PI);
			ctx.font="20px Georgia";
			ctx.fillText(valor,10,50);
			//ctx.stroke();
		};
		
		this.Falar = function(string){
			console.debug(string);
		};
		
	};
	