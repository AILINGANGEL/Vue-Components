<template>
    <div :class="cls" :style="style">
        <slot></slot>
    </div>
</template>
<script>
import { oneOf, findChildComponents } from '../../utils/assist';
const prefixCls = 'v-row';
export default {
    name: 'Row',
    props: {
        type: {
            validator: function(value) {
                return oneOf(value, ['flex']);
            }
        },
        align: {
            validator: function(value) {
                return oneOf(value, ['top', 'middle', 'bottom']);
            }
        },
        justify: {
            validator: function(value) {
                return oneOf(value, ['start', 'end', 'center', 'space-around', 'space-between']);
            }
        },
        gutter: {
            type: Number,
            default: 0
        }
    },
    methods: {
        updateGutter(val) {
            if (val !== 0) {
                let children = findChildComponents(this, 'Col');
                children.forEach(child => {
                    child.gutter = val;
                });
                console.log(children);
            }
        }
    },
    mounted() {
        this.updateGutter(this.gutter);
    },
    computed: {
        cls() {
            return [
                `${prefixCls}-align-${this.align}`,
                `${prefixCls}-justify-${this.justify}`,
                {
                    [`${prefixCls}-flex`]: this.type === 'flex',
                }
            ]
        },
        style() {
            return {
                marginRight: -(this.gutter / 2) + 'px',
                marginLeft: -(this.gutter / 2) + 'px'
            }
        }
    },
    watch: {
        gutter: {
            immediate: true,
            handler(val) {
                console.log(val);
                this.updateGutter(val);
            }
        }
    }
}
</script>