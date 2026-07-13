import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

describe("Tabs", () => {
  it("switches visible content with keyboard-friendly controls", async () => {
    const user = userEvent.setup();

    render(
      <Tabs defaultValue="writing">
        <TabsList aria-label="Sections">
          <TabsTrigger value="writing">Writing</TabsTrigger>
          <TabsTrigger value="designs">Designs</TabsTrigger>
        </TabsList>
        <TabsContent value="writing">Writing content</TabsContent>
        <TabsContent value="designs">Design content</TabsContent>
      </Tabs>,
    );

    expect(screen.getByText("Writing content")).toBeVisible();

    await user.click(screen.getByRole("tab", { name: /designs/i }));

    expect(screen.getByText("Design content")).toBeVisible();
  });
});
