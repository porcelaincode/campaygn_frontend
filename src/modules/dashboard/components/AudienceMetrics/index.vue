<template>
  <div class="dashboard">
    <div class="header">
      <div class="header-text">
        <span><ProjectOutlined /></span> Audience
      </div>
      <div class="header-score">83.3/100</div>
    </div>
    <div class="widget-controller">
      <div class="stat-box">
        <h2>Gender</h2>
        <span>90.68% of Female</span>
        <PieChart :labels="['Female', 'Male']" :data="[90.68, 9.32]" />
      </div>
      <div class="stat-box">
        <h2>Age range</h2>
        <span>48.94% of 25-34 years old</span>
        <ColumnChart
          :data="[
            {
              name: 'Age Range',
              data: [30, 40, 25, 50, 49, 60]
            }
          ]"
          :categories="['18-24', '25-34', '35-44', '45-54', '55-64', '65+']"
        />
      </div>
      <div class="stat-box">
        <h2>Top countries</h2>
        <span>48.94% of 25-34 years old</span>
        <BarChart
          :data="[
            {
              name: 'Countries',
              data: Object.values(topCountries)
            }
          ]"
          :categories="Object.keys(topCountries)"
        />
      </div>
      <div class="stat-box">
        <h2>Top cities</h2>
        <span>48.94% of 25-34 years old</span>
        <BarChart
          :data="[
            {
              name: 'Cities',
              data: Object.values(topCities)
            }
          ]"
          :categories="Object.values(topCities)"
        />
      </div>
    </div>
    <div class="footer">
      <div class="footer-text"><RedoOutlined /> Last Updated: 08/9/2024</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RedoOutlined, ProjectOutlined } from '@ant-design/icons-vue'

import PieChart from './widgets/PieChart.vue'
import ColumnChart from './widgets/ColumnChart.vue'
import BarChart from './widgets/BarChart.vue'

const props = defineProps({
  data: {
    type: Object
  }
})

const topCountries = () => {
  const countryTotals = props.data.reach.countries.reduce((acc, country) => {
    acc[country.country] = (acc[country.country] || 0) + country.metrics.followers
    return acc
  }, {})
  const totalFollowers = Object.values(countryTotals).reduce((acc, followers) => acc + followers, 0)
  const countryPercentages = {}
  Object.keys(countryTotals).forEach((country) => {
    countryPercentages[country] = ((countryTotals[country] / totalFollowers) * 100).toFixed(2)
  })
  return countryPercentages
}

const topCities = () => {
  const cityTotals = props.data.reach.cities.reduce((acc, city) => {
    acc[city.city] = (acc[city.city] || 0) + city.metrics.followers
    return acc
  }, {})
  const totalFollowers = Object.values(cityTotals).reduce((acc, followers) => acc + followers, 0)
  const cityPercentages = {}
  Object.keys(cityTotals).forEach((city) => {
    cityPercentages[city] = ((cityTotals[city] / totalFollowers) * 100).toFixed(2)
  })
  return cityPercentages
}
</script>

<style scoped>
.dashboard {
  color: white;
  padding: 20px;
  background-color: #2c3346;
  margin: 0;
}

.header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header-text {
  font-size: 16px;
  color: #ffffff99;
}

.header-text span {
  font-size: 20px;
  margin: 0 5px 0 10px;
  color: #bf1a35;
}

.header-score {
  padding: 10px;
  background-color: #5ba845;
  color: #fff;
}

.widget-controller {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.stat-box h2 {
  font-size: 16px;
  color: #ffffff99;
}
.stat-box span {
  font-size: 14px;
  color: #ffffff99;
}

.footer-text {
  font-size: 14px;
  color: #ffffff99;
}
</style>
