<template>
  <div class="app-container">
    <h3 style="text-align: center">直推、间推用户列表</h3>
    <el-button type="primary" style="margin-bottom: 5px" @click="$router.push('/distribution/index')">返回</el-button>
<!--    *****************直推用户*******************-->
<!--    <el-table-->
<!--      :data="sonList"-->
<!--      border-->
<!--      fit-->
<!--      highlight-current-row>-->
<!--      <el-table-column align="center" label="序号" width="75">-->
<!--        <template slot-scope="scope">-->
<!--          {{ scope.$index + 1 }}-->
<!--        </template>-->
<!--      </el-table-column>-->

<!--      <el-table-column label="昵称">-->
<!--        <template slot-scope="scope">-->
<!--          {{ scope.row.nickName}}-->
<!--        </template>-->
<!--      </el-table-column>-->


<!--      <el-table-column label="身份" align="center">-->
<!--        <template slot-scope="scope">-->
<!--          {{ scope.row.userRole }}-->
<!--        </template>-->
<!--      </el-table-column>-->

<!--      <el-table-column label="邀请日期" align="center">-->
<!--        <template slot-scope="scope">-->
<!--          {{ scope.row.createTime }}-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--    </el-table>-->

<!--********************间推列表********************-->
<!--    <h3 style="text-align: center">间推用户列表</h3>-->
    <el-table
      :data="sonList"
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

    </el-table>

  </div>

</template>

<script>

import { queryUserListById } from '@/api/user'


  export default {
    name: 'UserList',
    filters: {},
    data() {
      return {
        sonList: [],
        arr: [],
        grandson: [],
        children: [
          {
            nickName: '暂无数据',
            userRole: '暂无数据',
            createTime: '暂无数据'
          }
        ],
        listLoading: false,

      }
    },
    created() {

    },
    mounted() {
      this.fetchData()
    },
    methods: {
      //获取身份
      fetchData() {
        // console.log(this.$store.state.user.userId)
        queryUserListById("son", this.$store.state.user.userId).then(res => {
          // console.log(res)
          this.sonList = res.data
        })

      },
      load(tree, treeNode, resolve) {
        //获取用户的直推人数跟列表   传入son 是直推， 传入 grandson 是间推
        queryUserListById('son', tree.userId).then(res => {
          // console.log(res.data)
          for (let i = 0; i< res.data.length; i++){
            res.data[i].hasChildren = false
          }
          this.children = res.data
        })
        setTimeout(() => {
          resolve(this.children)
        }, 1000)
      }

    },
  }

</script>
