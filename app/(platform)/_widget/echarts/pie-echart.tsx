'use client';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import { PieChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([]);

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PieChart,
  CanvasRenderer,
  LegendComponent,
]);

export default function PieEchart({
  saldos,
}: {
  saldos: Record<string, number | string>[];
}) {
  const options = {
    tooltip: {
      trigger: 'item',
      renderMode: 'html',
      backgroundColor: 'rgba(50,50,50,0.9)',
      borderColor: '#363642',
    },
    legend: {
      top: '0%',
      left: 'center',
    },
    series: [
      {
        name: 'Saldo',
        type: 'pie',
        radius: ['40%', '60%'],
        itemStyle: {
          color: (current: { name: string; value: string | number }) => {
            if (current.name === 'Expense') return '#e92063';
            return '#363642';
          },
          borderRadius: 10,
        },
        label: {
          show: true,
          textShadowColor: 'transparent',
          borderWidth: 0,
          borderType: 'solid',
          textBorderType: 'solid',
          color: '#e92063',
          position: 'outside',
        },
        labelLine: {
          show: true,
        },
        data: saldos,
      },
    ],
  };

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={options}
      notMerge={true}
      lazyUpdate={true}
      theme={'theme_name'}
    />
  );
}
