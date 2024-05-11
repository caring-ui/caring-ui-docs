<!--
 * @Author: Wanko
 * @Date: 2024-05-11 09:15:05
 * @LastEditors: Wanko
 * @LastEditTime: 2024-05-11 11:49:42
 * @Description: 
-->
<template>
  <div class="bg-pink-light rounded p flex justify-between mt">
    <div >
      <div class="text-15 font-medium">介绍</div>
      <div class="mt-10 text-14 text-333">
        <slot></slot>
      </div>
    </div>
    <!-- <div class="bg-white p-20 rounded-full shadow" >
     <img :src="imgSrc" class="w-100 h-100"/>
    </div> -->
  </div>
</template>

<script>
  import {FILE_DIR} from '../config'
  export default {
    computed: {
      imgSrc() {
        return `${FILE_DIR}${this.src}`
      }
    },
    props: {
      src:{
        type:String,
        default: ''
      }
    }
  }
</script>

<style scoped>
@import "caring-css";
.bg-pink-light {
  background-color: #f9d7eacc;
}
</style>