<template>
  <canvas :id="canvasId" class="preview_size"></canvas>
</template>

<script>
import bgFront from "@/assets/dev_choc-barWithTextPREVIEW-01.png";
import bgBack from "@/assets/dev_choc-barWithTextPREVIEW-02.png";

export default {
  name: "ImageEditor",
  props: {
    canvasId: String,
    text: String,
    isFront: Boolean,
  },
  methods: {
    drawFront(val) {
      var textInput = val;
      var canvas = document.getElementById(this.canvasId);
      var ctx = canvas.getContext("2d");
      var imageObj = new Image();

      imageObj.src = this.isFront ? bgFront : bgBack;
      imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.font = "15pt PermanentMarker-regular";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.rotate(-0.1 * Math.PI);
        ctx.translate(110, 120);
        ctx.fillText(textInput, 0, 0);
        ctx.restore();
      };
    },
    drawBack(val) {
      var textInput = val;
      var canvas = document.getElementById(this.canvasId);
      var ctx = canvas.getContext("2d");
      var imageObj = new Image();

      imageObj.src = this.isFront ? bgFront : bgBack;
      imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.font = "8pt Open-sas";
        ctx.fillStyle = "#ffffff";
        ctx.translate(60, 50);
        textInput.split(/\n/g).forEach((line, i) => {
          ctx.fillText(line, 0, i * 20);
        });
        ctx.restore();
      };
    },
  },
  mounted() {
    this.isFront ? this.drawFront(this.text) : this.drawBack(this.text);
  },
  watch: {
    text(newVal) {
      this.isFront ? this.drawFront(newVal) : this.drawBack(newVal);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/components/_images.scss";
@import "@/styles/base/_typography.scss";
</style>
