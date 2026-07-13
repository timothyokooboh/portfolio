import type { ImgHTMLAttributes } from "react";
import { screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { renderWithIntl } from "@/test/render-with-intl";
import type { WorkProjectGalleryItem } from "@/modules/work/types/work";

import { WorkGallery } from "./work-gallery";

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

const WORK_GALLERY_ITEMS: WorkProjectGalleryItem[] = [
  {
    alt: "Olanna agent home view",
    caption: "A calm starting point for asking the provisioned agent business questions through chat or voice.",
    src: "/images/projects/olanna/agent-home.png",
    title: "Agent query surface",
  },
  {
    alt: "Olanna inbox thread view",
    caption: "The split layout keeps the customer thread readable while preserving contact context and message history.",
    src: "/images/projects/olanna/inbox-thread.png",
    title: "Inbox conversation view",
  },
];

describe("WorkGallery", () => {
  it("renders captioned screenshot cards for case studies", () => {
    renderWithIntl(
      <WorkGallery
        title="Outcome"
        caption="A set of product surfaces that made AI conversations feel more concrete."
        items={WORK_GALLERY_ITEMS}
      />,
    );

    expect(
      screen.getByRole("heading", {
        name: /outcome/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /agent query surface/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/the split layout keeps the customer thread readable/i),
    ).toBeInTheDocument();
    expect(screen.getByAltText(/olanna agent home view/i)).toBeInTheDocument();
  });
});
