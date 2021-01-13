<!--<template>-->
<!--&lt;!&ndash;  ****************************创始人********************************&ndash;&gt;-->
<!--  <div class="app-container">-->
<!--&lt;!&ndash;    <el-table&ndash;&gt;-->
<!--&lt;!&ndash;      :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"&ndash;&gt;-->
<!--&lt;!&ndash;      v-loading="listLoading"&ndash;&gt;-->
<!--&lt;!&ndash;      border&ndash;&gt;-->
<!--&lt;!&ndash;      fit&ndash;&gt;-->
<!--&lt;!&ndash;      highlight-current-row&ndash;&gt;-->
<!--&lt;!&ndash;      height="36em"&ndash;&gt;-->
<!--&lt;!&ndash;    >&ndash;&gt;-->
<!--&lt;!&ndash;      <el-table-column align="center" label="序号" width="75">&ndash;&gt;-->
<!--&lt;!&ndash;        <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;          {{ (scope.$index + (currentPage-1) * pageSize)+1 }}&ndash;&gt;-->
<!--&lt;!&ndash;        </template>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-table-column>&ndash;&gt;-->

<!--&lt;!&ndash;      <el-table-column label="昵称">&ndash;&gt;-->
<!--&lt;!&ndash;        <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;          {{ scope.row.nickName}}&ndash;&gt;-->
<!--&lt;!&ndash;        </template>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-table-column>&ndash;&gt;-->

<!--&lt;!&ndash;      <el-table-column label="用户名">&ndash;&gt;-->
<!--&lt;!&ndash;        <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;          {{ scope.row.userName}}&ndash;&gt;-->
<!--&lt;!&ndash;        </template>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-table-column>&ndash;&gt;-->

<!--&lt;!&ndash;      <el-table-column label="身份" align="center">&ndash;&gt;-->
<!--&lt;!&ndash;        <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;          {{ scope.row.userRole }}&ndash;&gt;-->
<!--&lt;!&ndash;        </template>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-table-column>&ndash;&gt;-->

<!--&lt;!&ndash;      <el-table-column label="创建日期" align="center">&ndash;&gt;-->
<!--&lt;!&ndash;        <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;          {{ scope.row.createTime }}&ndash;&gt;-->
<!--&lt;!&ndash;        </template>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-table-column>&ndash;&gt;-->

<!--&lt;!&ndash;      <el-table-column label="佣金" align="center">&ndash;&gt;-->
<!--&lt;!&ndash;        <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;          {{ scope.row.income }}&ndash;&gt;-->
<!--&lt;!&ndash;        </template>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;    </el-table>&ndash;&gt;-->

<!--    <el-table-->
<!--      :data="list"-->
<!--      style="width: 100%"-->
<!--      row-key="id"-->
<!--      border-->
<!--      lazy-->
<!--      :load="load"-->
<!--      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">-->
<!--&lt;!&ndash;            <el-table-column align="center" label="序号" width="75">&ndash;&gt;-->
<!--&lt;!&ndash;              <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;                {{ (scope.$index + (currentPage-1) * pageSize)+1 }}&ndash;&gt;-->
<!--&lt;!&ndash;              </template>&ndash;&gt;-->
<!--&lt;!&ndash;            </el-table-column>&ndash;&gt;-->

<!--            <el-table-column label="昵称">-->
<!--              <template slot-scope="scope">-->
<!--                {{ scope.row.nickName}}-->
<!--              </template>-->
<!--            </el-table-column>-->

<!--            <el-table-column label="用户名">-->
<!--              <template slot-scope="scope">-->
<!--                {{ scope.row.userName}}-->
<!--              </template>-->
<!--            </el-table-column>-->

<!--            <el-table-column label="身份" align="center">-->
<!--              <template slot-scope="scope">-->
<!--                {{ scope.row.userRole }}-->
<!--              </template>-->
<!--            </el-table-column>-->

<!--            <el-table-column label="创建日期" align="center">-->
<!--              <template slot-scope="scope">-->
<!--                {{ scope.row.createTime }}-->
<!--              </template>-->
<!--            </el-table-column>-->

<!--            <el-table-column label="佣金" align="center">-->
<!--              <template slot-scope="scope">-->
<!--                {{ scope.row.income }}-->
<!--              </template>-->
<!--            </el-table-column>-->
<!--&lt;!&ndash;      <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;        prop=""&ndash;&gt;-->
<!--&lt;!&ndash;        label="展开"&ndash;&gt;-->
<!--&lt;!&ndash;        sortable&ndash;&gt;-->
<!--&lt;!&ndash;        width="100"&ndash;&gt;-->
<!--&lt;!&ndash;        align="center">&ndash;&gt;-->
<!--&lt;!&ndash;        <template slot-scope="scope">&ndash;&gt;-->
<!--&lt;!&ndash;          <el-button @click="unfoldSon(scope.$index)">展开</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;        </template>&ndash;&gt;-->
<!--&lt;!&ndash;      </el-table-column>&ndash;&gt;-->
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

<!--&lt;!&ndash;  <tab></tab>&ndash;&gt;-->
<!--</template>-->

<!--<script>-->
<!--import { getList } from '@/api/table'-->
<!--import { queryUserListById } from '@/api/user'-->


<!--  export default {-->
<!--    filters: {},-->
<!--    data() {-->
<!--      return {-->
<!--        list: [],-->
<!--        children: [],-->
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
<!--       // 返回身份id为3的用户列表-->
<!--        getList(3).then(res => {-->
<!--          this.list = res.data-->
<!--          this.total = res.data.length;-->
<!--          // this.list.hasChildren = true-->
<!--          this.list[1].hasChildren = true-->
<!--          this.listLoading = false-->
<!--        }).catch(err => {-->
<!--          console.log(err)-->
<!--        })-->
<!--      },-->
<!--      current_change(currentPage) {-->
<!--        this.currentPage = currentPage;-->
<!--      },-->
<!--      load(tree, treeNode, resolve) {-->
<!--        setTimeout(() => {-->
<!--          resolve([-->
<!--            {-->
<!--              nickName:'1',-->
<!--              userName:'1',-->
<!--              userRole:'普通用户',-->
<!--              createTime:'2020-1-1',-->
<!--              income: 999-->
<!--            }-->
<!--          ])-->
<!--        }, 1000)-->
<!--      }-->
<!--      // unfoldSon(index) {-->
<!--      //   console.log(index)-->
<!--      //   //获取用户的直推人数跟列表   传入son 是直推， 传入 grandson 是间推-->
<!--      //   queryUserListById('son', this.list[index].userId).then(res => {-->
<!--      //     console.log(res)-->
<!--      //     this.children = res.data-->
<!--      //   })-->
<!--      //   this.list[index].children = {-->
<!--      //     nickName: 31,-->
<!--      //     userName: '2016-05-01',-->
<!--      //     userRole: '王小虎',-->
<!--      //   }-->
<!--      //   console.log(this.list)-->
<!--      //   // console.log(this.list[index].children)-->
<!--      // }-->
<!--    },-->
<!--  }-->

<!--</script>-->

<template>
  <div>
    <el-table
      :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      v-loading="listLoading"
      style="width: 100%"
      row-key="userName"
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

      <el-table-column label="玉币" align="center">
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
        getList(3).then(res => {
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


