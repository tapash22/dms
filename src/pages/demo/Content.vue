<template>
  <div style="padding: 10px">
    <h4>Create New Content</h4>
    <div
      style="
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;
        padding: 10px;
        margin: 0;
      "
    >
      <!-- Create Form -->
      <form @submit.prevent="createContent">
        <label
          style="width: 100%; padding: 5px; font-size: 12px; font-weight: 700"
          >HTML Content:</label
        >
        <textarea
          v-model="newContent.html_content"
          style="width: 100%; height: auto; padding: 5px"
        ></textarea>

        <label
          style="width: 100%; padding: 5px; font-size: 12px; font-weight: 700"
          >Other Resource:</label
        >
        <input
          v-model="newContent.other_resource"
          style="width: 100%; height: auto; padding: 5px"
        />

        <button
          type="submit"
          style="
            width: auto;
            height: 30px;
            margin: 10px;
            border-radius: 5px;
            background: green;
            font-size: 12;
            font-weight: 600;
            color: #fff;
            border: 1px solid green;
            box-shadow: 2px 2px 5px green;
          "
        >
          Create
        </button>
      </form>
    </div>

    <h4>Content List</h4>
    <ul style="display: block; padding: 10px; margin: 0; list-style: none">
      <li
        v-for="content in contents"
        :key="content.id"
        style="
          display: flex;
          justify-content: space-around;
          border: 1px solid gray;
          padding: 5px;
        "
      >
        {{ content.html_content }}
        <img
          :src="content.other_resource"
          style="width: 100px; height: auto; object-fit: cover"
        />
        <button
          @click="editContent(content)"
          style="
            height: 30px;
            align-self: center;
            margin: 5px;
            border-radius: 5px;
            border: 1px solid gray;
            background: green;
            color: #fff;
            font-size: 12px;
            font-weight: 500;
            font-style: italic;
          "
        >
          Edit
        </button>
        <button
          @click="deleteContent(content.id)"
          style="
            height: 30px;
            align-self: center;
            margin: 5px;
            border-radius: 5px;
            border: 1px solid gray;
            background: red;
            color: #fff;
            font-size: 12px;
            font-weight: 500;
            font-style: italic;
          "
        >
          Delete
        </button>
      </li>
    </ul>

    <!-- Edit Form -->
    <div
      v-if="editMode"
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <div style="background: gray; border-radius: 20px; padding: 20px;height: auto;">
        <h4>Edit Content</h4>
        <form @submit.prevent="updateContent">
          <label
            style="width: 100%; padding: 5px; font-size: 12px; font-weight: 700"
            >HTML Content:</label
          >
          <textarea
            v-model="editContents.html_content"
            style="width: 100%; height: auto; padding: 5px"
          ></textarea>

          <label
            style="width: 100%; padding: 5px; font-size: 12px; font-weight: 700"
            >Other Resource:</label
          >
          <input
            v-model="editContents.other_resource"
            style="width: 100%; height: auto; padding: 5px"
          />

          <button
            type="submit"
            style="
              width: auto;
              height: 30px;
              margin: 10px;
              border-radius: 5px;
              background: blue;
              font-size: 12;
              font-weight: 600;
              color: #fff;
              border: 1px solid blue;
              box-shadow: 2px 2px 5px blue;
            "
          >
            Update
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      contents: [],
      newContent: {
        html_content: "",
        other_resource: "",
      },
      editMode: false,
      editContents: {
        id: null,
        html_content: "",
        other_resource: "",
      },
    };
  },
  created() {
    this.fetchContents();
  },
  methods: {
    async fetchContents() {
      try {
        const response = await axios.get("http://localhost:8000/api/contents");
        this.contents = response.data;
      } catch (error) {
        console.error("Error fetching contents:", error);
      }
    },
    async createContent() {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/contents",
          this.newContent
        );
        this.contents.push(response.data);
        this.newContent = { html_content: "", other_resource: "" };
      } catch (error) {
        console.error("Error creating content:", error);
      }
    },
    async editContent(content) {
      this.editMode = true;
      this.editContents = { ...content };
    },
    async updateContent() {
      try {
        const response = await axios.put(
          `http://localhost:8000/api/contents/${this.editContents.id}`,
          this.editContents
        );
        const updatedIndex = this.contents.findIndex(
          (content) => content.id === this.editContents.id
        );
        // if (updatedIndex !== -1) {
        //   this.$set(this.contents, updatedIndex, response.data);
        // }
        this.editMode = false;
      } catch (error) {
        console.error("Error updating content:", error);
      }
    },
    async deleteContent(id) {
      try {
        await axios.delete(`http://localhost:8000/api/contents/${id}`);
        this.contents = this.contents.filter((content) => content.id !== id);
      } catch (error) {
        console.error("Error deleting content:", error);
      }
    },
  },
};
</script>
  
  <style>
/* Add your styles here if needed */
</style>
  