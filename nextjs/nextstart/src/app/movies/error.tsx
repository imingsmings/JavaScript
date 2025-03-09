'use client'

const ErrorBoundary = (...args: any[]) => {
  return <div>Error Boundary: {args[0].error.message}</div>
}

export default ErrorBoundary
