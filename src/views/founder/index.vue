<template>
<!--  ****************************创始人********************************-->
  <div class="app-container">
    <el-table
      :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      @row-click="rowClick"
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
<!--      <el-table-column label="操作" align="center" width="100">-->
<!--        <template slot-scope="scope">-->
<!--          <router-link :to="{name: 'LookSonList', params: {userId:sonListId,userNickName:sonListName}}">-->
<!--            <el-button type="primary" @click="lookSonList(scope.$index)">查看</el-button>-->
<!--          </router-link>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </el-table>

<!--    *****************************分页***********************************-->
    <el-pagination class="fy"
                   layout="prev, pager, next"
                   @current-change="current_change"
                   :total="total"
                   background
    >
    </el-pagination>

  </div>

<!--  <tab></tab>-->
</template>

<script>
import { getList } from '@/api/table'
// import { queryUserListById } from '@/api/user'

  export default {

    data() {
      return {
        list: [],
        sonListId:'', //点击查看 用户的userId
        userNickName: '', //点击查看 用户的nickName
        children: [],
        listLoading: false,
        total: 1000,
        pageSize: 10,
        currentPage: 1
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
          // console.log(res)
          this.list = res.data
          this.total = res.data.length;
          // this.list[1].hasChildren = true
          this.listLoading = false
        }).catch(err => {
          console.log(err)
        })
      },
      //分页
      current_change(currentPage) {
        this.currentPage = currentPage;
      },
      //查看已邀成员
      // lookSonList(index) {
      //   // console.log(index,this.list[index].userId)
      //   this.sonListId = this.list[index].userId
      //   this.sonListName = this.list[index].nickName
      //   // console.log(this.sonListId)
      // },
      rowClick(row, event, column) {
        // this.sonListId = row.userId
        // this.userNickName = row.nickName
        // console.log(row,1)
        // console.log(event,2)
        // console.log(column,3)
        this.$router.push({
          // path: '/lookSonList',
          name: 'LookSonList',
          params: {
            my:row,
            // sonListId:row.userId,
            // userNickName: row.nickName,
          }
        })
      }
    },
  }
</script>









<!--<template>-->
<!--  <div>-->
<!--    <el-table-->
<!--      :data="list.slice((currentPage-1)*pageSize,currentPage*pageSize)"-->
<!--      v-loading="listLoading"-->
<!--      style="width: 100%"-->
<!--      row-key= "userId"-->
<!--      border-->
<!--      lazy-->
<!--      :load="load"-->
<!--      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">-->

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

<!--      <el-table-column label="玉币" align="center">-->
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


<!--    <el-button @click="random()">随机数</el-button>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import { getList } from '@/api/table'-->
<!--import { queryUserListById } from '@/api/user'-->


<!--export default {-->
<!--  filters: {},-->
<!--  data() {-->
<!--    return {-->
<!--      list: [],-->
<!--      children: [],-->
<!--      listLoading: false,-->
<!--      total: 1000,-->
<!--      pageSize: 10,-->
<!--      currentPage: 1,-->
<!--    }-->
<!--  },-->
<!--    created() {-->
<!--      this.fetchData()-->
<!--    },-->
<!--    methods: {-->
<!--      //获取身份-->
<!--      fetchData() {-->
<!--        this.listLoading = true-->
<!--        // 返回身份id为3的用户列表-->
<!--        getList(3).then(res => {-->
<!--          // console.log(res.data)-->
<!--          this.list = res.data-->
<!--          this.total = res.data.length;-->
<!--          this.listLoading = false-->
<!--        })-->
<!--      },-->
<!--      current_change(currentPage) {-->
<!--        this.currentPage = currentPage;-->
<!--      },-->
<!--      load(tree, treeNode, resolve) {-->
<!--        //获取用户的直推人数跟列表   传入son 是直推， 传入 grandson 是间推-->

<!--        queryUserListById('son', tree.userId).then(res => {-->
<!--          // console.log(res.data)-->
<!--          for (let i = 0; i<res.data.length;i++){-->
<!--            res.data[i].id = idkey-->
<!--            console.log(res.data[i].id,i)-->
<!--          }-->
<!--          this.children = res.data-->
<!--        })-->
<!--        setTimeout(() => {-->
<!--          resolve(this.children)-->
<!--        }, 1000)-->
<!--      }-->
<!--    },-->
<!--}-->
<!--</script>-->


