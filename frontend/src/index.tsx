import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import ArConnectStrategy from "@arweave-wallet-kit/arconnect-strategy";
import { ArweaveWalletKit } from "@arweave-wallet-kit/react";
import './index.css'
const rootElement = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
  rootElement.render(
    <React.StrictMode>
      <ArweaveWalletKit
        config={{
          permissions: [
            "ACCESS_ADDRESS",
            "ACCESS_PUBLIC_KEY",
            "SIGN_TRANSACTION",
            "DISPATCH",
          ],
          ensurePermissions: true,
          strategies: [new ArConnectStrategy()],
        }}
        theme={{
          displayTheme: "dark",
        }}
      >
        <App />
      </ArweaveWalletKit>
    </React.StrictMode>
  );