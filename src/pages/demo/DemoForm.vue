<template>
    <div>
      <h1>Chapters</h1>
      
      <!-- Create Form -->
      <form @submit.prevent="newChapterId ? updateChapter() : createChapter()">
        <label for="newChapterTitle">Chapter Title:</label>
        <input type="text" id="newChapterTitle" v-model="newChapterTitle" />
        <button type="submit">{{ newChapterId ? 'Update' : 'Create' }} Chapter</button>
      </form>
  
      <!-- List of Chapters -->
      <ul>
        <li v-for="chapter in chapters" :key="chapter.id">
          {{ chapter.title }}
          <button @click="editChapter(chapter)">Edit</button>
          <button @click="deleteChapter(chapter.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chapters: [],
        newChapterId: null, // For tracking if we are creating or updating
        newChapterTitle: '',
      };
    },
    mounted() {
      this.fetchChapters();
    },
    methods: {
      fetchChapters() {
        axios.get('http://localhost:8000/api/chapters')
          .then(response => {
            this.chapters = response.data;
          })
          .catch(error => {
            console.error('Error fetching chapters:', error);
          });
      },
      createChapter() {
        axios.post('http://localhost:8000/api/chapters', { title: this.newChapterTitle })
          .then(response => {
            this.chapters.push(response.data);
            this.newChapterTitle = ''; // Clear the input field
          })
          .catch(error => {
            console.error('Error creating chapter:', error);
          });
      },
      editChapter(chapter) {
        // Populate the form with the data of the chapter being edited
        this.newChapterId = chapter.id;
        this.newChapterTitle = chapter.title;
      },
      updateChapter() {
        axios.put(`http://localhost:8000/api/chapters/${this.newChapterId}`, { title: this.newChapterTitle })
          .then(response => {
            // Update the local chapters array with the updated data
            const updatedIndex = this.chapters.findIndex(chapter => chapter.id === this.newChapterId);
            if (updatedIndex !== -1) {
              this.chapters.splice(updatedIndex, 1, response.data);
            }
  
            // Clear the form
            this.newChapterId = null;
            this.newChapterTitle = '';
          })
          .catch(error => {
            console.error('Error updating chapter:', error);
          });
      },
      deleteChapter(chapterId) {
        axios.delete(`http://localhost:8000/api/chapters/${chapterId}`)
          .then(() => {
            this.chapters = this.chapters.filter(chapter => chapter.id !== chapterId);
          })
          .catch(error => {
            console.error('Error deleting chapter:', error);
          });
      },
    },
  };
  </script>
  