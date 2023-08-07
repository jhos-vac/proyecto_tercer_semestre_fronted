import React from 'react';
import { Collapse, List } from 'antd';
import ListPostulation from "./ListPostulation";

interface ListProjectProps {
    projectId: number;
    skillList: {
        id: number;
        idProject: number;
        description: string;
        users: {
            id: number;
            fullname: string;
            email: string;
            contact: string;
            states: string;
            idSkill: number;
        }[];
    }[];
}

const { Panel } = Collapse;

const ListUsers: React.FC<ListProjectProps> = ({ projectId, skillList }) => {
    return (
        <Collapse>
            {skillList.map((skill) => (
                <Panel header={skill.description} key={skill.id}>
                    {skill.users.map((user)=>(
                        <ListPostulation id={user.id} fullname={user.fullname} email={user.email} contact={user.contact} states={user.states} idSkill={user.idSkill}/>
                    ))}
                </Panel>
            ))}
        </Collapse>
    );
};

export default ListUsers;
