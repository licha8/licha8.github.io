<template>
    <el-card class="box-card" :header="bm.idx" v-for="bm in bookmarks">
        <el-tree
        :data="bm.data"
        :props="defaultProps"    
        >
        <template #default="{ node, data }">
            <template v-if="data.type=='url'">
                <el-link :href="data.url" type="primary" target="_blank">{{ node.label }}</el-link>
            </template>
            <template v-if="data.type!='url'">{{ node.label }}</template>
        </template>
    </el-tree>
  </el-card>  
</template>

<script>
export default {
  data() {
    return {
        defaultProps:{
            children: 'children',
            label: 'name', 
        },
        bookmarks:[],
        number:1,
    }
  },
  created() {
    this.load()
  },
  methods: {
    load(){
        this.loadBookmark()        
    },
    loadBookmark(){
        let _this=this
        this.$axios.get('bookmarks/'+_this.number).then(res =>{
            console.log(res.data);
            if(res.data && res.data.roots){
                let data=res.data.roots.bookmark_bar.children
                if(data && data.length>0){
                    _this.bookmarks.push({idx:_this.number,data:data})
                    _this.number++
                    _this.loadBookmark()
                }
            }
        })
    }
  }   
}
</script>
<style>
.el-tree-node__content{
    border-bottom: 1px solid #e3e3e3;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>