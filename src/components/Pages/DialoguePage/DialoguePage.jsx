import React, { useState } from "react";
import "./DialoguePage.css";
import avatar from "../../../assets/avatar.png";
import cn from "classnames";

export const DialoguePage = () => {
  const [push, setPush] = useState([""]);
  const [value, setValue] = useState("");
  const [side, setSide] = useState(true);

  const setEvent = (event) => {
    setValue(event.target.value);
  };

  const onClick = () => {
    if (!(value === "")) {
      setPush([...push, value]);
      setSide(!side);
    }
  };

  const current = new Date()
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const date = current.toLocaleDateString("ru", options)

  return (
    <div className="dialog">
      <div className="dialog__window">
        <div className="dialog__chat">
            <div className={cn("dialog__date", push.length > 1 ? "dialog__date_block": "dialog__date_none")}>
                {date}
            </div>
            <ul className="dialog__list">
                {push && push.map((el, index) => (
                    <div
                        key={index}
                        className={cn(
                            "dialog__block",
                            index % 2 === 0
                            ? "dialog__block_left"
                            : "dialog__block_right"
                        )}
                    >
                    <img className="dialog__avatar" src={avatar} alt="" />
                    <li className="dialog__item">
                        <div
                        className={cn(
                            index % 2 === 0 && "dialog__item_arrowLeft"
                        )}
                        ></div>
                        <div
                        className={cn(
                            index % 2 === 1 && "dialog__item_arrowRight"
                        )}
                        ></div>
                        <span>{el}</span>
                    </li>
                    </div>
                ))}
            </ul>
        </div>
        <textarea
          className="dialog__textarea"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Введите сообщение..."
          onChange={setEvent}
        ></textarea>
        <button onClick={onClick} className="dialog__btn">
          Отправить
        </button>
      </div>
    </div>
  );
};
