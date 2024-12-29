import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/FeedbackForm.css';
import PathToImage from '../images/path-to-image.png'

const FeedbackForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted data:', data);
  };

  return (
    <div className="container">
        <div className="feedback-form-container">
      <form className="feedback-form" onSubmit={handleSubmit(onSubmit)}>
        <h2>Оставьте свой отзыв</h2>

        <label>
          ФИО *
          <input
            type="text"
            {...register('fullName', { required: 'Это поле обязательно' })}
          />
          {errors.fullName && <span className="error-text">{errors.fullName.message}</span>}
        </label>

        <label>
          E-mail *
          <input
            type="email"
            {...register('email', {
              required: 'Это поле обязательно',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@(gmail\.com|mail\.ru|bk\.ru|inbox\.ru|internet\.ru|xmail\.ru|yandex\.ru|yahoo\.com|list\.ru|outlook\.com|hotmail\.com|)$/,
                message: 'Некорректный email'
              }
            })}
          />
          {errors.email && <span className="error-text">{errors.email.message}</span>}
        </label>

        <label>
          Достоинства *
          <textarea
            {...register('advantages', { required: 'Это поле обязательно' })}
          ></textarea>
          {errors.advantages && <span className="error-text">{errors.advantages.message}</span>}
        </label>

        <label>
          Недостатки *
          <textarea
            {...register('disadvantages', { required: 'Это поле обязательно' })}
          ></textarea>
          {errors.disadvantages && <span className="error-text">{errors.disadvantages.message}</span>}
        </label>

        <label>
          Комментарий
          <textarea {...register('comment')}></textarea>
        </label>

        <button type="submit">Отправить</button>
        <p className="consent-text">
          Нажимая кнопку отправить, вы даёте согласие на обработку персональных данных
        </p>
      </form>

      <div className="product-info">
        <img src={PathToImage} alt="New York L 50x40 Tapwing Comfort matt" />
        <p>New York L 50x40 Tapwing Comfort matt</p>
      </div>
    </div>
    </div>
  );
};

export default FeedbackForm;