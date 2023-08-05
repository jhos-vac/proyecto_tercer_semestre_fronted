import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {Button, Cascader, Col, Drawer, Form, Input, Row, Select, Space} from 'antd';
const { Option } = Select;

const { SHOW_CHILD } = Cascader;

interface Option {
    value: string;
    label: string;
    children?: Option[];
}
const options: Option[] = [
    {
        label: 'Design',
        value: 'Design',

    },
    {
        label: 'Web development',
        value: 'Web development',
    },
    {
        label: 'Marketing',
        value: 'Marketing',
    },
    {
        label: 'Tourism',
        value: 'Tourism',
    },
    {
        label: 'Nursing',
        value: 'Nursing',
    },
];


const Adduser: React.FC = () => {
    const [open, setOpen] = useState(false);

    const onChangeSkill = (value: string[]) => {

    };

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                Apply
            </Button>

            <Drawer
                title="Apply"
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onClose} type="primary">
                            Apply
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="name"
                                label="Name"
                                rules={[{ required: true, message: 'Please enter user name' }]}
                            >
                                <Input placeholder="Please enter user name" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, message: 'Please enter url' }]}
                            >
                                <Input
                                    style={{ width: '100%'}}
                                    placeholder="enter email"
                                    addonAfter="@sudamericano.edu.ec"

                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="carrera"
                                label="Carrera"
                                rules={[{ required: true, message: 'Please select an contact' }]}
                            >
                                <Select placeholder="Please select an owner">
                                    <Option value="Diseño grafico">Diseño grafico</Option>
                                    <Option value="Desarrollo de software">Desarrollo de software</Option>
                                    <Option value="Gastronimia">Gastronimia</Option>
                                    <Option value="Marketing">Marketing</Option>
                                    <Option value="Enfermeria">Enfermeria</Option>
                                    <Option value="Turismo">Turismo</Option>
                                </Select>

                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="skill"
                                label="Skill"
                                rules={[{ required: true, message: 'Please select an skill' }]}
                            >
                            <Cascader placeholder="Select Skills"
                                style={{ width: '100%' }}
                                options={options}
                                multiple
                                maxTagCount="responsive"
                                showCheckedStrategy={SHOW_CHILD}
                                defaultValue={["Design"]}
                            />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
};

export default Adduser;