<template>
    <i :class="cls" :style="styles" @click="$emit('click')"></i>
</template>
<script>
const prefixCls = 'v-icon'
export default {
    name: 'v-icon',
    props: {
        type: String,
        size: [String, Number],
        color: String,
        custom: String
    },
    computed: {
        cls() {
            return [`${prefixCls}`, `${prefixCls}-${this.type}`];
        },
        styles() {
            let style = {};
            if (this.size) {
                style.fontSize = this.size + 'px';
            }
            if (this.color) {
                style.color = this.color;
            }
            return style;
        }
    }
}
</script>