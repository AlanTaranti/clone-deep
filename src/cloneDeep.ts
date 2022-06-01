function isArray(object: unknown): boolean {
  return Array.isArray(object);
}

function isObject(object: unknown): boolean {
  return typeof object === "object";
}

function cloneArray(array: unknown[]): unknown[] {
  return array.map((item) => cloneDeep(item));
}

function cloneObject(object: Record<any, unknown>): Record<any, unknown> {
  const cloned = {};
  for (const k in object) {
    cloned[k] = cloneDeep(object[k]);
  }
  return cloned;
}

export function cloneDeep(element: any) {
  if (isArray(element)) {
    return cloneArray(element);
  } else if (isObject(element)) {
    return cloneObject(element);
  }

  return element;
}
