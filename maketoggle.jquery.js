/*
Author  : Sarath

Use $('.trigger').makeToggle('.ToggleElem');

*/

(function(a){a.fn.makeToggle=function(b){(this).click(function(){a(b).slideToggle()})};return this})(jQuery);
