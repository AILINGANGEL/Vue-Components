<template>
    <transition name="slide-fade">
        <div :class="cls" :style="style">
            <div :class="contentCls">
                <Icon :type="iconType" :color="iconColor"></Icon>
                {{text}}
            </div>
        </div>
    </transition>
</template>
<script>
import Icon from '../Icon.vue';
const prefixCls = 'v-message';
const TYPE_ICON_COLOR = {
    info: 'blue',
    warn: 'orange',
    success: 'green'
}
const TYPE_ICON = {
    info: 'information',
    warn: 'alert',
    success: 'android-checkmark-circle'
}
export default {
    components: {
        Icon
    },
    props: {
        text: String,
        type: {
            type: String,
            default: 'info'
        },
        duration: {
            type: Number,
            default: 1.5
        }
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
        style() {
            return {
                top: '16px'
            }
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
<style>
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */

{
    transform: translateX(10px);
    opacity: 0;
}
</style>