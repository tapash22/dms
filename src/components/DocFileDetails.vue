<template>
  <main class="grid">
    <section class="col-12">
      <div class="card card-w-title">
        <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
      </div>
    </section>

    <section class="col-12">
      <TabView>
        <TabPanel>
          <template #header>
            <i class="pi pi-eye"></i> &nbsp;
            <span>File Details </span>
          </template>
          <article class="grid">
            <section class="col-10">
              <div class="grid">
                <div class="col-1">
                  <i
                    class="pi pi-image"
                    style="font-size: 3rem; cursor: pointer"
                    @click="open"
                  ></i>
                </div>
                <div class="col-12">
                  <h5 class="mb-2 text-900 text-primary mt-2">Notes</h5>
                  <span class="text-600">Posuere morbi leo urna molestie.</span>
                </div>
                <div class="col-12">
                  <h5 class="mb-2 text-900 text-primary mt-2">Tags</h5>
                  <span class="text-600">Posuere morbi leo urna molestie.</span>
                </div>
                <div class="col-12">
                  <h5 class="mb-2 text-900 text-primary mt-2">Signed by</h5>
                  <span class="text-600">Posuere morbi leo urna molestie.</span>
                </div>
                <div class="col-4">
                  <h5 class="mb-2 text-900 text-primary mt-2">Document ID</h5>
                  <span class="text-600">1478532</span>
                </div>
                <div class="col-4">
                  <h5 class="mb-2 text-900 text-primary mt-2">Date</h5>
                  <span class="text-600">14, November 2022</span>
                </div>
                <div class="col-4">
                  <h5 class="mb-2 text-900 text-primary mt-2">Due Date</h5>
                  <span class="text-600">14, November 2022</span>
                </div>
                <div class="col-6">
                  <h5 class="mb-2 text-900 text-primary mt-2">OCR Language</h5>
                  <span class="text-600">English</span>
                </div>
                <div class="col-6">
                  <h5 class="mb-2 text-900 text-primary mt-2">
                    Document Number
                  </h5>
                  <span class="text-600">14, November 2022</span>
                </div>
                <div class="col-12">
                  <h5 class="mb-2 text-900 text-primary mt-2">Audit Log</h5>
                  <DataTable :value="products" responsiveLayout="scroll">
                    <Column field="code" header="Time"></Column>
                    <Column field="name" header="User"></Column>
                    <Column field="category" header="Action"></Column>
                  </DataTable>
                </div>
              </div>
            </section>
            <aside class="col-2">
              <h5 class="text-900 text-primary">
                <i class="pi pi-bell"></i>
                Reminders
              </h5>
              <h5
                class="text-900 text-primary"
                @click="shareOpenModal"
                style="cursor: pointer"
              >
                <i class="pi pi-share-alt"></i>
                Share to
              </h5>
              <h5 class="text-900 text-primary">
                <i class="pi pi-clock"></i>
                Retantion
              </h5>
              <div class="grid">
                <Button
                  label="Upload new version"
                  class="p-button-raised p-button-info mr-2 mb-2 mt-5 col-12"
                  @click="prevFileOpenModal"
                />
                <Button
                  label="Start approval workflow"
                  class="p-button-raised p-button-info mr-2 mb-2 col-12 mt-2"
                />

                <h5>Electronic singing</h5>
                <Button
                  label="Start DockSing workflow"
                  class="p-button-raised p-button-info mr-2 mb-2 col-12 mt-2"
                />
                <Button
                  label="Start e ID workflow"
                  class="p-button-raised p-button-info mr-2 mb-2 col-12 mt-2"
                />

                <Button
                  label="View in word"
                  class="
                    p-button-raised p-button-info p-button-outlined
                    mr-2
                    mb-2
                    col-12
                    mt-5
                  "
                  icon="pi pi-eye"
                />
                <Button
                  label="Edit in word"
                  class="
                    p-button-raised p-button-info p-button-outlined
                    mr-2
                    mb-2
                    col-12
                    mt-2
                  "
                  icon="pi pi-pencil"
                />
              </div>

              <Dialog
                header="Upload New Version"
                v-model:visible="prev_file_modal"
                :breakpoints="{ '960px': '75vw' }"
                :style="{ width: '30vw' }"
                :modal="true"
              >
                <article>
                  <label>Add new version</label>
                  <FileUpload
                    mode="basic"
                    name="demo"
                    url="./upload"
                    class="mr-2 mb-2 p-button-outlined"
                  />
                  <div class="grid mt-2 surface-ground p-2">
                    <div class="col-2">
                      <i class="pi pi-file-pdf" style="font-size: 2rem"></i>
                    </div>
                    <div class="col">This is Pdf File</div>
                    <Button
                      icon="pi pi-eye"
                      class="
                        p-button-rounded
                        p-button-plain
                        p-button-text
                        p-button-info
                        mr-2
                        mb-2
                        col-1
                        p-button-md
                      "
                      @click="open"
                      v-tooltip.top="'Show Preview'"
                    />
                  </div>
                </article>
                <template #footer>
                  <Button
                    label="Ok"
                    @click="prevFileCloseModal"
                    icon="pi pi-check"
                    class="p-button-outlined"
                  />
                </template>
              </Dialog>
              <Dialog
                header="Share Folder Accounts"
                v-model:visible="share_modal"
                :breakpoints="{ '960px': '75vw' }"
                :style="{ width: '50vw' }"
                :modal="true"
              >
                <div>
                  <div class="grid p-fluid mt-3">
                    <div class="field col-12 md:col-12">
                      <span class="p-float-label">
                        <MultiSelect
                          id="user_group"
                          :options="users"
                          v-model="user"
                          optionLabel="name"
                          :filter="false"
                        ></MultiSelect>
                        <label for="user_group">User Group</label>
                      </span>
                    </div>
                    <div class="field col-12 md:col-6">
                      <span class="p-float-label">
                        <MultiSelect
                          id="permission"
                          :options="permissions"
                          v-model="permission"
                          optionLabel="name"
                          :filter="false"
                        ></MultiSelect>
                        <label for="permission">Permission</label>
                      </span>
                    </div>
                    <div class="field col-12 md:col-6">
                      <span class="p-float-label">
                        <Chips inputId="email" v-model="email"></Chips>
                        <label for="email">Email</label>
                      </span>
                    </div>
                  </div>
                  <div class="grid mx-1">
                    <Button
                      type="button"
                      class="mr-2 p-button-info"
                      label="Save"
                      icon="pi pi-check"
                      :loading="loading[0]"
                      @click="load(0)"
                    />
                    <Button
                      type="button"
                      class="mr-2 p-button-outlined p-button-danger"
                      label="Cancel"
                      icon="pi pi-times"
                      :loading="loading[0]"
                      @click="load(0)"
                    />
                  </div>
                </div>
                <template #footer>
                  <Button
                    label="Ok"
                    @click="shareCloseModal"
                    icon="pi pi-check"
                    class="p-button-outlined"
                  />
                </template>
              </Dialog>
            </aside>
            <Dialog
              header="Share Folder Accounts"
              v-model:visible="display"
              :breakpoints="{ '960px': '75vw' }"
              :style="{ width: '40vw' }"
              :modal="true"
            >
              <div>
                <img src="images/nature/nature9.jpg" alt="Nature 9" />
              </div>
              <template #footer>
                <Button
                  label="Ok"
                  @click="close"
                  icon="pi pi-check"
                  class="p-button-outlined"
                />
              </template>
            </Dialog>
          </article>
        </TabPanel>
        <TabPanel>
          <template #header>
            <i class="pi pi-pencil"></i> &nbsp;
            <span>Edit File </span>
          </template>
          <article>
            <div class="grid p-fluid mt-3">
              <section class="col-9">
                <div class="grid">
                  <div class="field col-12 md:col-6">
                    <span class="p-float-label">
                      <Chips inputId="doc_name"></Chips>
                      <label for="doc_name">Name</label>
                    </span>
                  </div>
                  <div class="field col-12 md:col-6">
                    <span class="p-float-label">
                      <Chips inputId="doc_link"></Chips>
                      <label for="doc_link">Tag</label>
                    </span>
                  </div>
                  <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                      <Chips inputId="doc_link"></Chips>
                      <label for="doc_link">Signed By</label>
                    </span>
                  </div>
                  <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                      <Calendar inputId="calendar" v-model="value2"></Calendar>
                      <label for="doc_link">Date</label>
                    </span>
                  </div>
                  <div class="field col-12 md:col-4">
                    <span class="p-float-label">
                      <Calendar inputId="calendar" v-model="value3"></Calendar>
                      <label for="calendar">Due Date</label>
                    </span>
                  </div>
                  <div class="field col-12 md:col-6">
                    <span class="p-float-label">
                      <Chips inputId="doc_link"></Chips>
                      <label for="doc_link">OCR Language</label>
                    </span>
                  </div>
                  <div class="field col-12 md:col-6">
                    <span class="p-float-label">
                      <Chips inputId="doc_link"></Chips>
                      <label for="doc_link">OCR Number</label>
                    </span>
                  </div>
                  <div class="field col-12 md:col-12">
                    <span class="p-float-label">
                      <Textarea id="address" rows="4" />
                      <label for="doc_link">Notes</label>
                    </span>
                  </div>

                  <div class="col-12 md:col-12 card">
                    <h5>Manage Custom Meta data Fields</h5>

                    <div
                      class="grid"
                      v-for="data in meta_data"
                      :key="data.code"
                    >
                      <div class="field col-12 md:col">
                        <span class="p-float-label">
                          <Chips inputId="meta_data"></Chips>
                          <label for="meta_data">{{ data.name }}</label>
                        </span>
                      </div>

                      <Button
                        icon="pi pi-trash"
                        class="
                          p-button-rounded
                          p-button-text
                          p-button-danger
                          p-button-lg
                          mr-2
                          mb-2
                        "
                      />
                    </div>

                    <div class="field col-12 md:col-12">
                      <span class="p-float-label">
                        <MultiSelect
                          id="multiselect"
                          :options="data_list"
                          v-model="meta_data"
                          optionLabel="name"
                          :filter="false"
                        ></MultiSelect>
                        <label for="dropdown">Select Meta Data</label>
                      </span>
                    </div>
                  </div>

                  <div class="col-12 md:col-12 card">
                    <h5>Related Files</h5>
                    <div class="grid mt-3">
                      <div class="col-6">
                        <span class="p-float-label">
                          <Chips inputId="doc_link"></Chips>
                          <label for="doc_link">File Url or ID</label>
                        </span>
                      </div>
                      <div class="col">
                        <FileUpload
                          mode="basic"
                          name="demo"
                          url="./upload"
                          class="mr-2 mb-2 p-button-outlined"
                        />
                      </div>

                      <div class="col">
                        <Button
                          icon="pi pi-plus-circle"
                          label="Add File"
                          class="mr-2 mb-2 p-button-outlined"
                        ></Button>
                      </div>
                    </div>
                    <div class="grid mt-2 surface-ground p-2">
                      <div class="col-1">
                        <i class="pi pi-file-pdf" style="font-size: 2rem"></i>
                      </div>
                      <div class="col">This is Pdf File</div>
                      <Button
                        icon="pi pi-cloud-download"
                        class="
                          p-button-rounded
                          p-button-plain
                          p-button-text
                          p-button-info
                          mr-2
                          mb-2
                          col-1
                          p-button-md
                        "
                      />
                      <Button
                        icon="pi pi-trash"
                        class="
                          p-button-rounded
                          p-button-plain
                          p-button-text
                          p-button-danger
                          mr-2
                          mb-2
                          col-1
                          p-button-md
                        "
                      />
                    </div>
                  </div>
                </div>
              </section>
              <aside class="col-3">
                <label>Add new version</label>
                <FileUpload
                  mode="basic"
                  name="demo"
                  url="./upload"
                  class="mr-2 mb-2 p-button-outlined"
                />
                <div class="grid mt-2 surface-ground p-2">
                  <div class="col-2">
                    <i class="pi pi-file-pdf" style="font-size: 2rem"></i>
                  </div>
                  <div class="col">This is Pdf File</div>
                  <Button
                    icon="pi pi-eye"
                    class="
                      p-button-rounded
                      p-button-plain
                      p-button-text
                      p-button-info
                      mr-2
                      mb-2
                      col-1
                      p-button-md
                    "
                    @click="open"
                    v-tooltip.top="'Show Preview'"
                  />
                </div>
                <!-- <div class="grid mt-2">
                  <div class="col-8"></div>
                  <div class="col">
                    <i
                      class="pi pi-image"
                      style="font-size: 3rem; cursor: pointer"
                      @click="open"
                    ></i>
                  </div>
                </div> -->

                <Dialog
                  header="Share Folder Accounts"
                  v-model:visible="display"
                  :breakpoints="{ '960px': '75vw' }"
                  :style="{ width: '40vw' }"
                  :modal="true"
                >
                  <div>
                    <img src="images/nature/nature9.jpg" alt="Nature 9" />
                  </div>
                  <template #footer>
                    <Button
                      label="Ok"
                      @click="close"
                      icon="pi pi-check"
                      class="p-button-outlined"
                    />
                  </template>
                </Dialog>
              </aside>
            </div>
            <div class="grid mx-1">
              <Button
                type="button"
                class="mr-2 p-button-info"
                label="Save"
                icon="pi pi-check"
                :loading="loading[0]"
                @click="load(0)"
              />
              <Button
                type="button"
                class="mr-2 p-button-outlined p-button-danger"
                label="Cancel"
                icon="pi pi-times"
                :loading="loading[0]"
                @click="load(0)"
              />
            </div>
          </article>
        </TabPanel>
      </TabView>
    </section>
  </main>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
