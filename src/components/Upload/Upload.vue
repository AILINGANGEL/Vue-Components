<template>
    <div :class="cls">
        <div :class="uploadBtncls" @click="handleClick" @dragover.prevent="isDraging=true" @dragleave.prevent="isDraging=false" @drop.prevent="onDrop" @paste="handlePaste">
            <input ref="file" type="file" :name="name" :multiple="multiple" :accept="accept" @change="uploadChange" />
            <slot></slot>
        </div>
        <slot name="tip"></slot>
        <UploadList :files="fileList" v-if="showUploadList" :preview="preview"></UploadList>
    </div>
</template>
<script>
const prefixCls = 'v-upload';
import UploadList from './UploadList';
import ajax from './ajax';
import { oneOf } from '../../utils/assist';
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
        preview: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            validator(value) {
                return oneOf(value, ['select', 'drag']);
            },
            default: 'select'
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
        format: Array,
        maxSize: Number,
        showUploadList: {
            type: Boolean,
            default: true
        },
        paste: {
            type: Boolean,
            default: false
        },
        beforeUpload: Function,
        onError: {
            type: Function,
            default () {
                return {};
            }
        },
        onExceededSize: {
            type: Function,
            default () {
                return {};
            }
        },
        onFormatError: {
            type: Function,
            default () {
                return {};
            }
        }
    },
    data() {
        return {
            fileList: undefined,
            isDraging: false
        }
    },
    computed: {
        uploadBtncls() {
            return [`${prefixCls}-btn`, {
                [`${prefixCls}-select`]: this.type === 'select',
                [`${prefixCls}-drag`]: this.isDraging
            }];
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
            if (this.format && this.format.length) {
                const _file_ext = file.name.split('.').pop().toLowerCase();
                const checked = this.format.some(item => item.toLowerCase() === _file_ext);
                if (!checked) {
                    this.onFormatError(file, this.fileList);
                    return false;
                }
            }
            if (this.maxSize) {
                if (file.size > this.maxSize * 1024) {
                    this.onExceededSize(file, this.fileList);
                    return false;
                }
            }
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
        onDrop(e) {
            this.isDraging = false;
            this.fileList = e.dataTransfer.files;
            this.uploadFiles();
        },
        handlePaste(e) {
            if (this.paste) {
                this.fileList = e.clipboardData.files;
                this.uploadFiles();
            }
        },
        handleUploadError(error, response, file) {
            this.onError(error, file, this.fileList)
        },
        clearFiles() {
            this.fileList = []
        }
    }
}
</script>