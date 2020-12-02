
<script>
export default {
name:'Content',
data(){
    return{

    }
},
props:{
    contentData:{
        type:Array,
        required:true
    }
},
render(){
    // console.log(this.contentData);
    return(
        <div>
           {this.contentData.map((ele,index)=>{
               return <div>{ele.isActive ? ele.$slots.default :''}</div>
           })}
        </div>
    )
},

}
</script>

<style>

</style>