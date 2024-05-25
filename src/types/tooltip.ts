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
  tooltipFontSize?: string;
  tooltipFlexDirection?: FlexDirection;
  tooltipBoxShadow?: string;
  borderRadius?: string;
  boxShadow?: string;
  tooltipPadding?: string;
  aniBorderColor?: string;
  aniTextColor?: string;
  aniBackgroundColor?: string;
  hoverLeave?: boolean;
  padding?: string;
  margin?: Margin;
  display?: string;
  cursor?: string;
};

type Margin = {
  top: string;
  right: string;
  bottom: string;
  left: string;
};
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
