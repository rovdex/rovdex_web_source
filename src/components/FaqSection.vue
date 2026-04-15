<script setup>
defineProps({
  faq: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="section faq" id="faq">
    <div class="section-heading compact ani-left">
      <p class="eyebrow">{{ faq.eyebrow }}</p>
      <h2>{{ faq.title }}</h2>
    </div>
    <div class="faq-grid">
      <details :class="index % 2 == 0 ? 'ani-left' : 'ani-right'" v-for="(item, index) in faq.items" :key="item.question">
        <summary>{{ item.question }}</summary>
        <p>{{ item.answer }}</p>
      </details>
    </div>
  </section>
</template>