<template>
  <div class="widget">
    <apexchart type="bar" :options="chartOptions" :series="props.data" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  size: {
    type: Number,
    default: 100
  }
})

const chartOptions = ref({
  chart: {
    width: props.size,
    type: 'bar',
    stacked: true,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%', // Adjust this value to increase the gap
      dataLabels: {
        position: 'top'
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#c77d7d'],
  xaxis: {
    categories: props.categories,
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    },
    labels: {
      show: false
    },
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    labels: {
      show: false,
      style: {
        colors: '#FFFFFF'
      }
    },
    tooltip: {
      enabled: false
    }
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: false
      }
    },
    tooltip: {
      enabled: false
    }
  },
  // dataLabels: {
  //   enabled: true,
  //   formatter: function (val, opt) {
  //     return opt.w.globals.labels[opt.dataPointIndex]
  //   },
  //   offsetX: 0,
  //   offsetY: -10,
  //   style: {
  //     fontSize: '12px',
  //     colors: ['#fff']
  //   },
  //   textAnchor: 'left'
  // },
  dataLabels: {
    enabled: true,
    textAnchor: 'end',
    style: {
      colors: ['#fff'],
      fontSize: '14px',
      fontFamily: 'Open Sans, sans-serif'
    },
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ' ' + val + ' %'
    },
    offsetX: 0,
    offsetY: 0,
    dropShadow: {
      enabled: false
    }
  },
  fill: {
    type: ['gradient', 'solid'],
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 1,
      gradientToColors: ['#FFA07A'], // Light Salmon
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 90]
    }
  },
  stroke: {
    colors: ['transparent'],
    width: 5
  },
  options: {
    plotOptions: {
      bar: {
        borderRadius: 10,
        borderRadiusApplication: 'end'
        // borderRadiusWhenStacked: 'last',
      }
    }
  }
})
</script>

<style scoped>
.widget {
  width: 250px;
}
</style>
