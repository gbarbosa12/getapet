import api from "../../../utils/api";

import styles from "./AddPet.module.css";

import { useState } from "react";
import { Navigate } from "react-router-dom";

// hooks
import useFlashMessage from "../../../hooks/useFlashMessage";

function AddPet() {
  return (
    <section className={styles.addpet_header}>
      <div>
        <h1>Cadastre um pet</h1>
        <p>Depois ele ficará disponível para adoção.</p>
      </div>
      <p>formulário</p>
    </section>
  );
}

export default AddPet;
