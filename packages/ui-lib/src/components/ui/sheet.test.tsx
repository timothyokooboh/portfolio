import { useRef, useState } from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./sheet";

function renderControlledSheet() {
  const TestSheet = () => {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const firstLinkRef = useRef<HTMLAnchorElement>(null);

    return (
      <>
        <button ref={triggerRef} type="button" onClick={() => setOpen(true)}>
          Open mobile menu
        </button>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent
            initialFocus={firstLinkRef}
            finalFocus={triggerRef}
            closeLabel="Close mobile menu"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Mobile navigation</SheetTitle>
              <SheetDescription>Browse site sections and quick actions.</SheetDescription>
            </SheetHeader>
            <nav aria-label="Mobile navigation">
              <a ref={firstLinkRef} href="/work">
                Work
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </>
    );
  };

  return render(<TestSheet />);
}

describe("Sheet", () => {
  it("renders an accessible dialog and closes on escape", async () => {
    const user = userEvent.setup();

    renderControlledSheet();

    const trigger = screen.getByRole("button", { name: /open mobile menu/i });

    await user.click(trigger);

    const dialog = await screen.findByRole("dialog", { name: /mobile navigation/i });
    const firstLink = within(dialog).getByRole("link", { name: /work/i });

    await waitFor(() => {
      expect(firstLink).toHaveFocus();
    });

    await user.keyboard("{Escape}");

    await waitFor(() => {
      expect(screen.queryByRole("dialog", { name: /mobile navigation/i })).not.toBeInTheDocument();
    });

    expect(trigger).toHaveFocus();
  });

  it("renders the default close button when enabled", async () => {
    const user = userEvent.setup();

    renderControlledSheet();

    await user.click(screen.getByRole("button", { name: /open mobile menu/i }));

    expect(
      await screen.findByRole("button", { name: /close mobile menu/i }),
    ).toBeVisible();
  });
});
