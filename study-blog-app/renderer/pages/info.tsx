import MainLayout from '../components/MainLayout';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
function InfoPage() {
    return (
        <MainLayout>
            <div className="container">
                <div className="row" style={{ marginTop: "50px", textAlign: 'center' }}>
                    <div className="ant-col-lg-6 ant-col-md-12">
                        <Avatar size={100} icon={<UserOutlined />} />
                    </div>
                    <div className="ant-col-lg-6 ant-col-md-12">
                        My Friends : { }<br />
                        My Works : { }
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default InfoPage;
