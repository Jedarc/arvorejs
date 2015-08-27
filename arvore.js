/**
 * @author: Jedarc
 * 
 * @verion: 1.0
 * 
 * https://github.com/Jedarc/arvorejs
 * http://jrcsoftwares.esy.es/projetos/arvorejs/index.html
 */

	console.debug("Script da Arvore foi carregada");
	
	function Arvore(canvasName){
		
		//var valores = [];
		
		var canvas = document.getElementById(canvasName);

		if (!canvas.getContext){
		  alert("Seu navegador não suporta canvas!");
		}
		
		var x = canvas.width;
		var y = canvas.height;
		
		this.Adicionar = function(valor){
			
			var ctx = canvas.getContext("2d");
            var w = ctx.measureText(valor).width + 10;
          
            ctx.beginPath();
            ctx.fillStyle = "rgb(200,0,0)";
            
            var xArco = (x/2);
            var yArco = (y/2);
            
            ctx.arc(xArco, yArco, w/2, 0, 2 * Math.PI, false);
            ctx.fill();

            ctx = canvas.getContext("2d");
            ctx.font = '12px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.fillText(valor, xArco, yArco+3);
			
		};
		
		this.Falar = function(string){
			console.debug(string);
		};
		
	};
	