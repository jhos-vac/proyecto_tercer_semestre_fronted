import React from 'react';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

type CardType = {
    title:string,
    description: string,
}

const AntCard:React.FC<CardType> = ({title,description}:CardType) => (
    <Card
        style={{ width: 215, marginTop:"10px", border:"solid 1px gray" }}
        cover={
            <img
                alt="example"
                src={"https://wwwhatsnew.com/wp-content/uploads/2022/10/Estos-son-los-10-mejores-sistemas-para-pasar-de-texto-a-imagen.jpg"}
            />
        }

    >
        <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title={title}
            description={description}
        />

    </Card>
);

export default AntCard;
