<template>
  <div class="app-container">
    <h3 style="text-align: center">({{ my[0].nickName }}) 邀请的用户列表</h3>
    <el-button type="primary" style="margin-bottom: 5px" @click="back()">返回</el-button>
    <el-table
      :data="my"
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

  </div>
</template>

<script>

import { queryUserListById } from '@/api/user'


export default {
  name: 'LookSonList',
  data() {
    return {
      sonList: [],
      my: [],
      arr: [],
      grandson: [],
      listLoading: false,
      sonListId: '',
      userNickName: 'XXX',
    }
  },
  created() {
    // console.log(this.$route.params.userId)
    // this.sonListId = this.$route.params.sonListId
    // this.userNickName = this.$route.params.userNickName
    this.my[0] = this.$route.params.my
    // console.log(this.my,'my')
    // console.log(this.sonListId)
  },
  mounted() {
    // this.fetchData()
  },
  methods: {
    //获取身份
    // fetchData() {
    //   queryUserListById("son", this.my.userId).then(res => {
    //     // console.log(res)
    //     this.sonList = res.data
    //   })
    // },
    //返回上一页
    back() {
      this.$router.go(-1);
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
    },
  },
}

</script>

<style scoped>

</style>
