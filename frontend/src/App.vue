<template>
  <div class='container' id="app">
    <div class='row text-center'>
      <div class='col-3' id="form-container">
        <form>
          <label for="note-area" class="form-label h2"><strong>Enter your note here!</strong></label>
          <textarea class='col-12 form-control' id="note-area" v-model=note.body></textarea>
          <button class='btn btn-outline-success mt-2' v-on:click.prevent='addNote(note)'>Add Note</button>
        </form>
      </div>
      <div class='container col-9' id='notes-container'>
        <div class='row p-2' id="notes" v-for="note in notes" v-bind:key="note">
          <textarea class='col-8' v-model=note.body></textarea>
          <div id='btn-container'>
            <button class='col-12 btn btn-outline-primary m-2 text-center' v-on:click.prevent='updateNote(note.id, note)'>UPDATE</button>
            <button class='col-12 btn btn-outline-danger m-2' v-on:click='deleteNote(note.id)'>DELETE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'App',
  // data is filled from the mount() and methods()
  data() {
    return {
      user: {},
      notes: [],
      note: {
        body: ''
      }
    }
  },
  mounted() {
    this.getNotes();
  },
  computed: {
  },
  // all methods use axios to reach out to our backend server
  methods: {
    getNotes: function() {
      axios.get('http://localhost:3001/api/note')
        .then(getResponse => {
          console.log(getResponse);
          this.notes = getResponse.data;
        })
    },    
    deleteNote: async function(id) {
      await axios.delete(`http://localhost:3001/api/note/${id}`)
        .then(deleteResponse => console.log(deleteResponse));
      this.getNotes();
    },
    addNote: async function(note) {
      await axios.post('http://localhost:3001/api/note/', note)
        .then(addResponse => console.log(addResponse));
      this.note.body = '';
      this.getNotes();
    },
    updateNote: async function(id, note) {
      console.log(id);
      console.log(note);
      await axios.put(`http://localhost:3001/api/note/${id}`, note)
        .then(putResponse => console.log(putResponse));
      this.getNotes();
    }
  }
}
</script>

<style>
/*
Global styling in the assets folder
where bootstrap is also imported
*/
</style>
