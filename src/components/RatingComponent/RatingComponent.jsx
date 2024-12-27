import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";
import s from "./RatingComponent.module.scss";
import { fetchRating } from "../../store/slice/ratingSlice";

const RatingComponent = ({ fieldId, days }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.rating);

  useEffect(() => {
    dispatch(fetchRating({ fieldId, days }));
  }, [dispatch, fieldId, days]);

  const ratings = data?.ratings_last_week || {};
  const totalReviews = Object.values(ratings).reduce(
    (acc, count) => acc + count,
    0
  );
  const averageRating = data?.average_rating_last_week || 0;

  const getPercentage = (count) =>
    totalReviews ? (count / totalReviews) * 100 : 0;

  return (
    <div className={s.Classico}>
      <div className={s.Classico_1}>
        <h1 className={s.ratingScore}>{averageRating.toFixed(1)}</h1>
        <Rating
          name="half-rating"
          readOnly
          value={averageRating}
          precision={0.5}
          className={s.ratingStars}
        />
        <p className={s.reviewCount}>{totalReviews} отзывов</p>
      </div>

      <ul className={s.ratingList}>
        {Object.entries(ratings).map(([rating, count]) => (
          <li key={rating} className={s.ratingListLi}>
            <span>{rating}</span>
            <div className={s.barWrapper}>
              <div
                className={s.bar}
                style={{ width: `${getPercentage(count)}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RatingComponent;
