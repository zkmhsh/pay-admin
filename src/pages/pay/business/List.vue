<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>商户详情表</span>
    </div>
    <div class="box-body">
        <el-row :gutter='1'>
        <el-col :span='4'>
          <el-select size="mini" placeholder="企业">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col> 
        <el-col :offset='1' :span='3'>
          <el-select size="mini" placeholder="开户银行">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col>   
        <el-col :offset='1' :span='8'>
          <el-date-picker size='mini'
            type="daterange"
            range-separator="至"
            start-placeholder="开户开始日期"
            end-placeholder="开户结束日期">
            </el-date-picker>
        </el-col>
         
        <el-col :offset='1' :span='2'>
          <el-button type='primary' style="width: 100%" size="mini" value="">查询 </el-button>
        </el-col>
      </el-row>
      <BR/>
      <el-table border striped fit v-if='pageData !== null' :data="pageData.content" style="width: 100%">
        <el-table-column prop="f1" label="企业ID" width="80"></el-table-column>
        <el-table-column prop="f2" label="账户类型" width="80"></el-table-column>
        <el-table-column prop="f3" label="收付款账号"></el-table-column>
        <el-table-column prop="f4" label="开户名称" width="100"></el-table-column>
         
        <el-table-column label="开户银行及网点" width="200">
          <template slot-scope="scope">
            <span> {{scope.row.f5}} / {{scope.row.f6}} </span>
          </template>
        </el-table-column>
        <el-table-column label="账户状态" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.f7" style='color: green'>有效</span>
            <span style='color: red' v-else>已过期</span>
          </template>
        </el-table-column>
        <el-table-column label="结算状态" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.f8" style='color: green'>正常</span>
            <span style='color: red' v-else>禁用</span>
          </template>
        </el-table-column>
        <el-table-column label="审核状态" width='80'>
          <template slot-scope="scope">
            <span v-if="scope.row.f9" style='color: green'>已审核</span>
            <span v-else style='color: red'>待审核</span>
          </template>
        </el-table-column>
        <el-table-column label="开户时间" width='100'>
          <template slot-scope="scope">
            {{ scope.row.f10 | formatDate }} 
          </template>
        </el-table-column>
        <el-table-column label="修改时间" width='100'>
          <template slot-scope="scope">
            {{ scope.row.f11 | formatDate }} 
          </template>
        </el-table-column>
         
        <el-table-column label="管理操作" class="text-center" width="80">
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
            {f1: '1', f2: '企业', f3: '90190000981899', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: '2', f2: '企业', f3: '90190000981899', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: '3', f2: '企业', f3: '90190000981899', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: '4', f2: '企业', f3: '90190000981899', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: '5', f2: '企业', f3: '90190000981899', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: '6', f2: '企业', f3: '90190000981899', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: '7', f2: '企业', f3: '90190000981899', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: '8', f2: '企业', f3: '90190000981899', f4: 'XXX有限公司', f5: 'ICBC', f6: '工商银行永定路支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: '9', f2: '企业', f3: '90190000981899', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},
            {f1: '10', f2: '企业', f3: '90190000981899', f4: 'XXX有限公司', f5: 'CCB', f6: '建设银行石景山支行', f7: 1, f8: 1, f9: 1, f10: new Date(), f11: new Date()},

        ]
        this.pageData = { number: 0, pageSize: 10, totalElements: 1205, content: list}
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

 
