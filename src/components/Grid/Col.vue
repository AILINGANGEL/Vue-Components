<template>
    <div :class="cls" :style="style">
        <slot></slot>
    </div>
</template>
<script>
// import { oneOf } from '../../utils/assist';
const prefixCls = 'v-col';
export default {
    name: 'Col',
    props: {
        span: {
            validator: function(value) {
                return Number(value) <= 24 && Number(value) >= 0;
            }
        },
        order: {
            type: [String, Number],
            default: 0
        },
        offset: {
            type: [String, Number],
            default: 0
        }
    },
    data() {
        return {
            gutter: 0
        }
    },
    computed: {
        cls() {
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.span}`,
                `${prefixCls}-offset-${this.offset}`
            ]
        },
        style() {
            let style = {};
            if (this.gutter !== 0) {
                style.paddingRight = this.gutter / 2 + 'px';
                style.paddingLeft = this.gutter / 2 + 'px';
            }
            style.order = this.order;
            return style;
        }
    }
}
</script>