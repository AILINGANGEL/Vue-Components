<template>
    <div :class="cls">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = 'v-collapse'

export default {
    props: {
        value: [String, Array],
        accordion: {
            type: Boolean,
            default: false
        }
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
            let activeNames;
            if (this.accordion) {
                if (Array.isArray(this.cValue)) {
                    activeNames = this.cValue[0] || [];
                } else {
                    activeNames = [this.cValue];
                }
            } else {
                activeNames = typeof this.cValue === 'string' ? [this.cValue] : this.cValue;
            }

            this.$children.forEach(child => {
                child.show = activeNames.indexOf(child.$options.propsData.name) > -1;
            });
        },
        changeValue(name, show) {
            if (show) {
                if (this.accordion) {
                    this.cValue = [name];
                } else {
                    this.cValue.push(name);
                }
            } else {
                if (this.accordion) {
                    this.cValue = [];
                } else {
                    let index = this.cValue.indexOf(name);
                    this.cValue.splice(index, 1);
                }
            }
            this.$emit('input', this.cValue);
            this.$emit('on-change', this.cValue);
        }
    },
    watch: {
        cValue() {
            this.setActivePanel();
        },
        value(val) {
            this.cValue = val;
        }
    }
}
</script>