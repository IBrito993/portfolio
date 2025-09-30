import * as React from "react"
import { SVGProps } from "react"

export const FirebaseIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4.1 14.5l8.1 4.8 7.3-10.4-3.5-6.5-11.9 12.1Z" />
    <path d="m19.2 15.3-7.3 4.2-4.8-11.3 12.1-1.3" />
  </svg>
)
