export function cn(...classNames) {
  return classNames
    .flatMap((value) => {
      if (!value) return []
      if (typeof value === "string") return value.split(" ")
      if (Array.isArray(value)) return value
      if (typeof value === "object") {
        return Object.entries(value)
          .filter(([, isEnabled]) => Boolean(isEnabled))
          .map(([className]) => className)
      }
      return []
    })
    .filter(Boolean)
    .join(" ")
}


