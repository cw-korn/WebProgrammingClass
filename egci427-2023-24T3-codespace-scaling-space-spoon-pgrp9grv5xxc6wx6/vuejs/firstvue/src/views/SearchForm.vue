<template>
    <div>
        <h2>Filter Learn Vue Articles</h2>
        <div>
            <input type="text" placeholder="Filter Search" v-model = 'query'/>
            <br><br>
        </div>
        
        <button @click = 'reset' > Reset </button><br><br>
        <search-result :query = 'query'/>
        <!-- <p>{{query}}</p> -->
    </div>
</template>
<script>
import { ref } from 'vue'
 import SearchResult from '../components/SearchResult.vue'

export default {
    setup() {
        const query = ref('')
        const reset = (evt) => {
            query.value = '' //clear the query
        }

        return {
            query,
            reset
        }
    },
    components: {
        SearchResult
    },
}
</script>

<style scoped>
input[type='text'] {
    margin-bottom: 20px;
    padding: 10px;
  }
</style>