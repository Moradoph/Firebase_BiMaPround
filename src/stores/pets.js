import { defineStore } from "pinia";
import { collection, getDocs } from "firebase/firestore";
import {db} from '@/firebase';

export const usePetsStore = defineStore('pets', {
    state: () => ({
        pets: [],
    }),
    getters: {
        getDocs: (state) => {
            return state.pets
        }
    },
    actions: {
        async fetchPets() {
            const queryData = await getDocs (collection(db, "pets"));
            queryData.forEach((doc) => {
                console.log(doc.data());
            })
        }
    },
})