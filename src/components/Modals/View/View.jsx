import React from "react";
import { useForm } from "react-hook-form";
import s from "./View.module.scss";

export default function View() {
  const { register, handleSubmit } = useForm();

  return (
    <div className={s.container}>
      <div className={s.user_modal}>
        <div className={s.user_background}>
            
        </div>
      </div>
    </div>
  );
}
