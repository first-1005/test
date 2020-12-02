<template>
  <div class="home">
     <MusicList/>
     <myswiper/>
     <MusicTabs/>
  </div>
</template>

<script>
// @ is an alias to /src
import MusicList from './MusicList'
import myswiper from './myswiper'
import MusicTabs from './MusicTabs'

export default {
  name: 'Home',
  components: {
    MusicList,
    myswiper,
    MusicTabs
  },
  // mounted(){
  //   window.removeEventListener('scroll',scr);
  // }
}
</script>
