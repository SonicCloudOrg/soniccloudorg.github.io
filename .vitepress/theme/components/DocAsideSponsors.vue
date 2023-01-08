<template>
  <h2 class="sponsors-aside-text">赞助商 SPONSORS</h2>
  <VPDocAsideSponsors size="xmini" :data="sponsors" />
</template>

<script setup lang="ts">
import { VPDocAsideSponsors } from 'vitepress/theme'
import sponsors from '../config/sponsors'
</script>

<style>
.vp-sponsor-grid-image {
  max-width: 160px !important;
  max-height: 30px !important;
}

.vp-sponsor-grid.xmini .vp-sponsor-grid-link {
  height: 40px;
}

.VPDocAsideSponsors {
  padding-bottom: 1em;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.sponsors-aside-text {
  color: var(--vp-c-text-3);
  display: block;
  margin: 1em 0 1em;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  text-align: center;
}
</style>
