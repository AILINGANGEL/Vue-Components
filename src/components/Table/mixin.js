export default {
    methods: {
        setCellWidth(column) {
            let width = '';
            if (column.width) {
                column.width = width;
            } else if (this.columnWidth[column._index]) {
                width = this.columnWidth[column._index].width;
            }
            if (width === '0') width = '';
            return width;
        }
    }
}