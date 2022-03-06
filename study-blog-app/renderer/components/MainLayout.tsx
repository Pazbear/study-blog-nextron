import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  Layout,
  Menu,
  Result,
} from 'antd';
import {logout} from '../api/userApi'
import {useWork} from '../hooks/useWork'
import {useBuddy} from '../hooks/useBuddy'
import Router from 'next/router';

const { SubMenu } = Menu;

const {
  Header,
  Sider,
  Content,
  Footer
} = Layout;

type Props = {
  useUserMutate?:any
}

const MainLayout: React.FunctionComponent<Props> = ({
  useUserMutate,
  children,
}) => {

  const {useWorkLoading, useWorkFetched, useWorkData, useWorkMutate} = useWork();
  const {useBuddyLoading, useBuddyFetched, useBuddyData, useBuddyMutate} = useBuddy();

  console.log(useBuddyData)
  return (
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
            style={{ height: '100%', borderRight: 0, fontSize:'20px' }}
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
              {
                useBuddyData && useBuddyData.buddies.map((buddy)=>(
                  <Menu.Item key={`buddy${buddy.buddy.id}`}>
                    {buddy.buddy.nickname}
                  </Menu.Item>
                ))
              }
              <Menu.Item key="search_buddy" style={{background:'rgba(180,180,255, 0.5)'}}>
                <Link href="/buddy/search">
                  검색
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="my_works" title="내 작업실">
              {
                useWorkData && useWorkData.works.rows.map((work)=>(
                  <Menu.Item key={`work${work.id}`}><Link href={`/work/[id]?id=${work.id}`} as={`/work/${work.id}`}>{work.title}</Link></Menu.Item>
                ))
              }
            </SubMenu>
            <Menu.Item key="logout" onClick={async () =>{
              await logout();
              useUserMutate();
            }}>
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
  </React.Fragment>)
}

export default MainLayout;
