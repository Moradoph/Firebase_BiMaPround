<template>
    <div v-for="pet in pets" :key="pet.id">
      <div>
        type: {{pets.type}}
      </div>
      <div>
        name: {{pets.name}}
      </div>
      <div>
        age: {{pets.age}}
      </div>
      <div v-if="pets.isVaccinated">
        Vaccinated
      </div>
    </div>
</template>

<script>
import { usePetsStore } from '../stores/pets';

export default {
  data() {
    return {
      pets : [],
      }
  },
  async mounted() {
    await usePetsStore().fetchPets();
  }
}
</script>

<style>

</style>