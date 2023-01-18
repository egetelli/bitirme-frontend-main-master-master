import {
    useAccount,
    useConnect,
    useDisconnect,
    useEnsAvatar,
    useEnsName,
} from 'wagmi'


export function WalletConnectD() {
    const { address, connector, isConnected } = useAccount()
    const { data: ensAvatar } = useEnsAvatar({ address })
    const { data: ensName } = useEnsName({ address })
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect()
    const { disconnect } = useDisconnect()

    if (isConnected) {
        return (
            <div>
                <img src={ensAvatar} alt="ENS Avatar" />
                <div>{ensName ? `${ensName} (${address})` : address}</div>
                <div>Connected to {connector.name}</div>
                <button onClick={disconnect}>Disconnect</button>
            </div>
        )
    }

    return (
        <div>
            {connectors.map((connector) => (
                <button
                    className='mb-5 mt-10 my-3 text-white bg-gradient-to-r from-blue-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
                    focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                >
                    {connector.name}
                    {!connector.ready && ' (unsupported)'}
                    {isLoading &&
                        connector.id === pendingConnector?.id &&
                        ' (connecting)'}
                </button>
            ))}

            {error && <div className='text-red'>{error.message}</div>}
        </div>
    )
}
