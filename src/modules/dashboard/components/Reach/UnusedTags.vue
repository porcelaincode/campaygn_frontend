<template>
  <div class="widget">
    <ul class="keywords-list">
      <li v-for="tag in props.data" :key="tag">{{ tag }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.widget {
  width: 250px;
  border-radius: 8px;
  color: white;
  flex: 1;
}

.keywords-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
}

.keywords-list li {
  padding: 2px 3px;
  margin: 5px;
  margin-left: 0;
  margin-right: 10px;
  border-radius: 5px;
  color: #ffffffdd;
  border: 1px solid #ffffff88;
  display: inline-block;
  white-space: nowrap;
}
</style>
