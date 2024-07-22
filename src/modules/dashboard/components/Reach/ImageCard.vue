<template>
  <div class="widget">
    <div class="overlay-container">
      <img :src="props.images[0].url" :alt="props.overlayTitle" class="outfit-image" />
      <div class="overlay">
        <span>{{ props.overlayTitle }}</span>
        <span class="count">{{ props.images.length }}</span>
      </div>
    </div>
    <div class="metrics">
      <div class="metric">
        <span>Engagement Rate: {{ props.engagementRate }}%</span>
      </div>
      <div class="metric">
        <span>Value: {{ props.value }}%</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  overlayTitle: {
    type: String,
    required: true
  },
  engagementRate: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})
</script>

<style scoped>
.widget {
  padding: 1rem;
  border-radius: 8px;
  color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.overlay-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
}

.outfit-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.overlay {
  position: absolute;
  width: 80%;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
}

.overlay span {
  font-size: 14px;
  font-weight: bold;
}

.count {
  font-size: 12px;
  margin-top: 0.5rem;
}

.metrics {
  margin-top: 1rem;
  width: 100%;
}

.metric {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
}
</style>
