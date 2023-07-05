import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    GlobalOutlined,
} from '@ant-design/icons';
import {Button, Dropdown, Layout, Menu, MenuProps, theme} from 'antd';
import styles from './root-layout.module.css'
import {Space} from "antd/lib";
import {NavLink, Outlet} from "react-router-dom";

const { Header, Sider, Content} = Layout;


 const RootLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

     const items: MenuProps['items'] = [
         {
             key: '1',
             label: (
                 <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                     1st menu item
                 </a>
             ),
         },
         {
             key: '2',
             label: (
                 <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                     2nd menu item
                 </a>
             ),
         },
         {
             key: '3',
             label: (
                 <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                     3rd menu item
                 </a>
             ),
         },
     ];

    return (
        <Layout className={styles.container} style={{backgroundColor:"grey"}}>
            <Sider style={{background:"#000000"}} trigger={null} collapsible collapsed={collapsed}>
                <Menu style={{background:"#000000"}}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: (<NavLink to="/Users">Usuairos</NavLink>),
                        },
                        {
                            key: '3',
                            icon: <GlobalOutlined />,
                            label: (<NavLink to="/Projects">Projectos</NavLink>),
                        },

                    ]}
                />

            </Sider>
            <Layout className={styles.siteLayout} style={{background:"#ffffff"}}>
                <Header style={{ padding: 0, background: "#070707" }}>

                    <Space>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: styles.trigger,
                            onClick: () => setCollapsed(!collapsed),
                        })}
                        <h1 className={styles.title} ></h1>
                    </Space>
                </Header>
                    <div style={{  whiteSpace: "nowrap"}}>
                        <Content
                            style={{
                                display: "inline-block",
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                                width: "75%",
                                color: "white",
                            }}
                        >
                            <Outlet />

                        </Content>

                        <Content
                            style={{
                                display: "inline-block",
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 100,
                                background: "rgb(12 12 12 / 50%)",
                                width: "17%",
                                height:"80%",
                                color: "white",
                                borderRadius:"10px",
                                position:"absolute",
                            }}
                        >
                            <p>Opciones</p>
                            <div>
                                <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                                    <Button>bottomLeft</Button>
                                </Dropdown>
                            </div>

                            <div>
                                <Dropdown menu={{ items }} placement="bottom" arrow>
                                    <Button>bottom</Button>
                                </Dropdown>
                            </div>

                        </Content>

                    </div>

            </Layout>
        </Layout>
    );
};

export default RootLayout
