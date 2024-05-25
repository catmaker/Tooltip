import { useState } from "react";
import "./App.css";
import { Props } from "./types/tooltip";
import ToolTip from "./components/ToolTip";
import TOOLTIP_DATA from "./data/tooltipConfig";

const DEFAULT_TOOLTIP_STATE: Record<string, boolean> = Object.values(
  TOOLTIP_DATA
)
  .flat()
  .reduce((acc, tooltip, index) => ({ ...acc, [index]: false }), {});

const Main = () => {
  const [tooltipStates, setTooltipStates] = useState<Record<string, boolean>>(
    DEFAULT_TOOLTIP_STATE
  );
  const [disabled, setDisabled] = useState(false);

  const handleDisable = () => {
    setDisabled(!disabled);
  };
  const renderTooltip = (tooltip: Props) => (
    <ToolTip
      // 기본 설정 및 메시지 관련
      message={tooltip.message}
      direction={tooltip.direction}
      color={tooltip.color}
      disabled={tooltip.disabled}
      // 크기 및 모양 관련
      width={tooltip.width}
      height={tooltip.height}
      borderRadius={tooltip.borderRadius}
      boxShadow={tooltip.boxShadow}
      padding={tooltip.padding}
      margin={tooltip.margin}
      // 텍스트 관련
      textColor={tooltip.textColor}
      tooltipTextColor={tooltip.tooltipTextColor}
      // 배경 관련
      buttonBackgroundColor={tooltip.buttonBackgroundColor}
      tooltipBackgroundColor={tooltip.tooltipBackgroundColor}
      // 툴팁 상세 설정
      tooltipWidth={tooltip.tooltipWidth}
      tooltipHeight={tooltip.tooltipHeight}
      tooltipPadding={tooltip.tooltipPadding}
      tooltipFlexDirection={tooltip.tooltipFlexDirection}
      tooltipBoxShadow={tooltip.tooltipBoxShadow}
      // 애니메이션 및 상호작용 관련
      enterDelay={tooltip.enterDelay}
      leaveDelay={tooltip.leaveDelay}
      hoverLeave={tooltip.hoverLeave}
      aniTextColor={tooltip.aniTextColor}
      aniBackgroundColor={tooltip.aniBackgroundColor}
      aniBorderColor={tooltip.aniBorderColor}
      // 기타 스타일링
      display={tooltip.display}
      cursor={tooltip.cursor}
    >
      {tooltip.children}
    </ToolTip>
  );
  TOOLTIP_DATA.top.forEach((tooltip) => {
    console.log(tooltip.direction);
    renderTooltip(tooltip as any);
  });
  return (
    <div className="App">
      <div className="section">
        <div className="demo">
          <div>
            <div className="top-wrapper">
              {TOOLTIP_DATA.top.map((tooltip) =>
                renderTooltip(tooltip as Props)
              )}
            </div>
            <div className="left-wrapper">
              {TOOLTIP_DATA.left.map((tooltip) =>
                renderTooltip(tooltip as Props)
              )}
            </div>
            <div className="right-wrapper">
              {TOOLTIP_DATA.right.map((tooltip) =>
                renderTooltip(tooltip as Props)
              )}
            </div>
            <div className="bottom-wrapper">
              {TOOLTIP_DATA.bottom.map((tooltip) =>
                renderTooltip(tooltip as Props)
              )}
            </div>
          </div>
          <div className="parent-overflow">
            <div className="top-wrapper">
              {TOOLTIP_DATA.top.map((tooltip) =>
                renderTooltip(tooltip as Props)
              )}
            </div>
            <div className="left-wrapper">
              {TOOLTIP_DATA.left.map((tooltip) =>
                renderTooltip(tooltip as Props)
              )}
            </div>
            <div className="right-wrapper">
              {TOOLTIP_DATA.right.map((tooltip) =>
                renderTooltip(tooltip as Props)
              )}
            </div>
            <div className="bottom-wrapper">
              {TOOLTIP_DATA.bottom.map((tooltip) =>
                renderTooltip(tooltip as Props)
              )}
            </div>
          </div>
        </div>
        <div className="demo2">
          {TOOLTIP_DATA.demo2.map((tooltip) => renderTooltip(tooltip as Props))}
        </div>
        <div className="demoBlock">
          <div>
            <div className="wrapper">
              {TOOLTIP_DATA.demoBlock.map((tooltip) =>
                renderTooltip(tooltip as Props)
              )}
            </div>
          </div>
        </div>
        <div className="demoBlock">
          <div className="custom-tooltip">
            {TOOLTIP_DATA.custom.map((tooltip) =>
              renderTooltip(tooltip as Props)
            )}
          </div>
        </div>
        <div className="demoBlock">
          <div className="disable">
            <button onClick={handleDisable}>
              {disabled ? "Enabled" : "Disabled"}
            </button>
            {TOOLTIP_DATA.disable.map((tooltip) =>
              renderTooltip({ ...tooltip, disabled } as Props)
            )}
          </div>
        </div>
        <div></div>
      </div>
      <ToolTip></ToolTip>
    </div>
  );
};

export default Main;
