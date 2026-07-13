import * as React from "react";

export interface IfProps {
  condition: boolean;
  children: React.ReactNode;
}

function If({ children, condition }: IfProps) {
  return condition ? children : null;
}

If.displayName = "If";

export { If };
