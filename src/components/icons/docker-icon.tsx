import * as React from "react"
import { SVGProps } from "react"

export const DockerIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M22 13.4V2.6a.6.6 0 0 0-.6-.6H2.6a.6.6 0 0 0-.6.6v10.8a.6.6 0 0 0 .6.6h.4a2 2 0 0 1 2 2v2.6a.4.4 0 0 0 .4.4h13.2a.4.4 0 0 0 .4-.4v-2.6a2 2 0 0 1 2-2h.4a.6.6 0 0 0 .6-.6ZM7 12H5V9h2Zm4 0H9V9h2Zm4 0h-2V9h2Z" />
  </svg>
)
