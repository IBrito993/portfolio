import * as React from "react"
import { SVGProps } from "react"

export const JavaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 11h14v7q0 3-3 3H8q-3 0-3-3Zm0 0c2-5 8-5 10 0" />
    <path d="M12 11V4" />
    <path d="M8 4h8" />
  </svg>
)
