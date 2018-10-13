<template>
    <div id="app">
        <Upload multiple show-upload-list>
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
            show: false
        }
    },
    methods: {
    }
}
</script>