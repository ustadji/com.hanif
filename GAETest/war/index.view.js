sap.ui.jsview("index", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf index
	 */
	getControllerName : function() {
		return "index";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf index
	 */
	createContent : function(oController) {

		var pokerHandsArray = [];
		var pokerSuitsArray = [];
		var aCardValues = [ "A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2" ];
		var aSuitValues = [ "hearts", "diams", "clubs", "spades" ];
		var cardIdArray = [ "firstCard", "secondCard", "thirdCard", "fourthCard" ];
		var suitIdArray = [ "firstCardImage", "secondCardImage", "thirdCardImage", "fourthCardImage" ];

		var cardIndex = 0;
		var suitIndex = 0;

//		var oFirstCard = new sap.ui.core.HTML("firstCard", {
//			// the static content as a long string literal
//			content : "<div class='selectedCard'>A &clubs;</div>",
//			preferDOM : false,
//		}).attachBrowserEvent('click', function() {
//			alert("clicked!");
//		});

		var oTextView3 = new sap.ui.commons.TextView({
			text : 'VS',
			semanticColor : sap.ui.commons.TextViewColor.Positive,
			design : sap.ui.commons.TextViewDesign.H1,
			enabled : false
		});

		var oCardsMatrixLayout = new sap.ui.commons.layout.MatrixLayout({
			id : "cardsMatrix",
			layoutFixed : false,
		}).addStyleClass("center");

		
		var oCardsMatrixRow;
		
		jQuery.each(aSuitValues, function(index1, suit) {
			oCardsMatrixRow = new sap.ui.commons.layout.MatrixLayoutRow({});
			jQuery.each(aCardValues, function(index2, card) {
				oCardsMatrixRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell({
					// id : v.value,
					content : new sap.ui.core.HTML({
						// the static content as a long string literal
						content : "<div class='displayCard'>" + card + " &" + suit + ";</div>",
						preferDOM : false,
					}).attachBrowserEvent('click', function() {
						alert("selected " + card + suit);
						display(card, suit);
					})
				}));

			});
			oCardsMatrixLayout.addRow(oCardsMatrixRow);
		});
		
		function display(card, suit) {
			var currentCardId = cardIdArray[cardIndex];
//			 alert("card: " + card + ", suit: " + suit + ", currentCardId: " + currentCardId);
			var myCard = sap.ui.getCore().byId(currentCardId);
//			alert("content:" + myCard.getContent());
			myCard.setContent("<div class='selectedCard'>" + card + " &" + suit + ";</div>");
			// alert("pokerhands array:" + pokerHandsArray + ", length is: " +
			// pokerHandsArray.length);
			pokerHandsArray[cardIndex] = card;
			// alert("pokerhands array:" + pokerHandsArray + ", length is: " +
			// pokerHandsArray.length);
			cardIndex += 1;
			// alert("cardINdex: " + cardIndex);
			cardIndex %= cardIdArray.length;
			// alert("cardINdex after mod: " + cardIndex);
		}


		var oEvaluateButton = new sap.ui.commons.Button({
			enabled : true,
			text : 'Evaluate',
			style : sap.ui.commons.ButtonStyle.Emph,
			press : function() {
				// var selection1 = oTextView1.getText();
				var selection1 = "";
				// alert("hands: " + pokerHandsArray + ", suits: " +
				// pokerSuitsArray);
				// sap.ui.core.BusyIndicator.show();

				jQuery.ajax({
					type : "GET",
					url : "EvaluatorController",
					dataType : "json",
					contentType : "application/json",
					data : {
						// cardValue : selection1,
						// suit : selection2
						firstCard : null,
						secondCard : "K",
						thirdCard : "Q",
						fourthCard : "A"
					},
					success : function(data, textStatus, jqXHR) {
						// var parsed = jQuery.parseJSON(data);
						alert("return: " + data.result);
						// sap.ui.core.BusyIndicator.hide();

					},
					error : function(jqXHR, textStatus, errorThrown) {
						// sap.ui.core.BusyIndicator.hide();
						alert("error occurred");
					}
				});
				// sap.ui.core.BusyIndicator.hide();
			}
		});

		var oClearButton = new sap.ui.commons.Button({
			enabled : true,
			text : 'Clear',
			press : function() {
				var myCard = sap.ui.getCore().byId("firstCard");
//				alert("content:" + myCard.getContent());
				myCard.setContent("<div class='selectedCard'></div>");

				// oFirstCardTextView.setText(null);
				// oSecondCardTextView.setText(null);
				// oThirdCardTextView.setText(null);
				// oFourthCardTextView.setText(null);
				// oFirstCardImage.setSrc(null);
				// oSecondCardImage.setSrc(null);
				// oThirdCardImage.setSrc(null);
				// oFourthCardImage.setSrc(null);
				pokerHandsArray = [];
				pokerSuitsArray = [];
				cardIndex = 0;
				suitIndex = 0;
			}
		});

		var oButtonsMatrixLayout = new sap.ui.commons.layout.MatrixLayout({
			id : "buttonsMatrix",
			layoutFixed : false,
		}).addStyleClass("center");
		// });

		oButtonsMatrixLayout.createRow(oEvaluateButton, oClearButton);

		var oDisplayMatrixLayout = new sap.ui.commons.layout.MatrixLayout({
			id : "displayMatrix",
			layoutFixed : false,
		}).addStyleClass("center");

		var oDisplayMatrixRow = new sap.ui.commons.layout.MatrixLayoutRow({});
		jQuery.each(cardIdArray, function(index, whichCard) {
			oDisplayMatrixRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell({
				// id : v.value,
				content : new sap.ui.core.HTML(whichCard, {
					// the static content as a long string literal
					content : "<div class='selectedCard'></div>",
					preferDOM : true,
				}).attachBrowserEvent('click', function() {
					alert("clicked " + whichCard);
				})
			})
			);

		});
		
//		var cardIdArray = [ "firstCard", "secondCard", "thirdCard", "fourthCard" ];
		
//		var ofirstCard = new sap.ui.core.HTML("firstCard", {
//			// the static content as a long string literal
//			content : "<div class='selectedCard'>A &clubs;</div>",
//			preferDOM : false,
//		}).attachBrowserEvent('click', function() {
//			alert("clicked!");
//		});
//
//		oDisplayMatrixCell = new sap.ui.commons.layout.MatrixLayoutCell({
//			id : "firstCardCell",
//			content : ofirstCard,
//		// press : function() {
//		// alert("text!!");
//		// }
//		});

		// oDisplayMatrixLayout.createRow(oDisplayMatrixCell, oFirstCardImage,
		// oSecondCardTextView, oSecondCardImage, oThirdCardTextView,
		// oThirdCardImage,
		// oFourthCardTextView, oFourthCardImage);
//		oDisplayMatrixLayout.createRow(oDisplayMatrixCell);
		oDisplayMatrixLayout.addRow(oDisplayMatrixRow);

		var oPanel = new sap.ui.commons.Panel();
		// Add something to the panel's content area
		oPanel.addContent(oCardsMatrixLayout);
		// oPanel.addContent(oSuitsMatrix);
		// oPanel.addContent(oEvaluateButton);
		// oPanel.addContent(oClearButton);
		oPanel.addContent(oButtonsMatrixLayout);
		oPanel.addContent(oDisplayMatrixLayout);
		// oPanel.addContent(testButton);
		// oPanel.addContent(html1);
		// Attach the panel to the page

		return oPanel;
		// return oCardsMatrixLayout;
		// return oTable;
	}

});
