type MessageValue = string | number | boolean | null | MessageObject | MessageValue[];
type MessageObject = { [key: string]: MessageValue };

function isMessageObject(value: unknown): value is MessageObject {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function mergeMessages<T extends MessageObject>(
  source: T,
  override: MessageObject,
): T {
  const result: MessageObject = { ...source };

  Object.entries(override).forEach(([key, value]) => {
    const sourceValue = result[key];

    if (isMessageObject(sourceValue) && isMessageObject(value)) {
      result[key] = mergeMessages(sourceValue, value);
      return;
    }

    result[key] = value;
  });

  return result as T;
}

export { mergeMessages };
