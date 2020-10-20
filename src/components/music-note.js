import React from "react"

const MusicNote = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        fill="currentColor"
        d="M6.5 21c1.38 0 2.5-.675 2.5-2s-1.12-2-2.5-2-2.5.675-2.5 2 1.12 2 2.5 2zm10-1.5c1.38 0 2.5-.675 2.5-2s-1.12-2-2.5-2-2.5.675-2.5 2 1.12 2 2.5 2z"
      />
      <path d="M19 17V4L9 5.5v13" />
      <path d="M19 5l-4.178.603L9 6.443" />
    </g>
  </svg>
)

export default MusicNote
