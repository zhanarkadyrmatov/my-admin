import React from "react";
import s from "./Payment.module.scss";
import PaymentCard from "../../components/Cards/Payment/PaymentCard";
export default function Payment() {
  return (
    <div>
      <div
        className={`${s.historyPayment} dark:bg-[#212130] dark:text-[#8888]`}
      >
        <div
          className={`${s.historyPayment__title} dark:bg-[#212130] dark:text-[#8888]`}
        >
          <h4>History Payment</h4>
        </div>
        <div
          className={`${s.payment_table} dark:bg-[#212130] dark:text-[#8888] `}
        >
          <div className={s.payment_block}>
            <tr className={s.payment_flex}>
              <th>№</th>
              <th>PATIENT</th>
              <th> DR NAME</th>
              <th> DATE</th>
              <th> STATUS</th>
              <th>PRICE</th>
            </tr>
            <div>
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
              <PaymentCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
