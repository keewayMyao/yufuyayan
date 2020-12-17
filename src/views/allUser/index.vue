<template>
  <!--  ****************************全部用户********************************-->
  <div class="app-container">
    <el-table
      :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      v-loading="listLoading"
      border
      fit
      highlight-current-row
      height="36em"
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ (scope.$index + (currentPage-1) * pageSize)+1 }}
        </template>
      </el-table-column>

      <el-table-column label="昵称">
        <template slot-scope="scope">
          {{ scope.row.nickName }}
        </template>
      </el-table-column>

      <el-table-column label="用户名">
        <template slot-scope="scope">
          {{ scope.row.userName }}
        </template>
      </el-table-column>

      <el-table-column label="身份" align="center">
        <template slot-scope="scope">
          {{ scope.row.userRole }}
        </template>
      </el-table-column>

      <el-table-column label="总佣金" align="center">
        <template slot-scope="scope">
          {{ scope.row.income }}
        </template>
      </el-table-column>

      <el-table-column label="上次结算总佣金" align="center">
        <template slot-scope="scope">
          {{ scope.row.lastIncome }}
        </template>
      </el-table-column>

      <el-table-column label="上次结算日期" align="center">
        <template slot-scope="scope">
          {{ scope.row.settlementTime }}
        </template>
      </el-table-column>

      <el-table-column label="本次可结算佣金" align="center">
        <template slot-scope="scope">
          {{ scope.row.income - scope.row.lastIncome }}
        </template>
      </el-table-column>

      <el-table-column label="佣金" align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="settle(scope.$index)">结算</el-button>
        </template>
      </el-table-column>

    </el-table>
<!--***************************************结算弹框**********************************************-->
    <el-dialog title="结算" :visible.sync="dialogTableSettle" width="70%" >
      <span>是否确定结算本次佣金</span>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogTableSettle = false">取 消</el-button>
          <el-button type="primary" @click="determine(isIndex)">确 定</el-button>
        </span>
    </el-dialog>

<!--*****************************分页***********************************-->
    <el-pagination class="fy"
                   layout="prev, pager, next"
                   @current-change="current_change"
                   :total="total"
                   background
    >
    </el-pagination>

  </div>

</template>

<script>
import { getUser } from '@/api/user'
import { settlement } from '@/api/settlement'

export default {
  filters: {},
  data() {
    return {
      isIndex: '',
      list: [],
      listLoading: false,
      dialogTableSettle: false,
      total: 1000,
      pageSize: 10,
      currentPage: 1
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
        this.total = response.data.length;
        console.log(response)
        this.listLoading = false
      })
    },
    //点击结算传入index
    settle(index) {
      //弹框提示
      this.dialogTableSettle = true
      this.isIndex = index + (this.currentPage-1) * this.pageSize
      console.log(this.isIndex,'结算')
    },
    //确定结算佣金
    determine(index) {
      // console.log(index)
      settlement(this.list[index].userId).then(res => {
        // console.log(res)
        //取消弹框
        this.dialogTableSettle = false
        location.reload();
      }).catch(err => {
        // console.log(err)
        //取消弹框
        this.dialogTableSettle = false
      })

    },
    //
    current_change(currentPage) {
      this.currentPage = currentPage;
    }
  }
}

</script>

<style scoped>
body .el-table th {

  display: table-cell !important

}
</style>

