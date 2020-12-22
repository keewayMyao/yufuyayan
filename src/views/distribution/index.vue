<template>
  <!--  ****************************分销中心********************************-->
  <div>
    <el-row :gutter="40" class="panel-group" id="row">

      <!--    ***********************已邀用户人数*************************   -->

      <el-col :xs="10" :sm="10" :lg="6" class="card-panel-col">
        <div class="colTitle">已邀人数</div>
        <div class="card-panel" @click="dialogTableNum = true">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="peoples" class-name="card-panel-icon"/>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">已邀人数</div>
            <span style="font-size: large">{{ sonNum }}</span>
          </div>
        </div>
      </el-col>

      <!--    ***********************已邀用户*************************   -->
      <el-col :xs="10" :sm="10" :lg="6" class="card-panel-col">
        <div class="colTitle">已邀用户</div>
        <div class="card-panel" @click="getUserList">
          <div class="card-panel-icon-wrapper icon-tree">
            <svg-icon icon-class="tree" class-name="card-panel-icon"/>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">已邀用户</div>
            <span style="font-size: larger">详情</span>
          </div>
        </div>
      </el-col>

      <!--    ***********************佣金*************************   -->
      <!--    <el-col :xs="10" :sm="10" :lg="6" class="card-panel-col">-->
      <!--      <div class="colTitle" >佣金</div>-->
      <!--      <div class="card-panel" @click="dialogTableIncome = true">-->
      <!--        <div class="card-panel-icon-wrapper icon-money">-->
      <!--          <svg-icon icon-class="money" class-name="card-panel-icon" />-->
      <!--        </div>-->
      <!--        <div class="card-panel-description">-->
      <!--          <div class="card-panel-text">佣金</div>-->
      <!--&lt;!&ndash;          <span style="font-size: large">{{$store.state.user.income}}</span>&ndash;&gt;-->
      <!--          <span style="font-size: large">******</span>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--    </el-col>-->

      <!--      roleId等于0和等于99，管理员和普通用户不显示邀请码-->
      <!--    ***********************邀请码*************************   -->
      <el-col :xs="10" :sm="10" :lg="6" class="card-panel-col">
        <div class="colTitle">邀请码</div>
        <div class="card-panel" @click="dialogTableInvitationCode = true">
          <div class="card-panel-icon-wrapper icon-star">
            <svg-icon icon-class="star" class-name="card-panel-icon"/>
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">邀请码</div>
            <span style="font-size: large">{{ invitationCode }}</span>
          </div>
        </div>
      </el-col>
    </el-row>

    <!--   *********************************点击已邀人数弹框 **********************************   -->
    <el-dialog title="" :visible.sync="dialogTableNum" width="100%">
      <h2>已邀人数：<span>{{ this.sonNum }}人</span></h2>
    </el-dialog>


    <!--   *********************************点击已邀用户弹框 **********************************   -->
    <el-dialog title="用户列表" :visible.sync="dialogTableVisible">
      <el-table :data="sonList">
        <el-table-column property="nickName" label="昵称"></el-table-column>
        <el-table-column property="createTime" label="创建日期"></el-table-column>
        <el-table-column property="userRole" label="身份"></el-table-column>
      </el-table>
    </el-dialog>

    <!--   *********************************点击佣金弹框 **********************************   -->
    <!--    <el-dialog title="佣金" :visible.sync="dialogTableIncome" width="100%">-->
    <!--      <h2>佣金：<span>{{$store.state.user.income}}￥</span></h2>-->
    <!--      <h2>佣金：<span>******￥</span></h2>-->
    <!--    </el-dialog>-->

    <!--   *********************************点击邀请弹框 **********************************   -->
    <el-dialog title="邀请" :visible.sync="dialogTableInvitationCode" width="100%" height="80%">
      <div class="fx">
        <el-button type="success" round size="mini" @click="$router.push('/invite')">立即分享</el-button>
        <vue-qr class="qrcode" :text=downloadData.url :size="200"></vue-qr>
        <h2>邀请码：{{ invitationCode }}</h2>
      </div>
    </el-dialog>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { queryUserListById } from '@/api/user'
import { getSignature } from '@/api/get_signature'
import vueQr from 'vue-qr'
import wx from 'weixin-js-sdk'

