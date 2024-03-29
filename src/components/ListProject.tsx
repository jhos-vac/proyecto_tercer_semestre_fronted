import React, { useState } from 'react';
import {Avatar, Col, Divider, Drawer, List, Row} from 'antd';
import './StylesComponents/ListProjectStyles.css'
import Adduser from "./ButtonAdd";
import TagSkill from "./TagSkill";
import ListUsers from "./ListUser";


interface ListProjectProps {
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
        users:{
            id: number,
            fullname:string ,
            email: string,
            contact:string,
            states: string,
            idSkill: number
        }[];
    }[];
}


const DescriptionItem: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);


const ListProject: React.FC<ListProjectProps> = ({ id, title,estimate, description, estimatedTime, workLevel, typeWork, skills }) => {
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
                style={{backgroundColor:"aliceblue", marginBottom:'5px'}}
                dataSource={[
                    {
                        id: id,
                        title: title,
                        description:description,
                        estimate:estimate,
                        startDate: estimatedTime,
                        workLevel:workLevel,
                        typeWork:typeWork,
                        skill: skills,
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
                            title={<a href="">{item.title}</a>}
                            description={item.description.slice(0,60)}
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
                    <Col span={24}>
                        <DescriptionItem title="Title" content={title} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem title="Budget" content={`${estimate} $`}></DescriptionItem>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Time Limit" content={estimatedTime.slice(0,10)} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Work Level" content={workLevel} />
                    </Col>

                </Row>

                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Type Work" content={typeWork} />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Skill"
                            content={
                                <div>
                                    {skills?.map((skill) => (
                                        <TagSkill key={skill.id} description={skill.description} user={skill.users} />
                                    ))}
                                </div>
                            }
                        />
                    </Col>

                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem title="Description" content={description} />
                    </Col>
                </Row>

                <Divider />
                <p className="site-description-item-profile-p">Posit</p>

                <Adduser
                    id={id}
                    title={title}
                    estimate={estimate}
                    description={description}
                    estimatedTime={estimatedTime}
                    workLevel={workLevel}
                    typeWork={typeWork}
                    skills={skills}/>

                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Applicants"
                            content={
                                <ListUsers key={id} projectId={id}  skillList={skills}/>}
                        />
                    </Col>
                </Row>

            </Drawer>

        </>
    );

};

export default ListProject;

