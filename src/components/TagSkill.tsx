import React from "react";
import { Tag } from "antd";

interface TagSkillProps {
    description: string;
    user: {
        id: number;
        fullname: string;
        email: string;
        contact: string;
        states: string;
        idSkill: number;
    }[];
}

const TagSkill: React.FC<TagSkillProps> = ({ description, user }) => {


    return <Tag color="blue">{description}</Tag>;
};

export default TagSkill;
