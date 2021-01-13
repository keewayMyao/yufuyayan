<template>
  <!--  ****************************普通用户********************************-->
  <div class="app-container">
    <el-table :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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

      <el-table-column label="玉币" align="center">
        <template slot-scope="scope">
          {{ scope.row.income }}
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="150px">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.$index)">处理</el-button>
          <el-button size="mini" type="danger" @click="deleteUser(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--**********************************处理弹框*********************************************************-->
    <el-dialog title="处理" :visible.sync="dialogVisible" width="70%" >
      <el-form :model="form">
        <el-form-item label="操作身份:" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择身份">
            <el-option label="创始人" value="3"></el-option>
            <el-option label="合伙人" value="2"></el-option>
            <el-option label="代言人" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="determine(isIndex)" >确 定</el-button>
      </div>
    </el-dialog>
<!--**************************************删除弹框***********************************************************-->
    <el-dialog title="删除用户" :visible.sync="dialogTableDelUser" width="70%" >
      <h4>是否删除此用户</h4>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogTableDelUser = false">取 消</el-button>
          <el-button type="primary" @click="delUser(isIndex)">确 定</el-button>
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
  import { getList } from '@/api/table'
  import { getAssignedRole } from '@/api/assignedRole'
  import { delUserById } from '@/api/delUser'

  export default {
    filters: {},
    data() {
      return {
        index:0,
        dialogVisible: false,
        formLabelWidth: '80px',
        dialogTableVisible: false,
        dialogFormVisible: false,
        dialogTableDelUser: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        list: [],
        listLoading: true,
        isIndex:'',
        total: 1000,
        pageSize: 10,
        currentPage: 1,
      }
    },
    created() {
      this.fetchData()
    },
    methods: {

      //获取身份
      fetchData() {
        this.listLoading = true
        //获取用户信息请求
        getList(0).then(response => {
          this.list = response.data //把拿到的数据传给list
          this.total = response.data.length;
          // console.log(this.list)
          this.listLoading = false
        })
          // .catch(err => {
          // console.log(err)
        // })
      },
      //处理弹框
      edit(index) {
        this.isIndex = index + (this.currentPage-1) * this.pageSize

        // console.log(index + (this.currentPage-1) * this.pageSize,'处理')
        this.dialogVisible =  true
      },
      //删除弹框
      deleteUser(index) {
        this.isIndex = index + (this.currentPage-1) * this.pageSize
        // console.log(index + (this.currentPage-1) * this.pageSize,'删除')
        this.dialogTableDelUser =  true
      },

      //确定 传入index
      determine(index) {
        // console.log(index,'确认传入')
        this.$confirm('此操作将修改身份, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        },
        ).then(() => {
          getAssignedRole(this.list[index].userId, this.form.region).then((res) => {
              // console.log('发送请求成功')
              this.$message({
                type: 'success',
                message: '修改成功!'
            })
            //刷新页面
            location.reload();
          });
          this.dialogVisible =  false;
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消修改'
          });
          this.dialogVisible =  false;
        });
      },

      //取消
      cancel() {
        // this.form.region = this.list[this.index].identity;
        this.dialogVisible =  false;
      },

      //删除
      delUser(index) {
        // console.log(index)
        // console.log(this.list[index].userId)
        delUserById(this.list[index].userId).then(res => {
          // console.log(res)
          //刷新页面
          location.reload();
        }).catch(err => {
          // console.log(err)
        })
      },
      current_change(currentPage) {
        this.currentPage = currentPage;
      }
    }
  }

</script>
