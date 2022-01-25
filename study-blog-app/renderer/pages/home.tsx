import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router'
import {
  Layout,
  Form,
  Select,
  Button,
  Input,
  Row,
  Col,
  Menu,
} from 'antd';
import axios from 'axios'
import { UserOutlined } from '@ant-design/icons';
import '../custom-antd.css';

const { SubMenu } = Menu;
const {
  Header,
  Content,
  Sider
} = Layout;
const { Item: FormItem } = Form;
const { Option } = Select;

function Home() {

  const onSubmit = async (values: any) => {
    try{
    const response = await axios.post('/api/user/login', values)
    if(response.data.success){
      Router.push('/main')
    }
    }catch(error){
      console.log(error.response)
    }
  }
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-javascript-ant-design)</title>
      </Head>
      <Layout style={{ height: '100vh' }}>
        <Layout style={{ padding: 24 }}>
          <Content>
            <Row justify="center" align="middle" style={{ height: '100%' }}>
              <Col>
                <Form layout='vertical' onFinish={onSubmit}>
                  <FormItem
                    label='Input ID'
                    name="userId"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 8 }}
                    rules={[{required:true, message:'ID를 입력해주세요'},
                    {min:8, max:20, message:'ID는 8자 이상 20자 이하입니다.'}]}
                  >
                    <Input id="userId" size='large' style={{ width: 200 }}
                      placeholder="ID" prefix={<UserOutlined />}
                      />
                  </FormItem>

                  <FormItem
                    label='Input Password'
                    name="password"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 8 }}
                    rules={[{required:true, message:'ID를 입력해주세요'},
                    {min:8, max:20, message:'Password는 8자 이상 20자 이하입니다.'}]}
                  >
                    <Input.Password id="password" size='large' style={{ width: 200 }}
                      placeholder="Password"/>
                  </FormItem>

                  <FormItem
                    style={{ marginTop: 48 }}
                    wrapperCol={{ span: 8, offset: 8 }}
                  >
                    <Button size='large' type='primary' htmlType='submit'>
                      로그인
                    </Button>
                  </FormItem>
                </Form>

              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
