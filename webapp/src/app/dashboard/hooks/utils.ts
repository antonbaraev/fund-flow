import { FundingFlowRecord } from "@/app/types/fundingRecord";
import { Edge, Node, MarkerType } from "reactflow";
import { EDGES_TYPES, NODE_TYPES } from "@/app/components/charts";

const edgeBaseProps = {
  style: {
    strokeWidth: 1,
    stroke: "#3b82f6",
  },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 15,
    height: 15,
    color: "#3b82f6",
  },
  sourceHandle: "start",
  targetHandle: "end",
};

export const getFlowChartParams = ({
  transactionsData = [],
  sourceAddress,
}: {
  transactionsData?: FundingFlowRecord[];
  sourceAddress?: string;
}) => {
  const nodes: Partial<Node>[] = [];
  const edges: Partial<Edge>[] = [];

  transactionsData.forEach(({ source, dest }) => {
    nodes.push(
      {
        id: dest.address,
        data: {
          ...dest,
          isSource: dest.address === sourceAddress,
        },
        type: NODE_TYPES.FUND_NODE,
      },
      {
        id: source.address,
        data: {
          ...source,
          isSource: source.address === sourceAddress,
        },
        type: NODE_TYPES.FUND_NODE,
      }
    );

    edges.push({
      id: `${source.address}->${dest.address}`,
      type: EDGES_TYPES.FUND_EDGE,
      source: source.address,
      target: dest.address,
      ...edgeBaseProps,
    });
  });

  return {
    nodes,
    edges,
  };
};
