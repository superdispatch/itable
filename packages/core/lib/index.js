import tableEnhancer from './enhancers/table';
import emptyCaptionEnhancer from './enhancers/emptyCaption';
import tableBodyEnhancer from './enhancers/tableBody';
import tableHeadEnhancer from './enhancers/tableHead';
import tableHeaderEnhancer from './enhancers/tableHeader';

import TableBodyComponent from './components/TableBody';
import TableComponent from './components/Table';
import TableHeadComponent from './components/TableHead';
import TableCellComponent from './components/TableCell';
import EmptyLabelComponent from './components/EmptyLabel';

import TableBodyStyledComponent from './components/styled/TableBody';
import TableHeaderStyledComponent from './components/styled/TableHeader';
import TableStyledComponent from './components/styled/Table';
import EmptyLabelStyledComponent from './components/styled/EmptyLabel';

export { default as TableCell } from './components/TableCell';
export { default as TableCellText } from './components/TableCellText';
export { default as TableDataText } from './components/TableCellText';
export { default as TableData } from './components/TableCell';
export { default as TableRow } from './components/TableRow';
export { default as SortIcon } from './components/SortIcon';

export const TableBody = tableBodyEnhancer(TableBodyComponent);
export const Table = tableEnhancer(TableComponent);
export const TableHead = tableHeadEnhancer(TableHeadComponent);
export const TableHeader = tableHeaderEnhancer(TableCellComponent);
export const EmptyCaption = emptyCaptionEnhancer(EmptyLabelComponent);

/* --------------------Styled-------------------------- */

export const TableBodyStyled = tableBodyEnhancer(TableBodyStyledComponent);
export const TableStyled = tableEnhancer(TableStyledComponent);
export const TableHeadStyled = tableHeadEnhancer(TableHeadComponent);
export const TableHeaderStyled = tableHeaderEnhancer(TableHeaderStyledComponent);
export const EmptyCaptionStyled = emptyCaptionEnhancer(EmptyLabelStyledComponent);
