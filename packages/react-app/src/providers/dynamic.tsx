import React from "react";
import MiniPayProvider from "./minipayProvider";
import DynamicProvider from "./dynamicProvider";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export default function WalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMiniPay = () => {
    if (window && window.ethereum) {
      // User has a injected wallet

      if (window.ethereum.isMiniPay) {
        console.log("MiniPay detected");
        return true;
      }
    }
    console.log("MiniPay not detected");
    return false;
  };

  return isMiniPay() ? (
    <MiniPayProvider queryClient={queryClient}>{children}</MiniPayProvider>
  ) : (
    <DynamicProvider queryClient={queryClient}>{children}</DynamicProvider>
  );
}
