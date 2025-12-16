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

type PieChart = {
  componentType: string;
  componentSubType: string;
  componentIndex: number;
  seriesType: string;
  seriesIndex: number;
  seriesId: string;
  seriesName: string;
  name: string;
  dataIndex: number;
  data: Data;
  value: number;
  color: string;
  dimensionNames: [];
  encode: Encode;
  $vars: string[];
  percent: number;
  marker: string;
};

interface Encode {
  value: number[];
}

interface Data {
  name: string;
  value: number;
}

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PieChart,
  CanvasRenderer,
  LegendComponent,
]);

export default function PieEchart({
  data,
}: {
  data: Record<string, number | string>[];
}) {
  const options = {
    tooltip: {
      trigger: 'item',
      renderMode: 'html',
      backgroundColor: 'rgba(50,50,50,0.9)',
      borderColor: '#363642',
      formatter: (params: PieChart) => {
        const { marker, seriesName } = params;
        const { name, value } = params.data;

        return `
          <div class="echarts-tooltip-dark">
            <strong>${seriesName}</strong><br/>
            ${marker} ${name}: <strong>${value}</strong>
          </div>
        `;
      },
    },
    legend: {
      top: '0%',
      left: 'center',
    },
    series: [
      {
        name: 'Distribution Transactions',
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
        data: data,
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
