<template>
  <canvas :id="canvasId" class="preview_size"></canvas>
</template>

<script>
import bgFront from "@/assets/dev_choc-barWithTextPREVIEW-01.png"; //Please be careful about image path It should be correct as per your image directory.
import bgBack from "@/assets/dev_choc-barWithTextPREVIEW-02.png"; //Please be careful about image path It should be correct as per your image directory.

export default {
  name: "ImageEditor",
  props: {
    canvasId: String,
    text: String,
    isFront: Boolean,
  },
  mounted() {
    var frontSide = this.isFront;
    var textInput = this.text;
    var canvas = document.getElementById(this.canvasId);
    var ctx = canvas.getContext("2d");
    var imageObj = new Image();

    imageObj.src = this.isFront ? bgFront : bgBack;
    imageObj.onload = function () {
      ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
      ctx.save();
      if (frontSide) {
        ctx.font = "15pt PermanentMarker-regular";
      } else {
        ctx.font = "10pt Open-sas";
      }
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.translate(150, 100);
      if (frontSide) {
        ctx.rotate(-0.1 * Math.PI);
      }
      ctx.fillText(textInput, 0, 0);
      ctx.restore();
    };
  },
  watch: {
    text(newVal) {
      var frontSide = this.isFront;
      var canvas = document.getElementById(this.canvasId);
      var ctx = canvas.getContext("2d");
      var imageObj = new Image();
      imageObj.src = this.isFront ? bgFront : bgBack;
      imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
        ctx.save();
        if (frontSide) {
          ctx.font = "15pt PermanentMarker-regular";
        } else {
          ctx.font = "10pt Open-sas";
        }
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        if (frontSide) {
          ctx.rotate(-0.1 * Math.PI);
        }
        if (frontSide) {
          ctx.translate(150, 80);
          ctx.fillText(newVal, 0, 0);
        } else {
          ctx.translate(150, 50);
          newVal.split(/\n/g).forEach((line, i) => {
            ctx.fillText(line, 0, i * 20);
          });
        }
        ctx.restore();
      };
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/components/_images.scss";
@import "@/styles/base/_typography.scss";
</style>
