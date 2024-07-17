import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ArConnectStrategy from "@arweave-wallet-kit/arconnect-strategy";
import { ArweaveWalletKit } from "@arweave-wallet-kit/react";
import './index.css';
var rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(_jsx(React.StrictMode, { children: _jsx(ArweaveWalletKit, { config: {
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
