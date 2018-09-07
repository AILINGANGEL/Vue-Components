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
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            validator: function(value) {
                return oneOf(value, ['primary', 'success', 'warning', 'danger', 'default']);
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
                [`${prefixCls}-${this.type}`],
                {
                    [`${prefixCls}-long`]: this.long,
                    [`${prefixCls}-disabled`]: this.disabled
                }
            ]
        }
    },
    methods: {}
}
</script>