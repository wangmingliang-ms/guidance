<script setup lang="ts">
import {onHide, onLaunch, onShow} from "@dcloudio/uni-app";

onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
@import "colorui/main.css";
@import "colorui/icon.css";
@import "colorui/patch.css";
</style>
