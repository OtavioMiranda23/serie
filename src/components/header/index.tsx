import "./styles.css";
export default function Header() {
  return (
    <header className="header">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="34"
          viewBox="0 0 35 34"
          fill="none"
        >
          <path
            d="M5 7H30M5 17H30M5 27H30"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>
        <img src="./src/assets/LOGO.png" alt="Logo Furia" />
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M3.31682 16.4595L3.71249 14.2155C4.18015 11.5631 4.41397 10.2371 5.33994 9.4519C6.26592 8.66675 7.59606 8.66675 10.2563 8.66675H15.7438C18.404 8.66675 19.7341 8.66675 20.6602 9.4519C21.5861 10.2371 21.8199 11.5631 22.2876 14.2155L22.6833 16.4595C23.3304 20.1296 23.654 21.9647 22.6576 23.1699C21.6613 24.3751 19.8206 24.3751 16.1394 24.3751H9.86065C6.17944 24.3751 4.33883 24.3751 3.34248 23.1699C2.34613 21.9647 2.6697 20.1296 3.31682 16.4595Z"
            stroke="#0D0C0C"
            stroke-width="2.5"
          />
          <path
            d="M8.125 8.66675L8.3068 6.48511C8.51021 4.04423 10.5507 2.16675 13 2.16675C15.4493 2.16675 17.4898 4.04423 17.6932 6.48511L17.875 8.66675"
            stroke="#0D0C0C"
            stroke-width="2.5"
          />
          <path
            d="M16.25 11.9167C16.1092 13.4476 14.6962 14.6251 13 14.6251C11.3038 14.6251 9.89085 13.4476 9.75 11.9167"
            stroke="#0D0C0C"
            stroke-width="2.5"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </header>
  );
}
