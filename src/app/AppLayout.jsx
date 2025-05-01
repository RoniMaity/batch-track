"use client";

import { Flex, Layout, Menu } from "antd";
import Link from "next/link";
import Image from "next/image";
import { HomeOutlined, UserOutlined, FallOutlined,FrownOutlined } from "@ant-design/icons";

const { Sider, Header, Content, Footer } = Layout;

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
  }
];

export default function AppLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div
          style={{
            color: "white",
            padding: 20,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <Image
            src="/logo.png"
            alt="BatchTrack Logo"
            width={100} // required
            height={100} // required
            priority // optional: for faster loading
          />
        </div>
        <Menu theme="dark" mode="inline" items={menuItems}/>
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "white", minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>BatchTrack ©RoniMaity-2025</Footer>
      </Layout>
    </Layout>
  );
}
