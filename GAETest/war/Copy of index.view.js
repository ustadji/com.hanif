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
		var aCardImageSrcArray = [ "images/hearts/AH.gif", "images/hearts/KH.gif", "images/hearts/QH.gif", "images/hearts/JH.gif", "images/hearts/10H.gif", "images/hearts/9H.gif",
				"images/hearts/8H.gif", "images/hearts/7H.gif", "images/hearts/6H.gif", "images/hearts/5H.gif", "images/hearts/4H.gif", "images/hearts/3H.gif", "images/hearts/2H.gif",
				"images/diamonds/AD.gif", "images/diamonds/KD.gif", "images/diamonds/QD.gif", "images/diamonds/JD.gif", "images/diamonds/10D.gif" ];
		var aSuitValues = [ "hearts", "diamonds", "clubs", "spades" ];
		var suitImages = [ "Red Black Heart.png", "Red Diamond.png", "Red Club.png", "Red Spade.png" ];
		var cardIdArray = [ "firstCard", "secondCard", "thirdCard", "fourthCard" ];
		var suitIdArray = [ "firstCardImage", "secondCardImage", "thirdCardImage", "fourthCardImage" ];

		var cards = [ {
			"value" : "A",
			"suit" : "H"
		}, {
			"value" : "K",
			"suit" : "H"
		} ];

		var cardIndex = 0;
		var suitIndex = 0;

		var oFirstCardImage = new sap.m.Image("firstCardImage", {
			decorative : true,
			densityAware : false,
			// width : "128px",
			// height: "128px",
			visible : false,
		});

		var oSecondCardImage = new sap.m.Image("secondCardImage", {
			decorative : true,
			densityAware : false,
			// width : "128px",
			// height: "128px",
			visible : false,
		});

		var oThirdCardImage = new sap.m.Image("thirdCardImage", {
			decorative : true,
			densityAware : false,
			// width : "128px",
			// height: "128px",
			visible : false,
		});

		var oFourthCardImage = new sap.m.Image("fourthCardImage", {
			decorative : true,
			densityAware : false,
			// width : "128px",
			// height: "128px",
			visible : false,
		});

		var oFirstCardTextView = new sap.ui.commons.TextView("firstCard", {
			semanticColor : sap.ui.commons.TextViewColor.Positive,
			design : sap.ui.commons.TextViewDesign.H1,
		}).addStyleClass("cardDisplay");

		var oSecondCardTextView = new sap.ui.commons.TextView("secondCard", {
			semanticColor : sap.ui.commons.TextViewColor.Positive,
			design : sap.ui.commons.TextViewDesign.H1,

		}).addStyleClass("cardDisplay");
		;

		var oThirdCardTextView = new sap.ui.commons.TextView("thirdCard", {
			semanticColor : sap.ui.commons.TextViewColor.Positive,
			design : sap.ui.commons.TextViewDesign.H1,
		}).addStyleClass("cardDisplay");
		;

		var oFourthCardTextView = new sap.ui.commons.TextView("fourthCard", {
			semanticColor : sap.ui.commons.TextViewColor.Positive,
			design : sap.ui.commons.TextViewDesign.H1,
		}).addStyleClass("cardDisplay");
		;

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

		var oCardsMatrixRow = new sap.ui.commons.layout.MatrixLayoutRow({});

		jQuery.each(aCardValues, function(i, v) {
			oCardsMatrixRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell({
				// id : v.value,
				content : new sap.ui.commons.Button({
					text : v,
					icon : "Black Heart 24x24.png",
					width : "60px",
					// height : "48px",
					iconFirst : false,
					style : sap.ui.commons.ButtonStyle.Emph,
					lite : true,
					press : function() {
						displayCard(this.getText());
						// oCardsMatrixLayout.setVisible(false);
					}
				})
			}));

		});

		oCardsMatrixLayout.addRow(oCardsMatrixRow);

		for (var y = 0; y < suitImages.length; y++) {
			oCardsMatrixRow = new sap.ui.commons.layout.MatrixLayoutRow({});
			for (var x = 0; x < cards.length; x++) {
				oCardsMatrixRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell({
					// id : v.value,
					content : new sap.ui.commons.Button({
						text : cards[x].value,
						icon : "Black Heart 24x24.png",
						// icon : suitImages[y],
						width : "60px",
						// height : "48px",
						iconFirst : false,
						style : sap.ui.commons.ButtonStyle.Emph,
						lite : true,
						press : function() {
							displayCard(this.getText());
							displaySuit(cards[x].suit, suitImageSrc);
							// oCardsMatrixLayout.setVisible(false);
						}
					})
				// }).addStyleClass("myRedTextButton")
				}));
			}
			oCardsMatrixLayout.addRow(oCardsMatrixRow);
		}

		// jQuery.each(aCardImageSrcArray, function(i, v) {
		// oCardsMatrixRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell({
		// // id : v.value,
		// content : new sap.m.Image({
		// alt : v,
		// src : v,
		// visible : true,
		// press : function() {
		// this.setVisible(false);
		// }
		// })
		// }));
		//
		// });

		function displayCard(cardValue) {
			var currentCardId = cardIdArray[cardIndex];
			// alert("currentCardId: " + currentCardId);
			var myCard = sap.ui.getCore().byId(currentCardId);
			myCard.setText(cardValue);
			// alert("pokerhands array:" + pokerHandsArray + ", length is: " +
			// pokerHandsArray.length);
			pokerHandsArray[cardIndex] = cardValue;
			// alert("pokerhands array:" + pokerHandsArray + ", length is: " +
			// pokerHandsArray.length);
			cardIndex += 1;
			// alert("cardINdex: " + cardIndex);
			cardIndex %= cardIdArray.length;
			// alert("cardINdex after mod: " + cardIndex);
		}

		function displaySuit(suitValue, suitImageSrc) {
			var currentSuitId = suitIdArray[suitIndex];
			// alert("suit value: " + suitValue + ",suit source: " +
			// suitImageSrc + ",
			// currentsuitId:" + currentSuitId);
			var mySuit = sap.ui.getCore().byId(currentSuitId);
			mySuit.setSrc(suitImageSrc);
			mySuit.setVisible(true);
			pokerSuitsArray[suitIndex] = suitValue;
			// alert("suitvalues: " + aSuitValues[suitIndex] + ", Poker suits
			// array:" +
			// pokerSuitsArray);
			suitIndex += 1;
			suitIndex %= suitIdArray.length;
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
						fourthCard : "J"
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
				oFirstCardTextView.setText(null);
				oSecondCardTextView.setText(null);
				oThirdCardTextView.setText(null);
				oFourthCardTextView.setText(null);
				oFirstCardImage.setSrc(null);
				oSecondCardImage.setSrc(null);
				oThirdCardImage.setSrc(null);
				oFourthCardImage.setSrc(null);
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

		var oSuitsMatrix = new sap.ui.commons.layout.MatrixLayout({
			id : "suitsMatrix",
			layoutFixed : false
		}).addStyleClass("center");

		var oSuitsRow = new sap.ui.commons.layout.MatrixLayoutRow({
		// id : "row",
		});

		// oSuitsRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell({
		// // id : v.value,
		// content : new sap.ui.commons.TextView({
		// text : "Choose a suit:",
		// // semanticColor: sap.ui.commons.TextViewColor.Positive,
		// // design: sap.ui.commons.TextViewDesign.H1,
		// })
		// }));

		jQuery.each(aSuitValues, function(i, v) {
			oSuitsRow.addCell(new sap.ui.commons.layout.MatrixLayoutCell({
				// id : i,
				content : new sap.ui.commons.Button({
					text : v,
					// icon : "Black Heart 48x48.png",
					// width : "20px",
					// height : "20px",
					// iconFirst : false,
					style : sap.ui.commons.ButtonStyle.Emph,
					// lite: true,
					press : function() {
						displaySuit(this.getText(), suitImages[i]);
						// oCardsMatrixLayout.setVisible(true);
					}
				})
			}));

		});

		oSuitsMatrix.addRow(oSuitsRow);

		var oDisplayMatrixLayout = new sap.ui.commons.layout.MatrixLayout({
			id : "displayMatrix",
			layoutFixed : false,
		}).addStyleClass("center");

		oDisplayMatrixCell = new sap.ui.commons.layout.MatrixLayoutCell({
			id : "firstCardCell",
			content : oFirstCardTextView,
			press : function() {
				alert("text!!");
			}
		}).addStyleClass("selectedCard");

		oDisplayMatrixLayout.createRow(oDisplayMatrixCell, oFirstCardImage, oSecondCardTextView, oSecondCardImage, oThirdCardTextView, oThirdCardImage, oFourthCardTextView, oFourthCardImage);

		
		var testButton = new sap.ui.commons.Button({
			text : "A",
			icon : "Black Heart.png",
			// icon : suitImages[y],
			width : "150px",
			height : "150px",
			iconFirst : false,
			style : sap.ui.commons.ButtonStyle.Emph,
//			lite : true,
			press : function() {
				alert("hello");
			}
		}).addStyleClass("selectedCard");		
		
		
		  var html1 = new sap.ui.core.HTML("html1", {
              // the static content as a long string literal
              content: "<div class='selectedCard'>A &clubs;</div>",
              preferDOM : false,                      

      }).attachBrowserEvent('click', function() {
    	  alert("clicked!");
      });
		
		
		
			
		var oPanel = new sap.ui.commons.Panel();
		// Add something to the panel's content area
		oPanel.addContent(oCardsMatrixLayout);
		oPanel.addContent(oSuitsMatrix);
		// oPanel.addContent(oEvaluateButton);
		// oPanel.addContent(oClearButton);
		oPanel.addContent(oButtonsMatrixLayout);
		oPanel.addContent(oDisplayMatrixLayout);
		oPanel.addContent(testButton);
		oPanel.addContent(html1);
		// Attach the panel to the page

		return oPanel;
		// return oCardsMatrixLayout;
		// return oTable;
	}

});
