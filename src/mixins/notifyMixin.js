export default {
    methods: {
        notice() {
            const h = this.$createElement
            this.$notify({
                title: '骗你的！',
                message: h('i', { style: 'color: teal' }, '其实我只是个摆设')
            })
        }
    },
}