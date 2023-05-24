import React from "react";
import * as S from "./chart.style";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

Chart.defaultProps = {
  commitData: [
    {
      name: "2020",
      commit: 200,
    },
    {
      name: "2021",
      commit: 15,
    },
    {
      name: "2022",
      commit: 704,
    },
  ],
};

export function Chart({ graphTitle, commitData }: any) {
  return (
    <S.Container>
      <S.Title>{graphTitle} 커밋 추이</S.Title>
      <S.Wrapper>
        {commitData && (
          <LineChart width={350} height={280} data={commitData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="commit"
              stroke="#6ABD8C"
              activeDot={{ r: 2 }}
              isAnimationActive={false}
            />
          </LineChart>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
