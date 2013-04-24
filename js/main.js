var refreshData = function(){
	$.ajax({
		type: "POST", 
		url: "http://svbcgold.com/LivePriceService.asmx/getSVBCPrice",
		success : function(data){
			 var jSonObj = $.parseJSON(data.d);
			 $('#lblSpotGold999').text(jSonObj.SpotGold999 * 1 + properties.addAmountForGold);
			 $('#lblSpotGold999').css({ color: jSonObj.colrGold999});
			 
			 //The price mentioned in properties.js is perGM. So multiplying by 100 to calculate perKG
			 $('#lblSpotSilver999').text(jSonObj.SpotSilver999 * 1 + properties.addAmountForSilver * 100);
			 $('#lblSpotSilver999').css({ color: jSonObj.colrSilver999});

			 $('#lblSpotGold916').text(jSonObj.SpotGold916 * 1 + properties.addAmountForGold);
			 $('#lblSpotGold916').css({ color: jSonObj.colrGold916});

			 $('#lblGold').text(jSonObj.GoldCMX);
			 $('#lblGold').css({ color: jSonObj.colrGoldCMX});

			 $('#lblSilver').text(jSonObj.SilverCMX);
			 $('#lblSilver').css({ color: jSonObj.colrSilverCMX});

			 $('#lblUsd').text(jSonObj.USDInr);
			 $('#lblUsd').css({ color: jSonObj.colrUSDInr});
		},
		error : function(response){
			console.log("failed");
		},
		contentType : "application/json",
		dataType : "json"
	});
};

$(window).load(function(){			
	setInterval(refreshData, 3000);
});