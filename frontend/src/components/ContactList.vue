<template>
  <div class="container">
    <h2 class="text-center p-2 text-white bg-primary mt-5">Contacts</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Designation</th>
          <th scope="col">Contact Number</th>
          <th scope="col">Action</th>          
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in result" :key="contact.id">
          <th scope="row">{{contact.id}}</th>
          <td>{{contact.name}}</td>
          <td>{{contact.designation}}</td>
          <td>{{contact.contact_no}}</td>
          <td>
            <button class="btn btn-warning btn-sm">Edit</button>&nbsp;
            <button class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import axios from 'axios';
import useContacts from '../composable/contacts';

// Vue.use(axios)


export default {
 
 name: 'ContactList',
 data () {
  return {
    result: []
  }
 },
 
 mounted() {
  this.getContacts()
 },

 methods: {
  getContacts() {
    axios.get("http://127.0.0.1:8000/api/contacts")
    .then(response => {
     this.result = response.data
          console.log(response)
                    console.log(this.result)
    })
  
  }
 }

 
}
</script>

<style>

</style>