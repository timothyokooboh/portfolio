"use client";

import { useLayoutEffect } from "react";

import {
  PORTFOLIO_HYDRATION_ATTRIBUTE,
  PORTFOLIO_HYDRATION_VALUE,
} from "@/constants/dom";
import { applyTheme, getStoredTheme } from "@/utils/theme-client";

function ThemeInitializer() {
  useLayoutEffect(() => {
    applyTheme(getStoredTheme(), {
      persist: false,
    });
    document.documentElement.setAttribute(
      PORTFOLIO_HYDRATION_ATTRIBUTE,
      PORTFOLIO_HYDRATION_VALUE,
    );
  }, []);

  return null;
}

export { ThemeInitializer };
