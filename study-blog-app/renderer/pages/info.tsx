import MainLayout from '../components/MainLayout';
import { Avatar, Button, PageHeader } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useUser } from '../hooks/useUser';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useWork } from '../hooks/useWork';
import { useBuddy } from '../hooks/useBuddy';
import { Viewer } from '@toast-ui/react-editor';
import Link from 'next/link';
function InfoPage() {
    const { useUserLoading, useUserLoggedIn, useUserData, useUserMutate } = useUser();
    const { useWorkLoading, useWorkFetched, useWorkData, useWorkMutate } = useWork();
    const { useBuddyLoading, useBuddyFetched, useBuddyData, useBuddyMutate } = useBuddy();
    const ViewerRef = React.useRef<Viewer>()
    useEffect(() => {
        if (!useUserLoggedIn) Router.replace('/home')
    }, [useUserLoggedIn]);

    console.log(useWorkData)

    if (useUserLoading) return <>Delay</>;

    return (
        <MainLayout useUserMutate={useUserMutate}>
            <div className="container">
                <div className="row" style={{ marginTop: "50px", textAlign: 'center' }}>
                    <div className="ant-col-lg-6 ant-col-md-12">
                        <Avatar size={100} icon={<UserOutlined />} />
                    </div>
                    <div className="ant-col-lg-6 ant-col-md-12">
                        {useUserData.nickname}<br />
                        내 친구 : {useBuddyData && useBuddyData.buddies.length} 명<br />
                        내 작업물 : {useWorkData && useWorkData.works.count} 개
                    </div>
                </div>
                <div style={{textAlign:'center', marginTop:'100px'}}>
                    {useWorkData && useWorkData.works.rows.length>0 ? 
                        <Button type='dashed' size='large'>
                        <Link href={`/work/[id]?id=${useWorkData.works.rows[0].id}`} as={`/work/${useWorkData.works.rows[0].id}`}>
                            최신 작업물 보기
                        </Link>
                    </Button> : <div>최신 작업물이 없습니다</div>}
                </div>
            </div>
        </MainLayout>
    );
};

export default InfoPage;
