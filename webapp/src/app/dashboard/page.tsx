"use client";

import { AddressType, ChainAddress, ChainIds } from "@/app/types/chainAddress";
import { useFundsFlow } from "./hooks/useFundsFlow";
import FlowChart from "../components/charts/FlowChart";
import Loadable from "../components/loadable/Loadable";
import noop from "lodash/noop";

const sourceChainAddress: ChainAddress = {
  address: "0x4484656e7aed645c15ff01c6a4a857f01a604bb6",
  chainId: ChainIds.EthereumMainnet,
  type: AddressType.EOA,
};

export default function Dashboard() {
  const { isLoading, isError, nodes, edges } = useFundsFlow(sourceChainAddress);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loadable {...{ isLoading, isError }}>
        <FlowChart
          {...{ nodes, edges }}
          onNodesChange={noop}
          onEdgesChange={noop}
          className="bg-white"
        />
      </Loadable>
    </div>
  );
}
