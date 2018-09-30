<template>
    <div :class="cls">
        <template v-if="type !== 'textarea'">
            <slot name="prepend"></slot>
            <input v-if="type !== 'textarea'" :type="type" ref="input" :value="value" :placeholder="placeholder" :autocomplete="autocomplete" :disabled="disabled" :readonly="readonly" :autofocus="autofocus" @input="inputChange" @focus="inputFocus" @keyup="inputKeyUp" @keydown="inputKeyDown" @keypress="inputKeyPress" @keyup.enter="inputEnter" class="v-input" />
            <slot name="append"></slot>
        </template>
        <textarea v-else ref="textarea" :value="value" :placeholder="placeholder" :rows="textareaRow" :disabled="disabled" :readonly="readonly" :autofocus="autofocus" @input="inputChange" @keypress="inputKeyPress" @focus="inputFocus" @blur="inputBlur" @keyup="inputKeyUp" @keydown="inputKeyDown" @keyup.enter="inputEnter" class="v-input" :style="styles">
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
        },
        autosize: {
            type: [Boolean],
            default: false
        }
    },
    data() {
        return {
            height: 'auto'
        }
    },
    computed: {
        cls() {
            return [`${prefixCls}-wraper`, `${prefixCls}-wraper-${this.size}`, {
                [`${prefixCls}-wraper-disabled`]: this.disabled
            }]
        },
        textareaRow() {
            if (this.autosize) {
                return 3;
            } else {
                return 2;
            }
        },
        styles() {
            return {
                height: this.height,
                overflowY: 'hidden',
                padding: this.getPadding(),
            }
        }
    },
    mounted() {
        this.getHeight();
    },
    methods: {
        inputChange(event) {
            this.getHeight();
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
            setTimeout(this.getHeight, 0);
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
        },
        getHeight() {
            const scrollHeight = this.$refs.textarea.scrollHeight;
            // console.log(scrollHeight);
            this.height = 'auto';
            this.height = scrollHeight + 'px';
        },
        getPadding() {
            if (this.size === 'large') {
                return '10px 7px';
            } else {
                return '10px 7px';
            }
        }
    }
}
</script>