import * as material from '@material-ui/core';

import table from '@itable/core/dist/enhancers/table';
import tableBody from '@itable/core/dist/enhancers/tableBody';
import tableHead from '@itable/core/dist/enhancers/tableHead';
import tableData from '@itable/core/dist/enhancers/tableData';
import tableHeader from '@itable/core/dist/enhancers/tableHeader';
import tableRow from '@itable/core/dist/enhancers/tableRow';

export const Table = table(material.Table);
export const TableRow = tableRow(material.TableRow);
export const TableHeader = tableHeader(material.TableCell);
export const TableData = tableData(material.TableCell);
export const TableHead = tableHead(material.TableHead);
export const TableBody = tableBody(material.TableBody);