export default {
  name: 'Distribution',
  data() {
    return {
      downloadData: {
        //分享链接
        url: `http://wx.anshapro.com/#/invite?code=${this.$store.state.user.invitationCode}&income=${this.$store.state.user.income}`
        // icon: '随便一张图片的地址也行'
      },
      qrcode: '',
      income: '',
      sonNum: '',
      sonList: null,
      visible: false,
      dialogTableNum: false, //已邀人数是否弹框
      dialogTableVisible: false, //已邀用户列表是否弹框
      dialogTableIncome: false, //佣金是否弹框
      dialogTableInvitationCode: false, //邀请码是否弹框
      // dialogFormVisible: false,
      invitationCode: '' , //邀请码
      appId: '',
      timestamp: '',
      nonceStr: '',
      signature: ''

    }
  },
  components: {
    vueQr
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  created() {
    var vm = this
    //普通用户隐藏邀请码
    this.hide()
    this.fetchData()
    // console.log(this.invitationCode)
    // console.log(this.income)
    getSignature().then(res => {
      this.appId = res.data.appId
      console.log(res)
      this.timestamp = res.data.timestamp
      this.nonceStr = res.data.nonceStr
      this.signature = res.data.signature
    })
    wx.config({
      debug: true, // 开启调试模式
      appId: this.appId, // 必填，公众号的唯一标识
      timestamp: this.timestamp, // 必填，生成签名的时间戳
      nonceStr: this.nonceStr, // 必填，生成签名的随机串
      signature: this.signature, // 必填，签名，见附录1
      jsApiList: [
        'checkJsApi',
        'updateTimelineShareData',
        'updateAppMessageShareData'
      ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
  },
  mounted() {

    wx.ready(function(){
      wx.updateTimelineShareData({
          title: '世界那么大，我想去看看-微信test', // 分享标题
          desc: '世界那么大，我想去看看-微信test', // 分享描述
          link: `http://wx.anshapro.com/#/invite`, // 分享链接
          imgUrl: "", // 分享图标
          success() {
            // 用户成功分享后执行的回调函数
            alert("成功")
          },
          cancel() {
            // 用户取消分享后执行的回调函数
            alert("失败")
          }
        }
      );
      wx.updateAppMessageShareData({
        title: '世界那么大，我想去看看-微信test', // 分享标题
        desc: '世界那么大，我想去看看-微信test', // 分享描述
        link: this.downloadData.url, // 分享链接
        // imgUrl: option.imgUrl, // 分享图标
        success() {
          // 用户成功分享后执行的回调函数
        },
        cancel() {
          // 用户取消分享后执行的回调函数
        }
      })
    })
  },
  methods: {
    fetchData() {
      queryUserListById('son', this.$store.state.user.userId).then(res => {
        // console.log(res)
        this.sonNum = res.data.length
        this.sonList = res.data
      })
    },

    //普通用户隐藏邀请码
    hide() {
      if (this.$store.state.user.roleId === 0) {
        // console.log(this.$store.state.user.roleId)
        this.invitationCode = '******'
      } else {
        this.invitationCode = this.$store.state.user.invitationCode
      }
    },
    // 微信分享
    wxShare() {
      wx.updateTimelineShareData({
        title: '世界那么大，我想去看看-微信test', // 分享标题
        desc: '世界那么大，我想去看看-微信test', // 分享描述
        link: `http://wx.anshapro.com/#/invite?code=${this.$store.state.user.invitationCode}&income=${this.$store.state.user.income}`,
        imgUrl: '', // 分享图标
        success: (res) => {
          console.log(res)
        },
        fail: (err) => console.log(err)
      })
    },
    wxShare1() {
      console.log('分享')
      wx.ready(function() {   //需在用户可能点击分享按钮前就先调用
        wx.updateAppMessageShareData({
          title: '世界那么大，我想去看看-微信test', // 分享标题
          desc: '世界那么大，我想去看看-微信test', // 分享描述
          link: `http://wx.anshapro.com/#/invite?code=${this.$store.state.user.invitationCode}&income=${this.$store.state.user.income}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          // imgUrl: 'http://www.baidu.com/FpEhdOqBzM8EzgFz3ULByxatSacH', // 分享图标
          success: function() {
            console.log('111')
            // 设置成功
          }
        })
      })
    },
    //跳转已邀用户列表
    getUserList() {
      this.$router.push('/userList')
    },
  }
}
</script>

<style lang="scss" scoped>
.fx {
  display: flex;
  flex-direction: column;
}

.fx h2 {
  text-align: center;
}

.qrcode {
  margin: 0 auto;
}

#row {

}

.colTitle {
  font-weight: 700;
  text-align: center;
}


.panel-group {
  margin-top: 18px;

  .card-panel-col {
    margin-bottom: 32px;
    margin-left: 5%;
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

@media (max-width: 550px) {
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
