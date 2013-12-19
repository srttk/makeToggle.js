/*
Author  : Sarath

Use $('.trigger').makeToggle('.ToggleElem');

*/

(function($){
	$.fn.makeToggle=function(tgElm){
		(this).click(function(){
			$(tgElm).slideToggle();
		});
	}
	return this;
})(jQuery);
