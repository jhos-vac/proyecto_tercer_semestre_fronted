import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Cascader, Col, Drawer, Form, Input, List, Row, Space } from 'antd';
import {createDataFetch, users} from "../services/Service";

const { SHOW_CHILD } = Cascader;


interface valueSkill {
    id: number;
    title: string;
    estimate: number;
    description: string;
    estimatedTime: string;
    workLevel: string;
    typeWork: string;
    skills: {
        id: number;
        idProject: number;
        description: string;
    }[];
}

interface Option {
    value: number;
    label: string;
    children?: Option[];
}

const Adduser: React.FC<valueSkill> = ({ id, title, estimate, description, estimatedTime, workLevel, typeWork, skills }) => {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleAddUser = async () => {
        try {
            const values = await form.validateFields();
            console.log(values)
            const skillIds = values.idSkill.map(Number);
            skillIds.forEach(async (skillId:number) => {
                try {
                    const response = await createDataFetch(users, {
                        fullname: values.fullname,
                        email: values.email,
                        contact: values.contact,
                        states:"wait",
                        idSkill: skillId,
                    });
                    console.log('POST exitoso:', response.data);

                } catch (error) {
                    console.error('Error en el POST:', error);
                }
            });

            onClose();
        } catch (error) {
            console.error('Error al agregar el proyecto:', error);
        }
    };

    const skillsOptions: Option[] = skills.map((skill) => ({
        value: skill.id,
        label: skill.description,
    }));

    return (
        <>
            <Button style={{ marginBottom: "10px" }} type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                Apply
            </Button>

            <List
                dataSource={[
                    {
                        id: id,
                        title: title,
                        description: description,
                        estimate: estimate,
                        startDate: estimatedTime,
                        workLevel: workLevel,
                        typeWork: typeWork,
                        skill: skills,
                    },
                ]}

            />

            <Drawer
                title="Apply"
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={handleAddUser} type="primary">
                            Apply
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" hideRequiredMark form={form}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="fullname"
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
                                <Input style={{ width: '100%' }}
                                    placeholder="enter email"
                                    addonAfter="@sudamericano.edu.ec"

                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="contact"
                                label="Contact"
                                rules={[{ required: true, message: 'Please select an contact' }]}
                            >
                                <Input placeholder="Please enter your contact" />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                name="idSkill"
                                label="Skill"
                                rules={[{ required: true, message: 'Please select an skill' }]}
                            >
                                <Cascader
                                    placeholder="Select Skills"
                                    style={{ width: '100%' }}
                                    options={skillsOptions}
                                    multiple
                                    maxTagCount="responsive"
                                    showCheckedStrategy={SHOW_CHILD}
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
