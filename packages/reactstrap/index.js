import React from 'react';
import table from '@itable/core/dist/enhancers/table';
import tableBody from '@itable/core/dist/enhancers/tableBody';
import tableHead from '@itable/core/dist/enhancers/tableHead';
import tableData from '@itable/core/dist/enhancers/tableData';
import tableHeader from '@itable/core/dist/enhancers/tableHeader';
import tableRow from '@itable/core/dist/enhancers/tableRow';

import 'bootstrap/dist/css/bootstrap.min.css';

import * as reactstrapComponents from 'reactstrap';

export const Table = table(reactstrapComponents.Table);
export const TableRow = tableRow('tr');
export const TableData = tableData('td');
export const TableHead = tableHead('thead');
export const TableHeader = tableHeader('td');
export const TableBody = tableBody('tbody');


