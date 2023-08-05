import React from "react";
import { Tag } from "antd";

interface TagSkillProps {
    description: string;
}

const TagSkill: React.FC<TagSkillProps> = ({ description }) => {
    return <Tag color="blue">{description}</Tag>;
};

export default TagSkill;
