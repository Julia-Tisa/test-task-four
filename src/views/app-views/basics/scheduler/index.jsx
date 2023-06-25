import React from 'react';
import {
  Card, Layout, Row, Col,
} from 'antd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Buttons from './components/Buttons';
import Sidebar from './components/Sidebar';
import Board from './components/Board';

export function Scheduler() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Планировщик</div>
        <div style={{ color: 'gray', fontSize: '14px', marginLeft: '10px' }}>Home / Основные /</div>
        <div style={{ color: 'black', fontSize: '14px', marginLeft: '5px' }}>Планировщик</div>
      </div>
      <DndProvider backend={HTML5Backend}>
        <Card bodyStyle={{ height: '500px', padding: '0px' }}>
          <Layout>
            <Layout.Content style={{ padding: '20px' }}>
              <Row>
                <Col span={16}>
                  <Board />
                </Col>
                <Col span={8}>
                  <Row>
                    <Col span={24}>
                      <Buttons />
                      <Sidebar />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Layout.Content>
          </Layout>
        </Card>
      </DndProvider>
    </>
  );
}

export default Scheduler;
