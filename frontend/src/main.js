import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css';
import ArConnectStrategy from "@arweave-wallet-kit/arconnect-strategy";
import { ArweaveWalletKit } from "@arweave-wallet-kit/react";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ArweaveWalletKit, { config: {
            permissions: [
                "ACCESS_ADDRESS",
                "ACCESS_PUBLIC_KEY",
                "SIGN_TRANSACTION",
                "DISPATCH",
            ],
            ensurePermissions: true,
            strategies: [new ArConnectStrategy()],
        }, theme: {
            displayTheme: "dark",
        }, children: _jsx(App, {}) }) }));
