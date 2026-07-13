import type { ImgHTMLAttributes } from "react";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { messages } from "@/i18n/messages";
import { renderWithIntl } from "@/test/render-with-intl";
import { getWorkProjectDetail } from "@/modules/work/utils/get-work-content";

import { WorkDetailPageContent } from "./work-detail-page";

vi.mock("next/image", () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => {
    const imgProps = { ...props };
    Reflect.deleteProperty(imgProps, "priority");
    Reflect.deleteProperty(imgProps, "fill");

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img {...imgProps} alt={imgProps.alt ?? ""} />
    );
  },
}));

describe("WorkDetailPage", () => {
  it("renders grounded case-study narrative copy", () => {
    const project = getWorkProjectDetail(messages, "seamkit-ui");

    renderWithIntl(<WorkDetailPageContent project={project} />);

    expect(
      screen.getByText(/giving teams a frontend foundation they can trust/i),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/shipping primitives is only part of the job/i),
    ).toHaveLength(2);
  });
});
