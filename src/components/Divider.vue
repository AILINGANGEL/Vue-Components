<template>
    <div :class="cls">
        <span v-if="hasSlot" :class="slotSpanCls">
            <slot></slot>
        </span>
    </div>
</template>
<script>
import { oneOf } from '../utils/assist';
const prefixCls = 'v-divider';
export default {
    name: 'v-divider',
    props: {
        type: {
            type: String,
            validator: function(value) {
                return oneOf(value, ['horizontal', 'vertical']);
            },
            default: 'horizontal'
        },
        align: {
            type: String,
            validator: function(value) {
                return oneOf(value, ['left', 'center', 'right']);
            },
            default: 'center'
        },
        dashed: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        hasSlot() {
            return !!this.$slots.default;
        },
        cls() {
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.type}`,
                {
                    [`${prefixCls}-text-${this.align}`]: this.hasSlot && this.type === 'horizontal',
                    [`${prefixCls}-dashed`]: this.dashed
                }
            ]
        },
        slotSpanCls() {
            return [`${prefixCls}-innter-text`];
        }
    }
}
</script>