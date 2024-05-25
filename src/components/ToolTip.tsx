import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import "./ToolTip.css";
import { Props } from "../types/tooltip";

const ToolTip = ({
  message = `prompt text
prompt text
prompt text`,
  children = "children props is required",
  direction,
  color = "#1A2735",
  enterDelay = 0,
  leaveDelay = 1,
  disabled = false,
  textColor = "white",
  display = "flex",
  width,
  height,
  margin,
  padding = "5px",
  tooltipTextColor = "white",
  tooltipWidth = "auto",
  tooltipHeight = "auto",
  borderRadius,
  tooltipBackgroundColor = "#1A2735",
  tooltipFontSize = "14px",
  tooltipFlexDirection = "column",
  tooltipBoxShadow = "0",
  boxShadow = "0",
  tooltipPadding = "5px",
  aniBorderColor,
  aniTextColor,
  aniBackgroundColor,
  hoverLeave = false,
  cursor = "pointer",
}: Props) => {
  const [visible, setVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (visible && ref.current && tooltipRef.current) {
      const rect = ref.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const newTooltipStyle = getTooltipStyle(direction, rect, tooltipRect);
      setTooltipStyle(newTooltipStyle);
    }
  }, [visible, direction]);

  const handleMouseOver = () => {
    if (enterDelay > 0) {
      timeoutRef.current = setTimeout(() => {
        setVisible(true);
      }, enterDelay);
    } else {
      setVisible(true);
    }
  };

  const handleMouseOut = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (leaveDelay > 0) {
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, leaveDelay);
    } else {
      setVisible(false);
    }
  };

  const handleTooltipMouseOver = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (hoverLeave) {
      return;
    }

    if (leaveDelay > 0) {
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, leaveDelay);
    } else {
      setVisible(false);
    }
  };

  const handleTooltipMouseOut = () => {
    setVisible(false);
  };

  const getTooltipStyle = (
    direction: Props["direction"],
    rect: DOMRect,
    tooltipRect: DOMRect
  ): React.CSSProperties => {
    switch (direction) {
      case "left":
        return {
          top: rect.top + rect.height / 2 - tooltipRect.height / 2,
          left: rect.left - tooltipRect.width - 7,
        };
      case "right":
        return {
          top: rect.top + rect.height / 2 - tooltipRect.height / 2,
          left: rect.right + 7,
        };
      case "bottom":
        return {
          top: rect.bottom + 7,
          left: rect.left + rect.width / 2 - tooltipRect.width / 2,
        };
      case "topLeft":
        return {
          top: rect.top - tooltipRect.height - 7,
          left: rect.left,
        };
      case "topRight":
        return {
          top: rect.top - tooltipRect.height - 7,
          left: rect.right - tooltipRect.width,
        };
      case "bottomLeft":
        return {
          top: rect.bottom + 7,
          left: rect.left,
        };
      case "bottomRight":
        return { top: rect.bottom + 7, left: rect.right - tooltipRect.width };
      case "leftTop":
        return {
          top: rect.top,
          left: rect.left - tooltipRect.width - 7,
        };
      case "leftBottom":
        return {
          top: rect.top + rect.height - tooltipRect.height,
          left: rect.left - tooltipRect.width - 7,
        };
      case "rightTop":
        return { top: rect.top, left: rect.right + 7 };
      case "rightBottom":
        return {
          top: rect.top + rect.height - tooltipRect.height,
          left: rect.right + 7,
        };
      default:
        return {
          top: rect.top - tooltipRect.height - 7,
          left: rect.left + rect.width / 2 - tooltipRect.width / 2,
        };
    }
  };

  const getArrowStyle = () => {
    switch (direction) {
      case "left":
        return "arrow-right";
      case "right":
        return "arrow-left";
      case "bottom":
        return "arrow-up";
      case "topLeft":
        return "arrow-bottom-right";
      case "topRight":
        return "arrow-bottom-left";
      case "bottomLeft":
        return "arrow-top-right";
      case "bottomRight":
        return "arrow-top-left";
      case "leftTop":
        return "arrow-right-bottom";
      case "leftBottom":
        return "arrow-right-top";
      case "rightTop":
        return "arrow-left-bottom";
      case "rightBottom":
        return "arrow-left-top";
      default:
        return "arrow-down";
    }
  };
  console.log(
    "enterDelay",
    enterDelay,
    "leaveDelay",
    leaveDelay,
    "hoverLeave",
    hoverLeave
  );
  return (
    <div
      ref={ref}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="tooltip-wrapper"
      style={{
        backgroundColor: color,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: width || "max-content",
        borderRadius: borderRadius,
        height: height,
        boxSizing: "border-box",
        boxShadow: boxShadow,
        margin: margin
          ? `${margin.top} ${margin.right} ${margin.bottom} ${margin.left}`
          : "0",
        cursor: cursor,
      }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? (
          React.cloneElement(child, {
            ...child.props,
            className: "tooltip-button",
            style: {
              display: display,
              alignItems: "center",
              justifyContent: "center",
              ...child.props.style,
              color: textColor,
              width: width || "100%",
              whiteSpace: "nowrap",
              height: height,
              backgroundColor: color,
              borderRadius: borderRadius,
              boxSizing: "border-box",
              ["--border-color" as any]: aniBorderColor,
              ["--color" as any]: aniTextColor,
              ["--background-color" as any]: aniBackgroundColor,
            },
          })
        ) : (
          <div
            className="tooltip-button"
            style={
              {
                display: display,
                alignItems: "center",
                justifyContent: "center",
                color: textColor,
                height: height,
                width: width || "100%",
                whiteSpace: "nowrap",
                backgroundColor: color,
                borderRadius: borderRadius,
                boxSizing: "border-box",
                ["--border-color" as any]: aniBorderColor,
                ["--color" as any]: aniTextColor,
                ["--background-color" as any]: aniBackgroundColor,
                padding: padding,
              } as React.CSSProperties
            }
          >
            {child}
          </div>
        )
      )}

      {visible && !disabled && (
        <div
          ref={tooltipRef}
          className={`tooltip ${getArrowStyle()}`}
          onMouseOver={handleTooltipMouseOver}
          onMouseOut={handleTooltipMouseOut}
          style={{
            ...tooltipStyle,
            ["--tooltipColor" as string]: tooltipBackgroundColor,
            color: tooltipTextColor,
            position: "fixed",
            backgroundColor: tooltipBackgroundColor,
            padding: tooltipPadding,
            whiteSpace: "pre-wrap",
            zIndex: 9999,
            width: tooltipWidth,
            height: tooltipHeight,
            display: display,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: tooltipFlexDirection,
            fontSize: tooltipFontSize,
            boxShadow: tooltipBoxShadow,
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default ToolTip;
