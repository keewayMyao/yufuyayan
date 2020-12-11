<template>
  <div class="app-container">
    <el-table :data="list" border fit highlight-current-row>
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column label="用户名" width="120" align="center">
        <template slot-scope="scope">
          {{ scope.row.userName}}
        </template>
      </el-table-column>

      <el-table-column label="身份" align="center">
        <template slot-scope="scope">
          {{ scope.row.identity }}
        </template>
      </el-table-column>

      <el-table-column label="创建日期" align="center">
        <template slot-scope="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>

      <el-table-column label="佣金" align="center">
        <template slot-scope="scope">
          {{ scope.row.commission }}
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data() {
    return {
      list: [{
        userName: '张三',
        identity: '创始人',
        date: '2020-11-27',
        commission: '0'
      },
        {
          userName: '张三',
          identity: '创始人',
          date: '2020-11-27',
          commission: '0'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
