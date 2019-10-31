<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>密码因子表</span>
    </div>
    <div class="box-body">
        <el-row :gutter='1'>
        <el-col :span='4'>
          <el-select size="mini" placeholder="子系统">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col> 
         
         
        <el-col :offset='1' :span='2'>
          <el-button type='primary' style="width: 100%" size="mini" value="">查询 </el-button>
        </el-col>
      </el-row>
      <BR/>
      <el-table border striped fit v-if='pageData !== null' :data="pageData.content" style="width: 100%">
        <el-table-column prop="f1" label="子系统ID" ></el-table-column>
        <el-table-column prop="f2" label="子系统名称"></el-table-column>
          
        <el-table-column label="状态" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.f3" style='color: green'>有效</span>
            <span style='color: red' v-else>已过期</span>
          </template>
        </el-table-column>
        <el-table-column prop="f4" label="子系统通信加密因子" width="200"></el-table-column>
        <el-table-column label="失效时间" width='100'>
          <template slot-scope="scope">
            {{ scope.row.f5 | formatDate }} 
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
  name: "MchList",
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
            {f1: 'sfddeed1', f2: '商户交易01', f3: '1', f4: '8asdf&0jhasdf', f5: new Date(2099,12,31), f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: 'dfadfad', f2: '清算02', f3: '1', f4: 'fkdas#$@jsdf', f5: new Date(2099,12,31), f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: 'iukjddf', f2: '食材0012', f3: '1', f4: 'fkdas#$@jsdf', f5: new Date(2099,12,31), f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: 'i8uhjdsf', f2: '药材23', f3: '1', f4: 'fkdas#$@jsdf', f5: new Date(2099,12,31), f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: 'khisd932', f2: '风机11', f3: '1', f4: 'fkdas#$@jsdf', f5: new Date(2099,12,31), f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: 'asdfasd00', f2: '电源00', f3: '1', f4: 'fkdas#$@jsdf', f5: new Date(2099,12,31), f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: 'khgiedkf9', f2: '网络中心0', f3: '1', f4: 'fkdas#$@jsdf', f5: new Date(2099,12,31), f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: 'jggyepodfn', f2: '行政', f3: '1', f4: 'fkdas#$@jsdf', f5: new Date(2099,12,31), f6: '工商银行永定路支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: 'sdkfui223', f2: '特种装备', f3: '1', f4: 'fkdas#$@jsdf', f5: new Date(2099,12,31), f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: 'sdfkji232', f2: '娱乐城', f3: '1', f4: 'fkdas#$@jsdf', f5: new Date(2099,12,31), f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},

        ]
        this.pageData = { number: 0, pageSize: 10, totalElements: 76, content: list}
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

 
