import React from "react";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <div className="main">
      <header className="header">
        <span className="header__title">header</span>
      </header>
      <div className="content">
        <div className="firstFlex">
          <div className="genius">
            <div className="genius__left">
              Гений непредвзято понимает под собой конфликт. Закон внешнего
              мира, очевидно, реально подчеркивает аксиоматичный здравый смысл.
              Культ джайнизма включает в себя поклонение Махавире и другим
              тиртханкарам, поэтому закон исключённого третьего индуцирует
              изоморфный ротор.
            </div>
            <div className="genius__right">
              <div className="genius__item">Чувство однократно</div>
              <div className="genius__item">Морено</div>
            </div>
          </div>
          <div className="workers">
            <div className="workers__left">
              <div className="workers__item">Наши сотрудники</div>
              <div className="workers__item">
                Просветляет понимающий тест
              </div>
              <div className="workers__item">Конформизм</div>
            </div>
            <div className="workers__right">
              <div className="workers__introjection">Интроекция</div>
              <div className="workers__introjection">Наши сотрудники</div>
            </div>
          </div>
        </div>

        <div className="modern">
          <div className="modern__left">
            <div className="modern__item">
              Понятие модернизации понимает механизм власти
            </div>
            <div className="modern__item modern__item_hover">
              Наши сотрудники
              <div className="second__circle">!</div>
            </div>
          </div>
          <div className="modern__right">
            <div className="modern__block">
              <span className="modern__key">Фамилия</span>
              <span className="modern__border"></span>
              <span className="modern__value">Мамай</span>
            </div>
            <div className="modern__block">
              <span className="modern__key">Имя и отчество</span>
              <span className="modern__border"></span>
              <span className="modern__value">
                Станиславаленина Владимировна
              </span>
            </div>
            <div className="modern__block">
              <span className="modern__key">
                Номер полиса выдан заведомо ложный
              </span>
              <span className="modern__border"></span>
              <span className="modern__value">01354879</span>
            </div>
            <div className="modern__block">
              <span className="modern__key">Дата рождения</span>
              <span className="modern__border"></span>
              <span className="modern__value">01.12.1976</span>
            </div>
            <div className="modern__block">
              <span className="modern__key">Телефон</span>
              <span className="modern__border"></span>
              <span className="modern__value">+79254218069</span>
            </div>
          </div>
        </div>
        <div className="lead">
          <div className="lead__left">
            <div className="lead__item">Лидерство</div>
            <div className="lead__item">Невероятный гений</div>
          </div>
          <div className="lead__right">
            <div className="lead__dot">Однако</div>
            <div className="lead__dot">Точка перегиба</div>
            <div className="lead__dot">Длина вектора</div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <span className="footer__title">footer</span>
      </footer>
    </div>
  );
};
