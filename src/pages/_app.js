import '@/styles/globals.css'
/**Nuevo */
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const activeChainId = ChainId.SolanaDevnet;

export default function App({ Component, pageProps }) {
  return (
    <>
        <ThirdwebProvider desiredChainId={activeChainId}>
            <Component {...pageProps} />
        </ThirdwebProvider>
    </>
);
}
