"use client";

import { Flex, Layout, Menu } from "antd";
import Link from "next/link";
import Image from "next/image";
import { HomeOutlined, UserOutlined, FallOutlined, FrownOutlined,StopOutlined } from "@ant-design/icons";

const { Sider, Content, Footer } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: <Link href="/">Overall</Link>,
  },
  {
    key: "2",
    icon: <UserOutlined />,
    label: <Link href="/students">Students</Link>,
  },
  {
    key: "3",
    icon: <FallOutlined />,
    label: <Link href="/lowAttendence">Low Attendence</Link>,
  },
  {
    key: "4",
    icon: <FrownOutlined />,
    label: <Link href="/lowScores">Low Scores</Link>,
  },
  {
    key:"5",
    icon:<StopOutlined />,
    label:<Link href="/UFMstudents">UFM Students</Link>
  }
];

export default function AppLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0" style={{
        backgroundColor: "white"
      }}>

        <div
          style={{
            color: "white",
            padding: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <Image
          style={{textAlign:"center"}}
            src="/logo.png"
            alt="BatchTrack Logo"
            width={150} // required
            height={150} // required
            priority // optional: for faster loading
          />
        </div>
        <Menu theme="light" mode="inline" items={menuItems} style={{
          '--antd-wave-shadow-color': 'transparent',
          '--antd-primary-color': 'blue', // This might work depending on setup
        }} />
      </Sider>
      <Layout>
        <Content>
          <div style={{ padding: 24, background: "white", minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>BatchTrack ©RoniMaity-2025</Footer>
      </Layout>
    </Layout>
  );
}
