<template>
    <div id="app">
        <Upload multiple show-upload-list action="test" :headers="data" :data="data" :on-error="handleError" :before-upload="test" preview>
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>Click or drag files here to upload</p>
            </div>
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
        handleError(err, file, fileList) {
            // console.log(file)
        },
        test(file) {
            return new Promise((resolve, reject) => {
                resolve(file);
            })
        }
    }
}
</script>