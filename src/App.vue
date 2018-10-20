<template>
    <div id="app">
        <Button @click="test">显示</Button>
      <!--   <Modal v-model="show" title="测试" @on-visible-change="visibleChange" ok-text="测试" width="1000" :footer-hide="true" scrollable class-name="test">
            <p>第一行</p>
            <p>第一行</p>
            <p>第一行</p>
        </Modal> -->
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            value: '',
            show: false,
            data: {
                a: 1,
                b: 2
            }
        }
    },
    methods: {
        visibleChange(val) {
            console.log(val);
        },
        test() {
            this.$Modal.confirm({
                title: '测试',
                okText: '测试',
                cancelText: 'abc',
                render: (h) => {
                    return h('div', 'hahahah');
                },
                onOk: () => {
                    alert('ok');
                }
            });
        }
    }
}
</script>
<style type="text/less">
    .test{
        display: flex;
        align-items: center;
        justify-content: center;

        .v-modal{
            top: 0;
        }
    }
</style>