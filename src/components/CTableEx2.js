import React from 'react'
import { CTable } from '@coreui/react'

export const CTableEx2 = () => {
  const items = [
    {
      id: 1,
      class: '1,41,08,889',
      heading_1: '1,00,49,992',
    },
    
  ];

  return (
    <CTable className='MTable'>
      <tbody>
        {/* Top row with bold text for each td */}
        <tr>
          <td>CAT A Total</td>
          <td>CAT B Total</td>
        </tr>

        {/* Data rows */}
        {items.map((item) => (
          <tr key={item.id}>
            <td><b>{item.class}</b></td>
            <td><b>{item.heading_1}</b></td>
          </tr>
        ))}
      </tbody>
    </CTable>
  );
};

export default CTableEx2;
