<template>
    <div id="app">
        <Upload multiple show-upload-list action="test" :headers="data" :data="data" :on-error="handleError">
            <Button>上传</Button>
        </Upload>
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
        handleError(err, res, file) {
            console.log(file);
        }
    }
}
</script>