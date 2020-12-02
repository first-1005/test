
<script>
import Content from './Content';
export default {
name:'tabs',
components:{
    Content
},
data(){
    return{
     contentData:[]
    }
},
props:{
  currentIndex:{
      type:[String,Number],
      default:'1'
  }
},
methods:{
   onChangeIndex(index){
       this.$emit('changeIndex',index)
   }
},
render(){
    // console.log(this.contentData);
    return(
        <div>
           <ul class='tabs-header'>{this.$slots.default}</ul>
           <Content contentData={this.contentData}></Content>
        </div>
    )
}
}
</script>

<style scoped>
.tabs-header{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}
</style>