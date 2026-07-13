import type { WorkProjectSlug } from "./work";

export const WORK_PROJECT_CODE_SNIPPETS: Record<WorkProjectSlug, string> = {
  "seamkit-ui": `export function createAccordionRoot(props: AccordionRootProps) {
  return withAccessibleKeyboardModel({
    orientation: props.orientation ?? "vertical",
    focusLoop: true,
    rovingTabIndex: true,
    slots: createAccordionSlots(props),
  });
}`,
  olanna: `const renderableResponse = agentSchemas.safeParse(payload);

if (!renderableResponse.success) {
  return <ConversationMessage body={payload.message} />;
}

return schemaComponentMap[renderableResponse.data.type](
  renderableResponse.data,
);`,
  myfastmeds: `export async function createCheckoutSession(input: CheckoutInput) {
  const order = await ordersService.reserveInventory(input);
  const payment = await paymentsService.initialize(order);

  return {
    orderId: order.id,
    authorizationUrl: payment.authorizationUrl,
  };
}`,
  vbox: `<v-box
  is="button"
  display="inline-flex"
  align-items="center"
  gap="0.5rem"
  padding-inline="1rem"
  padding-block="0.75rem"
  border-radius="999px"
  :hover="{ backgroundColor: '#161d2b' }"
>
  Launch demo
</v-box>`,
};
