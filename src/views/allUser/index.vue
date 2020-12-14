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
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column label="昵称">
        <template slot-scope="scope">
          {{ scope.row.nickName}}
        </template>
      </el-table-column>

      <el-table-column label="用户名">
        <template slot-scope="scope">
          {{ scope.row.userName}}
        </template>
      </el-table-column>

      <el-table-column label="身份" align="center">
        <template slot-scope="scope">
          {{ scope.row.userRole }}
        </template>
      </el-table-column>

      <el-table-column label="创建日期" align="center">
        <template slot-scope="scope">
          {{ scope.row.createTime }}
        </template>
      </el-table-column>

      <el-table-column label="佣金" align="center">
        <template slot-scope="scope">
          {{ scope.row.income }}
        </template>
      </el-table-column>

    </el-table>
  </div>

</template>

<script>
import { getUser } from '@/api/user'


export default {
  filters: {},
  data() {
    return {
      list: null,
      listLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    //获取全部用户信息
    fetchData() {
      this.listLoading = true
      getUser().then(response => {
        this.list = response.data
        // console.log(response)
        this.listLoading = false
      })
    }
  }
}

</script>

