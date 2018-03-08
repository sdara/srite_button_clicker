// S&S
jQuery('.l-coupons__item button.c-coupon__button').trigger('click')

// SR
(function(){
	var buttons = document.getElementsByClassName('available-to-clip');
	var i;
	for(i=0;i<buttons.length;i+=1){
		buttons[i].click();
	}
}())


