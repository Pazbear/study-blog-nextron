import MainLayout from '../components/MainLayout';
import BlogEditor from '../components/BlogEditor';

import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { uploadWork } from '../api/workApi';
import Router from 'next/router';
import { useUser } from '../hooks/useUser';
const { Item: FormItem } = Form;
function UploadPage() {
  const { useUserLoading, useUserLoggedIn, useUserData, useUserMutate } = useUser();


  useEffect(() => {
    if (!useUserLoggedIn) Router.replace('/home')
  }, [useUserLoggedIn]);

  if (useUserLoading) return <>Delay</>;


  const onSubmit = async (values: any) => {
    const response = await uploadWork(values)
    if (response) {
      alert("업로드가 완료되었습니다.")
      Router.replace('/info');
    } else {
      alert("업로드에 실패했습니다.")
      Router.replace('/upload')
    }
  }
  return (
    <MainLayout useUserMutate={useUserMutate}>
      <Form layout='vertical' onFinish={onSubmit}>
        <FormItem
          name="title"
          rules={[{ required: true, message: '제목을 입력해주세요' },
          { min: 1, max: 100, message: '제목은 100자 이하입니다.' }]}
        >
          <Input id='title' placeholder='제목을 입력해주세요' />
        </FormItem>
        <FormItem
          name="content"
          rules={[{ required: true, message: '제목을 입력해주세요' }]}
        >
          <BlogEditor onChange={(value) => console.log(value)} />
        </FormItem>
        <Button size='large' type='primary' htmlType='submit'>
          업로드
        </Button>
      </Form>
    </MainLayout>
  );
};

export default UploadPage;
