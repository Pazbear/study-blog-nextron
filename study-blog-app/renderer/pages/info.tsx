import MainLayout from '../components/MainLayout';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useUser } from '../hooks/useUser';
import Router from 'next/router';
import { useEffect } from 'react';
function InfoPage() {
    const { useUserLoading, useUserLoggedIn, useUserData, useUserMutate } = useUser();
    useEffect(() => {
      if(!useUserLoggedIn) Router.replace('/home')
    }, [useUserLoggedIn]);
    
    if(useUserLoading) return <>Delay</>;

    
    return (
        <MainLayout useUserMutate={useUserMutate}>
            <div className="container">
                <div className="row" style={{ marginTop: "50px", textAlign: 'center' }}>
                    <div className="ant-col-lg-6 ant-col-md-12">
                        <Avatar size={100} icon={<UserOutlined />} />
                    </div>
                    <div className="ant-col-lg-6 ant-col-md-12">
                        {useUserData.nickname}<br/>
                        My Friends : { }명<br />
                        My Works : { }
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default InfoPage;
