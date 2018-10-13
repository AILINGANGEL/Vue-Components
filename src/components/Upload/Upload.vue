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
export default {
    components: {
        UploadList
    },
    props: {
        name: {
            type: String,
            default: 'file'
        },
        multiple: {
            type: Boolean,
            default: false
        },
        accept: String,
        showUploadList: {
            type: Boolean,
            default: true
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
        uploadChange(evt) {
            let selectedFiles = this.$refs.file.files; // 获取用户选中的文件
            this.fileList = selectedFiles;
        },
        handleClick() {
        	this.$refs.file.click();
        }
    }
}
</script>