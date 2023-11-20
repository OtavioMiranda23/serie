import { useState } from "react";
import Search from "../search";
import "./styles.css";
import Hamburguer from "../hamburguer";
export default function Header() {
  //create menu hamburguer
  const [isHamburguerActive, setIsHamburguerActive] = useState(false);
  function handleHamburguer() {
    setIsHamburguerActive(!isHamburguerActive);
  }
  //close menu hamburguer
  function handleCloseHamburguer() {
    setIsHamburguerActive(false);
  }
  return (
    <header className="header section">
      <Hamburguer
        isHamburguerActive={isHamburguerActive}
        closeHamburguer={handleCloseHamburguer}
      />
      <div className="header-main">
        <div className="hamburguer-icon" onClick={handleHamburguer}>
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
        <div className="logo-container">
          <img src="./src/assets/LOGO.png" alt="Logo Furia" />
          <div className="categories">
            <div className="hamburguer-menu-item-especial">
              <a href="#">SHOP ALL</a>
            </div>
            <div className="hamburguer-menu-item-especial">
              <a href="#">SHOP ALL</a>
            </div>
          </div>
        </div>
        <div className="bag-mobile">
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
        <div className="header-icons">
          <div>
            <Search />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
          >
            <path
              d="M9 14.875C9 14.875 0.875 10.5 0.875 5.34375C0.875 4.22487 1.31947 3.15181 2.11064 2.36064C2.90181 1.56947 3.97487 1.125 5.09375 1.125C6.85859 1.125 8.37031 2.08672 9 3.625C9.62969 2.08672 11.1414 1.125 12.9062 1.125C14.0251 1.125 15.0982 1.56947 15.8894 2.36064C16.6805 3.15181 17.125 4.22487 17.125 5.34375C17.125 10.5 9 14.875 9 14.875Z"
              stroke="#0D0C0C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_3112_550)">
              <path
                d="M9.99935 18.3333C14.6017 18.3333 18.3327 14.6023 18.3327 9.99996C18.3327 5.39759 14.6017 1.66663 9.99935 1.66663C5.39698 1.66663 1.66602 5.39759 1.66602 9.99996C1.66602 14.6023 5.39698 18.3333 9.99935 18.3333Z"
                stroke="#0D0C0C"
                stroke-width="1.5"
              />
              <path
                d="M6.25 14.1667C8.19308 12.1315 11.786 12.0357 13.75 14.1667M12.0792 7.91671C12.0792 9.06729 11.1452 10 9.99292 10C8.84075 10 7.90664 9.06729 7.90664 7.91671C7.90664 6.76612 8.84075 5.83337 9.99292 5.83337C11.1452 5.83337 12.0792 6.76612 12.0792 7.91671Z"
                stroke="#0D0C0C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3112_550">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M2.55202 12.661L2.85638 10.9349C3.21612 8.89463 3.39598 7.87456 4.10827 7.27059C4.82056 6.66663 5.84374 6.66663 7.8901 6.66663H12.1112C14.1576 6.66663 15.1807 6.66663 15.8931 7.27059C16.6053 7.87456 16.7852 8.89463 17.1449 10.9349L17.4493 12.661C17.9471 15.4842 18.196 16.8958 17.4296 17.8229C16.6632 18.75 15.2472 18.75 12.4156 18.75H7.58573C4.75403 18.75 3.33818 18.75 2.57176 17.8229C1.80533 16.8958 2.05423 15.4842 2.55202 12.661Z"
              stroke="#0D0C0C"
              stroke-width="1.5"
            />
            <path
              d="M6.25 6.66663L6.38985 4.98844C6.54632 3.11084 8.11589 1.66663 10 1.66663C11.8841 1.66663 13.4537 3.11084 13.6102 4.98844L13.75 6.66663"
              stroke="#0D0C0C"
              stroke-width="1.5"
            />
            <path
              d="M12.5 9.16663C12.3917 10.3442 11.3047 11.25 10 11.25C8.69525 11.25 7.60835 10.3442 7.5 9.16663"
              stroke="#0D0C0C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_3112_558)">
                <path
                  d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                  stroke="#0D0C0C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.875 9.99998C6.875 12.9265 7.91641 15.5406 9.55312 17.3039C9.60998 17.3657 9.67906 17.4151 9.75598 17.4489C9.8329 17.4826 9.91599 17.5001 10 17.5001C10.084 17.5001 10.1671 17.4826 10.244 17.4489C10.3209 17.4151 10.39 17.3657 10.4469 17.3039C12.0836 15.5406 13.125 12.9265 13.125 9.99998C13.125 7.07341 12.0836 4.45935 10.4469 2.69607C10.39 2.63423 10.3209 2.58486 10.244 2.55109C10.1671 2.51731 10.084 2.49988 10 2.49988C9.91599 2.49988 9.8329 2.51731 9.75598 2.55109C9.67906 2.58486 9.60998 2.63423 9.55312 2.69607C7.91641 4.45935 6.875 7.07341 6.875 9.99998Z"
                  stroke="#0D0C0C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.92578 7.5H17.0727"
                  stroke="#0D0C0C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.92578 12.5H17.0727"
                  stroke="#0D0C0C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3112_558">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Português, BR</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <g clip-path="url(#clip0_3112_565)">
                <path d="M4.5 2.25L8.25 6L4.5 9.75" fill="#0D0C0C" />
              </g>
              <defs>
                <clipPath id="clip0_3112_565">
                  <rect width="12" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>

      <div className="search-mobile">
        <Search />
      </div>
    </header>
  );
}
