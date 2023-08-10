import React from 'react';
import {Avatar, List, Skeleton} from 'antd';

interface ListProjectProps {
        id: number;
        fullname: string;
        email: string;
        contact: string;
        states: string;
        idSkill: number;
}

const ListPostulation: React.FC<ListProjectProps> = ({ id, fullname, email, states, contact, idSkill }) => {
    console.log(fullname)
    console.log(contact)
    return (
        <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={[
                {
                    id: id,
                    fullname:fullname,
                    email:email,
                    states:states,
                    contact: contact,
                    idSkill: idSkill,
                },
            ]}
            renderItem={(item) => (
                <List.Item
                    key={item.id}
                >
                        <List.Item.Meta
                            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />}
                            title={<a href="">{item.fullname}</a>}
                            description={`Email: ${item.email}  Contact: ${item.contact}`}
                        />
                </List.Item>
            )}
        />
    );
};

export default ListPostulation;
