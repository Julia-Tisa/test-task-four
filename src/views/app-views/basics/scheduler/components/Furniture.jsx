/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useDrag } from 'react-dnd';

function Furniture({ type, item, position }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'IMG',
    item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div>
      {type === 'board' ? (
        <div
          style={{
            top: item.posY,
            left: item.posX,
            position,
            opacity: isDragging ? 0.5 : 1,
          }}
        >
          <img
            ref={drag}
            src={item.img}
            alt={item.name}
          />
        </div>
      ) : (
        <img
          ref={drag}
          src={item.img}
          alt={item.name}
        />
      )}
    </div>
  );
}

export default Furniture;
