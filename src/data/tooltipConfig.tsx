const TOOLTIP_DATA = {
  top: [
    {
      direction: "topLeft",
      color: "#1AAA89",
      textColor: "white",
      children: <div>TLTLTL</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
    {
      direction: "top",
      color: "#1AAA89",
      textColor: "white",
      children: <div>Top</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
    {
      direction: "topRight",
      color: "#1AAA89",
      textColor: "white",
      children: <div>TR</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
  ],
  left: [
    {
      direction: "leftTop",
      color: "#1AAA89",
      textColor: "white",
      children: <div>LT</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
    {
      direction: "left",
      color: "#1AAA89",
      textColor: "white",
      children: <div>Left</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
    {
      direction: "leftBottom",
      color: "#1AAA89",
      textColor: "white",
      children: <div>LB</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
  ],
  right: [
    {
      direction: "rightTop",
      color: "#1AAA89",
      textColor: "white",
      children: <div>RT</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
    {
      direction: "right",
      color: "#1AAA89",
      textColor: "white",
      children: <div>Right</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
    {
      direction: "rightBottom",
      color: "#1AAA89",
      textColor: "white",
      children: <div>RB</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
  ],
  bottom: [
    {
      direction: "bottomLeft",
      color: "#1AAA89",
      textColor: "white",
      children: <div>BL</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
    {
      direction: "bottom",
      color: "#1AAA89",
      textColor: "white",
      children: <div>Bottom</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
    {
      direction: "bottomRight",
      color: "#1AAA89",
      textColor: "white",
      children: <div>BR</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
  ],
  demo2: [
    {
      direction: "topLeft",
      color: "#1AAA89",
      textColor: "white",
      children: <div>enter-delay 1s</div>,
      width: "150px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
      enterDelay: 1000,
    },
    {
      direction: "top",
      color: "#1AAA89",
      textColor: "white",
      children: <div>leave-delay 1s</div>,
      width: "150px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
      leaveDelay: 1000,
    },
    {
      direction: "topRight",
      color: "#1AAA89",
      textColor: "white",
      children: <div>hover not hidden</div>,
      width: "150px",
      height: "21px",
      borderRadius: "5px",
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
      hoverLeave: true,
    },
  ],
  demoBlock: [
    {
      message: (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "17px", height: "17px", marginRight: "5px" }}
              src="/alternative.svg"
              alt=""
            />
            Are you sure to delete this task?
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <button
              onClick={() => alert("top button clicked!")}
              style={{
                backgroundColor: "#1AAB8A",
                color: "white",
                borderRadius: "3px",
                marginTop: "5px",
              }}
            >
              Yes
            </button>
          </div>
        </>
      ),

      color: "#1AAA89",
      textColor: "white",
      children: <div>Top</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      tooltipTextColor: "grey",
      tooltipBackgroundColor: "white",
      leaveDelay: 1000,
      tooltipBoxShadow: "5",
      tooltipPadding: "10px",
      direction: "top",
      hoverLeave: true,
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
      margin: { top: "0px", right: "0px", bottom: "0px", left: "70px" },
    },
    {
      message: (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "17px", height: "17px", marginRight: "5px" }}
              src="/alternative.svg"
              alt=""
            />
            Are you sure to delete this task?
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <button
              onClick={() => alert("left button clicked!")}
              style={{
                backgroundColor: "#1AAB8A",
                color: "white",
                borderRadius: "3px",
                marginTop: "5px",
              }}
            >
              Yes
            </button>
          </div>
        </>
      ),
      direction: "left",
      color: "#1AAA89",
      textColor: "white",
      children: <div>Left</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      tooltipTextColor: "grey",
      tooltipBackgroundColor: "white",
      leaveDelay: 1000,
      tooltipBoxShadow: "5",
      tooltipPadding: "10px",
      hoverLeave: true,
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
    },
    {
      message: (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "17px", height: "17px", marginRight: "5px" }}
              src="/alternative.svg"
              alt=""
            />
            Are you sure to delete this task?
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <button
              onClick={() => alert("right button clicked!")}
              style={{
                backgroundColor: "#1AAB8A",
                color: "white",
                borderRadius: "3px",
                marginTop: "5px",
              }}
            >
              Yes
            </button>
          </div>
        </>
      ),
      color: "#1AAA89",
      direction: "right",
      textColor: "white",
      children: <div>Right</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      tooltipTextColor: "grey",
      tooltipBackgroundColor: "white",
      leaveDelay: 1000,
      tooltipBoxShadow: "5",
      tooltipPadding: "10px",
      hoverLeave: true,
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
      margin: { top: "0px", right: "0px", bottom: "0px", left: "140px" },
    },
    {
      message: (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{
                width: "17px",
                height: "17px",
                marginRight: "5px",
                marginTop: "5px",
              }}
              src="/alternative.svg"
              alt=""
            />
            Are you sure to delete this task?
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <button
              onClick={() => alert("bottom button clicked!")}
              style={{
                backgroundColor: "#1AAB8A",
                color: "white",
                borderRadius: "3px",
                marginTop: "5px",
              }}
            >
              Yes
            </button>
          </div>
        </>
      ),
      color: "#1AAA89",
      direction: "bottom",
      textColor: "white",
      children: <div>Bottom</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      tooltipTextColor: "grey",
      tooltipBackgroundColor: "white",
      leaveDelay: 1000,
      tooltipBoxShadow: 5,
      tooltipPadding: "10px",
      hoverLeave: true,
      aniTextColor: "#1AAA89",
      aniBackgroundColor: "white",
      aniBorderColor: "#1AAA89",
      margin: { top: "0px", right: "0px", bottom: "0px", left: "70px" },
    },
  ],
  custom: [
    {
      direction: "top",
      message: "Pink",
      color: "#fac",
      textColor: "white",
      children: <div>Pink</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      tooltipTextColor: "white",
      tooltipBackgroundColor: "#fac",
      aniBorderColor: "#fac",
      aniTextColor: "#fac",
      aniBackgroundColor: "white",
    },
    {
      direction: "top",
      message: "Yellow",
      color: "#fff1aa",
      textColor: "black",
      children: <div>Yellow</div>,
      width: "70px",
      height: "21px",
      borderRadius: "5px",
      tooltipTextColor: "black",
      tooltipBackgroundColor: "#fff1aa",
      aniBorderColor: "#fff1aa",
      aniTextColor: "#fff1aa",
      aniBackgroundColor: "white",
    },
  ],
  disable: [
    {
      direction: "top",
      message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          asperiores atque`,
      color: "#E8E5E5",
      textColor: "black",
      children: (
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          asperiores atque
        </div>
      ),
      borderRadius: "5px",
      disabled: true,
    },
  ],
};
export default TOOLTIP_DATA;
