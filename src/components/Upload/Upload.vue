<template>
    <div :class="cls">
        <div :class="uploadBtncls" @click="handleClick">
            <input ref="file" type="file" :name="name" :multiple="multiple" :accept="accept" @change="uploadChange" />
            <slot></slot>
        </div>
        <UploadList :files="fileList" v-if="showUploadList"></UploadList>
    </div>
</template>
<script>
const prefixCls = 'v-upload';
import UploadList from './UploadList';
import ajax from './ajax';
export default {
    components: {
        UploadList
    },
    props: {
        action: {
            type: String,
            required: true
        },
        data: Object,
        headers: Object,
        name: {
            type: String,
            default: 'file'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        withCredentials: {
            type: Boolean,
            default: false
        },
        accept: String,
        showUploadList: {
            type: Boolean,
            default: true
        },
        beforeUpload: Function,
        onError: {
            type: Function,
            default () {
                return {};
            }
        }
    },
    data() {
        return {
            fileList: undefined
        }
    },
    computed: {
        uploadBtncls() {
            return [`${prefixCls}-btn`];
        },
        cls() {
            return [`${prefixCls}-wraper`];
        }
    },
    methods: {
        handleClick() {
            this.$refs.file.click();
        },
        uploadChange(e) {
            let selectedFiles = e.target.files; // 获取用户选中的文件
            this.fileList = selectedFiles;
            this.uploadFiles();
            this.$refs.file.value = null;
        },
        uploadFiles() {
            let postFiles = [].slice.call(this.fileList);
            postFiles.forEach(file => {
                this.upload(file);
            })
        },
        upload(file) {
            if (!this.beforeUpload) {
                return this.post(file);
            }
            const before = this.beforeUpload(file);
            if (before && before.then) {
                before.then(processedFile => {
                    if (Object.prototype.toString.call(processedFile) === '[object File]') {
                        this.post(file)
                    } else {
                        this.post(file);
                    }
                })
            } else if (before !== false) {
                this.post(file);
            }
        },
        post(file) {
            const option = {
                action: this.action,
                fileName: this.name,
                file: file,
                data: this.data,
                headers: this.headers,
                withCredentials: this.withCredentials,
                onError: (err, response) => {
                    this.handleUploadError(err, response, file);
                }
            }
            ajax(option);
        },
        handleUploadError(error, response, file) {
            this.onError(error, file, this.fileList)
        },
        clearFiles(){
            this.fileList = []
        }
    }
}
</script>