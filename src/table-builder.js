export class TableBuilder {
    constructor(rows) {
        var d3 = require ('d3');

        this.header = rows.shift();
        this.data = rows;

        var table = d3.select('body').append('table').attr('class', 'table');
        return table;
    }
}