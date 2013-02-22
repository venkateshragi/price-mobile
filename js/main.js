var app = {

	onLoad : function() {
		$(window).load(function(){			
			setInterval(function() {
				$.getJSON("http://svbcgold.com/LivePriceService.asmx/getSVBCPrice", function(response){
					var amountToBeAddedForGold = properties.addAmountForGold;
					var amountToBeAddedForSilver = properties.addAmountForSilver;
					var pricePerGm = (response.SpotGold999 * 1) + amountToBeAddedForGold;
					$("#lblSpotGold999").html(pricePerGm);
					$("#lblSpotSilver999").html((response.SpotSilver999 * 1) + amountToBeAddedForSilver);
					$("#lblSpotGold916").html(pricePerGm * 50);
					$("#lblGold").html((response.GoldCMX * 1) + amountToBeAddedForGold);
					$("#lblSilver").html((response.SilverCMX * 1) + amountToBeAddedForSilver);
					$("#lblUsd").html((response.USDInr * 1));
				})}, 3000);
		});			
	}	
}

app.onLoad();