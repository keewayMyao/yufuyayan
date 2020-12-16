<template>
  <div class="app-container">
    <h3 style="text-align: center">已邀请的用户列表</h3>
    <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
    <el-table
      :data="sonList"
      border
      fit
      highlight-current-row>
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column label="昵称">
        <template slot-scope="scope">
          {{ scope.row.nickName}}
        </template>
      </el-table-column>


      <el-table-column label="身份" align="center">
        <template slot-scope="scope">
          {{ scope.row.userRole }}
        </template>
      </el-table-column>

      <el-table-column label="邀请日期" align="center">
        <template slot-scope="scope">
          {{ scope.row.createTime }}
        </template>
      </el-table-column>


    </el-table>


  </div>

</template>

<script>

import { queryUserListById } from '@/api/user'


  export default {
    filters: {},
    data() {
      return {
        sonList: null,
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      //获取身份
      fetchData() {
        // console.log(this.$store.state.user.userId)

        queryUserListById("son", this.$store.state.user.userId).then(res => {
          console.log(res)
          // this.sonNum = res.data.length
          this.sonList = res.data
        }).catch(err => {
          console.log(err)
        })
      },
    },
    // components: {
    //   tab
    // }
  }

</script>
