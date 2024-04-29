import React from "react";
import s from "./View.module.scss";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

export default function View() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const data = [
    {
      defaultValue: "Ivan",
      defaultValue: "Ivan",
      defaultValue: "Ivan",
      defaultValue: "Ivan",
      defaultValue: "11.04.24",
      defaultValue: "11.04.24",
    },
  ];
  const fromList = [
    { name: "lastName", id: 1 },
    { name: "lastName", id: 2 },
    { name: "firsName", id: 3 },
    { name: "className", id: 4 },
    { name: "jobCategory", id: 5 },
    { name: "calendary", id: 6 },
    { name: "calendarys", id: 6 },
    {
      name: "test",
      ListTest: {
        name: "test",
        name: "test",
        name: "test",
        name: "test",
      },
    },
  ];

  const onSubmit = (data) => {
    console.log(data, "submit");
  };

  return (
    <div className={s.container}>
      <div className={s.user_modal}>
        <div className={s.user_background}>
          <form className={s.user_window} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.block_grid_all}>
              <div className={s.block_grid}>
                <h3>
                  Company Name <span>*</span>
                </h3>
                <input
                  {...register("Name")}
                  defaultValue={"Ivan"}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className={s.block_grid}>
                <h3>
                  Position <span>*</span>
                </h3>
                <input
                  defaultValue={"Ivan"}
                  {...register("lastName")}
                  type="select"
                  placeholder="Name"
                />
              </div>
              <div className={s.block_grid}>
                <h3>
                  Position <span>*</span>
                </h3>
                <input
                  defaultValue={"Ivan"}
                  {...register("firsName")}
                  type="select"
                  placeholder="Name"
                />
              </div>
              <div className={s.block_grid}>
                <h3>
                  Position <span>*</span>
                </h3>
                <input
                  defaultValue={"Ivan"}
                  {...register("className")}
                  type="select"
                  placeholder="Name"
                />
              </div>
              <div className={s.block_grid}>
                <h3>
                  Job Category<span>*</span>
                </h3>
                <Form.Select {...register("jobCategory")}>
                  <option>Choose</option>
                  <option>Default select</option>
                </Form.Select>
              </div>
              <div className={s.block_grid}>
                <h3>
                  Position <span>*</span>
                </h3>
                <input
                  {...register("calendar", { required: true })}
                  type="date"
                  placeholder="Name"
                  defaultValue={"2024-04-11"}
                />
              </div>
              <div className={s.block_grid}>
                <h3>
                  Position <span>*</span>
                </h3>
                <input
                  defaultValue={"Ivan"}
                  {...register("lastName", { required: true })}
                  type="select"
                  placeholder="Name"
                />
              </div>
              <div className={s.block_grid}>
                <h3>
                  Job Category<span>*</span>
                </h3>
                <Form.Select {...register("jobCategory")}>
                  <option>Choose</option>
                  <option>Default select</option>
                </Form.Select>
              </div>
              <div className={s.block_grid}>
                <h3>
                  Position <span>*</span>
                </h3>
                <input
                  defaultValue={"2024-04-11"}
                  {...register("calendary", { required: true })}
                  type="date"
                  placeholder="Name"
                />
              </div>
              <div className={s.block_grid}>
                <h3>
                  Job Category<span>*</span>
                </h3>
                <Form.Select {...register("jobCategory")}>
                  <option>Choose</option>
                  <option>Default select</option>
                </Form.Select>
              </div>
            </div>
            <div>
              <div className={s.big_input}>
                <h3>
                  Description: <span>*</span>
                </h3>
                <textarea
                  defaultValue={"Ivan"}
                  {...register("w3review", { required: true })}
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                ></textarea>
                <div className={s.status}>
                  <h1>Status:</h1>
                  <div className={s.flex_active}>
                    <input type="checkbox" />
                    <p>Active</p>
                  </div>
                  <div className={s.flex_active}>
                    <input type="checkbox" />
                    <p>In Active</p>
                  </div>
                </div>
              </div>
              <div className={`${s.card_footer} ${s.text_end}`}>
                <div>
                  <a className={s.close} href="#">
                    Close
                  </a>
                  <button type="submit" className={s.submit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
