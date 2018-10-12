<template>
    <ul :class="cls">
        <li v-for="(file, index) in files" :key="index">
            <Icon type="document"></Icon>
            {{file.name}}
        </li>
    </ul>
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
        }
    },
    computed: {
        cls() {
            return [`${prefixCls}-list`]
        }
    }
}
</script>