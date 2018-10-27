import * as material from '@material-ui/core';

import table from '@aeos/core/dist/enhancers/table';
import tableBody from '@aeos/core/dist/enhancers/tableBody';
import tableHead from '@aeos/core/dist/enhancers/tableHead';
import tableData from '@aeos/core/dist/enhancers/tableData';
import tableHeader from '@aeos/core/dist/enhancers/tableHeader';
import tableRow from '@aeos/core/dist/enhancers/tableRow';

export const Table = table(material.Table);
export const TableRow = tableRow(material.TableRow);
export const TableHeader = tableHeader(material.TableCell);
export const TableData = tableData(material.TableCell);
export const TableHead = tableHead(material.TableHead);
export const TableBody = tableBody(material.TableBody);