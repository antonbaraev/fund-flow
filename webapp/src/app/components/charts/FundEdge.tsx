import React from "react";
import { EdgeProps, MarkerType } from "reactflow";
import { BaseEdge, getSimpleBezierPath } from "reactflow";

export function FundEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  ...restProps
}: EdgeProps) {
  const [edgePath] = getSimpleBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      {...{ sourcePosition, targetPosition }}
      {...restProps}
    />
  );
}
