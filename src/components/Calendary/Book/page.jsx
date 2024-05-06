import React from "react";
import s from "./pageBook.module.scss";
import BookId from "./BookId/page";
import { GoPlus } from "react-icons/go";
export default function page() {
  const build = () => {
    window.location.href = "/calendary/fields";
  };
  return (
    <div className={s.book_all}>
      <div className={s.book_flex}>
        <h4>Футбольные поля</h4>
        <div onClick={() => build()} className={s.book_btn}>
          <GoPlus color="#fff" size={20} />
          <h5>Добавить футбольное поле</h5>
        </div>
      </div>
      <div className={s.book_grid}>
        <BookId />
        <BookId />
        <BookId />
        <BookId />
        <BookId />
        <BookId />
        <BookId />
        <BookId />
        <BookId />
      </div>
    </div>
  );
}
