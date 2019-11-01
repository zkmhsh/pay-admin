<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>帮助中心数据管理列表</span>
    </div>
    <div class="box-body">
        <el-row :gutter='1'>
        <el-col :span='2'>
          <el-select size="mini" placeholder="一级栏目">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col> 
        <el-col :offset='1' :span='2'>
          <el-select size="mini" placeholder="二级栏目">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col>   
        <el-col :offset='1' :span='2'>
          <el-input size="mini" placeholder="发布者">
          </el-input>
        </el-col> 
        <el-col :offset='1' :span='2'>
          <el-input size="mini" placeholder="标题">
          </el-input>
        </el-col> 
        <el-col :offset='1' :span='4'>
          <el-date-picker size='mini'
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
            </el-date-picker>
        </el-col>
         
        <el-col :offset='1' :span='2'>
          <el-button type='primary' style="width: 100%" size="mini" value="">查询 </el-button>
        </el-col>
      </el-row>
      <BR/>
      <el-table border striped fit v-if='pageData !== null' :data="pageData.content" style="width: 100%">
        <el-table-column prop="f1" label="标题" width="227"></el-table-column>
        <el-table-column prop="f2" label="一级栏目" width="300"></el-table-column>
        <el-table-column prop="f3" label="二级栏目" width="300"></el-table-column>
        <el-table-column prop="f4" label="发布者" width="300"></el-table-column>
         
        
        <el-table-column label="发布日期" width='300'>
          <template slot-scope="scope">
            {{ scope.row.f5 | formatDate }} 
          </template>
        </el-table-column>
        
         
        <el-table-column label="管理操作" class="text-center" width="300">
          <template slot-scope="scope">
              <el-button style type="info" size="mini" @click="switchStatus(scope.row)">查看</el-button>
            <el-button style type="success" size="mini" @click="switchStatus(scope.row)">编辑</el-button>
            <el-button style type="danger" size="mini" @click="switchStatus(scope.row)">删除</el-button>
  
            
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
            {f1: '支付服务介绍', f2: '服务说明', f3: '支付服务说明', f4: '航天云网', f5: new Date()},
            {f1: '个人账户支付问题', f2: '常见问题', f3: '个人账户支付问题', f4: '航天云网', f5: new Date()}

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

 
