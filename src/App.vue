<script setup lang="ts">
import { onHide, onLaunch, onShow } from "@dcloudio/uni-app";

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
<style lang="scss">
@import "uni.scss";
@import "colorui/main.scss";
@import "colorui/icon.css";
@import "colorui/patch.scss";
@import "colorui/bootstrap-icons.css";
@import "style/al.scss";

page {
  height: 100%;
}
</style>
