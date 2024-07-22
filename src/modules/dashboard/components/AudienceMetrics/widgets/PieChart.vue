<template>
  <div class="widget">
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="seriesData"
      :colors="['#FF69B4', '#111']"
    ></apexchart>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  labels: {
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
    type: 'donut'
  },
  labels: props.labels,
  colors: ['#111'],
  legend: { show: false },
  plotOptions: {
    pie: {
      donut: {
        size: '80%'
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
  },
  stroke: {
    width: 0
  }
})
const seriesData = ref(props.data)
</script>

<style scoped>
.widget {
  width: 200px;
  margin-top: 30px;
}
text {
  color: white;
}
</style>
