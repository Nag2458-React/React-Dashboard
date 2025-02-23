import React from 'react'
import { CTable } from '@coreui/react'

export const CTableEx = () => {
  const items = [
    {
      id: 1,
      class: 'No.of Departments',
      heading_1: '38',
       // Add N/A when data is missing
    },
    {
      id: 2,
      class: 'No.of Services',
      heading_1: '43',
      
    },
    {
      id: 3,
      class: 'No.of Centers',
      heading_1: '5,221', // Add N/A when data is missing
     
    },
  ];

  return (
    <CTable className='MTable'>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            {/* Display 2 td's per row */}
            <td>{item.class}</td>
            <td>{item.heading_1}</td>
            
          
          </tr>
        ))}
      </tbody>
    </CTable>
  );
};

export default CTableEx;
