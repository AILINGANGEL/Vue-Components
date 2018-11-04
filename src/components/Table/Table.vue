<template>
    <div>
        <TableHeade :columns="columns" :prefixCls="prefixCls" :columnsWidth="columnsWidth" />
    </div>
</template>
<script>
import TableHeade from './Table-Head.vue';
const prefixCls = 'v-table';
export default {
    components: {
        TableHeade
    },
    props: {
        columns: {
            type: Array,
            default: () => []
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            prefixCls: prefixCls,
            columnsWidth: {}
        }
    },
    methods: {
        makeColumns() {

        },
        resize() {

        }
    }
}
</script>