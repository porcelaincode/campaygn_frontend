<template>
  <div class="dashboard">
    <div class="header">
      <div class="header-text">
        <span><EditOutlined /></span>Topics
      </div>
    </div>
    <div class="widget-controller">
      <div class="stat-box">
        <ImageCard
          :images="props.data.photos"
          overlayTitle="Outfits"
          engagementRate="23"
          value="89"
        />
      </div>
      <div class="stat-box">
        <ImageCard
          :images="props.data.photos"
          overlayTitle="Images"
          engagementRate="23"
          value="89"
        />
      </div>
      <div class="stat-box">
        <h2>Other Unused Tags</h2>
        <UnusedTags :data="props.data.keywords" />
      </div>
      <div class="stat-box">
        <h2>Top mentions</h2>
        <span>48.94% of 25-34 years old</span>
        <BarChart
          :data="[
            {
              name: 'Cities',
              data: [13.8, 4.5, 3.4, 2.1]
            }
          ]"
          :categories="['USA', 'Canada', 'UK', 'Australia', 'Germany']"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { EditOutlined } from '@ant-design/icons-vue'

import ImageCard from './ImageCard.vue'
import UnusedTags from './UnusedTags.vue'

import BarChart from '@Modules/dashboard/components/AudienceMetrics/widgets/BarChart.vue'

const props = defineProps({
  data: {
    type: Object
  }
})
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
  justify-content: start;
  align-items: center;
}

.header-text {
  font-weight: bold;
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
  width: 100%;
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
