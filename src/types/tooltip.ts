export type Props = {
  message?: React.ReactNode;
  children?: React.ReactNode;
  direction?:
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom"
    | "top";
  color?: string;
  delay?: number;
  enterDelay?: number;
  leaveDelay?: number;
  buttonBackgroundColor?: string;
  disabled?: boolean;
  textColor?: string;
  width?: string;
  height?: string;
  tooltipTextColor?: string;
  tooltipWidth?: string;
  tooltipHeight?: string;
  tooltipBackgroundColor?: string;
  borderRadius?: string;
  tooltipBoxShadow?: string;
  tooltipPadding?: string;
  aniBorderColor?: string;
  aniTextColor?: string;
  hoverLeave?: boolean;
};
