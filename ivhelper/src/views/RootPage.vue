<template>
  <div class="root">
      <div class="t1">어떤 면접을 준비 중이신가요?</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RootPage'
});
</script>


<style lang="scss" scoped>
@import "@/assets/styles/anims/fadein.scss";

.root {    
    display: flex;
    flex-direction: column;
    justify-content: center;   
    align-items: center;;
    height: 100%;
}

div.t1 {
    @include font_temp(3);
    @include effect_fadein(0s, 3s);
}
</style>