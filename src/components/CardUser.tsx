import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

type CardType = {
    fullname:string,
    email:string,
    contact:string
}

const UserCard: React.FC <CardType> = ({fullname,email, contact}:CardType) => (
    <Card
        hoverable
        style={{ width: 200, marginBottom: "30px" }}
        cover={<img alt="example" src="https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg" />}
    >
        <Meta title={fullname} description={contact} />
    </Card>
);

export default UserCard;