import {fetchUsers,users} from "../services/User";
import useSWR from 'swr';
import styles from './character.module.css'
import CardUser from "../components/CardUser";
import {useState} from "react";
import {Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space} from "antd";
import {PlusOutlined} from "@ant-design/icons";


interface UsersData {
        id: number;
        fullname: string;
        email:string;
        contact:string;
}

const { Option } = Select;

export const Users: React.FC = () => {
    const { data, error } = useSWR<UsersData[]>(users,fetchUsers, {
        suspense: false,
    });

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    return (
        <>
            <h1>Usuarios</h1>

            <div className={styles.container}>
                {data?.map((users) => (
                    <CardUser  key={users.id} fullname={users.fullname} email={users.email}  contact={users.contact}></CardUser>
                ))}
            </div>
                <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                    New account
                </Button>

                <Drawer
                    title="Create a new account"
                    width={720}
                    onClose={onClose}
                    open={open}
                    bodyStyle={{ paddingBottom: 80 }}
                    extra={
                        <Space>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button onClick={onClose} type="primary">
                                Submit
                            </Button>
                        </Space>
                    }
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={12}>
                            <Col span={12}>
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[{ required: true, message: 'Please enter user name' }]}
                                >
                                    <Input placeholder="Please enter user name" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={12}>
                            <Col span={12}>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[{ required: true, message: 'Please enter email' }]}
                                >
                                    <Input placeholder="Please enter email" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={12}>
                            <Col span={12}>
                                <Form.Item
                                    name="contact"
                                    label="Contact"
                                    rules={[{ required: true, message: 'Please enter contact' }]}
                                >
                                    <Input placeholder="Please enter contact" />
                                </Form.Item>
                            </Col>
                        </Row>

                    </Form>
                </Drawer>

        </>
    );
};

