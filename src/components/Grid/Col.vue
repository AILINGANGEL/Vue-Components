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
                `${prefixCls}-${this.span}`
            ]
        },
        style() {
            if (this.gutter !== 0) {
                return {
                    paddingRight: this.gutter / 2 + 'px',
                    paddingLeft: this.gutter / 2 + 'px'
                }
            }
        }
    }
}
</script>