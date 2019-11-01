<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>结算订单</span>
    </div>
    <div class="box-body">
        <el-row :gutter='1'>
        <el-col :span='4'>
          <el-select size="mini" placeholder="交易来源">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col> 
        <el-col :offset='1' :span='3'>
          <el-select size="mini" placeholder="支付方式">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col>  
        <el-col :offset='1' :span='3'>
          <el-select size="mini" placeholder="结算状态">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col>  
        <el-col :offset='1' :span='3'>
          <el-select size="mini" placeholder="合作方交易流水号">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col> 
        
        </el-row>
        <el-row style='margin-top: 8px;'> 
        <el-col :span='8'>
          <el-date-picker size='mini'
            type="daterange"
            range-separator="至"
            start-placeholder="支付发起时间"
            end-placeholder="支付发起时间">
            </el-date-picker>
        </el-col>
        <el-col :offset='1' :span='7'>
          <el-date-picker size='mini'
            type="daterange"
            range-separator="至"
            start-placeholder="出金开始时间"
            end-placeholder="出金完成时间">
            </el-date-picker>
        </el-col>
          
        <el-col :offset='3' :span='3'>
          <el-button type='primary' style="width: 100%" size="mini" value="">查询 </el-button>
        </el-col>
      </el-row>
      <BR/>
      <el-table border striped fit v-if='pageData !== null' :data="pageData.content" style="width: 100%">
        <el-table-column prop="f1" label="交易来源" width="80"></el-table-column>
        <el-table-column prop="f2" label="支付渠道" width="80"></el-table-column>
         
        <el-table-column label="结算状态" width="80">
          <template slot-scope="scope">
            <span v-if="scope.row.f3" style='color: green'>成功</span>
            <span style='color: red' v-else>失败</span>
          </template>
        </el-table-column>
        <el-table-column prop="f5" label="返回消息"></el-table-column>
        <el-table-column prop="f6" label="子系统订单号"></el-table-column>

        <el-table-column label="结算发起时间" width='100'>
          <template slot-scope="scope">
            {{ scope.row.f7 | formatDate }} 
          </template>
        </el-table-column>
        <el-table-column prop="f8" label="付款方"></el-table-column>
        <el-table-column prop="f9" label="收款方"></el-table-column>
        <el-table-column label="付款总额" width='100'>
          <template slot-scope="scope">
            {{ scope.row.f10 | formatCNY }} 
          </template>
        </el-table-column>
        <el-table-column label="商家手续费信息" width='100'>
          <template slot-scope="scope">
            {{ scope.row.f10 | formatCNY }} 
          </template>
        </el-table-column>
        <el-table-column label="结算总额" width='100'>
          <template slot-scope="scope">
            {{ scope.row.f10 | formatCNY }} 
          </template>
        </el-table-column>
        <el-table-column prop="f9" label="分账信息"></el-table-column>
        <el-table-column label="结算完成时间" width='100'>
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
  name: "PayList",
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
            {f1: '采购平台', f2: '电汇', f3: '1', f4: '1', f5: 'SUCCESS', f6: 'P91091902', f7: new Date('2019','10','20'), f8: '9001928122', f9: '1283792', f10: 1283792, f11: new Date(), f12: 1},
            {f1: '商户', f2: '电汇', f3: '1', f4: '1', f5: 'SUCCESS', f6: 'P91091902', f7: new Date('2019','10','20'), f8: '9001928122', f9: '1283792', f10: 1283792, f11: new Date(), f12: 1},
            {f1: '采购平台', f2: '电汇', f3: '1', f4: '1', f5: 'SUCCESS', f6: 'P91091902', f7: new Date('2019','10','20'), f8: '9001928122', f9: '1283792', f10: 1283792, f11: new Date(), f12: 1},
            {f1: '采购平台', f2: '电汇', f3: '1', f4: '1', f5: 'SUCCESS', f6: 'P91091902', f7: new Date('2019','10','20'), f8: '9001928122', f9: '1283792', f10: 1283792, f11: new Date(), f12: 1},
            {f1: '采购平台', f2: '电汇', f3: '1', f4: '1', f5: 'SUCCESS', f6: 'P91091902', f7: new Date('2019','10','20'), f8: '9001928122', f9: '1283792', f10: 1283792, f11: new Date(), f12: 1},
            {f1: '商户', f2: '网银', f3: '1', f4: '1', f5: 'SUCCESS', f6: 'P91091902', f7: new Date('2019','10','20'), f8: '9001928122', f9: '1283792', f10: 1283792, f11: new Date(), f12: 1},
            {f1: '商户', f2: '网银', f3: '1', f4: '1', f5: 'SUCCESS', f6: 'P91091902', f7: new Date('2019','10','20'), f8: '9001928122', f9: '1283792', f10: 1283792, f11: new Date(), f12: 1},
            {f1: '商户', f2: '网银', f3: '1', f4: '1', f5: 'SUCCESS', f6: 'P91091902', f7: new Date('2019','10','20'), f8: '9001928122', f9: '1283792', f10: 1283792, f11: new Date(), f12: 1},
            {f1: '商户', f2: '网银', f3: '1', f4: '1', f5: 'SUCCESS', f6: 'P91091902', f7: new Date('2019','10','20'), f8: '9001928122', f9: '1283792', f10: 1283792, f11: new Date(), f12: 1},
            {f1: '商户', f2: '网银', f3: '1', f4: '1', f5: 'SUCCESS', f6: 'P91091902', f7: new Date('2019','10','20'), f8: '9001928122', f9: '1283792', f10: 1283792, f11: new Date(), f12: 1},

        ]
        this.pageData = { number: 0, pageSize: 10, totalElements: 99999, content: list}
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

 
