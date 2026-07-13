import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { render } from "@testing-library/react";

import { messages } from "@/i18n/messages";

function renderWithIntl(node: ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {node}
    </NextIntlClientProvider>,
  );
}

export { renderWithIntl };
