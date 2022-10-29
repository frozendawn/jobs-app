import { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = () => {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className={`${styles["accordion-wrapper"]}`}>
      <div className={`${styles["heading-wrapper"]}`} onClick={() => setIsActive(prev => !prev)}>
        <p>Accordion</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`${isActive ?  styles["rotate-svg"] : ''}`}
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      <div className={`${styles["accordion--decription-wrapper"]} ${isActive ? `${styles["accordion--active"]}` : ``}`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non tempor tellus. Donec
          mattis pellentesque ex, molestie pretium quam consectetur nec. Nulla ac odio non leo
          scelerisque vehicula id eu urna. Nullam eu rhoncus lorem. Duis libero turpis, lacinia sed
          metus cursus, feugiat feugiat sem. Morbi convallis lectus sed cursus faucibus. Donec
          vehicula ac ante vel pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae;
        </p>
      </div>
    </div>
  );
};

export default Accordion;
