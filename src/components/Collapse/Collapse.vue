<template>
    <div :class="cls">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = 'v-collapse'

export default {
    props: {
        value: [String, Array]
    },
    data() {
        return {
            cValue: this.value
        }
    },
    computed: {
        cls() {
            return [
                `${prefixCls}`
            ]
        }
    },
    mounted() {
        this.setActivePanel();
    },
    methods: {
        setActivePanel() {
            let activeNames = typeof this.value === 'string' ? [this.value] : this.value;
            this.$children.forEach(child => {
                if (activeNames.indexOf(child.$options.propsData.name) > -1) {
                    child.show = true;
                }
            });
        },
        changeValue(name, show) {
            if (show) {
                this.cValue.push(name);
            } else {
                let index = this.cValue.indexOf(name);
                this.cValue.splice(index, 1);
            }
            this.$emit('input', this.cValue);
            this.$emit('on-change', this.cValue);
        }
    }
}
</script>