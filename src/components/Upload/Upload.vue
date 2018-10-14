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
        onError: {
        	type: Function,
        	default() {
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
        uploadChange(evt) {
            let selectedFiles = this.$refs.file.files; // 获取用户选中的文件
            this.fileList = selectedFiles;
            this.uploadFiles();
        },
        uploadFiles() {
        	let postFiles = [].slice.call(this.fileList);
        	postFiles.forEach(file=>{
        		this.upload(file);
        	})
        },
        upload(file) {
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
        	this.onError(error, response, this.fileList)
        },
        handleClick() {
        	this.$refs.file.click();
        }
    }
}
</script>