<template>
  <div>主页</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    // console.log(api.root)
    this.get();
  },
  methods: {
    get() {
      let param = {
        gid: "17",
        sdkver: "",
        os: 3,
        mid: "099c230c-907e-4518-b980-01c10f2662b7",
        source: "wap_nj"
      };
      this.$post(this.$api + "/game/init/init", param).then(res => {
        console.log(res); //线上地址可以
      });
    }
  }
};
</script>
<style></style>
