import styles from "../styles/components/ArrowButton.module.css";

export default function ArrowButton(props) {
  const { type, size, className } = props;

  const renderArrow = () => {
    switch (type) {
      case "right":
        return (
          <>
            <rect x="7" y="27" width="6" height="6" fill="white" />
            <rect x="13" y="27" width="6" height="6" fill="white" />
            <rect x="19" y="27" width="6" height="6" fill="white" />
            <rect x="25" y="27" width="6" height="6" fill="white" />
            <rect x="31" y="27" width="6" height="6" fill="white" />
            <rect x="43" y="27" width="6" height="6" fill="white" />
            <rect x="37" y="27" width="6" height="6" fill="white" />
            <rect x="49" y="27" width="6" height="6" fill="white" />
            <rect x="43" y="21" width="6" height="6" fill="white" />
            <rect x="43" y="33" width="6" height="6" fill="white" />
            <rect x="37" y="39" width="6" height="6" fill="white" />
            <rect x="31" y="45" width="6" height="6" fill="white" />
            <rect x="37" y="15" width="6" height="6" fill="white" />
            <rect x="31" y="9" width="6" height="6" fill="white" />
          </>
        );
      case "left":
        return (
          <>
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 53 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 47 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 41 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 35 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 29 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 17 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 23 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 11 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 17 21)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 17 33)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 23 39)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 29 45)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 23 15)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 29 9)"
              fill="white"
            />
          </>
        );
    }
  };

  const renderSize = () => {
    switch (size) {
      case "small":
        return "30px";
      case "big":
        return "60px";
    }
  };

  return (
    <div className={className}>
      <svg
        width={renderSize()}
        height={renderSize()}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderArrow()}
      </svg>

      <style jsx>{`
        div {
          width: ${renderSize()};
          height: ${renderSize()};
          background: black;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 1px solid var(--white);
        }
        svg {
          width: 60%;
          height: 60%;
          z-index: 1;
        }
        ::after {
          content: "";
          width: 0%;
          height: 100%;
          position: absolute;
          left: 0;
          background: white;
          transition: 300ms;
          border-top-right-radius: 100%;
          border-bottom-right-radius: 100%;
          border: 1px solid var(--dark);
          box-sizing: border-box;
        }
        div:hover > svg {
          filter: invert(1);
        }
        div:hover::after {
          width: 100%;
          border-top-right-radius: 0%;
          border-bottom-right-radius: 0%;
        }
        @media(max-width: 767px) {
          div {
            max-width: 40px;
            max-height: 40px;
        }
      `}</style>
    </div>
  );
}
