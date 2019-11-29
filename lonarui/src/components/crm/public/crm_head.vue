<template>
    <div>
       top
    </div>
</template>


<script>
    import {mapMutations} from "vuex";
    export default {
      name: "manager_infor",
      methods:{
        ...mapMutations(['delToken']),
        exit:function(){
          this.delToken({token:''});
          this.$router.push('/managerLogin');
        }
      }
    }
</script>
 