<template>
  <div class="widget">
    <apexchart type="bar" :options="chartOptions" :series="props.data" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

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
    type: 'bar',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#d2bd95'],
  xaxis: {
    categories: props.categories,
    labels: {
      style: {
        colors: '#FFFFFF'
      },
      rotate: -45
    },
    axisTicks: {
      show: false
    },
    axisBorder: {
      show: false
    }
  },
  yaxis: {
    labels: {
      show: false
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
  }
})
</script>

<style scoped>
.widget {
  width: 300px;
}
</style>
