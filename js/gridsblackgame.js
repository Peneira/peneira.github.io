(function($) {
     $.fn.game = function(iStartLevel,iMaxLevel,iTest,iColoredSquares) {  
		
		var detectTap = false;
		var gCols;
		var gRows;
		var gSquares;
        var gBlackSquares;
		var gSquaresWidth;
		var gHeightCard;
		var gAllCardsWidth;
		var gameDurationSeconds;
		var gCountPayerSquares = 0;
		var gCountGoodPayerSquares = 0;
		var gPlayerWin = false;
		var gScore = 0;
		var gLevel = iStartLevel;
		var gTotalScore = 100;
		var gTotalLevel = iMaxLevel;
		var arrayRandom = new Array();
		var arrayInitial = new Array();
		var arrayPlayer = new Array();
		
		var gTest = false;
		if(iTest){gTest = true;}
		
		var gColoredSquares = false;
		if(iColoredSquares){gColoredSquares = true;}
		
		// ---------------------- STRINGS --------------------------------
		var lang = gLang.split("-")[0];
		lang = "es";
		
		var gStrClickLocations = "Click on the locations of the black squares";
		var gStrSelectedSquares = "Selected black squares";
		var gStrYouWin = "*********&nbsp;&nbsp;Congrats!!!&nbsp;&nbsp;**********";
		var gStrYouWinLevel = "Congrats!  You win!";
		var gStrYouWinTxt = "You have successfully completed all levels!";
		var gStrYouWinLevelTxt = "Click on CONTINUE to go to the next level...";
		var gStrStart = "START";
		var gStrContinue = "CONTINUE";
		var gStrTryAgain = "TRY AGAIN";
		var gStrLevel ="Level";
		var gStrScore ="Score";
		var gStrLost = "You lost!";
		var gStrClickStart = "Click on START button to play";
		var gStrSquareFound = "black square found";
		var gStrSquaresFound = "black squares found";
		var gStrLook = "Look at the locations of the black squares and try to remember them";
		if(gColoredSquares){
			gStrClickLocations = "Click on the locations of the colored squares";
			gStrSelectedSquares = "Selected colored squares";
			gStrSquareFound = "colored square found";
			gStrSquaresFound = "colored squares found";
			gStrLook = "Look at the locations of the colored squares and try to remember them";
		}
		if(lang == 'es'){
			gStrClickLocations = "Hacer clic en las ubicaciones de las casillas negras";
			gStrSelectedSquares = "casillas negras seleccionadas";
			gStrYouWin = "*********&nbsp;&nbsp;Felicitaciones!!!&nbsp;&nbsp;**********";
			gStrYouWinLevel = "Felicitaciones!  Ha ganado!";
			gStrYouWinTxt = "has cruzado todos los niveles!";
			gStrYouWinLevelTxt = "Hacer clic en PROSEGUIR para acceder al siguiente nivel...";
			gStrStart = "JUGAR";
			gStrContinue = "PROSEGUIR";
			gStrTryAgain = "VOLVER A JUGAR";
			gStrLevel ="Nivel";
			gStrScore ="Puntaje";
			gStrLost = "Perdido!";
			gStrClickStart = "Hacer clic en JUGAR para empezar";
			gStrSquareFound = "casilla negra exacta";
			gStrSquaresFound = "casillas negras exactas";
			gStrLook = "Observe las ubicaciones de las casillas negras y intentar recordarlas";
			if(gColoredSquares){
				gStrClickLocations = "Hacer clic en las ubicaciones de las casillas coloreadas ";
				gStrSelectedSquares = "casillas coloreadas  seleccionadas";
				gStrSquareFound = "casilla coloreada exacta";
				gStrSquaresFound = "casillas coloreadas exactas";
				gStrLook = "Observe las ubicaciones de las casillas coloreadas  y intentar recordarlas";
			}
		}else if(lang == 'fr'){
			gStrClickLocations = "Cliquez sur les emplacements des cases noires";
			gStrSelectedSquares = "Cases noires sélectionnées";
			gStrYouWin = "*********&nbsp;&nbsp;Félicitations!!!&nbsp;&nbsp;**********";
			gStrYouWinLevel = "Félicitations!  Vous avez gagné!";
			gStrYouWinTxt = "Vous avez franchi tous les niveaux!";
			gStrYouWinLevelTxt = "Cliquez sur CONTINUER pour aller au niveau suivant...";
			gStrStart = "JOUER";
			gStrContinue = "CONTINUER";
			gStrTryAgain = "REJOUER";
			gStrLevel ="Niveau";
			gStrScore ="Score";
			gStrLost = "Vous avez perdu!";
			gStrClickStart = "Cliquez sur JOUER pour commencer";
			gStrSquareFound = "case noire trouvée";
			gStrSquaresFound = "cases noires trouvées";
			gStrLook = "Observez les emplacements des cases noires et essayez de les mémoriser";
			if(gColoredSquares){
				gStrClickLocations = "Cliquez sur les emplacements des cases colorées";
				gStrSelectedSquares = "Cases colorées sélectionnées";
				gStrSquareFound = "case colorée trouvée";
				gStrSquaresFound = "cases colorées trouvées";
				gStrLook = "Observez les emplacements des cases colorées et essayez de les mémoriser";
			}
		}
		// ---------------------- GAME LEVELS --------------------------------
		
		function set_level(){
			switch(gLevel) {
				case 1:
					gCols = 3;
					gRows = 2;
					gBlackSquares = 2;		
					gSquaresWidth = 33;
					gameDurationSeconds = 3;
					break;
				case 2:
					gCols = 3;
					gRows = 3;
					gBlackSquares = 5;		
					gSquaresWidth = 33;
					gameDurationSeconds = 4;
					break;
				case 3:
					gCols = 4;
					gRows = 3;
					gBlackSquares = 6;		
					gSquaresWidth = 25;
					gameDurationSeconds = 6;
					break;
				case 4:
					gCols = 4;
					gRows = 4;
					gBlackSquares = 8;		
					gSquaresWidth = 25;
					gameDurationSeconds = 8;
					break;
				case 5:
					gCols = 5;
					gRows = 4;
					gBlackSquares = 9;		
					gSquaresWidth = 20;
					gameDurationSeconds = 10;
					break;
				case 6:
					gCols = 5;
					gRows = 5;
					gBlackSquares = 10;		
					gSquaresWidth = 20;
					gameDurationSeconds = 10;
					break;
				case 7:
					gCols = 5;
					gRows = 5;
					gBlackSquares = 12;		
					gSquaresWidth = 20;
					gameDurationSeconds = 15;
					break;
				case 8:
					gCols = 6;
					gRows = 5;
					gBlackSquares = 12;		
					gSquaresWidth = 16;
					gameDurationSeconds = 15;
					break;
				case 9:
					gCols = 6;
					gRows = 5;
					gBlackSquares = 16;		
					gSquaresWidth = 16;
					gameDurationSeconds = 20;
					break;
				case 10:
					gCols = 6;
					gRows = 6;
					gBlackSquares = 20;		
					gSquaresWidth = 16;
					gameDurationSeconds = 30;
					break;
				default:
					gCols = 3;
					gRows = 2;
					gBlackSquares = 2;		
					gSquaresWidth = 33;
					gameDurationSeconds = 3;
					break;
			}
			gSquares = gCols * gRows;
			gAllCardsWidth = gSquaresWidth * gCols;
			if(gTest){gameDurationSeconds = 2;}
		}
		
		
		
		//random function - return index between 0 included and limit excluded
		function nb_aleatoire(limit){
			var random = Math.floor(Math.random()*limit);
			return  random;
		}
		
		function contruct_array_possibilities(){
			arrayInitial.length = 0;
			for (var i=0; i<gSquares; i++){
				arrayInitial[i] = i;
			}
			return true;
		}
		
		function construct_grid(){
			arrayRandom.length = 0;
			for (var i=0; i<gBlackSquares; i++){
				var nb_aleat= nb_aleatoire(arrayInitial.length);
				//alert(nb_aleat);
				arrayRandom[i] = arrayInitial[nb_aleat];
				arrayInitial.splice(nb_aleat,1);
			}
			var html ="";
			for ( var i = 0 ; i < gSquares ; i++ ) {	
				html += '<div class="card" style="width:'+gSquaresWidth+'%;"><div class="card_border"><div class="card_flip"><div id="card_int_'+i+'" idCard="'+i+'" class="front card_int"></div><div class="back card_int"></div></div></div></div>';
			}
			$("#board #cards").html(html);
			
			//activate_flip
			$(".card_flip").each(function(){
				$(this).flip({
					axis: 'x',
					trigger:'manual',
					forceWidth: true,
					forceHeight:true
				});
			});
			setTimeout(function () {
				gHeightCard = $("#card_int_0").innerWidth();
				$('.card_int').each(function(){
					$(this).parent().css("height",gHeightCard+"px");
					$(this).parent().parent().css("height",gHeightCard+"px");
					$(this).parent().find(".back").css("height",gHeightCard+"px");
					$(this).parent().find(".back").css("width",gHeightCard+"px");
					$(this).css("height",gHeightCard+"px");
					$(this).css("width",gHeightCard+"px");
					$('#control,#player_msg_ext').css("width",gAllCardsWidth+"%");
				});
			},10);
		}
		
		function add_random_squares_on_board(){
			for (var j=0; j< arrayRandom.length; j++){
				$("#card_int_"+arrayRandom[j]).addClass("black");
			}
		}
	
		function active_squares_for_player(){
			$('#player_msg_txt').html('<span class="long_text">'+gStrClickLocations+'</span>');
			$(".card_int").each(function(){
				$(this).off();
				$(this).removeClass("black");
				$(this).on('touchstart', function() {detectTap = true;});
				$(this).on('touchmove', function() {detectTap = false;});
				$(this).off().on('click touchend', function(e) {
					if (e.type == "click"){ detectTap = true;}
					if (detectTap){
						e.preventDefault();
						e.stopPropagation();
						if($(this).hasClass("touched")){
						$(this).removeClass("touched");
						gCountPayerSquares--;
						}else{
							$(this).addClass("touched");
							gCountPayerSquares++;
						}
						$('#player_msg_txt').html('<span class="long_text">'+gStrSelectedSquares+' : '+gCountPayerSquares+' /'+gBlackSquares+'</span>');
						if(gCountPayerSquares == gBlackSquares){
							show_player_results();
						}
					}
					detectTap = false;
				});	
			});
		}
		
		function show_player_results(){
			$(".card_int").each(function(){
				$(this).off();
				var id_card = parseInt($(this).attr('idCard'));
				var good = false;
				var forgotten = false;
				if($(this).hasClass("touched")){
					for (var j=0; j< arrayRandom.length; j++){
						if(arrayRandom[j] == id_card){
							good = true;
							gCountGoodPayerSquares++;
						}
					}
					if(good){
						$(this).addClass("good");
					}else{
						$(this).addClass("wrong")
					}
				}else{
					for (var j=0; j< arrayRandom.length; j++){
						if(arrayRandom[j] == id_card){
							forgotten = true;
						}
					}
					if(forgotten){					
						setTimeout(function(){
							$(this).parent().flip(true);
						},1000);
					}
				}
			});
			//if player win
			if((gCountGoodPayerSquares == gBlackSquares) || gTest){
				gPlayerWin = true;
				gScore += gCountGoodPayerSquares;
				gLevel++;
				$('#score span').html("Score: <span style='font-weight:600;'>"+gScore+"</span> /"+gTotalScore );
				if(gLevel > gTotalLevel){
					$('#player_msg_txt').html('<span class="long_text"><span style="font-weight:700">'+gStrYouWin+'</span>'+gStrYouWinTxt+'</span>');
					$('#player_button').html(gStrTryAgain).show();
				}else{
					$('#player_msg_txt').html('<span class="long_text"><span style="font-weight:700">'+gStrYouWinLevel+'</span>'+gStrYouWinLevelTxt+'</span>');
					$('#player_button').html(gStrContinue).show();
				}
				$('#player_button').on('touchstart', function() {detectTap = true;});
				$('#player_button').on('touchmove', function() {detectTap = false;});
				$('#player_button').off().on('click touchend', function(e) {
						if (e.type == "click"){ detectTap = true;}
						if (detectTap){
							e.preventDefault();
							e.stopPropagation();
							new_game();
						}
						detectTap = false;
				});	
			//if player loose
			}else{
				if(gCountGoodPayerSquares == 0 || gCountGoodPayerSquares == 1){
					$('#player_msg_txt').html('<span class="long_text"><span style="font-weight:700">'+gStrLost+'</span> '+gCountGoodPayerSquares+' '+gStrSquareFound+' /'+gBlackSquares+'</span>');
				}else{
					$('#player_msg_txt').html('<span class="long_text"><span style="font-weight:700">'+gStrLost+'</span> '+gCountGoodPayerSquares+' '+gStrSquaresFound+' /'+gBlackSquares+'</span>');
				}
				$('#player_button').html(gStrTryAgain).show();
				$('#player_button').on('touchstart', function() {detectTap = true;});
				$('#player_button').on('touchmove', function() {detectTap = false;});
				$('#player_button').off().on('click touchend', function(e) {
						if (e.type == "click"){ detectTap = true;}
						if (detectTap){
							e.preventDefault();
							e.stopPropagation();
							new_game();
						}
						detectTap = false;
				});	
			}
		}
		
		function hide_all_cards(){
			$('.card').each(function(i) {
				$(this).removeClass("black");
			});
		}
		
		function new_game(){
			arrayRandom = new Array( );
			arrayPlayer = new Array( );
			gCountPayerSquares = 0;
			gCountGoodPayerSquares = 0;
			gPlayerWin = false;
			if(gLevel > gTotalLevel){
				gLevel =1;
				gScore = 0;
			}
			init();
			start();
		}
		
		function init(){
			set_level();
			contruct_array_possibilities();
			construct_grid();
			hide_all_cards();
			$('#level span').html(gStrLevel+": <span style='font-weight:600'>"+gLevel+"</span> /"+gTotalLevel);
			$('#score span').html(gStrScore+": <span style='font-weight:600'>"+gScore+"</span> /"+gTotalScore );
			$('#player_msg_txt').html("<span class='long_text'>"+gStrLook+"</span>");
			$('#player_button').html(gStrStart);
			$('#countdown').html("");
			$('#countdown').countdown({
				timestamp	: new Date(),
				hideHours   : true,
				showOnly    : true,
				forceStop   : false,
				callback	: function(){}
			});
			$("#result").hide();
		}

		function start(){
			add_random_squares_on_board();
			 //start countdown
			var dateNow = new Date();
			var tsNow = dateNow.getTime();
			var tsMax = tsNow + gameDurationSeconds * 1000;
			var dateMax = new Date(tsMax);
			$('#countdown').html("");
			$('#countdown').countdown({
				timestamp	: dateMax,
				hideHours   : true,
				showOnly    : false,
				forceStop   : false,
				callback	: function(days,hours,minutes,seconds){
					active_squares_for_player();
				}
			});
			$("#player_button").hide();
		}
		$('#player_button').on('touchstart', function() {detectTap = true;});
		$('#player_button').on('touchmove', function() {detectTap = false;});
		$('#player_button').off().on('click touchend', function(e) {
			if (e.type == "click"){ detectTap = true;}
			if (detectTap){
				e.preventDefault();
				e.stopPropagation();
				start();
			}
			detectTap = false;
		});	
		
		init();
		
        return $(this);      
     };
})(jQuery);
