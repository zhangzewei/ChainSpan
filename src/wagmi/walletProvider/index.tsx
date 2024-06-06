'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "../config";
import { PropsWithChildren } from "react";
const queryClient = new QueryClient()

export default function WalletProvider({ children }: PropsWithChildren) {
    return <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </WagmiProvider>
}