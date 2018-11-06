# iTable

React table that exposing fundamental APIs of HTML table

# Demo

Simple table example:

[![Edit r527vnyrxo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/r527vnyrxo)

## Usage

Import any `@itable/*` package with corresponding UIKit library and use same APIs.

```jsx
import {
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
  Table
} from "@itable/material-ui";

<Table data={data}>
  <TableHead>
    <TableHeader>ID</TableHeader>
    <TableHeader>Name</TableHeader>
  </TableHead>
  <TableBody>
    {item => (
      <TableRow>
        <TableData>{item.id}</TableData>
        <TableData>{item.name}</TableData>
      </TableRow>
    )}
  </TableBody>
</Table>
```
    
