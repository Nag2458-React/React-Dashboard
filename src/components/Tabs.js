import React from "react";
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from "@coreui/react";
import Cards from "./Cards";

export const Tabs = () => {
  const getTabs = [
    {
      navName: "All Departments",
      itemKey: "name0",
      bgColor: "#000",
      cardCount: 4,
    }, // Show all cards
    { navName: "ITE&C", itemKey: "name1", bgColor: "#ff5733", cardCount: 3 }, // Show 3 cards
    {
      navName: "Industries",
      itemKey: "name2",
      bgColor: "#00aee7",
      cardCount: 2,
    }, // Show 2 cards
    {
      navName: "Legislative Affairs",
      itemKey: "name3",
      bgColor: "#4caf50",
      cardCount: 1,
    }, // Show 1 card
  ];

  return (
    <CTabs activeItemKey="name0">
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
            <p className="tabname"> {tab.navName} tab content</p>
            <Cards cardCount={tab.cardCount} /> {/* Pass dynamic card count */}
          </CTabPanel>
        ))}
      </CTabContent>
    </CTabs>
  );
};

export default Tabs;
