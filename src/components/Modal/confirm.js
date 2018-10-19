import Modal from './Modal';
Modal.newInstance = properties => {
    let props = properties || {};
    let instance = new Vue({
        render(h) {
            return h(Modal, {
                props
            })
        }
    })
    let component = Instance.$mount();
    document.body.append(component.$el);
    const MODAL_ITEM = Instance.$children[0]; // 获取Modal实例
    return {
        show() {
            MODAL_ITEM.visible = true;
        }
    }

}

export default Modal;