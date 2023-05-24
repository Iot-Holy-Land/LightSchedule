import { useState } from "react";
import * as S from "./onOff.style";

export const OnOff = () => {
  const audio = new Audio("./img/switch.mp3");
  const [status, setStatus] = useState("");
  const On = () => {
    setStatus("켜짐");
    if (status === "꺼짐") {
      audio.play();
    }
  };

  const Off = () => {
    setStatus("꺼짐");
    if (status === "켜짐") {
      audio.play();
    }
  };
  return (
    <S.Container>
      <S.Switch>
        <S.PushContainer>
          <S.Push status={status}>
            <S.On onClick={On}>
              <div>on</div>
            </S.On>
            <S.Off onClick={Off}>
              <div>off</div>
            </S.Off>
          </S.Push>
        </S.PushContainer>
      </S.Switch>
    </S.Container>
  );
};
