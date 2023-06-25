import {
  Typography, Row, Col, Card,
} from 'antd';
import React, {
  useEffect, useRef, useState,
} from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { addComponent, editPositionComponent } from '../../../../../store/slices/schedulerSlice';
import { CONTAINER_BOARD_STYLE } from '../../../../../configs/SchedulerConfig';
import Furniture from './Furniture';

const { Title } = Typography;

function Board() {
  const dispatch = useDispatch();
  const component = useSelector((store) => store.scheduler);
  const ref = useRef('');
  const [posContainer, setPosContainer] = useState();
  const [position, setPosition] = useState([
    '',
    {
      x: '',
      y: '',
    },
  ]);

  const [, drop] = useDrop(() => ({
    accept: 'IMG',
    drop: (item, monitor) => {
      setPosition([item, monitor.getClientOffset()]);
    },
  }));

  const handlePositionImage = (item) => {
    const { x, y } = position[1];
    console.log(x, Math.round(posContainer.x));
    const newX = x - Math.round(posContainer.x) - 40 <= 0
      ? -5
      : x - Math.round(posContainer.x) - 40;
    const newY = y - Math.round(posContainer.y) - 40 <= 0
      ? 0
      : y - Math.round(posContainer.y) - 40;
    if (item.keyId) {
      dispatch(editPositionComponent({ item, x: newX, y: newY }));
    } else {
      dispatch(addComponent({ item, x: newX, y: newY }));
    }
  };

  useEffect(() => {
    if (position[0]) {
      handlePositionImage(position[0]);
    }
  }, [position]);

  useEffect(() => {
    setPosContainer(ref.current.getBoundingClientRect());
  }, []);

  drop(ref);

  return (
    <Card>
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Row align="middle">
            <Col>
              <Title level={2} style={{ marginBottom: '10px', textAlign: 'center' }}>
                Соберите ваш мир
              </Title>
            </Col>
          </Row>
        </div>
        <div
          style={CONTAINER_BOARD_STYLE}
          ref={ref}
        >
          {component
            && component.map((item) => (
              <Furniture
                key={item.keyId}
                item={item}
                position="absolute"
                type="board"
              />
            ))}
        </div>
      </div>
    </Card>
  );
}

export default Board;
