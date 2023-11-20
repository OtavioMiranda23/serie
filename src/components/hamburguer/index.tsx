import "./styles.css";
interface IHamburguer {
  isHamburguerActive: boolean;
  closeHamburguer: () => void;
}

export default function Hamburguer({
  isHamburguerActive,
  closeHamburguer,
}: IHamburguer) {
  return (
    <div className={`hamburguer ${isHamburguerActive ? "active" : ""}`}>
      <div className="top-container-hamburguer">
        <div className="logo-hamburguer">
          <img src="./src/assets/LOGO.png" alt="Logo Furia" />
        </div>
        <div className="close-hamburguer" onClick={closeHamburguer}>
          <img src="./src/assets/close.png" alt="Close" />
        </div>
      </div>
      <div className="hamburguer-main-content">
        <div className="hamburguer-menu-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              d="M10.5938 18.875C15.1674 18.875 18.875 15.1674 18.875 10.5938C18.875 6.02014 15.1674 2.3125 10.5938 2.3125C6.02014 2.3125 2.3125 6.02014 2.3125 10.5938C2.3125 15.1674 6.02014 18.875 10.5938 18.875Z"
              stroke="#0D0C0C"
              stroke-width="1.24219"
            />
            <path
              d="M6.86719 14.7344C8.79813 12.7119 12.3686 12.6167 14.3203 14.7344M12.66 8.52344C12.66 9.66683 11.7318 10.5938 10.5867 10.5938C9.44175 10.5938 8.51348 9.66683 8.51348 8.52344C8.51348 7.38004 9.44175 6.45312 10.5867 6.45312C11.7318 6.45312 12.66 7.38004 12.66 8.52344Z"
              stroke="#0D0C0C"
              stroke-width="1.24219"
              stroke-linecap="round"
            />
          </svg>
          <a href="#">Minha Conta/Cadastrar</a>
        </div>
        <div className="hamburguer-menu-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_3161_1742)">
              <path
                d="M19.8617 10.125C19.8311 9.03933 19.7284 8.34702 19.3806 7.75656C18.8854 6.91602 17.9943 6.44813 16.213 5.514L14.5568 4.64447C13.1026 3.88177 12.3755 3.5 11.5938 3.5C10.812 3.5 10.0849 3.88094 8.63072 4.64447L6.97447 5.514C5.19317 6.44813 4.30211 6.91602 3.80689 7.75656C3.3125 8.59628 3.3125 9.6422 3.3125 11.7316V11.8285C3.3125 13.9195 3.3125 14.9654 3.80689 15.8051C4.30211 16.6457 5.19317 17.1135 6.97447 18.0485L8.63072 18.9172C10.0849 19.6807 10.812 20.0625 11.5938 20.0625C12.3755 20.0625 13.1026 19.6816 14.5568 18.918L16.213 18.0485C17.9943 17.1135 18.8854 16.6465 19.3806 15.8059C19.7284 15.2155 19.8311 14.5232 19.8617 13.4375M19.0469 8.05469L15.7344 9.71094M15.7344 9.71094L15.3203 9.91797L11.5938 11.7812M15.7344 9.71094V12.6094M15.7344 9.71094L7.86719 5.57031M11.5938 11.7812L4.14062 8.05469M11.5938 11.7812V19.6484"
                stroke="black"
                stroke-width="1.24219"
                stroke-linecap="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3161_1742">
                <rect
                  width="23.1875"
                  height="23.1875"
                  fill="white"
                  transform="translate(0 0.1875)"
                />
              </clipPath>
            </defs>
          </svg>
          <a href="#">Meus Pedidos</a>
        </div>
        <div className="hamburguer-menu-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_3161_1735)">
              <path
                d="M11.5937 18.5938C11.5937 18.5938 3.3125 14.3778 3.3125 9.40909C3.3125 8.3309 3.76552 7.29686 4.57191 6.53446C5.37829 5.77206 6.47198 5.34375 7.61238 5.34375C9.41116 5.34375 10.952 6.2705 11.5937 7.75284C12.2355 6.2705 13.7763 5.34375 15.5751 5.34375C16.7155 5.34375 17.8092 5.77206 18.6156 6.53446C19.422 7.29686 19.875 8.3309 19.875 9.40909C19.875 14.3778 11.5937 18.5938 11.5937 18.5938Z"
                stroke="#0D0C0C"
                stroke-width="1.24219"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3161_1735">
                <rect
                  width="23.1875"
                  height="23.1875"
                  fill="white"
                  transform="translate(0 0.375)"
                />
              </clipPath>
            </defs>
          </svg>
          <a href="#">Favoritos</a>
        </div>
      </div>
        <div className="hamburguer-menu-item-especial">
          <a href="#">SHOP ALL</a>
        </div>
        <div className="hamburguer-menu-item-especial">
          <a href="#">SHOP ALL</a>
        </div>
    </div>
  );
}
