<template>
  <div>
    <div>{{ test1 }}</div>
    <div>{{ test2 }}</div>
    <div>{{ test3 }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Mock",
  data: function() {
    return {
      test1: null,
      test2: null,
      test3: null
    };
  },
  created: function() {
    axios
      .get("http://test1.test")
      .then(response => (this.test1 = response.data))
      .catch(() => {});
    axios
      .get("http://test2.test")
      .then(response => (this.test2 = response.data))
      .catch(() => {});
    axios
      .get("http://test3.test")
      .then(response => (this.test3 = response.data))
      .catch(() => {});
  }
};
</script>
