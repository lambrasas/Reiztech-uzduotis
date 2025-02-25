import * as React from 'react'

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  title?: string
  fillColor?: string
}

const Logo: React.FC<LogoProps> = ({ title, fillColor, ...props }) => (
  <svg
    preserveAspectRatio="xMidYMid meet"
    viewBox="214.72 213.87 931.83 286.707"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label={
      title ||
      'Logo_black_Reiz Tech_IT Consultancy & Solutions_Custom Software Development'
    }
    fill="currentColor"
    {...props}
  >
    <g fill={fillColor || 'currentColor'}>
      <path d="M341.12 294.82a114.41 114.41 0 0 0-45.46 45.46l-9.26 17h.6a71.67 71.67 0 0 1 71.67 71.67h71.07v-71.72l-71.68-71.68Z"></path>
      <path d="M429.75 213.88v143.35l71.67-71.68-71.67-71.67z"></path>
      <path d="m358.07 285.55-16.95-9.27a114.41 114.41 0 0 1-45.46-45.46l-9.26-16.95-9.27 16.95a114.35 114.35 0 0 1-45.46 45.46l-16.95 9.27 16.95 9.27a114.35 114.35 0 0 1 45.46 45.46l9.27 17v-71.73Z"></path>
      <path d="M286.4 357.24a71.67 71.67 0 1 0 72.28 71.66H286.4Z"></path>
      <path d="M573.1 285.57H673c29.38 0 52.89 11.67 52.89 46 0 34-24.09 45.43-53.08 45.22h-8.23l67 52h-32.94l-64-51.16h-40.38v51.16H573.1ZM673.18 357c17.63 0 31-6.55 31-25.38s-13.18-25.38-30.61-25.38h-79.31V357Z"></path>
      <path d="M760.51 428.81V285.57h148.67v20.67H781.66v38.47h115.77v20.66H781.66v42.77H913.1v20.67Z"></path>
      <path d="M942.06 285.57h21.15v143.24h-21.15Z"></path>
      <path d="M992.17 428.81v-20.67l85.83-73.46 34.09-28.44H994.52v-20.67h147.1v20.67l-85.79 73.46-34.28 28.44h125v20.67Z"></path>
    </g>
  </svg>
)

export default Logo
