import {TableBuilder} from './table-builder';

let header = ['one', 'two', 'three', 'four', 'five', 'six'];

let rows = [
    header,
    ['q', 'w', 'e', 'r', 't', 'y']
];

let table = new TableBuilder(rows);
