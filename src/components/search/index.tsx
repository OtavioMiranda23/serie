import "./styles.css";
export default function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Buscar" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
      >
        <g clip-path="url(#clip0_3161_1552)">
          <path
            d="M8.79712 15.1426C12.2489 15.1426 15.0471 12.3444 15.0471 8.89258C15.0471 5.4408 12.2489 2.64258 8.79712 2.64258C5.34534 2.64258 2.54712 5.4408 2.54712 8.89258C2.54712 12.3444 5.34534 15.1426 8.79712 15.1426Z"
            stroke="#0D0C0C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.2167 13.312L17.5471 17.6425"
            stroke="#0D0C0C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_3161_1552">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(0.0471191 0.142578)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
