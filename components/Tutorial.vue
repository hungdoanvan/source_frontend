<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
  <v-btn>
    Block Button
  </v-btn>

  <p class="mb-4 tw-mt-5">123321</p>
  <p>{{ $t('common.goToHome') }}</p>
  <p>{{ name }}</p>

  </div>
</template>

<script lang="ts">
interface DataProps {
  name: string
}

export default {
  name: 'NuxtTutorial',
   data(): DataProps {
    return {
     name: "",
    }
  },

  created(){
    console.log(this.Constants.common.ACCESS_TOKEN_KEY)
    
  }

}
</script>
