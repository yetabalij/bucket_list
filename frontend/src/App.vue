<template>
  <div id="app">
    <div class="notification" v-for="(item, i) in items" :key="item._id">
      <p>
        <span class="tag is-primary">{{ i + 1 }}</span>
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      items: [],
    };
  },

  async mounted() {
    const response = await axios.get(
      "http://localhost:5000/api/getallbucketlist"
    );
    this.items = response.data.bucketlist;
  },
};
</script>

<style>
#app {
  margin: auto;
  margin-top: 3rem;
  max-width: 700px;
}
</style>
