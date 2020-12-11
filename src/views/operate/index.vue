<template>
  <div class="app-container">
    <el-table
      :data="list"
      v-loading="listLoading"
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1}}
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          {{ scope.row.log}}
        </template>
      </el-table-column>

      <el-table-column label="操作时间" width="155">
        <template slot-scope="scope">
          {{ toTime(scope.row.log_time)}}
        </template>
      </el-table-column>
    </el-table>
    <div class="pageNum">
    <el-button-group >
      <el-button  icon="el-icon-arrow-left" @click="previousPage()">上一页</el-button>
    </el-button-group>
    <h3 class="pageH3">第 {{page+1}} 页</h3>
    <el-button-group>
      <el-button  @click="nextPage()">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    </div>

  </div>


</template>

<script>
import { getAssignedRoleLog } from '@/api/assignedRoleLog'

export default {
  data() {
    return {
      list: null,
      listLoading: false,
      page: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      //获取log信息
      getAssignedRoleLog(10, this.page).then(res => {
        // console.log('获取log成功')
        // console.log(res.data)
        this.list = res.data
        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    //上一页
    previousPage(){
      if (this.page === 1){
        this.disabled = true
      }else {
        this.page--
        this.fetchData()
      }
    },
    //下一页
    nextPage(){
      this.page++
      this.fetchData()
    },

    //把后台传入时间格式化
    toTime(strTime) {
      if (!strTime) {
      return '';
      }
      let myDate = new Date(strTime + '+0800');
      if (myDate == 'Invalid Date') {
        strTime = strTime.replace(/T/g, ' '); //去掉T
        strTime = strTime.replace(/-/g, '/');
        strTime = strTime.replace(/\.\d+/, ' ');//去掉毫秒
        myDate = new Date(strTime + '+0800');
      }
      let date = new Date(myDate);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      let d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      let h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      return  y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
    }

  }
}
</script>

<style>
  .pageNum {
    display: flex;
    justify-content: center;
   margin-top: 20px;
  }
  .pageH3 {
    display: flex;
    align-content: center;
    margin: 10px ;
  }
</style>

