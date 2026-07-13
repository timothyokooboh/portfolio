import { fireEvent, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { renderWithIntl } from "@/test/render-with-intl";

import { StudioEditorForm } from "./studio-editor-form";

describe("StudioEditorForm", () => {
  it("updates the preview surface and section summary as content changes", () => {
    renderWithIntl(<StudioEditorForm article={null} mode="new" />);

    expect(
      screen.queryByRole("textbox", { name: /related project/i }),
    ).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: "Motion systems with intent" },
    });
    fireEvent.change(screen.getByLabelText(/hero description/i), {
      target: { value: "A practical note on feedback, rhythm, and reduced motion." },
    });
    fireEvent.change(screen.getByLabelText(/summary/i), {
      target: { value: "A concise summary for cards and archive views." },
    });
    fireEvent.change(screen.getByLabelText(/article body/i), {
      target: { value: "## Motion choices\n\nUse movement to clarify state." },
    });

    expect(
      screen.getByRole("heading", {
        name: /motion systems with intent/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", {
        name: /summary/i,
      }),
    ).toHaveValue("A concise summary for cards and archive views.");
    const descriptionMatches = screen.getAllByText(
      /a practical note on feedback, rhythm, and reduced motion\./i,
    );

    expect(descriptionMatches).toHaveLength(2);
    expect(
      screen.getAllByText(/a concise summary for cards and archive views\./i),
    ).toHaveLength(2);
    expect(screen.getAllByText(/motion choices/i)).toHaveLength(2);
  });
});
