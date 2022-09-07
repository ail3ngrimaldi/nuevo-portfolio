import * as React from "react"

const SvgProjects = (props) => (
  <svg
    className="svg-projects"
    id='try'
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="-2 0 1025 961"
    //cuanto mas bajos los valores de mi viewBox (los segundos width y height) hace que las cosas de adentro se vean más grandes
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M523.237 0s-41.034 91.125-239.534 173.625C73.703 248.625-2 361.124-2 361.124V.001L523.237 0Z"
      fill="#d9afd9"
    />
  </svg>
)

export default SvgProjects;