<template>
  <div class="app-container">
    <el-table :data="list" border fit highlight-current-row>
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

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.$index)">处理</el-button>
          <el-dialog title="处理" :visible.sync="dialogVisible" width="25%" >
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
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getList } from '@/api/table'
  import { getAssignedRole } from '@/api/assignedRole'

  export default {
    filters: {},
    data() {
      return {
        index:0,
        dialogVisible: false,
        formLabelWidth: '80px',
        dialogTableVisible: false,
        dialogFormVisible: false,
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
        list: null,
        listLoading: true,
        isIndex:''
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
          // console.log(this.list)
          this.listLoading = false
        })
          // .catch(err => {
          // console.log(err)
        // })
      },
      //处理
      edit(index) {
        this.isIndex = index
        // console.log(this.isIndex,'处理')
        this.dialogVisible =  true
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
          }
          );
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
      }
    }
  }

</script>
