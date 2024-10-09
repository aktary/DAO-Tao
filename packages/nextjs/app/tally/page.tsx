"use client";

import { Governors } from "./_components/Governors";
import { Organizations } from "./_components/Organizations";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useChainId } from "wagmi";

function Tally() {
  const queryClient = new QueryClient();

  const chainId = useChainId();

  return (
    <QueryClientProvider contextSharing={true} client={queryClient}>
      <Organizations chainId={chainId} />
      <Governors />
    </QueryClientProvider>
  );
}

export default Tally;
