<template>
  <div id="app" class="container d-flex flex-column justify-content-center align-items-center mt-5">
    <h3>Willkommen bei der Service Worker Untersuchung!</h3>
    <p>hey</p>
    <ButtonGet @get="fetchData"></ButtonGet>
    <CardView :employees="employees" @del="delEmployee"></CardView>
  </div>
</template>

<script>
import axios from 'axios';

import ButtonGet from '@/components/ButtonGet.vue';
import CardView from '@/components/CardView.vue';

export default {
  name: 'app',
  components: {
    ButtonGet,
    CardView,
  },
  data() {
    return {
      employees: [],
    };
  },
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, { once: true });
  },
  methods: {
    async fetchData() {
      console.log('fetchData called');
      try {
        const { data } = await axios({
          url: `${process.env.VUE_APP_SERVER}/employees`,
          method: 'GET',
        });
        this.employees = data;
      } catch (error) {
        console.error(error);
      }
    },
    async delEmployee(e) {
      console.log('delEmployee called');
      try {
        await axios({
          url: `${process.env.VUE_APP_SERVER}/employees/${e.id}`,
          method: 'delete',
        });
        this.fetchData();
      } catch (error) {
        console.error(error);
      }
    },
    updateAvailable() {
      alert('Update vorhanden, bitte App neu starten!');
    },
  },
};
</script>

<style></style>
