import React, { useState } from 'react';
import {Avatar, Button, Col, Divider, Drawer, List, Row} from 'antd';
import './StylesComponents/ListProjectStyles.css'
import Apply from "./ButtonAdd";
interface ListProjectProps {
    id: number;
    idUsers: number;
    title: string;
    budget: number;
    description: string;
    startDate: Date | null;
    users: string;
}

const DescriptionItem: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

const ListProject: React.FC<ListProjectProps> = ({ id, idUsers, title, budget, description, startDate, users }) => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <List
                style={{backgroundColor:"aliceblue"}}
                dataSource={[
                    {
                        id: id,
                        name: title,
                        users:users,
                        budget:budget,
                        startDate: startDate,
                    },
                ]}
                bordered
                renderItem={(item) => (
                    <List.Item
                        key={item.id}
                        actions={[
                            <a onClick={showDrawer} key={`a-${item.id}`}>
                                View Project
                            </a>,
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />}
                            title={<a href="https://ant.design/index-cn">{item.name}</a>}
                            description={item.users}
                        />
                    </List.Item>
                )}
            />

            <Drawer width={640} placement="right" closable={false} onClose={onClose} visible={open} style={{backgroundColor:"aliceblue"}}>
                <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                    Project Description
                </p>
                <p className="site-description-item-profile-p"></p>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Title" content={title} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="User" content={users} />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Budget" content={`${budget} $`}></DescriptionItem>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem title="Description" content={description} />
                    </Col>
                </Row>
                <Divider />
                <p className="site-description-item-profile-p">Users</p>
                <Apply></Apply>
            </Drawer>

        </>
    );
};

export default ListProject;

