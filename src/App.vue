<template>
  <v-app class="bg-bgCustom">
    <v-main>
      <v-container fluid fill-height>
        <v-row class="flex justify-center">
          <v-col cols="12" md="6">
            <v-autocomplete class="shadow-md mb-5 bg-white rounded" :loading="false" append-inner-icon="mdi-magnify"
              density="compact" label="Search User" variant="default" hide-details single-line
              @update:modelValue="handleSelection" clearable :items="user" placeholder="Select user"
              :v-model="selectedUser && 'Select User'"></v-autocomplete>
            <v-card class="border-none shadow-md h-72 flex flex-col items-center">
              <div class="w-full h-1/2 bg-gradient-to-br from-blue-200 to-pink-200">
              </div>
              <v-avatar :key="userData?.name" :image="`https://avatar.iran.liara.run/public/${userData?.id || 1}`"
                size="100" class="absolute top-20 left-7"></v-avatar>
              <div class="w-full flex flex-col items-start pl-5 justify-start pt-14">
                <div class="flex items-center">
                  <v-card-title class="py-0 text-xl">{{ userData?.name }}</v-card-title>
                  <v-chip class="max-h-6 bg-[#c8dafb]">@ {{ userData?.username }}</v-chip>
                </div>
                <v-card-subtitle>{{ userData?.email }}</v-card-subtitle>
                <div class="flex justify-end w-full">
                  <v-card-actions>
                    <v-btn class="bg-[#c8dafb] rounded">Hide posts</v-btn>
                  </v-card-actions>
                </div>
              </div>
            </v-card>
            <v-virtual-scroll :height="400" class="mt-5"
              :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30']">

              <template v-slot:default="{ item }">
                <v-card class="my-2 shadow-md p-3">
                  Item {{ item }}
                </v-card>
              </template>
            </v-virtual-scroll>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useDate } from 'vuetify';
import { useStore } from 'vuex'

const store = useStore();
const selectedUser = ref('')
const userData = ref(null)
const user = computed(() => store.getters['user/user'])

onMounted(() => {
  store.dispatch('user/fetchUser')
})

const handleSelection = async (data) => {
  userData.value = await store.dispatch('user/getUserDetails', data);
}


</script>
