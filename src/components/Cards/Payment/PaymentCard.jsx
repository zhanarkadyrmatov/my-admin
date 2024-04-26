import React from "react";
import s from "./PaymentCard.module.scss";
export default function PaymentCard() {
  return (
    <div>
      <tr className={s.payment_flex}>
        <td className={s.nomers}>1</td>
        <td>Mr. Bobby</td>
        <td>Dr. Jackson</td>
        <td>01 August 2020</td>
        <td>
          <a href=""> Successful</a>
        </td>
        <td>$21.56</td>
      </tr>
    </div>
  );
}
