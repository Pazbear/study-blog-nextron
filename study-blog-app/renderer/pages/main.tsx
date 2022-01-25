import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Layout,
  Menu,
  Result,
} from 'antd';
import BlogEditor from '../components/BlogEditor';

const { SubMenu } = Menu;

const {
  Header,
  Sider,
  Content,
  Footer
} = Layout;

function Next() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (with-typescript-ant-design)</title>
      </Head>
      <Layout>
        <Header>
          <Link href="/home">
            <a>Go to home page</a>
          </Link>
        </Header>
        <Layout>
          <Sider>
            <Menu
              mode='inline'
              defaultSelectedKeys={[]}
              defaultOpenKeys={[]}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="my_friends" title="내 친구">
                <Menu.Item key="1">1</Menu.Item>
                <Menu.Item key="2">2</Menu.Item>
                <Menu.Item key="3">3</Menu.Item>
                <Menu.Item key="4">4</Menu.Item>
              </SubMenu>
              <SubMenu key="my_works" title="내 작업실">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <Menu.Item key="logout">
                로그아웃
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <BlogEditor onChange={(value) => console.log(value)}/>
          </Layout>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default Next;
