<template>
    <div :class="cls">
        <div v-if="showHead" :class="cardHeadCls">
            <slot name="title">
                <p v-if="title">
                    <span>{{title}}</span>
                </p>
            </slot>
        </div>
        <div v-if="showExtra" :class="cardExtraCls">
            <slot name="extra"></slot>
        </div>
        <p :class="cardContentCls" :style="contentStyle">
            <slot></slot>
        </p>
    </div>
</template>
<script>
import { oneOf } from '../utils/assist';
const prefixCls = 'v-card';
const defaultPadding = 16;
export default {
    name: 'v-card',
    props: {
        bordered: {
            type: Boolean,
            default: true
        },
        disHover: {
            type: Boolean,
            default: false
        },
        title: {
            type: String
        },
        padding: {
            type: Number
        }
    },
    data() {
        return {
            showDropdown: false,
        }
    },
    computed: {
        showHead() {
            return this.$slots.title !== undefined || this.title;
        },
        showExtra() {
            return this.$slots.extra !== undefined;
        },
        cls() {
            return [
                `${prefixCls}`, {
                    [`${prefixCls}-bordered`]: this.bordered,
                    [`${prefixCls}-dishover`]: this.disHover,
                }
            ]
        },
        cardHeadCls() {
            return [
                `${prefixCls}-head`
            ]
        },
        cardExtraCls() {
            return [
                `${prefixCls}-extra`
            ]
        },
        cardContentCls() {
            return [
                `${prefixCls}-body`
            ]
        },
        contentStyle() {
            if (this.padding !== defaultPadding) {
                return {
                    padding: this.padding + 'px'
                }
            }
        }
    }
}
</script>