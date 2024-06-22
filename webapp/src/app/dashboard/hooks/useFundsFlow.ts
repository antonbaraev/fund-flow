import { useMemo } from "react";
import { ChainAddress } from "@/app/types/chainAddress";
import { Edge, Node } from "reactflow";
import { getGroupLayout } from "@/app/utils/getGroupLayout";
import { getFundingGraph } from "@/app/api/funding";
import { useQuery } from "@tanstack/react-query";
import { getFlowChartParams } from "./utils";

type FundsFlowData = {
  readonly isLoading?: boolean;
  readonly isError?: boolean;
  readonly nodes: Node[];
  readonly edges: Edge[];
};

export const useFundsFlow = (sourceAddress: ChainAddress): FundsFlowData => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["edges"],
    queryFn: () => getFundingGraph(sourceAddress),
    select: (data) => data.edges,
  });

  const graph = useMemo(() => {
    const { nodes, edges } = getFlowChartParams({
      transactionsData: data,
      sourceAddress: sourceAddress.address,
    });

    return getGroupLayout(nodes, edges, "LR");
  }, [data, sourceAddress.address]);

  return {
    isLoading,
    isError,
    nodes: graph.nodes as Node[],
    edges: graph.edges as Edge[],
  };
};
