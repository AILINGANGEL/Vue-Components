<template>
    <div :class="cls">
        <ul v-for="(file, index) in files" :key="index">
        <img v-if="preview && isValidImage(file)" :src="getImgUrl(file)" class="v-upload-image" />
        <li v-else>
            <Icon type="document"></Icon>
            {{file.name}}
        </li>
        </ul>
    </div>
</template>
<script>
import Icon from '../Icon';
const prefixCls = 'v-upload';
export default {
    name: 'UploadList',
    components: {
        Icon
    },
    props: {
        files: {
            type: FileList
        },
        preview: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        cls() {
            return [`${prefixCls}-list`]
        }
    },
    methods: {
        getImgUrl(file) {
            console.log(file);
            return window.URL.createObjectURL(file);
        },
        isValidImage(file) {
            var fileTypes = [
                'image/jpeg',
                'image/pjpeg',
                'image/png'
            ];
            for (var i = 0; i < fileTypes.length; i++) {
                if (file.type === fileTypes[i]) {
                    return true;
                }
            }
            return false;
        }
    }
}
</script>