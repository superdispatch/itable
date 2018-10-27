import React from 'react';
import table from '@aeos/core/dist/enhancers/table';
import tableBody from '@aeos/core/dist/enhancers/tableBody';
import tableHead from '@aeos/core/dist/enhancers/tableHead';
import tableData from '@aeos/core/dist/enhancers/tableData';
import tableHeader from '@aeos/core/dist/enhancers/tableHeader';
import tableRow from '@aeos/core/dist/enhancers/tableRow';

import 'bootstrap/dist/css/bootstrap.min.css';

import * as reactstrapComponents from 'reactstrap';

export const Table = table(reactstrapComponents.Table);
export const TableRow = tableRow('tr');
export const TableData = tableData('td');
export const TableHead = tableHead('thead');
export const TableHeader = tableHeader('td');
export const TableBody = tableBody('tbody');


