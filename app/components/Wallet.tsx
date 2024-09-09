import React, { FC, useMemo } from 'react';
import { useSearchParams } from "next/navigation";
import { WalletProvider } from '@solana/wallet-adapter-react';
import { TipLinkWalletAdapter } from "@tiplink/wallet-adapter";
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    TipLinkWalletAutoConnectV2
} from '@tiplink/wallet-adapter-react-ui';

export const Wallet: FC = () => {    
    const wallets = useMemo(
        () => [
            new TipLinkWalletAdapter({ 
                title: "Name of Dapp", 
                clientId: "YOUR_CLIENT_ID", // Replace with your client ID
                theme: "dark"  // Options: "dark", "light", "system"
            }),
        ],
        []
    );

    const searchParams = useSearchParams();

    return (
        <WalletProvider wallets={wallets} autoConnect>
            <TipLinkWalletAutoConnectV2 isReady query={searchParams}>
              {/* Other components go here */}
            </TipLinkWalletAutoConnectV2>
        </WalletProvider>
    );
};
