import React, { useState } from "react";
import blockimage from "../../../img/blockimage.svg";
import edit from "../../../img/edit.svg";
import ball from "../../../img/ball.svg";
import star from "../../../img/star.svg";
import star2 from "../../../img/star2.svg";
import s from "./page.module.scss";
import { NavLink } from 'react-router-dom';


export default function BookId() {
  return (
    <div>
      <div className={s.page_block_all}>
        <div className={s.pages_block}>
          <div className={s.page_img}>
            <div className={s.page_block_big_img}>
              <div className={s.page_edit}>
                <img className={s.edit} src={edit} alt="" />
              </div>
              <NavLink to={'/fields/id'}>
                <img className={s.big_img} src={blockimage} alt="" />
              </NavLink>
              <div className={s.page_price}>
                <h4>1 000 сом / час</h4>
              </div>
            </div>
          </div>
          <div className={s.page_block_back}>
            <div className={s.page_beetwen}>
              <div className={s.page_grid}>
                <h4>El Clasico</h4>
                <p>Спортивный комплекс</p>
              </div>
              <small>26 км</small>
            </div>
            <div className={s.page_block_end}>
              <div className={s.page_block_flex}>
                <img src={ball} alt="" />
                <img src={ball} alt="" />
                <img src={ball} alt="" />
                <img src={ball} alt="" />
              </div>
              <div className={s.page_flex_beetwen}>
                <div>
                  <h5>3.0 (2)</h5>
                </div>
                <div className={s.flex_beetwen}>
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star2} alt="" />
                  <img src={star2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
