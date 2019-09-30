const now = new Date();
//資料庫路徑
const ref_visitor = firebase.database().ref('visitor');
//bootstrap
$('.dropdown-toggle').dropdown();
//Vue JS
var app = new Vue({
  el: '#app',
  data: {
    visitor: '00000',
    progress: '0%',
    progressFiliter: '0%',
    now: now,
  },
  created: function() {
    //即時讀取資料庫訪客人數
    ref_visitor.on('value', function(snapshot) {
      let leastVisitor = snapshot.val();
      if (leastVisitor < 10) {
        app.visitor = '0000' + leastVisitor;
      } else if (leastVisitor < 100) {
        app.visitor = '000' + leastVisitor;
      } else if (leastVisitor < 1000) {
        app.visitor = '00' + leastVisitor;
      } else if (leastVisitor < 10000) {
        app.visitor = '0' + leastVisitor;
      } else {
        app.visitor = leastVisitor;
      }
    });
    //學期時間進度條
    var startDate = new Date('2019/09/05 20:05');
    var endDate = new Date('2020/01/30 22:30');
    var semester = endDate - startDate;
    var now = new Date();
    var spantime = now - startDate;
    var schedule = (spantime / semester) * 100;
    app.progress = schedule + '%';
    app.progressFiliter = schedule.toFixed(1) + '%';
  },
  mounted: function() {
    //在網頁載入完成是將訪客人數加1並且寫入資料庫
    ref_visitor.once('value', function(snapshot) {
      ref_visitor.set(snapshot.val() + 1);
    });
    //時間計時器
    let _this = this;
    this.timer = setInterval(function() {
      _this.now = new Date();
    }, 500);
  },
  filters: {
    formatNowDate: function(value) {
      const now = new Date(value);
      //民國年
      const yearROC = now.getFullYear() - 1911;
      //月份
      const mon = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
      const month = mon[now.getMonth()];
      //日期
      const day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
      //星期
      const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
      const week = weeks[now.getDay()];
      return yearROC + '年' + month + '月' + day + '日' + ' ' + week;
    },
    formatNowTime: function(value) {
      const now = new Date(value);
      //小時
      const hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
      //分鐘
      const minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
      //秒鐘
      const seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
      return hour + '時' + minutes + '分' + seconds + '秒';
    },
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
});
