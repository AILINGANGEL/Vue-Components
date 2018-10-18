<template>
	<div v-if="visible" @click="close" :class="cls" :style="style">
		test
	</div>
</template>
<script>
const prefixCls = 'v-modal';
export default {
	name: 'Modal',
	model: {
		prop: 'value',
		event: 'change'
	},
	props: {
		value: Boolean
	},
	data() {
		return {
			visible: this.value
		}
	},
	computed: {
		cls() {
			return [`${prefixCls}`];
		},
		style() {
			return {
				width: '800px'
			}
		}
	},
	watch: {
		value(val) {
			this.visible = val;
		}
	},
	methods: {
		close() {
			this.$emit('change', false);
		}
	}
}
</script>