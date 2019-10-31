<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
        <span>定时任务表</span>
        <el-button style="float: right; " type="primary" size="mini" @click="handleAdd">增加定时任务</el-button>

    </div>
    <div class="box-body">
         
      <el-table border striped fit v-if='pageData !== null' :data="pageData.content" style="width: 100%">
        <el-table-column prop="f1" label="序号" width="80"></el-table-column>
        <el-table-column prop="f2" label="任务名称"></el-table-column>
        <el-table-column prop="f3" label="任务类" width="300"></el-table-column>
        <el-table-column prop="f4" label="任务描述" width="300"></el-table-column>
          
         
        <el-table-column label="管理操作" class="text-center" width="280">
          <template slot-scope="scope">
            <el-button style type="info" size="mini" @click="switchStatus(scope.row)">详情</el-button>
  
            
          </template>
        </el-table-column>
      </el-table>
      <el-row :gutter="1">
        <el-col :span='12' :offset="12" style="margin-top: 16px; text-align: right;" >
          <el-pagination v-if='pageData'
            layout="total, prev, pager, next"
            @current-change='handlePageChange'
            :current-page="pageData.number + 1"
            :page-size='10'
            :total='pageData.totalElements'>
          </el-pagination>
        </el-col>
      </el-row>
    </div> 
  </el-card>
</template>

<script>
// import { Dealer } from "@/model/crm";
export default {
  name: "TaskList",
  data() {
    return {
      showAdd: false,
      showEdit: false,
      showView: false,
      showRegion: false,
      showMember:  false,
      showAddress: false,
      showAccount: false,
      showApplyFee: false,
      showApplyViolation: false,
      selectedDealer: null,
      queryParam: {
        dealerStatus: 0,
        dealerType: 0,
        pageIndex: 0,
        pageSize: 10
      },
      pageData: {}
    };
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
        let list = [
            {f1: '1', f2: '安全数据备份', f3: 'com.xyz.server.task.backup.Security', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: '2', f2: '支付数据备份', f3: 'com.xyz.server.task.backup.Payment', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: '3', f2: '清算数据备份', f3: 'com.xyz.server.task.backup.Bill', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            
        ]
        this.pageData = { number: 0, pageSize: 10, totalElements: 3, content: list}
    },
    handleAdd() {
      this.showAdd = true;
    },
    cancelAdd () {
      this.showAdd = false;
    },
    confirmAdd () {
      this.showAdd = false
      this.fetchData()
    },
    // 修改经销商
    handleEdit (dealer) {
      this.selectedDealer = dealer;
      this.showEdit = true
    },
    cancelEdit () {
      this.showEdit = false
    },
    confirmEdit () {
      this.showEdit = false
      this.fetchData()
    },
    handleView (dealer) {
      this.selectedDealer = dealer;
      this.showView = true
    },
    cancelView () {
      this.showView = false
    },
    handlePageChange (pageNumber) {
      this.queryParam.pageIndex = pageNumber - 1
      this.fetchData()
    },
    // 经销商启用与禁用
    switchStatus() {
      
    },
    // 查询区域授权信息
    handleRegion (dealer) {
      this.selectedDealer = dealer
      this.showRegion = true
    },
    cancelAuthority () {
      this.showRegion = false
    },
    // confirmAuthority (authorities) {
    //   this.showRegion = false
    // },
    // 查询成员用户
    handleMember (dealer) {
      this.selectedDealer = dealer
      this.showMember = true
    },
    cancelMember () {
      this.showMember = false
    },
    // confirmMember (members) {
    //   this.showMember = false
    // },
    handleAddress (dealer) {
      // console.log('edit address of : ' + JSON.stringify(dealer))
      this.selectedDealer = dealer
      this.showAddress = true
    },
    cancelAddress () {
      this.showAddress = false
    },
    // confirmAddress (addresses) {
    //   this.showAddress = false
    // },
    // 查询资金账户信息
    viewAccount(dealer) {
      this.selectedDealer = dealer
      this.showAccount = true
    },
    closeAccount () {
      this.showAccount = false
    },
    // 查询费用信息
    applyFee(dealer) {
      this.selectedDealer = dealer
      this.showApplyFee = true
    },
    closeApplyFee () {
      this.showApplyFee = false
    },
    applyViolation (dealer) {
      this.selectedDealer = dealer
      this.showApplyViolation = true
    },
    closeApplyViolation () {
      this.showApplyViolation = false
    }
  },
  components: {
  }
};
</script>

<style scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>

 
