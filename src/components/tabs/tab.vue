
<script>
export default {
name:'tab',
data(){
    return{
    
    }
},
props:{
   label:{
       type:[String,Number],
       default:'tab'
   },
   index:{
       type:[String,Number],
       default:'1'
   }
},
computed:{
    isActive(){
       return this.index == this.$parent.currentIndex 
    }
},
methods:{
  clickTabHandle(){
    //   this.$emit('onChangeIndex',this.index)
    this.$parent.onChangeIndex(this.index)
  }
  },
mounted(){
    // console.log(this);
   this.$parent.contentData.push(this)
},
render(){
    const currentClass={
        tab:true,
        active:this.isActive
    }
    return(
        <li class={currentClass} onClick={this.clickTabHandle}>{this.label}</li>
    )
}
}
</script>

<style scoped>
.tab{
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}
.active{
    border-bottom: 2px solid blue;
}
</style>