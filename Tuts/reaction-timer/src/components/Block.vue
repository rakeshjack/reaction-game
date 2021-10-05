<template>
  <div class="blocks" v-if="showBlock" @click="stopTimer">
      click me
  </div>
</template>

<script>
import { onUnmounted } from '@vue/runtime-core';
export default {
    props:['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTimer: 0,
        }
    },
    mounted() {
        setTimeout(()=> {
            this.showBlock = true;
            this.startTimer();
        }, this.delay);
    },
    methods: {
        startTimer() {
            this.timer = setInterval(()=> {
                this.reactionTimer += 10;
            }, 10);
        },
        stopTimer() {
            clearInterval(this.timer);
            console.log(this.reactionTimer, 'reaction Time');
            this.$emit('end', this.reactionTimer);
        }
    }
}
</script>

<style>
    .blocks {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color:white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>