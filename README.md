# web3-erc20-demo

## 代码阅读推荐顺序

### 1. 智能合约核心文件

- [contracts/src/SKCoin.sol](contracts/src/SKCoin.sol) - ERC20 代币合约主文件
- [contracts/test/SKCoinTest.sol](contracts/test/SKCoinTest.sol) \* - 合约测试文件

### 2. 前端核心文件

- [frontend/app/page.tsx](frontend/app/page.tsx) \* - 前端主页面组件
- [frontend/app/layout.tsx](frontend/app/layout.tsx) \* - 前端布局组件
- [frontend/components/mintERC20/index.tsx](frontend/components/mintERC20/index.tsx) \* - ERC20 铸币组件
- [frontend/components/navbar/index.tsx](frontend/components/navbar/index.tsx) \* - 导航栏组件
- [frontend/components/footer/index.tsx](frontend/components/footer/index.tsx) \* - 页脚组件

### 3. 配置文件

- [contracts/foundry.toml](contracts/foundry.toml) \* - Foundry 配置文件
- [frontend/package.json](frontend/package.json) \* - 前端依赖配置
- [frontend/next.config.ts](frontend/next.config.ts) \* - Next.js 配置文件
- [frontend/tailwind.config.ts](frontend/tailwind.config.ts) \* - Tailwind CSS 配置
- [frontend/tsconfig.json](frontend/tsconfig.json) \* - TypeScript 配置

### 4. 样式文件

- [frontend/app/globals.css](frontend/app/globals.css) \* - 全局样式文件

### 5. 构建输出文件

- [contracts/bin/src/SKCoin.json](contracts/bin/src/SKCoin.json) \* - 合约编译输出 JSON
- [contracts/bin/src/SKCoin.abi](contracts/bin/src/SKCoin.abi) \* - 合约 ABI 文件
- [contracts/bin/src/SKCoin.bin](contracts/bin/src/SKCoin.bin) \* - 合约字节码
- [frontend/SKCoin.json](frontend/SKCoin.json) \* - 前端使用的合约 ABI

### 6. 其他配置文件

- [frontend/eslint.config.mjs](frontend/eslint.config.mjs) \* - ESLint 配置
- [frontend/postcss.config.mjs](frontend/postcss.config.mjs) \* - PostCSS 配置

---

a demo for praticing dapp development
