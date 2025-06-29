---
title: Web3 ERC20 Demo
description: Web3 ERC20 Demo 是一个用于学习和实践ERC20代币开发的教学项目。该项目采用现代Web3技术栈，提供了从智能合约开发到前端交互的完整学习体验，帮助开发者理解区块链代币的基本原理和实现方式。
heroImage: "./public/assets/erc20mint.gif"
heroAlt: Web3 ERC20 Demo website
publishDate: 2024-12-29
tags:
  [
    "solidity",
    "next.js",
    "react",
    "typescript",
    "foundry",
    "ethers.js",
    "tailwind css",
    "web3",
    "erc20",
    "smart contract",
  ]
---

## 项目概述

Web3 ERC20 Demo 是一个专门为学习区块链开发而设计的教学项目。这是一个完整的 ERC20 代币系统，包含智能合约和前端交互界面，旨在帮助初学者理解去中心化应用（DApp）的基本开发流程。

**重要说明：这是一个用于学习目的的小型 demo 项目，用于 ERC20 代币开发的实践和教学。**

## 技术栈

项目采用现代化的 Web3 开发技术栈：

### 智能合约层

- **开发框架**: Foundry
- **合约语言**: Solidity ^0.8.20
- **合约库**: OpenZeppelin Contracts
- **测试框架**: Forge (Foundry 内置)

### 前端层

- **前端框架**: Next.js 15.1.4 with React 19
- **类型支持**: TypeScript
- **样式方案**: Tailwind CSS
- **Web3 交互**: ethers.js v5.7.0, wagmi v1.4.7
- **钱包连接**: @web3modal

## 核心功能模块

### 1. 智能合约核心

#### SKCoin 合约

项目的核心是一个名为 SKCoin 的 ERC20 代币合约，具有以下特点：

- **代币标准**: 完全符合 ERC20 标准
- **代币信息**: 名称为"SKCoin"，符号为"SKC"
- **访问控制**: 继承 OpenZeppelin 的 Ownable 合约，实现所有权管理
- **核心功能**:
  - `mint()`: 只有合约拥有者可以铸造新代币
  - `burn()`: 只有合约拥有者可以销毁代币
  - 事件记录: 记录每次铸造和销毁操作

#### 安全特性

- 使用 OpenZeppelin 经过审计的合约库
- 实现了严格的权限控制机制
- 包含完整的错误处理和事件日志

### 2. 前端交互界面

#### 钱包连接功能

- 支持 MetaMask 等主流以太坊钱包
- 自动检测钱包连接状态
- 提供连接/断开连接的用户界面

#### 代币铸造界面

- 直观的代币铸造表单
- 实时余额显示（每秒更新）
- 交易状态反馈
- 响应式设计，适配不同设备

#### 用户体验特色

- 中文界面，降低学习门槛
- 动画效果提升交互体验
- 实时数据更新
- 错误处理和用户提示

### 3. 测试体系

#### 智能合约测试

项目包含完整的 Foundry 测试套件：

- **正向测试**: 验证拥有者可以正常铸造和销毁代币
- **权限测试**: 确保非拥有者无法执行敏感操作
- **边界测试**: 测试各种边界条件和错误情况

测试覆盖率达到 100%，确保合约的安全性和可靠性。

## 架构设计亮点

### 1. 模块化设计

项目采用清晰的模块化架构：

```
web3-erc20-demo/
├── contracts/          # 智能合约模块
│   ├── src/            # 合约源码
│   ├── test/           # 测试文件
│   └── lib/            # 依赖库
└── frontend/           # 前端模块
    ├── app/            # Next.js应用
    ├── components/     # 可复用组件
    └── public/         # 静态资源
```

### 2. 分层架构

- **合约层**: 使用 Solidity 实现业务逻辑
- **交互层**: ethers.js 处理区块链交互
- **展示层**: React 组件负责用户界面
- **样式层**: Tailwind CSS 实现响应式设计

### 3. 状态管理

- React useState 管理本地状态
- ethers.js 事件监听实现实时数据同步
- 定时器机制确保余额信息及时更新

## 项目配置

### Foundry 配置

```toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]

remappings = [
  "@openzeppelin/contracts=lib/openzeppelin-contracts/contracts/",
]
```

### 合约部署信息

- 测试网络部署地址: `0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9`
- 支持的网络: 以太坊测试网络

## 学习价值

### 1. 智能合约开发

- 理解 ERC20 标准的实现原理
- 掌握 OpenZeppelin 库的使用方法
- 学习 Solidity 语言的基本语法
- 了解智能合约的安全最佳实践

### 2. Web3 前端开发

- 学习如何连接 Web3 钱包
- 掌握 ethers.js 库的使用方法
- 理解前端与区块链的交互机制
- 体验去中心化应用的开发流程

### 3. 测试驱动开发

- 学习智能合约测试的编写方法
- 了解 Foundry 测试框架的使用
- 掌握测试用例设计的基本原则

## 项目特色

### 1. 教学导向

- 详细的中文注释，适合中文开发者学习
- 从基础概念到实际应用的完整覆盖
- 每个关键概念都有详细解释

### 2. 技术现代化

- 使用最新的 Web3 开发工具和框架
- 遵循最佳实践和安全标准
- 代码结构清晰，易于理解和扩展

### 3. 实用性

- 可以直接运行和测试的完整项目
- 包含部署和使用说明
- 适合作为其他项目的参考模板

## 使用说明

### 智能合约部署

```bash
# 安装依赖
forge install

# 编译合约
forge build

# 运行测试
forge test

# 部署合约
forge script script/Deploy.s.sol --rpc-url <your_rpc_url>
```

### 前端运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 总结

Web3 ERC20 Demo 虽然是一个简单的学习项目，但它完整地展示了现代 Web3 应用开发的核心要素。通过这个项目，开发者可以：

- 理解 ERC20 代币的基本原理和实现方式
- 掌握智能合约开发的基本流程
- 学会前端与区块链的交互方法
- 了解 Web3 应用的完整开发流程

该项目为进一步学习更复杂的 DeFi 协议、NFT 项目或其他 Web3 应用奠定了坚实的基础。它证明了即使是一个简单的 demo，也可以包含丰富的学习价值和实践意义。

## 链接信息

**GitHub 仓库**: 项目源代码托管在 GitHub 上，包含完整的开发文档和使用说明

**联系方式**:

- B 站: @lllu_23
- 邮箱: lllu238744@gmail.com
- GitHub: @Luboy23

_注：本项目仅用于教学和学习目的，不构成任何投资建议。在实际使用中，请确保遵循相关法律法规。_
