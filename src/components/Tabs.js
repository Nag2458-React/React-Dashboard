import React from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'
import Cards from './Cards';
export const Tabs = () => {
  const getTabs = [
    { navName: 'All Departments', itemKey: 'home', bgColor: '#000' },  
    { navName: 'ITE&C', itemKey: 'profile', bgColor: '#ff5733' },      
    { navName: 'Industries', itemKey: 'about', bgColor: '#00aee7' },  
    { navName: 'Legislative Affairs', itemKey: 'contact', bgColor: '#4caf50' }  
  ];

  return (
    <CTabs activeItemKey="home">
      <CTabList variant="tabs">
        {getTabs.map((tab, index) => (
          <CTab 
            key={index} 
            itemKey={tab.itemKey}
            style={{ backgroundColor: tab.bgColor }} 
          >
            {tab.navName}
          </CTab>
        ))}
      </CTabList>

      <CTabContent>
        {getTabs.map((tab, index) => (
          <CTabPanel className="p-3" itemKey={tab.itemKey} key={index}>
            {tab.navName} tab content
            <Cards />
          </CTabPanel>
        ))}
      </CTabContent>
    </CTabs>
  );
};

export default Tabs;
