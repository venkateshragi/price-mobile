var app = {

	onLoad : function() {
		$(window).load(function(){
			setInterval(function() {
				$.getJSON("http://svbcgold.com/LivePriceService.asmx/getSVBCPrice", function(response){
					var amountToBeAddedForGold = properties.addAmountForGold;
					var amountToBeAddedForSilver = properties.addAmountForSilver;
					var pricePerGm = (response.SpotGold999 * 1) + amountToBeAddedForGold;
					document.getElementById("lblSpotGold999").innerHTML = pricePerGm;
					document.getElementById("lblSpotSilver999").innerHTML = (response.SpotSilver999 * 1) + amountToBeAddedForSilver;
					document.getElementById("lblSpotGold916").innerHTML = pricePerGm * 50;
					document.getElementById("lblGold").innerHTML = (response.GoldCMX * 1) + amountToBeAddedForGold;
					document.getElementById("lblSilver").innerHTML = (response.SilverCMX * 1) + amountToBeAddedForSilver;
					document.getElementById("lblUsd").innerHTML = (response.USDInr * 1);			
				})}, 3000);
		});			
	}	
}

app.onLoad();