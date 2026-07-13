type MessageObject = Record<string, unknown>;

function isMessageObject(value: unknown): value is MessageObject {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function mergeMessages<T>(
  source: T,
  override: unknown,
): T {
  if (!isMessageObject(source) || !isMessageObject(override)) {
    return source;
  }

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
