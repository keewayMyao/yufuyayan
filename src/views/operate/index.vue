<template>
  <!--  ****************************log日志********************************-->
  <div class="app-container">
    <el-table
      :data="list"
      v-loading="listLoading"
      border
      fit
      highlight-current-row
      height="36em"
    >
      <el-table-column align="center" label="序号" width="75" >
        <template slot-scope="scope">
          {{ (scope.$index + page * pageSize)+1}}
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          {{ scope.row.log}}
        </template>
      </el-table-column>

      <el-table-column label="操作时间" width="155">
        <template slot-scope="scope">
          {{ scope.row.log_time}}
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
      list: [],
      listLoading: false,
      page: 0 ,
      pageSize: 10
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      //获取log信息
      getAssignedRoleLog(this.pageSize, this.page).then(res => {
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
      if (this.page === 0){
        //禁用按钮
        this.disabled = true
      }else {
        this.page--
        this.fetchData()
      }
    },
    //下一页
    nextPage(){
      // console.log(this.list)
      if(this.list.length !== 10){
        this.disabled = true
      }else {
        this.page++
        this.fetchData()
      }
    },
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

