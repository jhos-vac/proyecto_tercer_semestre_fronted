import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {Button, Cascader, Col, DatePicker, Drawer, Form, Input, InputNumber, Row, Select, Space} from 'antd';
import {createDataFetch, project, Skill} from "../services/Service";

const { SHOW_CHILD } = Cascader;
const { Option } = Select;
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



const Addproject: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleAddProject = async () => {
        try {
            const values = await form.validateFields();
            const skills = values.skill;
            delete values.skill;
            console.log(values)
            const response = await createDataFetch(project, values);
            const projectId = response.id;

            await Promise.all(
                skills.map(async (skillValue:[]) => {
                    const skillString = skillValue.join()
                    const skillData = {
                        idProject: projectId,
                        description: skillString,
                    };
                    console.log(skillData)
                    await createDataFetch(Skill, skillData);

                })
            );
            onClose();
        } catch (error) {
            console.error('Error al agregar el proyecto:', error);
        }
    };

    return (
        <>
            <Button  style={{marginBottom:'15px'}} type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                Add Project
            </Button>

            <Drawer
                title="Create a new project"
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={handleAddProject} type="primary">
                            Add
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" hideRequiredMark form={form}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="title"
                                label="Title"
                                rules={[{ required: true, message: 'Please enter title project' }]}
                            >
                                <Input placeholder="Please enter title project" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="estimatedTime"
                                label="Time Limit"
                                rules={[{ required: true, message: 'Please enter date' }]}
                            >
                                <DatePicker />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="estimate"
                                label="Budget"
                                rules={[{ required: true, message: 'Please enter your budget' }]}
                            >
                                <InputNumber />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="workLevel"
                                label="Work Level"
                                rules={[{ required: true, message: 'Please select a Work level' }]}
                            >
                                <Select placeholder="Please select a Work level">
                                    <Option value="advanced">Advanced</Option>
                                    <Option value="intermediate">Intermediate</Option>
                                    <Option value="beginner">Beginner</Option>
                                </Select>

                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="typeWork"
                                label="Type Work"
                                rules={[{ required: true, message: 'Please select a Type Work' }]}
                            >
                                <Select placeholder="Please select a Type Work">
                                    <Option value="Services">Services</Option>
                                    <Option value="Tutorships">Tutorships</Option>
                                </Select>

                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
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
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please enter description',
                                    },
                                ]}
                            >
                                <Input.TextArea rows={4} placeholder="please enter description" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
};

export default Addproject;