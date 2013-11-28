var Gapper = (function(module){

	module.doIt = function(obj) {
		obj.prepend( Date() + '<br />');
	};

	return module;
}(Gapper || {}));