import React from 'react'
import Navbar from './Navbar'
import User from './User'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router";
import ParticlesBg from "particles-bg";
import CryptoPaymentsForm from './CryptoPaymentsForm'
import Wallet1 from './Wallet1'
import getEmail from './Login'
import { Navigate } from 'react-router'
import { Link } from 'react-router-dom'

import { WagmiConfig, createClient, configureChains } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletConnectD } from './WalletConnectD'

import {
    EthereumClient,
    modalConnectors,
    walletConnectProvider,
  } from "@web3modal/ethereum";
  
  import { Web3Modal } from "@web3modal/react";
    
  import { arbitrum, mainnet, polygon } from "wagmi/chains";

const signOut = () => {
    localStorage.removeItem("email");
    localStorage.clear();
};
const { chains, provider, webSocketProvider } = configureChains(
    [mainnet],
    [alchemyProvider({ apiKey: 'TXjSFfysFqJmsjyH47uFupJyx8NUe0Hb' }), publicProvider()],
)

// Set up client
const client = createClient({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
        new CoinbaseWalletConnector({
            chains,
            options: {
                appName: 'wagmi',
            },
        }),
        new WalletConnectConnector({
            chains,
            options: {
                qrcode: true,
            },
        }),
        new InjectedConnector({
            chains,
            options: {
                name: 'Injected',
                shimDisconnect: true,
            },
        }),
    ],
    provider,
    webSocketProvider,
})
const Profile = () => {
    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState('')



    useEffect(() => {
        setLoginEmail(localStorage.getItem("email"));

    })
    // console.log("email", loginEmail);





    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/user?name=')
            .then(res => {
                //console.log(res.data)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)

            })
    }, [])

    return (
        <div>
            <Navbar />
            <ParticlesBg num={100} type="cobweb" bg={true} />

            <div className='App'>
                {/* <div>
                    <h1 class="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-gray-200 to-gray-100" >Profile page</h1>
                    <p class="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-gray-400 via-gray-500 to-green-400">Hello there, welcome to your profile page</p>

                    <button class="mt-5 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={signOut}>Sign-Out</button>

                </div> */}
                <div>
                    <Wallet1 />
                    <h1 className='mt-20 white font-bold text-2xl text-center'>Send Crypto to a Campaign</h1>
                    <CryptoPaymentsForm />
                    <WagmiConfig client={client}>
                        <WalletConnectD></WalletConnectD>
                    </WagmiConfig>
                    <Web3Modal
                        projectId="TXjSFfysFqJmsjyH47uFupJyx8NUe0Hb"
                        ethereumClient={EthereumClient}
                    />


                    <User email={loginEmail} />
                    <Link className='mt-5 my-5 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' to="/login" onClick={signOut}>Signout</Link>
                </div>
            </div>
        </div>
    )
}





export default Profile