import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Layout,
  Menu,
  Result,
} from 'antd';

const { SubMenu } = Menu;

const {
  Header,
  Sider,
  Content,
  Footer
} = Layout;

type Props = {
}

const MainLayout: React.FunctionComponent<Props> = ({
  children,
}) =>
(
  <React.Fragment>
    <Head>
      <title>STU_DISTORY</title>
    </Head>
    <Layout>
      <Header>
        <div style={{color:'white', fontSize:'40px',fontWeight:'bold', lineHeight:'70px'}}>STU_DISTORY</div>
      </Header>
      <Layout>
        <Sider>
          <Menu
            mode='inline'
            defaultSelectedKeys={[]}
            defaultOpenKeys={[]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="info">
              <Link href="/info">
                내 정보
              </Link>
            </Menu.Item>
            <Menu.Item key="upload">
              <Link href="/upload">
                업로드하기
              </Link>
            </Menu.Item>
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
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </React.Fragment>
);

export default MainLayout;