import ProductService from "../service/ProductService";
import axios from "axios";
import { statuses,data_list,metaFields,users,permissions,folders,breadcrumbItems } from '../storejson/storejson'

export default {
  data() {
    return {
      value2: null,
      value3: null,
      products: null,
      data_list: data_list,
      meta_data: null,
      loading: [false, false],
      display: false,
      mapAttributesOpen: false,
      statuses: statuses,
      is_active: null,
      type: "",
      order: "",
      folders: null,

      filters1: null,

      loading1: true,
      breadcrumbHome: null,
      breadcrumbItems: [],
      metaField: null,
      metaFields: metaFields,
      users: users,
      user: null,
      permissions: permissions,
      permission: null,
      email: "",
      open_folder: false,
      folder_link: false,
      share_modal: false,
      prev_file_modal: false,
    };
  },
  customerService: null,
  productService: null,

  created() {
    this.initFilters1();
    this.productService = new ProductService();
  },
  mounted() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));
    this.folders = folders;
    this.breadcrumbHome = { icon: "pi pi-home", to: "/" };
    this.breadcrumbItems = breadcrumbItems;
    this.loading1 = false;
  },
  methods: {
    onUpload() {
      this.$toast.add({
        severity: "info",
        summary: "Success",
        detail: "File Uploaded",
        life: 3000,
      });
    },
    load(index) {
      this.loading[index] = true;
      setTimeout(() => (this.loading[index] = false), 1000);
    },
    shareOpenModal() {
      this.share_modal = true;
    },
    shareCloseModal() {
      this.share_modal = false;
    },
    prevFileOpenModal() {
      this.prev_file_modal = true;
    },
    prevFileCloseModal() {
      this.prev_file_modal = false;
    },
    open() {
      this.display = true;
    },
    close() {
      this.display = false;
    },
    openMapAttributesDialog() {
      this.mapAttributesOpen = true;
    },
    closeMapAttributesDialog() {
      this.mapAttributesOpen = false;
    },
    async addData() {
      // axios.defaults.baseURL = 'http://localhost:8000'
      // await axios.post('type', {
      // 	type: this.type,
      // 	order: this.order,
      // 	status: this.status
      // });
    },
    initFilters1() {
      this.filters1 = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: {
          operator: FilterOperator.AND,
          constraints: [
            { value: null, matchMode: FilterMatchMode.STARTS_WITH },
          ],
        },
        status: {
          operator: FilterOperator.OR,
          constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
        },
      };
    },
    clearFilter1() {
      this.initFilters1();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/demo/badges.scss";

::v-deep(.p-datatable-frozen-tbody) {
  font-weight: bold;
}

::v-deep(.p-datatable-scrollable .p-frozen-column) {
  font-weight: bold;
}
</style>
