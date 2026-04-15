<script setup>
defineProps({
  navLinks: {
    type: Array,
    required: true,
  },
  currentLocale: {
    type: String,
    required: true,
  },
  menuAriaLabel: {
    type: String,
    required: true,
  },
  ctaLabel: {
    type: String,
    required: true,
  },
  isMenuOpen: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["toggle-menu", "close-menu", "switch-language"]);
</script>

<template>
  <header class="topbar">
    <a class="brand" href="#top" @click="$emit('close-menu')">
      <span class="brand-mark"></span>
      <span>Rovdex</span>
    </a>

    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="String(isMenuOpen)"
      aria-controls="site-nav"
      :aria-label="menuAriaLabel"
      @click="$emit('toggle-menu')"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div id="site-nav" class="nav-shell" :class="{ open: isMenuOpen }">
      <nav class="nav">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="$emit('close-menu')"
        >
          {{ link.label }}
        </a>
      </nav>
      <div class="language-switch" role="group" aria-label="Language switch">
        <button
          class="language-button"
          type="button"
          :class="{ active: currentLocale === 'zh-CN' }"
          @click="$emit('switch-language', 'zh-CN')"
        >
          中
        </button>
        <button
          class="language-button"
          type="button"
          :class="{ active: currentLocale === 'en' }"
          @click="$emit('switch-language', 'en')"
        >
          EN
        </button>
      </div>
      <a class="button ghost nav-cta" href="#contact" @click="$emit('close-menu')">{{ ctaLabel }}</a>
    </div>
  </header>
</template>