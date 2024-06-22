import { decodeFormState } from "next/dist/server/app-render/entry-base";
import React, { FC } from "react";
import { Spinner } from "../spinner/Spinner";
import { ERROR_MESSAGE } from "./const";

type LoadableProps = {
  isLoading?: boolean;
  isError?: boolean;
  children?: JSX.Element | JSX.Element[];
};

const Loadable: FC<LoadableProps> = ({ isLoading, isError, children }) => {
  if (isError) {
    return <div>{ERROR_MESSAGE}</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return children;
};

export default Loadable;
