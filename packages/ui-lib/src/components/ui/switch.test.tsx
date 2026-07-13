import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Switch, SwitchThumb } from "./switch";

describe("Switch", () => {
  it("announces and toggles checked state", async () => {
    const user = userEvent.setup();

    render(
      <Switch aria-label="Theme">
        <SwitchThumb />
      </Switch>,
    );

    const control = screen.getByRole("switch", { name: /theme/i });

    expect(control).toHaveAttribute("aria-checked", "false");

    await user.click(control);

    expect(control).toHaveAttribute("aria-checked", "true");
  });
});
