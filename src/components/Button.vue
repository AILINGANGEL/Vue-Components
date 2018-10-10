<template>
    <button :class="cls" :disabled="disabled" @click="$emit('click')">
        <slot></slot>
    </button>
</template>
<script>
import { oneOf } from '../utils/assist';
const prefixCls = 'v-btn';
export default {
    name: 'v-button',
    props: {
        type: {
            type: String,
            validator: function(value) {
                return oneOf(value, ['primary', 'success', 'info', 'warning', 'default', 'error', 'dashed', 'text']);
            },
            default: 'default'
        },
        long: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
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
                `${prefixCls}`, `${prefixCls}-${this.type}`,
                {
                    [`${prefixCls}-long`]: this.long,
                    [`${prefixCls}-disabled`]: this.disabled,
                    [`${prefixCls}-circle`]: this.shape === 'circle',
                    [`${prefixCls}-${this.size}`]: !!this.size
                }
            ]
        }
    }
}
</script>