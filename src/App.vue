<template>
    <div id="app">
        <Table :columns="columns1" :data="data1"></Table>
    </div>
</template>
<script>
    export default {
    name: 'app',
    data() {
        return {
           columns1: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 100
                    }
                ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ]
        }
    },
    methods: {
    }
}
</script>
<style type="text/less">
    .test{
        display: flex;
        align-items: center;
        justify-content: center;

        .v-modal{
            top: 0;
        }
    }
</style>