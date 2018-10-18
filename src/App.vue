<template>
    <div id="app">
        <Modal v-model="show"/>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            value: '',
            show: true,
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