<template>
  <div>
    <h2>HTML Properties</h2>

    <!-- Display HTML properties -->
    <ul v-if="htmlProperties.length">
      <li v-for="property in htmlProperties" :key="property.id">
        <div>
          <strong>ID:</strong> {{ property.id }} | <strong>Tag:</strong>
          {{ property.tag }} | <strong>Style:</strong> {{ property.style }}
        </div>
        <div v-html="property.html_content"></div>
        <button @click="editProperty(property.id)">Edit</button>
        <button @click="deleteProperty(property.id)">Delete</button>
      </li>
    </ul>

    <!-- Form for creating/editing HTML properties -->
    <form @submit.prevent="submitForm">
      <label for="tag">Tag:</label>
      <input v-model="formData.tag" required />

      <label for="style">Style:</label>
      <input v-model="formData.style" required />

      <label for="html_content">HTML Content:</label>
      <textarea v-model="formData.html_content" required></textarea>

      <button type="submit">Save</button>
    </form>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      htmlProperties: [],
      formData: {
        tag: "",
        style: "",
        html_content: "",
      },
    };
  },
  mounted() {
    this.fetchHtmlProperties();
  },
  methods: {
    fetchHtmlProperties() {
      // Fetch HTML properties from the API
      axios.get("http://localhost:8000/api/html-properties").then((response) => {
        this.htmlProperties = response.data;
      });
    },
    editProperty(id) {
      // Fetch HTML property by ID for editing
      axios.get(`http://localhost:8000/api/html-properties/${id}`).then((response) => {
        this.formData = response.data;
      });
    },
    submitForm() {
      // Create or update HTML property based on form data
      if (this.formData.id) {
        // Update existing property
        axios
          .put(
            `http://localhost:8000/api/html-properties/${this.formData.id}`,
            this.formData
          )
          .then(() => {
            this.fetchHtmlProperties();
            this.clearForm();
          });
      } else {
        // Create new property
        axios.post("http://localhost:8000/api/html-properties", this.formData).then(() => {
          this.fetchHtmlProperties();
          this.clearForm();
        });
      }
    },
    deleteProperty(id) {
      // Delete HTML property by ID
      if (confirm("Are you sure you want to delete this HTML property?")) {
        axios.delete(`http://localhost:8000/api/html-properties/${id}`).then(() => {
          this.fetchHtmlProperties();
        });
      }
    },
    clearForm() {
      // Clear form data after submission
      this.formData = {
        tag: "",
        style: "",
        html_content: "",
      };
    },
  },
};
</script>
  
  <style>
/* Add your component styles here */
</style>
  