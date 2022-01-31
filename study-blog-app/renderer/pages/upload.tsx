import MainLayout from '../components/MainLayout';
import BlogEditor from '../components/BlogEditor';

import { Button, Form, Input } from 'antd';
import axios from 'axios';
const { Item: FormItem } = Form;
function UploadPage() {
  const onSubmit = async (values: any) => {
    try {
      const response = await axios.post('/api/work/upload', values)
      if (response.data.success) {
        console.log("업로드 성공")
      }
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <MainLayout>
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
