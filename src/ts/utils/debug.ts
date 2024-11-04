// debug.ts
function isLocalhost(): boolean {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname
    return hostname === 'localhost' || hostname === '127.0.0.1'
  }
  return false
}

export const debug = {
  log: function (...args: unknown[]): void {
    if (isLocalhost()) {
      console.log(...args)
    }
  },

  warn: function (...args: unknown[]): void {
    if (isLocalhost()) {
      console.warn(...args)
    }
  },

  error: function (...args: unknown[]): void {
    if (isLocalhost()) {
      console.error(...args)
    }
  },
}
