<template>
  <div>
    <ul class="mui-table-view">
      <li v-for="item in list" :key="item.id" class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <p>幸福</p>
            <p class="mui-ellipsis">
              <span>发布时间: {{item.add_time|date }}</span>
              <span>点击: 0次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
Date.prototype.format = function(fmt) {
  var o = {
    Y: this.getFullYear(),
    M: this.getMonth() + 1, //月份
    d: this.getDate(), //日
    h: this.getHours(), //小时
    m: this.getMinutes(), //分
    s: this.getSeconds() //秒
  };
  fmt = YYYY + MM + dd;
  return fmt;
};
export default {
  created() {
    this.getnewslist();
  },
  data() {
    return {
      list: ""
    };
  },

  filters: {
    date: function(datenum) {
      return new Date(datenum).format("yyyy-MM-dd hh:mm:ss");
    }
  },
  methods: {
    getnewslist() {
      this.$http.get("http://www.liulongbin.top:3005/api/getnewslist").then(
        res => {
          this.list = res.body.message;
          console.log(this.list);
        },
        err => {
          console.log("error");
        }
      );
    },
    format(fmt) {
      var str = "";
      var str2 = {
        Y: this.getFullYear(),
        M: this.getMonth() + 1, //月份
        d: this.getDate(), //日
        h: this.getHours(), //小时
        m: this.getMinutes(), //分
        s: this.getSeconds() //秒
      };
      // str2 =
    }
  }
};
</script>
<style lang="scss" scoped>
.mui-media-body {
  .mui-ellipsis {
    font-size: 12px;
    color: blue;
    display: flex;
    justify-content: space-between;
  }
}
</style>