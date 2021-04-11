<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showToast">Show Toast</button>
  </div>
</template>
<script>
export default {
  name: "About",
  methods: {
    showToast() {
      this.$notify({
        group: "foo",
        type: "succes", // puede ser warn o error
        title: "Important message",
        text: "Hello user!"
      });
    }
  }
};
</script>