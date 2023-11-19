'use client'

import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Input, Layout, Menu, Row, theme, Form, Select, Radio } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import Baobao from '../Main/Baobao'
import Mom from '../Main/Mom'

const { Header, Content, Footer, Sider } = Layout
const { Option } = Select

const arr = ['宝宝资料', '母亲资料', '父亲资料', '主要看护者资料', '特殊资料', '研究资料(早产儿按纠正年龄算)']

const items: MenuProps['items'] = arr.map((_, index) => ({
  key: String(index + 1),
  label: arr[index],
  title: arr[index],
}))

const Main = () => {
  const [kind, setKind] = useState<string>('1')
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
      >
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          items={items}
          onClick={(e) => {
            setKind(e.key)
          }}
        />
      </Sider>
      <Content style={{ height: '100vh' }}>{kind === '1' ? <Baobao /> : kind === '2' ? <Mom /> : '3'}</Content>
    </Layout>
  )
}

export default Main
