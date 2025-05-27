import { ethers, BigNumber } from "ethers";
import { useState, useEffect } from "react";
import SKCoin from "../../SKCoin.json";

export default function MintERC20({
  accounts,
  setAccounts,
}: {
  accounts: string[];
  setAccounts: (accounts: string[]) => void;
}) {
  const ContractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";

  const [balance, setBalance] = useState(null);
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      // 创建以太坊提供者和签名者实例
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // 初始化智能合约实例
      const contract = new ethers.Contract(ContractAddress, SKCoin.abi, signer);

      try {
        // 将用户输入的铸造数量转换为以太坊单位（最小单位 Wei）
        const mintAmountInETH = ethers.utils.parseUnits(
          mintAmount.toString(),
          18
        );
        // 调用智能合约的 mint 方法，并传入铸造数量
        const response = await contract.mint(BigNumber.from(mintAmountInETH));
        console.log("Minting response", response);

        // 监听合约的 Mint 事件，铸造完成后刷新余额
        contract.on("Mint", async () => {
          fetchBalance();
        });
      } catch (e) {
        // 捕获并打印铸造失败的错误信息
        console.log("error", e);
      }
    }
  }

  // 定义 fetchBalance 函数，用于获取用户的代币余额
  async function fetchBalance() {
    if (window.ethereum) {
      // 创建以太坊提供者和签名者实例
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // 初始化智能合约实例
      const contract = new ethers.Contract(ContractAddress, SKCoin.abi, signer);

      try {
        // 调用智能合约的 balanceOf 方法获取用户余额
        const userBalance = await contract.balanceOf(accounts[0]);
        // 格式化余额，将其转换为可读的浮点数
        const formattedBalance = parseFloat(
          ethers.utils.formatUnits(userBalance, 18)
        ).toFixed(2);

        // 更新余额状态
        setBalance(formattedBalance);
      } catch (e) {
        // 捕获并打印获取余额失败的错误信息
        console.log("error fetching balance", e);
      }
    }
  }

  // 使用 useEffect 钩子，在组件挂载和账户连接变化时调用 fetchBalance，并设置定时器定期刷新余额
  useEffect(() => {
    if (isConnected) {
      fetchBalance(); // 初次加载时获取余额
      const intervalId = setInterval(fetchBalance, 1000); // 每秒刷新余额
      return () => clearInterval(intervalId); // 清理定时器
    }
  }, [accounts, isConnected]);

  // 渲染组件内容
  return (
    <>
      {/* 使用 TailwindCSS 进行布局和样式设置 */}
      <div className="flex flex-col flex-grow justify-center items-center font-wq mb-12 mt-20 text-white">
        <div className="w-[640-px] text-center">
          <h1 className="text-6xl text-[#ff2c73]">铸造 SKCoin</h1>
          {isConnected ? (
            // 如果已连接钱包
            <>
              <p className="text-4xl mt-20 mb-12 animate-pulse">
                开始铸造你的第一个 SKCoin 代币吧!
              </p>
              {/* 输入框：输入用户想铸造的代币数量 */}
              <div className="flex justify-center mt-4">
                <input
                  value={mintAmount}
                  onChange={(e) => setMintAmount(Number(e.target.value))}
                  className="text-center w-80 h-10 mt-4 mb-4 text-pink-600 text-2xl"
                  type="number"
                  placeholder="请输入你想要铸造的代币数量..."
                  min="0"
                />
              </div>

              {/* 按钮：触发铸造代币 */}
              <div className="flex-col justify-center items-center mt-8">
                <button
                  onClick={handleMint}
                  className="bg-[#D6517D] rounded-md shadow-md text-2xl p-4 w-80"
                >
                  立即铸造！
                </button>
                {/* 显示当前用户的代币余额 */}
                <p className="t text-[#ff2c73] text-xl animate-pulse mt-4">
                  当前的 SKCoin 代币余额：{" "}
                  {balance !== null ? `${balance} ETH` : "正在加载中..."}
                </p>
              </div>
            </>
          ) : (
            // 如果未连接钱包，提示用户连接钱包
            <div className="flex justify-center text-6xl items-center mt-48 mb-20">
              <p className="animate-pulse">连接钱包以开始铸造代币...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
