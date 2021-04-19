import React from "react";
import { Icon } from "../Icon/Icon";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLDivElement>> = ({
  primary = false,
  label,
  loading,
  onClick,
  ...props }) => {

  const styles = primary ?
    "shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :
    "text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

  return (
    <div {...props}>
      <button
        onClick={onClick}
        type="button"
        className={`inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md ${styles}`}
      >
        {loading && <>
          <Icon type="spinner" className="animate-spin -ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Loading...
          </>
        }
        {!loading && label}
      </button>
    </div>);
};
