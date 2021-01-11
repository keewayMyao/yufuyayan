<!--<template>-->
<!--  &lt;!&ndash;  ****************************代言人********************************&ndash;&gt;-->
<!--  <div class="app-container">-->
<!--    <el-table-->
<!--      :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"-->
<!--      border-->
<!--      fit-->
<!--      highlight-current-row-->
<!--      height="36em"-->
<!--    >-->
<!--      <el-table-column align="center" label="序号" width="75">-->
<!--        <template slot-scope="scope">-->
<!--          {{ (scope.$index + (currentPage-1) * pageSize)+1 }}-->
<!--        </template>-->
<!--      </el-table-column>-->

<!--      <el-table-column label="昵称">-->
<!--        <template slot-scope="scope">-->
<!--          {{ scope.row.nickName}}-->
<!--        </template>-->
<!--      </el-table-column>-->

<!--      <el-table-column label="用户名">-->
<!--        <template slot-scope="scope">-->
<!--          {{ scope.row.userName}}-->
<!--        </template>-->
<!--      </el-table-column>-->

<!--      <el-table-column label="身份" align="center">-->
<!--        <template slot-scope="scope">-->
<!--          {{ scope.row.userRole }}-->
<!--        </template>-->
<!--      </el-table-column>-->

<!--      <el-table-column label="创建日期" align="center">-->
<!--        <template slot-scope="scope">-->
<!--          {{ scope.row.createTime }}-->
<!--        </template>-->
<!--      </el-table-column>-->

<!--      <el-table-column label="佣金" align="center">-->
<!--        <template slot-scope="scope">-->
<!--          {{ scope.row.income }}-->
<!--        </template>-->
<!--      </el-table-column>-->


<!--    </el-table>-->

<!--    &lt;!&ndash;*****************************分页***********************************&ndash;&gt;-->
<!--    <el-pagination class="fy"-->
<!--                   layout="prev, pager, next"-->
<!--                   @current-change="current_change"-->
<!--                   :total="total"-->
<!--                   background-->
<!--    >-->
<!--    </el-pagination>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import { getList } from '@/api/table'-->

<!--  export default {-->
<!--    filters: {},-->
<!--    data() {-->
<!--      return {-->
<!--        list: [],-->
<!--        listLoading: false,-->
<!--        total: 1000,-->
<!--        pageSize: 10,-->
<!--        currentPage: 1-->
<!--      }-->
<!--    },-->
<!--    created() {-->
<!--      this.fetchData()-->
<!--    },-->
<!--    methods: {-->
<!--      //获取身份-->
<!--      fetchData() {-->
<!--        this.listLoading = true-->
<!--        getList(1).then(response => {-->
<!--          this.list = response.data-->
<!--          this.total = response.data.length;-->
<!--          this.listLoading = false-->
<!--        }).catch(err => {-->
<!--          console.log(err)-->
<!--        })-->
<!--      },-->
<!--      current_change(currentPage) {-->
<!--        this.currentPage = currentPage;-->
<!--      }-->
<!--    }-->
<!--  }-->

<!--</script>-->

<template>
  <div>
    <el-table
      :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      v-loading="listLoading"
      style="width: 100%"
      row-key="userId"
      border
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">

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
import { queryUserListById } from '@/api/user'


export default {
  filters: {},
  data() {
    return {
      list: [],
      children: [],
      listLoading: false,
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
      // 返回身份id为3的用户列表
      getList(1).then(res => {
        // console.log(res.data)
        this.list = res.data
        this.total = res.data.length;
        this.listLoading = false
      })
    },
    current_change(currentPage) {
      this.currentPage = currentPage;
    },
    load(tree, treeNode, resolve) {
      // console.log(tree.userId)
      // console.log(treeNode)
      //获取用户的直推人数跟列表   传入son 是直推， 传入 grandson 是间推
      queryUserListById('son', tree.userId).then(res => {
        // console.log(res.data)
        this.children = res.data

      })
      setTimeout(() => {
        resolve(this.children)
      }, 1000)
    }
  },
}
</script>
