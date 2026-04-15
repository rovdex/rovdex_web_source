<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import { scrollAnimate } from "./utils/scrollAnimate";
import { LOCALE_STORAGE_KEY } from "./i18n";
import AnnouncementBar from "./components/AnnouncementBar.vue";
import SiteHeader from "./components/SiteHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import TrustStripSection from "./components/TrustStripSection.vue";
import SystemSection from "./components/SystemSection.vue";
import CapabilitiesSection from "./components/CapabilitiesSection.vue";
import UseCasesSection from "./components/UseCasesSection.vue";
import ProofSection from "./components/ProofSection.vue";
import WorkflowSection from "./components/WorkflowSection.vue";
import FaqSection from "./components/FaqSection.vue";
import QuoteSection from "./components/QuoteSection.vue";
import SiteFooter from "./components/SiteFooter.vue";

const isMenuOpen = ref(false);
const { locale, tm } = useI18n();
const siteContent = computed(() => tm("siteContent"));
let observer = null;

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function switchLanguage(targetLocale) {
  if (locale.value === targetLocale) {
    return;
  }
  window.localStorage.setItem(LOCALE_STORAGE_KEY, targetLocale);
  closeMenu();
  window.location.reload();
}

function handleResize() {
  if (window.innerWidth > 960) {
    closeMenu();
  }
}

onMounted(() => {
  scrollAnimate.init();
  window.addEventListener("resize", handleResize, { passive: true });
  handleResize();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  observer?.disconnect();
});
</script>

<template>
  <div class="page-shell" id="top">
    <AnnouncementBar class="ani-top" :announcement="siteContent.announcement" />
    <SiteHeader
      :nav-links="siteContent.navLinks"
      :current-locale="locale"
      :menu-aria-label="siteContent.menuAriaLabel"
      :cta-label="siteContent.headerCta"
      :is-menu-open="isMenuOpen"
      @toggle-menu="toggleMenu"
      @close-menu="closeMenu"
      @switch-language="switchLanguage"
    />

    <main>
      <HeroSection :hero="siteContent.hero" :hero-panel="siteContent.heroPanel" />
      <TrustStripSection class="ani-bottom" :trust="siteContent.trust" />
      <SystemSection :system="siteContent.system" />
      <CapabilitiesSection :capabilities="siteContent.capabilities" />
      <UseCasesSection :use-cases="siteContent.useCases" :playbook="siteContent.playbook" />
      <ProofSection :proof="siteContent.proof" />
      <WorkflowSection :workflow="siteContent.workflow" />
      <FaqSection :faq="siteContent.faq" />
      <QuoteSection :quote="siteContent.quote" />
    </main>

    <SiteFooter :footer="siteContent.footer" />
  </div>
</template>