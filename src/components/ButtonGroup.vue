<template>
    <div :class="cls">
        <slot></slot>
    </div>
</template>
<script>
import { oneOf } from '../utils/assist';
const prefixCls = 'v-btn-group';
export default {
    name: 'v-button-group',
    props: {
        shape: {
            type: String,
            validator: function(value) {
                return oneOf(value, ['circle']);
            }
        },
        size: {
            type: String,
            validator: function(value) {
                return oneOf(value, ['large', 'small', 'default']);
            }
        },
        vertical: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            showDropdown: false,
        }
    },
    computed: {
        cls() {
            return [
                [`${prefixCls}`],
                {
                    [`${prefixCls}-circle`]: this.shape === 'circle',
                    [`${prefixCls}-${this.size}`]: !!this.size,
                    [`${prefixCls}-vertical`]: this.vertical
                }
            ]
        }
    },
    methods: {}
}
</script>