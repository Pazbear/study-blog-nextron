
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import Router from 'next/router';
import { useUser } from '../../hooks/useUser';
import { Typography } from 'antd';
import MainLayout from '../../components/MainLayout';

const { Title } = Typography
const { Item: FormItem } = Form;
function SearchBuddyPage() {
    const { useUserLoading, useUserLoggedIn, useUserData, useUserMutate } = useUser();


    useEffect(() => {
        if (!useUserLoggedIn) Router.replace('/home')
    }, [useUserLoggedIn]);

    if (useUserLoading) return <>Delay</>;


    const onSubmit = async (values: any) => {

    }
    return (
        <MainLayout useUserMutate={useUserMutate}>
            <div className="container">
                <div className="row" style={{ marginTop: "50px", textAlign: 'center' }}>
                    <Title level={2}>친구 검색</Title>
                    <Form layout='vertical' onFinish={onSubmit}>
                        <Input
                            placeholder='Input User ID'
                        />
                    </Form>
                </div>
            </div>.
        </MainLayout>
    );
};

export default SearchBuddyPage;
