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
      <el-table-column align="center" label="序号" width="75">
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

      <el-table-column label="总玉币" align="center">
        <template slot-scope="scope">
          {{ scope.row.income }}
        </template>
      </el-table-column>

      <el-table-column label="上次结算总玉币" align="center">
        <template slot-scope="scope">
          {{ scope.row.lastIncome }}
        </template>
      </el-table-column>

      <el-table-column label="上次结算日期" align="center">
        <template slot-scope="scope">
          {{ scope.row.settlementTime }}
        </template>
      </el-table-column>

      <el-table-column label="本次可结算玉币" align="center">
        <template slot-scope="scope">
          {{ scope.row.income - scope.row.lastIncome }}
        </template>
      </el-table-column>

      <el-table-column label="玉币" align="center"  width="170">
        <template slot-scope="scope">
          <el-button  type="primary" size="mini" @click="settle(scope.$index)">结算</el-button>
          <el-button  type="danger" size="mini" @click="resetUserPas(scope.$index)">重置密码</el-button>

        </template>
      </el-table-column>

    </el-table>
<!--***************************************结算弹框**********************************************-->
    <el-dialog title="结算" :visible.sync="dialogTableSettle" width="70%" >
      <span>是否确定结算本次玉币</span>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogTableSettle = false">取 消</el-button>
          <el-button type="primary" @click="determine(isIndex)">确 定</el-button>
        </span>
    </el-dialog>
    <!--***************************************重置密码**********************************************-->
    <el-dialog title="重置密码" :visible.sync="dialogResetUserPas" width="70%" >
      <span>确定重置密码吗</span>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogResetUserPas = false">取 消</el-button>
          <el-button type="primary" @click="resetUserPas1(isIndex)">确 定</el-button>
        </span>
    </el-dialog>
    <!--***************************************新密码**********************************************-->
    <el-dialog title="新密码" :visible.sync="dialogPassWord" width="70%" >
      <span>新密码为：{{newPas}}</span>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogPassWord = false">取 消</el-button>
          <el-button type="primary" @click="dialogPassWord = false">确 定</el-button>
        </span>
    </el-dialog>
    <!--   *********************************分享成功 **********************************   -->
    <el-dialog title="复制" :visible.sync="dialogCopy" width="100%" height="80%">
      <div >
        <h2>分享链接复制成功</h2>
      </div>
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
import { getUser ,resetPas } from '@/api/user'
import { settlement } from '@/api/settlement'
import Clipboard from 'clipboard'

export default {
  filters: {},
  data() {
    return {
      isIndex: '',
      list: [],
      listLoading: false,
      dialogTableSettle: false, //结算
      dialogResetUserPas: false,  //重置密码
      dialogPassWord: false,  //新密码
      dialogCopy:false, //复制密码
      total: 1000,
      pageSize: 10,
      currentPage: 1,
      newPas:'',
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
        // console.log(response)
        this.listLoading = false
      })
    },
    //点击结算传入index
    settle(index) {
      //弹框提示
      this.dialogTableSettle = true
      this.isIndex = index + (this.currentPage-1) * this.pageSize
      // console.log(this.isIndex,'结算')
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
    //分页
    current_change(currentPage) {
      this.currentPage = currentPage;
    },
    //重置密码弹框
    resetUserPas(index){
      // console.log(index)
      this.dialogResetUserPas = true
      this.isIndex = index + (this.currentPage-1) * this.pageSize
      // console.log(this.isIndex)
    },
    //确定重置密码
    resetUserPas1(index) {
      resetPas(this.list[index].userId).then(res => {
        this.newPas = res.data
        // console.log(this.list[index].userId)
        // console.log(index)
        // console.log(res)
        this.dialogResetUserPas = false
        this.dialogPassWord = true
      })
    },
    //复制新密码
    copy() {
      var clipboard = new Clipboard('.tag-read')
      clipboard.on('success', e => {
        // alert("复制成功")
        this.dialogCopy = true
        // console.log('复制成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        console.log('该浏览器不支持自动复制')
        // alert("该浏览器不支持自动复制")
        // 释放内存
        clipboard.destroy()
      })
    },
  }
}

</script>

<style scoped>
body .el-table th {

  display: table-cell !important

}
</style>

