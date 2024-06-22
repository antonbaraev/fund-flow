"use client";

import { ChainAddress } from "@/app/types/chainAddress";
import { FundingResData } from "@/app/types/fundingRecord";
import { GRAPH_DATA_URL } from "./urls";

export const getFundingGraph = async (
  source: ChainAddress
): Promise<FundingResData> => {
  const { address, chainId } = source;
  const data = await fetch(`${GRAPH_DATA_URL}${chainId}/${address}`);

  return data.json();
};
