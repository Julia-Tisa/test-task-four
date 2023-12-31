/* eslint-disable no-param-reassign */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Table, Tooltip, message, Button, Spin,
} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      this.setState({
        users: data,
        loading: false,
      });
    } catch (error) {
      message.error({ content: 'Ошибка загрузки данных', duration: 2 });
    }
  }

  deleteUser = (userId, name) => {
    const { users } = this.state;
    this.setState({
      users: users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Удален пользователь ${name}`, duration: 2 });
  };

  render() {
    const { users, loading } = this.state;

    const tableColumns = [
      {
        title: 'Пользователь',
        dataIndex: 'name',
        render: (_, record) => (
          <Link
            to="/app/user"
            state={{ user: record }}
          >
            <div className="d-flex">
              <div className="avatar-status d-flex flex-column">
                <div className="ml-2">
                  <span>{record.name}</span>
                </div>
                <div className="ml-2">
                  <span className="text-muted">{record.email}</span>
                </div>
              </div>
            </div>
          </Link>

        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Номер телефона',
        dataIndex: 'phone',
        sorter: {
          compare: (a, b) => a.phone.length - b.phone.length,
        },
      },
      {
        title: 'Сайт',
        dataIndex: 'website',
        sorter: {
          compare: (a, b) => {
            a = a.website.toLowerCase();
            b = b.website.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: 'Ник',
        dataIndex: 'username',
        sorter: {
          compare: (a, b) => {
            a = a.username.toLowerCase();
            b = b.username.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: '',
        dataIndex: 'actions',
        render: (_, elm) => (
          <div className="text-right d-flex justify-content-end">
            <Tooltip title="Удалить">
              <Button danger icon={<DeleteOutlined />} onClick={() => { this.deleteUser(elm.id, elm.name); }} size="small" />
            </Tooltip>
          </div>
        ),
      },
    ];
    return (
      <>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Список клиентов</div>
          <div style={{ color: 'gray', fontSize: '14px', marginLeft: '10px' }}>Home / Основные / Клиенты /</div>
          <div style={{ color: 'black', fontSize: '14px', marginLeft: '5px' }}>Список клиентов</div>
        </div>
        <Card bodyStyle={{ padding: '0px' }}>
          { loading ? (
            <div className="text-center py-4">
              <Spin size="large" />
            </div>
          ) : (
            <div className="table-responsive">
              <Table columns={tableColumns} dataSource={users} rowKey="id" />
            </div>
          )}
        </Card>
      </>
    );
  }
}

export default UserList;
