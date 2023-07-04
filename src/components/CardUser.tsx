import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

type CardType = {
    name:string,
    image?:string,
    description:string
}

const UserCard: React.FC <CardType> = ({name,image, description}:CardType) => (
    <Card
        hoverable
        style={{ width: 200, marginBottom: "30px" }}
        cover={<img alt="example" src="https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg" />}
    >
        <Meta title={name} description={description} />
    </Card>
);

export default UserCard;