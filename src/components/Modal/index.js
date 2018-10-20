import Modal from './confirm';
let modalInstance;
function getModalInstance(render) {
	modalInstance = modalInstance || Modal.newInstance({
		maskClosable: false,
		headerHide: true,
		render
	});
	return modalInstance;
}

Modal.show = function(config) {
	let render = config.render ? config.render: undefined;
	let instance = getModalInstance(render);
	instance.show(config);
}

Modal.info = function(config) {
	config.iconType = 'ios-information-outline';
	config.iconColor = 'blue';
	config.showCancelBtn = false;
	this.show(config);
}

Modal.confirm = function(config) {
	config.showCancelBtn = true;
	this.show(config);
}

export default Modal;