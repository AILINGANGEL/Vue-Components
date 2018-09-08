<template>
    <div :class="selectCls">
        <input :value="value" :disabled="disabled" @focus="showDropdown=true" @blur="showDropdown=false" @input="$emit('input', $event.target.value)" :class="[selectInputCls,selectDisableCls]" />
        <ul :class="selectDropdownCls" v-if="showDropdown">
            <li :class="selectOptionCls" v-for="option in filteredOptions" :key="option" @mousedown="selectOption(option)">{{option}}</li>
        </ul>
    </div>
</template>
<script>
const prefixCls = 'v-select';
export default {
    name: 'v-select',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        },
        filterable: {
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
        filteredOptions() {
            if (this.filterable) {
                return this.options.filter(item => item.toLowerCase().indexOf(this.value.toLowerCase()) > -1)
            }
            return this.options;
        },
        selectCls() {
            return {
                [`${prefixCls}`]: true
            }
        },
        selectInputCls() {
            return {
                [`${prefixCls}-input`]: true
            }
        },
        selectOptionCls() {
            return {
                [`${prefixCls}-option`]: true
            }
        },
        selectDropdownCls() {
            return {
                [`${prefixCls}-dropdown`]: true
            }
        },
        selectDisableCls() {
            return {
                [`${prefixCls}-disabled`]: this.disabled
            }
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('input', option);
            this.showDropdown = false;
        }
    }
}
</script>