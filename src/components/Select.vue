<template>
    <div class="v-select">
        <input :value="value" :disabled="disabled" @focus="showDropdown=true" @blur="showDropdown=false" @input="handleInput" class="v-select-input" :style="disabledClass"></input>
        <ul class="v-select-dropdown" v-if="showDropdown">
            <li class="v-select-option" v-for="option in filteredOptions" :key="option" @mousedown="selectOption(option)">{{option}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'SlotOption',
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
        }
    },
    data() {
        return {
            showDropdown: false,
        }
    },
    computed: {
        filteredOptions() {
            return this.options.filter(item => item.toLowerCase().indexOf(this.value.toLowerCase()) > -1);
        },
        disabledClass() {
            return this.disabled ? { 'background-color': 'rgba(197, 200, 206, .2)' } : {}
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('input', option);
            this.showDropdown = false;
        },
        handleInput(e) {
            this.$emit('input', e.target.value);
        }
    }
}
</script>
<style type="text/css" scoped>
.v-select {
    position: relative;
    color: #515a6e;
}

.v-select-input {
    height: 32px;
    width: 100%;
    line-height: 1.5;
    font-size: 12px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    background-color: #fff;
    padding: 5px;
    color: #515a6e;
}

.v-select-input:focus {
    outline: none !important;
    border: 1px solid #2db7f5;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
}

.v-select-dropdown {
    position: absolute;
    top: 42px;
    left: 0;
    z-index: 2;
    overflow: auto;
    max-height: 200px;
    margin: 5px 0;
    padding: 5px 0;
    min-width: 100%;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
}

.v-select-option {
    padding: 2px 5px;
}

.v-select-option:hover {
    background-color: #f8f8f9;
    cursor: pointer;
}
</style>