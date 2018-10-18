import Modal from './confirm';
let modalInstance;
function getModalInstance() {
	let instance = modalInstance || Modal.newInstance();
	return instance;
}
export default Modal;