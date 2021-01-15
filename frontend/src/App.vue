<template>
  <div id="app">
    <div id="form">
      <h3>Enter your note here!</h3>
      <form>
        <textarea v-model=note.body></textarea>
        <button v-on:click.prevent='addNote(note)'>Add Note</button>
      </form>
    </div>
    <div id="notes" v-for="note in notes" v-bind:key="note">
      <textarea v-model=note.body></textarea>
      <button v-on:click.prevent='updateNote(note.id, note)'>UPDATE</button>
      <button v-on:click='deleteNote(note.id)'>DELETE</button>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'App',
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
#user {
  margin-bottom: 50px;
}
#notes {
  padding: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: center;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
}
</style>
