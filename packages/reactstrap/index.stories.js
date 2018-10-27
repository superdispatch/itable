import React from 'react';

import { storiesOf } from '@storybook/react';
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from './index';

const data = [
  { id: 1, name: 'Test' }
];

storiesOf('Reactstrap ', module)
.add('with some emoji', () => (
  <Table data={data}>
      <TableHead>
          <TableHeader>ID</TableHeader>
          <TableHeader>Name</TableHeader>
      </TableHead>
      <TableBody>
          {(item) => (
              <TableRow hover>
                  <TableData>{item.id}</TableData>
                  <TableData>{item.name}</TableData>
              </TableRow>
          )}
      </TableBody>
  </Table>
));

