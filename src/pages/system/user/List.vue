<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>用户管理</span>
      <el-button style="float: right; " type="primary" size="mini" @click="handleAdd">增加用户</el-button>
    </div>
    <div class="box-body">
        <el-row :gutter='1'>
        <el-col :span='4'>
          <el-input size="mini" placeholder="用户名">
          </el-input>
        </el-col> 
        <el-col :offset='1' :span='3'>
          <el-select size="mini" placeholder="是否过期">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col>   
        <el-col :offset='1' :span='3'>
          <el-select size="mini"  placeholder="是否锁定">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col>
        <el-col :offset='1' :span='3'>
          <el-select size="mini"  placeholder="状态">
            <el-option label='全部' value='0'></el-option>
          </el-select>
        </el-col>
        <el-col :offset='1' :span='2'>
          <el-button type='primary' style="width: 100%" size="mini" value="">查询 </el-button>
        </el-col>
      </el-row>
      <BR/>
      <el-table border striped fit v-if='pageData !== null' :data="pageData.content" style="width: 100%">
        <el-table-column prop="f1" label="姓名"></el-table-column>
        <el-table-column prop="f2" label="账号"></el-table-column>
        <el-table-column label="创建时间" width="120">
          <template slot-scope="scope">
            {{ scope.row.f3 | formatDate }}
          </template>
        </el-table-column>
        <el-table-column label="是否过期" width="100">
          <template slot-scope="scope">
            <span v-if="scope.row.f4" style='color: green'>有效</span>
            <span style='color: red' v-else>已过期</span>
          </template>
        </el-table-column>
        <el-table-column label="是否可用" width="100">
          <template slot-scope="scope">
            <span v-if="scope.row.f5" style='color: green'>可用</span>
            <span style='color: red' v-else>不可用</span>
          </template>
        </el-table-column>
        <el-table-column label="状态" width='80'>
          <template slot-scope="scope">
            <span v-if="scope.row.f6" style='color: green'>启用</span>
            <span v-else style='color: red'>禁用</span>
          </template>
        </el-table-column>
        <el-table-column prop="f7" label="数据来源" width='100'></el-table-column>
 
        <el-table-column label="管理操作" class="text-center" width="360">
          <template slot-scope="scope">
            <el-button style type="success" size="mini" @click="switchStatus(scope.row)">编辑</el-button>
            <el-button style type="info" size="mini" @click="switchStatus(scope.row)">详情</el-button>
 
            <el-button style type="danger" size="mini" @click="switchStatus(scope.row)" >重置密码</el-button>
            <el-dropdown style="" size="mini" type="primary" split-button @click="handleView(scope.row)">更多...
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item divided>
                  <el-button style type="text" size="mini" @click="handleEdit(scope.row)">下属管理</el-button>
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <el-button style type="text" size="mini" @click="handleAddress(scope.row)">禁用</el-button>
                </el-dropdown-item><el-dropdown-item divided>
                  <el-button style type="text" size="mini" @click="handleRegion(scope.row)">切换用户</el-button>
                </el-dropdown-item>
                <el-dropdown-item divided>
                  <el-button style type="text" size="mini" @click="handleMember(scope.row)">参数属性</el-button>
                </el-dropdown-item>
                

              </el-dropdown-menu>
            </el-dropdown>
            
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
  name: "UserList",
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
            {f1: '超级管理员', f2: 'sysAdmin', f3: new Date(), f4: 1, f5: 1, f6: 1, f7: '系统添加'},
            {f1: '支付管理员', f2: 'zhangsan001', f3: new Date(), f4: 1, f5: 1, f6: 1, f7: '系统添加'},
            {f1: '支付管理员', f2: 'lisi002', f3: new Date(), f4: 1, f5: 1, f6: 1, f7: '系统添加'},
            {f1: '支付管理员', f2: 'wangwu003', f3: new Date(), f4: 1, f5: 1, f6: 1, f7: '系统添加'},
            {f1: '支付管理员', f2: 'xiaomei001', f3: new Date(), f4: 1, f5: 1, f6: 1, f7: '系统添加'},
            {f1: '管理员', f2: 'zhazhahui004', f3: new Date(), f4: 1, f5: 1, f6: 1, f7: '系统添加'},
            {f1: '合同管理员', f2: 'wawali', f3: new Date(), f4: 1, f5: 1, f6: 1, f7: '系统添加'},
            {f1: '管理员', f2: 'jiangyi', f3: new Date(), f4: 1, f5: 0, f6: 0, f7: '系统添加'},
            {f1: '财务管理员', f2: 'majin', f3: new Date(), f4: 1, f5: 1, f6: 1, f7: '系统添加'},
            {f1: '财务管理员', f2: 'xiaobao', f3: new Date(), f4: 1, f5: 1, f6: 1, f7: '系统添加'},

        ]
        this.pageData = { number: 0, pageSize: 10, totalElements: 45, content: list}
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

 
