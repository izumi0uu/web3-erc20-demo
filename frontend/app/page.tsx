"use client";

import { useState } from "react";

import Navbar from "@/components/navbar";
import MintERC20 from "@/components/mintERC20";
import Footer from "@/components/footer";

export default function Page() {
  const [accounts, setAccounts] = useState([]);

  return (
    <>
      <div className="bg-erc20mint bg-cover min-h-screen bg-no-repeat">
        <Navbar accounts={accounts} setAccounts={setAccounts} />
        <MintERC20 accounts={accounts} setAccounts={setAccounts} />
        <Footer />
      </div>
    </>
  );
}
