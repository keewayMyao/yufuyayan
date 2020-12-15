<template>
  <div>
  <el-row :gutter="40" class="panel-group">

    <!--    ***********************已邀用户人数*************************   -->
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="dialogTableNum = true">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">已邀人数</div>
          <span style="font-size: large">{{sonNum}}</span>
        </div>
      </div>
    </el-col>

<!--    ***********************已邀用户*************************   -->
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="dialogTableVisible = true">
        <div class="card-panel-icon-wrapper icon-tree">
          <svg-icon icon-class="tree" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">已邀用户</div>
          <span style="font-size: larger">详情</span>
        </div>
      </div>
    </el-col>

    <!--    ***********************佣金*************************   -->
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="dialogTableIncome = true">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon icon-class="money" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">佣金</div>
          <span style="font-size: large">{{$store.state.user.income}}</span>
        </div>
      </div>
    </el-col>

<!--      roleId等于0和等于99，管理员和普通用户不显示邀请码-->
    <!--    ***********************邀请码*************************   -->
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col" >
      <div class="card-panel" @click="dialogTableInvitationCode = true">
        <div class="card-panel-icon-wrapper icon-star">
          <svg-icon icon-class="star" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">邀请码</div>
          <span style="font-size: large">{{invitationCode}}</span>
        </div>
      </div>
    </el-col>
  </el-row>

<!--    *******************************************************************************-->
<!--   点击已邀人数弹框    -->
    <el-dialog title="佣金" :visible.sync="dialogTableNum">
      <h2>已邀人数：<span>{{this.sonNum}}人</span></h2>
    </el-dialog>


<!--    点击已邀用户弹框-->
    <el-dialog title="用户列表" :visible.sync="dialogTableVisible">
      <el-table :data="sonList">
        <el-table-column property="nickName" label="昵称" ></el-table-column>
        <el-table-column property="createTime" label="创建日期" ></el-table-column>
        <el-table-column property="userRole" label="身份"></el-table-column>
      </el-table>
    </el-dialog>

    <!--    点击佣金弹框-->
    <el-dialog title="佣金" :visible.sync="dialogTableIncome">
      <h2>佣金：<span>{{$store.state.user.income}}￥</span></h2>
    </el-dialog>

    <el-dialog title="邀请链接" :visible.sync="dialogTableInvitationCode">
      <span>http://192.168.0.149:9528/#/invite?code={{ invitationCode }}&income={{ $store.state.user.income }}</span>
    </el-dialog>



  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { queryUserListById } from '@/api/user'

export default {
  name: 'Dashboard',
  // invitationCode: $store.state.user.invitationCode,
  data(){
    return{
      income: '',
      sonNum: '',
      sonList: null,
      dialogTableNum: false, //已邀人数是否弹框
      dialogTableVisible: false, //已邀用户列表是否弹框
      dialogTableIncome: false, //佣金是否弹框
      dialogTableInvitationCode: false, //邀请码是否弹框
      // dialogFormVisible: false,
      invitationCode: ''  //邀请码
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
  },
  created() {
    //普通用户隐藏邀请码
    this.hide()
    this.fetchData()
  },
  methods: {
    fetchData() {
      queryUserListById("son", this.$store.state.user.userId).then(res => {
        // console.log(res)
        this.sonNum = res.data.length
        this.sonList = res.data
      })
    },

    //普通用户隐藏邀请码
    hide() {
      if(this.$store.state.user.roleId === 0 || this.$store.state.user.roleId === 99) {
        // console.log(this.$store.state.user.roleId)
        this.invitationCode = '******'
      }
      else{
        this.invitationCode = this.$store.state.user.invitationCode
      }
    },

    //点击邀请码跳转宣传页面
    // jumpInvite(invitationCode,income) {
    //   this.$router.push(`/invite?code=${invitationCode}&income=${income}`)
    //   // alert(`http://localhost:9528/invite?code=${invitationCode}&income=${income}`)
    // }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-tree {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-star {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-tree {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-star {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
