<template>
    <transition name="slide-fade">
        <div :class="cls">
            <div :class="contentCls">
                <div v-if="type==='loading'" class="loading"></div>
                <Icon :type="iconType" :color="iconColor" v-else></Icon>
                <span v-if="!render">{{content}}</span>
                <Render v-else :render="render"></Render>
                <Icon v-if="closable" type="close-round" @click="closeMessage" :class="closeClass"></Icon>
            </div>
        </div>
    </transition>
</template>
<script>
import Icon from '../Icon';
import Render from './render';
const prefixCls = 'v-message';
const TYPE_ICON_COLOR = {
    info: 'blue',
    warn: 'orange',
    success: 'green',
    loading: 'blue'
}
const TYPE_ICON = {
    info: 'information',
    warn: 'alert',
    success: 'android-checkmark-circle'
}
export default {
    components: {
        Icon,
        Render
    },
    props: {
        content: String,
        type: {
            type: String,
            default: 'info'
        },
        duration: {
            type: Number,
            default: 1.5
        },
        name: {
            type: String,
            required: true
        },
        closable: {
            type: Boolean,
            default: false
        },
        render: Function,
        onClose: Function
    },
    computed: {
        cls() {
            return [`${prefixCls}`]
        },
        contentCls() {
            return [`${prefixCls}-content`]
        },
        iconType() {
            return TYPE_ICON[this.type];
        },
        iconColor() {
            return TYPE_ICON_COLOR[this.type]
        },
        closeClass() {
            return [`${prefixCls}-close`]
        }
    },
    mounted() {
        // 如果开启了关闭按钮就不开启定时消失
        if (!this.closable && this.duration != 0) {
            this.disappear();
        }
    },
    methods: {
        disappear() {
            // 定时消失
            this.closeTimer = setTimeout(this.closeMessage, this.duration * 1000);
        },
        closeMessage() {
            this.$parent.remove(this.name);
            if (this.onClose)
                this.onClose();
        }
    },
    beforeDestroy() {
        clearTimeout(this.closeTimer);
    }
}
</script>