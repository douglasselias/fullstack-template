export function pipe(...fns: unknown[]) {
  return (initialValue: unknown) => {
    return fns.reduce(
      (acc: unknown, func: (v: unknown) => unknown) => func(acc),
      initialValue
    )
  }
}
