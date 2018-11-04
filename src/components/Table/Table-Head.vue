<template>
    <table cellspacing="0" cellpadding="0" border="0">
        <colgroup>
            <Col v-for="col in columns" :key="col.key" :width="col.width">
            </Col>
        </colgroup>
        <thead>
            <tr>
                <th v-for="col in columns" :key="col.key" colspan="4">{{col.title}}</th>
            </tr>
        </thead>
    </table>
</template>
<script>
import Mixin from './mixin';
export default {
    mixins: [Mixin],
    props: {
        prefixCls: String,
        columns: Array,
        columnsWidth: Object
    }
}
</script>