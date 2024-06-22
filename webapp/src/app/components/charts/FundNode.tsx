import { NodeProps, Handle, Position } from "reactflow";
import { FC } from "react";
import { ChainAddress } from "@/app/types/ChainAddress";

const styles = {
  name: "w-full text-black font-bold text-xs truncate",
  address: "w-full text-black text-xs truncate",
  getWrapperStyle: (isSource?: boolean) =>
    `w-[200px] h-[70px] p-2 border border-blue-500 flex gap-2 flex-col items-center justify-center rounded-md ${
      isSource ? "bg-stone-300" : ""
    }`,
};

interface AddressNodeData extends ChainAddress {
  readonly isSource?: boolean;
}

export const FundNode: FC<NodeProps<AddressNodeData>> = (node) => {
  const { data } = node;

  return (
    <>
      <Handle type="source" position={Position.Right} id="start" />
      <Handle type="target" position={Position.Left} id="end" />
      <div className={styles.getWrapperStyle(data.isSource)}>
        {data.name && <div className={styles.name}>{data.name}</div>}
        <div className={styles.address}>{data.address}</div>
      </div>
    </>
  );
};
