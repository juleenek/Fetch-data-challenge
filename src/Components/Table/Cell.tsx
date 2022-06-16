import React from 'react';

type Props = {
  cellData: string;
};

export const Cell: React.FC<Props> = ({ cellData }) => {
  return <td>{cellData}</td>;
};
