import React from 'react';
import { Card } from 'antd';
import arrayOfImages,
{ UL_SIDEBAR_STYLE, LI_SIDEBAR_STYLE, CONTAINER_SIDEBAR_STYLE }
  from '../../../../../configs/SchedulerConfig';
import Furniture from './Furniture';

function Sidebar() {
  return (
    <Card>
      <div style={CONTAINER_SIDEBAR_STYLE}>
        <h2>
          Животные
        </h2>
        <ul
          style={UL_SIDEBAR_STYLE}
        >
          {arrayOfImages.map((item) => (
            <li
              key={item.id}
              style={LI_SIDEBAR_STYLE}
            >
              <Furniture item={item} type="sidebar" />
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default Sidebar;
