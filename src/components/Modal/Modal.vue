<template>
    <div :class="className" class="modal">
        <div :class="maskClass" v-show="visible" v-if="showMask" @click="clickMask"></div>
        <div v-if="visible":class="modalCls" :style="style">
            <div :class="modalHeaderCls" v-if="!headerHide">
                <slot name="header">
                    {{title}}
                    <Icon type="close" :class="modalCloseCls" @click="close"/>
                </slot>
            </div>
            <div :class="modalContentCls">
                <slot></slot>
            </div>
            <div :class="modalFooterCls">
                <slot name="footer" v-if="!footerHide">
                    <Button type="text" @click="close">{{cancelText}}</Button>
                    <Button type="primary" @click="onOk">{{okText}}</Button>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
const prefixCls = 'v-modal';
import ScrollMixin from './scroll-mixin';
export default {
    name: 'Modal',
    mixins: [ScrollMixin],
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        mask: {
            type: Boolean,
            default: true
        },
        title: String,
        okText: {
        	type: String,
        	default: '确定'
        },
        cancelText: {
        	type: String,
        	default: '取消'
        },
        maskClosable: {
        	type: Boolean,
        	default: true
        },
        width: {
        	type: [String, Number],
        	default: 520
        },
        footerHide: {
        	type: Boolean,
        	default: false
        },
        headerHide: {
        	type: Boolean,
        	default: false
        },
        styles: Object,
        zIndex: {
        	type: Number,
        	default: 1000
        },
        scrollable : {
        	type: Boolean,
        	default: false
        },
        top: {
        	type: [Number, String],
        	default: 100
        },
        className: String
    },
    data() {
        return {
            visible: this.value
        }
    },
    computed: {
        modalCls() {
            return [`${prefixCls}`];
        },
        maskClass() {
            return [`${prefixCls}-mask`];
        },
        style() {
        	let styl = {};
        	styl.width = this.width + 'px';
        	styl.zIndex = this.zIndex;
        	styl.top = this.top + 'px';
        	if(this.styles);
            return Object.assign(styl, this.styles);
        },
        modalCloseCls() {
            return [`${prefixCls}-close`];
        },
        modalHeaderCls() {
            return [`${prefixCls}-header`];
        },
        modalContentCls() {
            return [`${prefixCls}-content`];
        },
        modalFooterCls() {
            return [`${prefixCls}-footer`];
        },
        showMask() {
            return this.mask;
        }
    },
    watch: {
        value(val) {
            this.visible = val;
        },
        visible(val) {
        	this.$emit('on-visible-change', val);
        	if(val) {
        		if(this.scrollable) {
        			this.setScrollEffect();
        		}
        	}
        },
        scrollable(val) {
        	if(this.scrollable) {
        		this.setScrollEffect();
        	} else {
        		this.removeScrollEffect();
        	}
        }
    },
    methods: {
        close() {
            this.visible = false;
            this.$emit('on-cancel');
            this.$emit('change', false);
        },
        clickMask() {
        	if(this.maskClosable) {
        		this.close();
        	}
        },
        onOk() {
        	this.visible = false;
        	this.$emit('change', false);
        	this.$emit('on-ok');

        }
    }
}
</script>