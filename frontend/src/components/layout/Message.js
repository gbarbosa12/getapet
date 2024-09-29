import { useState } from "react";

import styles from "./Message.module.css";

function Message() {
  let [type, setType] = useState("");

  return (
    <div className={`${styles.message} ${styles[type]}`}>Minha Mensagem</div>
  );
}

export default Message;
