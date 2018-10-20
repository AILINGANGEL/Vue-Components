import Modal from './Modal';
import Vue from 'vue';

Modal.newInstance = properties => {
    let props = properties || {};
    let Instance = new Vue({
        data() {
            return Object.assign({}, props, {
                icon: undefined,
                iconColor: undefined,
                showCancelBtn: false,
                okText: '确定',
                Instance: '取消'
            })
        },
        render(h) {
            let Icon;
            if (this.icon) {
                Icon = h('Icon', {
                    props: {
                        type: this.icon,
                        color: this.iconColor,
                        size: '30'
                    }
                });
            }

            let vFootNode = [h('Button', {
                props: {
                    type: 'primary'
                },
                on: {
                    click: () => {
                        this.onSure();
                    }
                }
            }, this.okText)];


            if (this.showCancelBtn) {
                vFootNode.unshift(h('Button', {
                    props: {
                        type: 'text'
                    },
                    on: {
                        click: () => {
                            this.onClose();
                        }
                    }
                }, this.cancelText));
            }

            let vBodyNode;
            if (this.render) {
                vBodyNode = this.render(h);
            }

            return h(Modal, {
                props
            }, [Icon, vBodyNode, h('div', { slot: 'footer' }, [vFootNode])]);
            return Icon;
        },
        methods: {
            onClose() {
                this.$children[0].visible = false;
            },
            onSure() {
                this.onOk();
                this.onClose();
            }
        }
    })
    let component = Instance.$mount(); // 对vue实例进行编译
    document.body.append(component.$el); // 将编译的结果挂在到文档中
    const MODAL_ITEM = Instance.$children[0]; // 获取Modal实例
    return {
        show(config) {
            Instance.icon = config.iconType;
            Instance.iconColor = config.iconColor;
            Instance.showCancelBtn = config.showCancelBtn;
            if ('okText' in config) {
                Instance.okText = config.okText;
            }
            if ('cancelText' in config) {
                Instance.cancelText = config.cancelText;
            }
            if('onOk' in config) {
                Instance.onOk = config.onOk;
            }
            MODAL_ITEM.visible = true;

        },
        remove() {
            const item = document.getElementsByClassName('modal');
            if (item) {
                document.body.removeChild(item);
            }
        }
    }
}

export default Modal;