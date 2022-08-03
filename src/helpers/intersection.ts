export function intersection<T>(iterated: T[], hash: Set<T>): number {
  const intersectionSet: Set<T> = new Set()

  for (const el of iterated) {
    if (hash.has(el)) {
      intersectionSet.add(el)
    }
  }

  return intersectionSet.size
}
