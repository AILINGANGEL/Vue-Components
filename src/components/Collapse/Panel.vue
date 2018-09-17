<template>
    <div :class="cls">
        <div :class="headCls" @click="clickPanelHead">
            <slot></slot>
        </div>
        <transition name="slide">
            <div :class="contentCls" v-if="show">
                <slot name="content"></slot>
            </div>
        </transition>
    </div>
</template>
<script>
const prefixCls = 'v-collapse-item'
export default {
    props: {
        name: String
    },
    data() {
        return {
            show: false
        }
    },
    computed: {
        cls() {
            return `${prefixCls}`;
        },
        headCls() {
            return [
                `${prefixCls}-head`,
                {
                    [`${prefixCls}-active`]: this.show
                }
            ]
        },
        contentCls() {
            return [
                `${prefixCls}-content`
            ]
        }
    },
    mounted() {
        console.log(this);
    },
    methods: {
        clickPanelHead() {
            this.show = !this.show;
            this.$parent.changeValue(this.name, this.show);
        }
    }
}
</script>