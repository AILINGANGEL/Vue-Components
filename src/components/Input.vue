<template>
    <div :class="cls">
        <input v-if="type !== 'textarea'" :type="type" ref="input" :value="value" :placeholder="placeholder" :autocomplete="autocomplete" :disabled="disabled" :readonly="readonly" :autofocus="autofocus" @change="inputChange" @focus="inputFocus" @keyup="inputKeyUp" @keydown="inputKeyDown" @keypress="inputKeyPress" @keyup.enter="inputEnter" class="v-input" />
        <textarea v-else ref="textarea" :value="value" :rows="rows" :disabled="disabled" :readonly="readonly" :autofocus="autofocus" @keypress="inputKeyPress" @change="inputChange" @focus="inputFocus" @blur="inputBlur" @keyup="inputKeyUp" @keydown="inputKeyDown" @keyup.enter="inputEnter" class="v-input">
        </textarea>
    </div>
</template>
<script>
import { oneOf } from '../utils/assist';
const prefixCls = 'v-input';
export default {
    name: 'v-input',
    props: {
        value: String,
        placeholder: {
            type: String,
            default: 'enter something'
        },
        autocomplete: {
            type: String,
            validator: function(value) {
                return oneOf(value, ['on', 'off']);
            }
        },
        size: {
            type: String,
            validator: function(value) {
                return oneOf(value, ['large', 'small', 'default']);
            },
            default: 'default'
        },
        type: {
            type: String,
            validator(value) {
                return oneOf(value, ['text', 'textarea', 'password', 'url', 'email', 'date']);
            },
            default: 'text'
        },
        rows: {
            type: Number,
            default: 2
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        cls() {
            return [`${prefixCls}-wraper`, `${prefixCls}-wraper-${this.size}`, {
                [`${prefixCls}-wraper-disabled`]: this.disabled
            }]
        }
    },
    methods: {
        inputChange(event) {
            this.$emit('input', event.target.value);
            this.$emit('on-change', event);
        },
        inputFocus() {
            this.$emit('on-focus');
        },
        inputBlur() {
            this.$emit('on-blur');
        },
        inputKeyUp(event) {
            this.$emit('on-keyup', event);
        },
        inputKeyDown(event) {
            this.$emit('on-keydown', event);
        },
        inputKeyPress(event) {
            this.$emit('on-keypress', event);
        },
        inputEnter(event) {
            this.$emit('on-enter', event);
        },
        focus() {
            if (this.type === 'textarea') {
                this.$refs.textarea.focus();
            } else {
                this.$refs.input.focus();
            }
        }
    }
}
</script>