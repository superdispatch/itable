import React from 'react';

export type TableContextType = {
  data: any;
  registerHeaderProps: (props: any) => void;
  headerProps: any;
  emptyCaptionRenderer: () => React.ReactNode;
  setEmptyCaptionRenderer: (method: () => React.ReactNode) => void
}
export const TableContext = React.createContext<TableContextType>({} as TableContextType);

export type TableHeadContextType = {
  sortBy?: null | string;
  sortOrder?: null | 'ASC' | 'DESC';
  handleSort: (sortKey: string) => void
}
export const TableHeadContext = React.createContext<TableHeadContextType>({} as TableHeadContextType);

export type TableRowContextType = {
  registerTableDataComponentIndex: (method: (index: number) => void) => void;
};
export const TableRowContext = React.createContext<TableRowContextType>({} as TableRowContextType);
