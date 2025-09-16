import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount } from 'wagmi'
import { config } from './config'
import { Account } from './Account'
import { WalletOptions } from './wallet-options'
import { AllowUSDT } from './AllowUSDT'

const queryClient = new QueryClient()

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}> 
        <ConnectWallet />
        {/* <AllowUSDT/> */}
      </QueryClientProvider> 
    </WagmiProvider>
  )
}

export default App;