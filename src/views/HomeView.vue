<template>
    <el-tree
        :data="data"
        :props="defaultProps"      
        default-expand-all >
        <template #default="{ node, data }">
            <template v-if="data.type=='url'">
                <el-link :href="data.url" type="primary" target="_blank">{{ node.label }}</el-link>
            </template>
            <template v-if="data.type!='url'">{{ node.label }}</template>
        </template>
    </el-tree>
</template>

<script>
export default {
  data() {
    return {
        data:[],
        defaultProps:{
            children: 'children',
            label: 'name',
        },
    }
  },
  created() {
    this.load()
  },
  methods: {
    load(){   
        fetch('src/Bookmarks') 
        .then(response => response.json())
        .then(res => { 
            this.data=res.roots.bookmark_bar.children
        })
    },
  }   
}
</script>
<style>
.el-tree-node__content{
    border-bottom: 1px solid #e3e3e3;
}
</style>