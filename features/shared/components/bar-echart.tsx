'use client';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import { BarChart, LineChart } from 'echarts/charts';
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';

type BarChart = {
  componentType: string;
  componentSubType: string;
  componentIndex: number;
  seriesType: string;
  seriesIndex: number;
  seriesId: string;
  seriesName: string;
  name: string;
  dataIndex: number;
  data: number;
  value: number | string;
  color: string;
  dimensionNames: string[];
  encode: Encode;
  $vars: string[];
  axisDim: string;
  axisIndex: number;
  axisType: string;
  axisId: string;
  axisValue: string;
  axisValueLabel: string;
  marker: string;
};

interface Encode {
  x: number[];
  y: number[];
}

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LineChart,
]);

export default function BarEchart({
  baseCats,
  materials,
}: {
  baseCats: string[];
  materials: (string | number)[];
}) {
  const cats = baseCats;
  const mats = materials;

  const options = {
    grid: { top: 20, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: cats,
      axisTick: { alignWithLabel: true },
      axisLine: { lineStyle: { color: '#bfa787' } },
      axisLabel: {
        color: '#e92063',
        rotate: 50,
        margin: 16,
        fontWeight: 600,
        formatter: function (value: string) {
          return value !== '-' ? `${value}` : '';
        },
      },
    },

    yAxis: {
      type: 'value',
      splitNumber: 3,
      axisLine: { lineStyle: { color: '#bfa787' } },
      axisLabel: {
        color: '#e92063',
        margin: 16,
        fontWeight: 600,
        formatter: function (value: string) {
          return `${value}`;
        },
      },
      splitLine: { lineStyle: { color: '#4a2c3b', width: 1 } },
    },

    series: [
      {
        name: 'Materials',
        type: 'bar',
        data: mats,
        itemStyle: {
          color: (current: { name: string; value: string | number }) => {
            if (current.name === 'Saldo') return '#363642';
            return '#e92063';
          },
          borderRadius: [32, 32, 0, 0],
          shadowBlur: 6,
          shadowColor: 'rgba(0,0,0,0.15)',
        },
        label: {
          show: true,
          position: 'outside',
          color: '#e92063',
          fontWeight: 600,
        },
      },
    ],

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      renderMode: 'html',
      backgroundColor: 'rgba(50,50,50,0.9)',
      borderColor: '#363642',
      formatter: function (params: BarChart[]) {
        console.log(params);

        const data = params[0]; // karena trigger axis, params array
        const value = data.value;

        // Kondisi: kalo value 0 atau null -> tooltip tidak tampil
        if (value === '-') return '';

        return `
          <div class="echarts-tooltip-dark">
            <strong>${data.seriesName}</strong><br/>
            ${data.marker} ${data.name}: <strong>${value}</strong>
          </div>
        `;
      },
    },
  };

  if (cats.length === 0 || mats.length === 0)
    return <h6 className="opacity-50">No data</h6>;

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
