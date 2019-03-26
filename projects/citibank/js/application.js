(function($, window, document, undefined) {

	var Calc = {

		init: function (config) {
			this.config = config;
			this.bindEvents();
			this.slidersInit();
			this.tooltipsInit();
			this.firstInit();
		},

		bindEvents : function () {
			this.config.triggerLink.on("click", this.openCalcPopup);
			this.config.calcWrap.siblings().on("click", this.closeCalcPopup);
			this.config.closeLink.on("click", this.closeCalcPopup);
			this.config.cardSelector.on("click", this.selectCardType);
			this.config.calcTable.find("input.pay-input").each(this.inputFilter);
			
			this.config.getResultButton.on("click", this.openResultPopup);

			this.config.closeResultLink.on("click", this.closeResultPopup);
			this.config.resultWrap.siblings().on("click", this.closeResultPopup);
			this.config.resultWrap
				.find(this.config.popupFooter)
				.find(this.config.okayButton)
				.on("click", this.closeResultPopup)
		},

		firstInit: function() {
			var self = Calc;
			self.config.calcOuterWrap.fadeIn(self.config.popupOpenSpeed);
			self.alignCalcWrap(self.config.calcWrap, self.config.disclaimer, self.config.disclaimerRes);
		},

		//Открывает попап калькулятора.
		openCalcPopup : function (e) {			
			var self = Calc;
			self.config.calcOuterWrap.fadeIn(self.config.popupOpenSpeed);
			self.alignCalcWrap(self.config.calcWrap, self.config.disclaimer, self.config.disclaimerRes);
			e.preventDefault();
		},

		//Выравнивает попап калькулятора по центру экрана.
		alignCalcWrap : function (el, disc, discRes) {
			var wrapHeight = el.outerHeight(),
				wrapWidth = el.outerWidth(),
				windowHeight = $(window).height(),
				windowWidth = $(window).width(),
				scrollTop = $(window).scrollTop(),
				wrapTopOffset = scrollTop + (windowHeight/2) - (wrapHeight/2),
				wrapLeftOffset = (windowWidth/2) - (wrapWidth/2);
				discTopOffset = wrapHeight + 40;
				discResTopOffset = wrapHeight - 40;

			if (windowHeight > wrapHeight) {
				el.css({"top": wrapTopOffset, "left" : wrapLeftOffset});
				disc.css({"top": discTopOffset + wrapTopOffset, "left" : wrapLeftOffset});
				discRes.css({"top": discTopOffset + wrapTopOffset - 130, "left" : wrapLeftOffset + 80});
			} else {
				el.css({"top": "20px", "left" : wrapLeftOffset});
				disc.css({"top": discTopOffset, "left" : wrapLeftOffset});
				discRes.css({"top": discTopOffset - 130, "left" : wrapLeftOffset + 80});
			}
		},

		//Закрывает попап калькулятора.
		closeCalcPopup : function (e) {
			var self = Calc;			
			self.config.calcOuterWrap.fadeOut(self.config.popupCloseSpeed);
			e.preventDefault();
		},
		
		//Переключатель типов карт.
		selectCardType : function () {
			var $this = $(this),
				self = Calc,
				active = self.config.cardSelectorActiveClass;
			if ( $this.hasClass(active) ) {
				return false;
			} else {
				$this.addClass(active).siblings().removeClass(active);

				if ($this.children().hasClass("yellow")) {
					//Premium
					self.config.premiumCardFlag = true;
					self.countTotalMiles();
				} else {
					self.config.premiumCardFlag = false;
					self.countTotalMiles();
				}
			}
		},

		//Создаёт слайдеры и подключает событие смещения бегунка.
		slidersInit : function () {
			var self = this;

			//Большие слайдеры.
			this.config.sliderElement.each(function () {
				var $this = $(this),
					input = $this.parents("tr").find("input");

				$this.slider({
					animate : self.config.sliderAnimationSpeed,
					max 	: self.config.sliderMaxValue,
					min 	: 0,
					range	: "min",
					step 	: self.config.sliderStep,
					value 	: 0
				});
								
				$this.on("slide", function (event, ui) {
					input.val(ui.value);
					self.countAnnualMiles(input, ui.value);
				});

				// Наносим засечки и числа.
				var ticksNum = self.config.sliderTicksAmount,
					tickSpacing = 100 / ticksNum,
					tickNumbersLength = self.config.sliderTickNumbers.length, // 5
					tickNumbersSpacing = 100 / tickNumbersLength;

				for (var i = 0, j = 0; i < ticksNum+1; i++) {
					//Засечки.
			       	var span = $("<span/>", {"class" : "ui-slider-tick-mark"})
			       		.css('left', (tickSpacing * i) + "%").appendTo($this);

			        if (i % 2 !== 0) {
			        	span.addClass("small"); //Нечётные засечки - маленькие.
			        } else {
			        	//Числа.
			        	var numSpan = $("<span/>", {
			        		"class" 	: "ui-slider-tick-number", 
			        		text 	: self.config.sliderTickNumbers[j]
			        	})
				        	.css("left", (tickSpacing * i) + "%")
				        	.appendTo($this);

				        if (j !== tickNumbersLength -1) {
				        	numSpan.css("margin-left", -numSpan.width() / 2);
				        	j++;
				        } else {
				        	numSpan.css("margin-left", -numSpan.width());
				        }			        	
			        }
			    }

			});

			//переключатель Да/нет. 0 - Да, 1 - Нет.
			this.config.tinySlider.slider({
				max 	: 1,
				min 	: 0,
				step 	: 1,
				value 	: 1
			});

			var wrap = this.config.tinySlider.parents(".tiny-slider-wrap"),
				input = wrap.siblings("input");

			this.config.tinySlider.on("slide", function (event, ui) {
				wrap.siblings("span.welcome-miles").toggleClass("active");				

				//Мили за год.
				var span = wrap.parents("tr")
					.children("td.annual-miles-cont")
					.children("span.annual-miles");
					if ( ui.value === 0 ) {
						span.text(3000);
					} else {
						span.text(0);
					}
				self.countTotalMiles();
			});
	},

		//Контроль ввода в инпуты.
		inputFilter : function () {
			var $this = $(this), //инпут
				self = Calc,
				slider = $this.parents("tr").find(self.config.sliderElement),
				value;			

			function getCharCode(event) {
				if (event.charCode === "number") {
					return event.charCode;
				} else {
					return event.keyCode;
				}
			}

			function isNum(cCode){
				return /[0-9]/.test(String.fromCharCode(cCode));
			}

			$this.on("click", function () {
				$(this).select();
			})
			.keypress(function(e){
				var code = getCharCode(event);				
				return (isNum(code)) ? true : false;

			}).keyup(function () {
				var value = parseInt( $(this).val() );

				if (value > self.config.sliderMaxValue) {
					value = self.config.sliderMaxValue;
					$this.val(value);
				}			
				slider.slider("value", value);
				self.countAnnualMiles($this, value);
			});
		},

		//Подсказки.
		tooltipsInit : function () {
			this.config.infoIcon.tooltip();
		},

		//Подсчет миль за год (правий столбец)
		countAnnualMiles : function (input, value) {
			var span = input.parents("tr")
				.children("td.annual-miles-cont")
				.children("span.annual-miles");

			if (!isNaN(value)) {
				value = value * 12 / 30;
				span.text(value);
			} else {
				span.text(0);
			}

			this.countTotalMiles();
		},

		//Общее кол-во миль.
		countTotalMiles : function () {
			var count = 0, total = 0;
			this.config.annualMilesElements.each(function () {
				count += parseInt( $(this).text() );
			});

			// total = (count * 12) / 30;
			total = count;

			if (this.config.premiumCardFlag === true)
				total += 5000;

			this.config.totalMiles = total; //Для calcRewards()
			this.config.totalAnnualMilesElement.text(total);
		},

		//попап с резульатом подсчета.
		openResultPopup : function (e) {
			var self = Calc;

			if(self.config.totalMiles === undefined) {
				self.config.totalMiles = 0;
			}

			self.config.resultOuterWrap.fadeIn(self.config.popupOpenSpeed);
			self.alignCalcWrap(self.config.resultWrap);
			self.calcRewards();
			e.preventDefault();
		},

		//Закрывает попап калькулятора.
		closeResultPopup : function (e) {
			var self = Calc;
			self.config.resultOuterWrap.fadeOut(self.config.popupCloseSpeed);
			e.preventDefault();
		},

		calcRewards : function () {

			var miles = this.config.totalMiles;

			if (miles < 15000) {
				this.config.enoughMiles.hide();
				this.config.notEnoughMiles.show()
					.find(this.config.resultTotalMiles).text(15000 - miles);

			} else if (miles > 15000 && miles <= 59999) {
				this.config.notEnoughMiles.hide();
				this.config.europeResultElems.show().siblings().hide();
				this.config.enoughMiles.show()
					.find(this.config.resultTotalMiles).text(miles);

			} else if (miles >= 60000 && miles < 179000) {
				this.config.notEnoughMiles.hide();
				this.config.usaResultElems.show().siblings().hide();
				this.config.enoughMiles.show()
					.find(this.config.resultTotalMiles).text(miles);

			} else if (miles >= 179000) {
				this.config.notEnoughMiles.hide();
				this.config.usatopResultElems.show().siblings().hide();
				this.config.enoughMiles.show()
					.find(this.config.resultTotalMiles).text(miles);
			}

			miles = null;
		}


	};

	Calc.init({
		premiumCardFlag 		: false, //изначально карта не Премиум.
		triggerLink 			: $("a#miles-more__calc-trigger"),
		calcWrap 				: $("div.miles-more__calc-wrap"),
		disclaimer				: $("div.miles-more__disclaimer"),
		disclaimerRes			: $("div.miles-more__result-disc"),
		popupOpenSpeed			: 400,
		popupCloseSpeed			: 400,
		calcOuterWrap 			: $("div.miles-more__calc"),
		closeLink 				: $("a.close-button"),
		cardSelector 			: $("div.card-selector"),
		cardSelectorActiveClass : "active",
		sliderElement 			: $("div.slider"),
		calcTable 				: $("table.miles-more__calc-table"),
		sliderMaxValue 			: 50000,
		sliderAnimationSpeed 	: 500,
		sliderStep				: 500, 
		infoIcon 				: $("i.info"),
		tinySlider 				: $("div.tiny-slider"),
		sliderTicksAmount 		: 8, //Кол-во засечек.
		sliderTickNumbers 		: [0, 5000, 10000, 25000, 50000],
		annualMilesElements 	: $("span.annual-miles"),
		totalAnnualMilesElement : $("span.total-annual-miles"),

		getResultButton 		: $("a.get-result"),

		resultOuterWrap 		: $("div.miles-more__result"),
		resultWrap 				: $("div.miles-more__result-wrap"),
		closeResultLink 		: $("a.close-result-button"),
		notEnoughMiles 			: $("div.not-enough-miles"),
		enoughMiles 			: $("div.enough-miles"),
		resultTotalMiles 		: $("span.total"),
		europeResultElems		: $(".europe"),
		usaResultElems			: $(".usa"),
		usatopResultElems		: $(".usa-top"),
		popupFooter				: $("div.miles-more__footer"),
		okayButton				: $("a.okay")
	});

})(jQuery, window, document);