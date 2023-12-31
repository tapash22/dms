<template>
  <div class="grid">
    <div class="col-12">
      <div class="card card-w-title">
        <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <div class="grid">
          <h5 class="col">
            <a title="" href="javascript:void(0)" class="btn"><i style="font-size: large"
                class="btn pi text-pink-500 pi-folder"></i></a>
            Documents (10)
          </h5>

          <Button type="button" icon="pi pi-plus" label="Create a Folder" class="p-button-outlined mb-2 mr-2"
            @click="openFolderModal" />
          <!-- <Button
            type="button"
            icon="pi pi-arrow-up"
            label="Upload File"
            class="p-button-outlined mb-2 mr-2"
            @click="open"
          />

          <Button
            type="button"
            icon="pi pi-arrow-up"
            label="Upload Folder"
            class="p-button-outlined mb-2 mr-2"
            @click="open"
          /> -->
          <Button type="button" icon="pi pi-plus" label="Add a Link" class="p-button-outlined p-button-info mb-2 mr-2"
            @click="linkOpenModal" />
        </div>

        <DataTable :value="folders" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id"
          :rowHover="true" v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1"
          responsiveLayout="scroll" :globalFilterFields="['name', 'sequence', 'status']">
          <template #header>
            <div class="flex justify-content-between flex-column sm:flex-row">
              <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined mb-2"
                @click="clearFilter1()" />
              <span class="p-input-icon-left mb-2">
                <i class="pi pi-search" />
                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%" />
              </span>
            </div>
          </template>
          <template #empty> No customers found. </template>
          <template #loading> Loading customers data. Please wait. </template>
          <Column field="name" header="Name" style="min-width: 12rem">
            <template #body="{ data }">
              <a title="Delete" href="javascript:void(0)" class="btn"><i :class="data.icon"
                  class="btn pi text-pink-500 mr-5"></i></a>
              <router-link v-if="data.type == 'Folder'" :to="{
                name: 'document-info',
                params: {
                  type: data.name,
                },
              }">{{ data.name }}</router-link>
              <router-link v-else :to="{
                name: 'file-details',
              }">{{ data.name }}</router-link>
            </template>
          </Column>

          <Column field="date" class="text-left" header="Date" style="min-width: 12rem">
            <template #body="{ data }">
              {{ data.date }}
            </template>
          </Column>
          <Column field="created_by" class="text-left" header="Created By" style="min-width: 12rem">
            <template #body="{ data }">
              {{ data.created_by }}
            </template>
          </Column>

          <Column field="status" header="Status" :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
            <template #body="{ data }">
              <span :class="'customer-badge status-' + data.status">{{
                  data.status
              }}</span>
            </template>
          </Column>

          <Column field="verified" header="Action" dataType="boolean" bodyClass="text-center" style="min-width: 8rem">
            <template #body>
              <!-- <a
                title="Import File and folder"
                href="javascript:void(0)"
                class="btn"
                @click="importFileOpenModal"
                ><i class="btn pi text-pink-500 pi-tag mr-5"></i
              ></a> -->
              <!-- <a
                title="Map Attributes"
                href="javascript:void(0)"
                class="btn"
                @click="openMapAttributesDialog"
                ><i class="btn pi text-pink-500 pi-tag mr-5"></i
              ></a> -->
              <a title="Edit" href="javascript:void(0)" class="btn" @click="openFolderModal2"><i
                  class="btn pi text-pink-500 pi-plus mr-5"></i></a>
              <a title="Edit" href="javascript:void(0)" class="btn" @click="openFolderModal"><i
                  class="btn pi text-pink-500 pi-user-edit mr-5"></i></a>
              <a title="share" href="javascript:void(0)" class="btn" @click="shareOpenModal"><i
                  class="btn pi text-pink-500 pi-share-alt mr-5"></i></a>
              <!-- <a
                title="copy"
                href="javascript:void(0)"
                class="btn"
                @click="copyFileOpenModal"
                ><i class="btn pi text-pink-500 pi-copy mr-5"></i
              ></a> -->
              <!-- <a
                title="move"
                href="javascript:void(0)"
                class="btn"
                @click="moveFileOpenModal"
                ><i class="btn pi text-pink-500 pi-clone mr-5"></i
              ></a> -->
              <!-- <a
                title="download"
                href="javascript:void(0)"
                class="btn"
                @click="importFileOpenModal"
                ><i class="btn pi text-pink-500 pi-download mr-5"></i
              ></a> -->
              <a title="Delete" href="javascript:void(0)" class="btn"><i
                  class="btn pi text-pink-500 pi-trash mr-5"></i></a>
            </template>
          </Column>
        </DataTable>
      </div>
      <!-- <div class="card">
				<h5>Documents</h5>
				<DataTable :value="folders" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" 
							v-model:filters="filters1" filterDisplay="menu" :loading="loading1" :filters="filters1" responsiveLayout="scroll"
							:globalFilterFields="['name','date','status']" >
					
					<template #header>
                        <div class="flex justify-content-between flex-column sm:flex-row">
                            <Button type="button" icon="pi pi-filter-slash" label="Clear" class="p-button-outlined mb-2" @click="clearFilter1()"/>
                            <span class="p-input-icon-left mb-2">
                                <i class="pi pi-search" />
                                <InputText v-model="filters1['global'].value" placeholder="Keyword Search" style="width: 100%"/>
                            </span>
                        </div>
                    </template>
                    <template #empty>
                        No customers found.
                    </template>
                    <template #loading>
                        Loading customers data. Please wait.
                    </template>
                    <Column field="name" header="Name" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.name}}
                        </template>
                        
                    </Column>

					<Column field="date" class="text-right" header="Date" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.date}}
                        </template>
                        
                    </Column>

					<Column field="created_by" class="text-left" header="Uploaded By" style="min-width:12rem">
                        <template #body="{data}">
                            {{data.created_by}}
                        </template>
                        
                    </Column>
                    
                    
                    
                    <Column field="status" header="Status" :filterMenuStyle="{'width':'14rem'}" style="min-width:12rem">
                        <template #body="{data}">
                            <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                        </template>
                    </Column>
                   
                    <Column field="verified" header="Action" dataType="boolean" bodyClass="text-center" style="min-width:8rem">
                        <template #body="{data}">
                            <a href="javascript:void(0)" class="btn"><i class="btn pi text-pink-500  pi-user-edit mr-5"></i></a>
                            <a href="javascript:void(0)" class="btn"><i class="btn pi text-pink-500  pi-trash mr-5"></i></a>
							
                            
                            
                        </template>
						
                        
                    </Column>
				</DataTable>
			</div> -->
    </div>
    <DocumentDetailCard header="Add / Edit Folder Under Erp" name="Name" label="Custom Attributes"  v-model:visible="open_folder" :closeFolderModal="closeFolderModal"/>
    <DocumentDetailCard header="Add Folder Under Accounts" name="Name" label="Custom Attributes"  v-model:visible="open_folder" :closeFolderModal="closeFolderModal"/>
    <DocumentDetailCard header="Add Folder Link Under Erp" name="Name" label="Custom Attributes"  v-model:visible="open_folder" :closeFolderModal="closeFolderModal"/>
    <DocumentDetailCard header="Copy Folder Link Under Erp" name="Name" label="Custom Attributes"  v-model:visible="open_folder" :closeFolderModal="closeFolderModal"/>
    <DocumentDetailCard header="Move Folder Link Under Erp" name="Name" label="Custom Attributes"  v-model:visible="open_folder" :closeFolderModal="closeFolderModal"/>
    <DocumentDetailCard header="Share Folder Accounts" name="Name" label="Custom Attributes"  v-model:visible="open_folder" :closeFolderModal="closeFolderModal"/>
    <DocumentDetailCard header="Map Attributes to Accounts" name="Name" label="Custom Attributes"  v-model:visible="open_folder" :closeFolderModal="closeFolderModal"/>
    <DocumentDetailCard header="Import from other folder" name="Name" label="Custom Attributes"  v-model:visible="open_folder" :closeFolderModal="closeFolderModal"/>
    <!-- <Dialog header="Add / Edit Folder Under Erp" v-model:visible="open_folder" :breakpoints="{ '960px': '75vw' }"
      :style="{ width: '50vw' }" :modal="true">
      <div class="gird col-12 mt-5">
        <div class="col-12">
          <div class="card p-fluid">
            <div class="field grid">
              <label for="name3" class="col-12 mb-2 md:col-3 md:mb-0">Name</label>
              <div class="col-12 md:col-9">
                <InputText id="name3" type="text" />
              </div>
            </div>
            <div class="field grid">
              <label for="metaField" class="col-12 mb-2 md:col-3 md:mb-0">Custom Attributes</label>
              <div class="col-12 md:col-9">
                <MultiSelect v-model="metaField" :options="metaFields" optionLabel="name"
                  placeholder="Select Meta Fields" :filter="true">
                  <template #value="slotProps">
                    <div class="
                        inline-flex
                        align-items-center
                        py-1
                        px-2
                        bg-primary
                        text-primary
                        border-round
                        mr-2
                      " v-for="option of slotProps.value" :key="option.code">
                      <span :class="'mr-2 flag flag-' + option.code.toLowerCase()" style="width: 18px; height: 12px" />
                      <div>{{ option.name }}</div>
                    </div>
                    <template v-if="!slotProps.value || slotProps.value.length === 0">
                      <div class="p-1">Select Meta Fields</div>
                    </template>
                  </template>
                  <template #option="slotProps">
                    <div class="flex align-items-center">
                      <span :class="
                        'mr-2 flag flag-' +
                        slotProps.option.code.toLowerCase()
                      " style="width: 18px; height: 12px" />
                      <div>{{ slotProps.option.name }}</div>
                    </div>
                  </template>
                </MultiSelect>
              </div>
            </div>
          </div>
          <Button label="Save" class="col-2 p-button-outlined mr-2 mb-2" icon="pi pi-check" />
          <Button label="Cancel" class="col-2 p-button-outlined p-button-danger mr-2 mb-2" icon="pi pi-times" />
        </div>
      </div>
      <template #footer>
        <Button label="Ok" @click="closeFolderModal" icon="pi pi-check" class="p-button-outlined" />
      </template>
    </Dialog> -->
  </div>
</template>

<script>
import { FilterMatchMode, FilterOperator } from "primevue/api";
import axios from "axios";
import NodeService from "../service/NodeService";
import DocumentDetailCard from "./card/DocumentDetailCard.vue";
import { metaFields,users,permissions,statuses,folders,breadcrumbItems } from '../storejson/storejson'

export default {
  data() {
    return {
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
      metaFields:metaFields,
      users: users,
      user: null,
      permissions: permissions,
      permission: null,
      email: "",
      open_folder: false,
      open_folder2: false,
      folder_link: false,
      share_modal: false,
      file_copy_modal: false,
      file_move_modal: false,
      import_file_modal: false,
      selectedNode: null,
      treeSelectNodes: null,
      treeValue: null,
      selectedTreeValue: null,
    };
  },
  customerService: null,
  nodeService: null,
  created() {
    this.initFilters1();
    this.nodeService = new NodeService();
  },
  mounted() {
    this.nodeService
      .getTreeNodes()
      .then((data) => (this.treeSelectNodes = data));
    this.nodeService.getTreeNodes().then((data) => (this.treeValue = data));
    this.folders = folders;
    this.breadcrumbHome = { icon: "pi pi-home", to: "/" };
    this.breadcrumbItems = breadcrumbItems;
    this.loading1 = false;
  },
  methods: {
    load(index) {
      this.loading[index] = true;
      setTimeout(() => (this.loading[index] = false), 1000);
    },
    openFolderModal() {
      this.open_folder = true;
    },
    closeFolderModal() {
      this.open_folder = false;
    },
    openFolderModal2() {
      this.open_folder2 = true;
    },
    shareOpenModal() {
      this.share_modal = true;
    },
    linkOpenModal() {
      this.folder_link = true;
    },
    // closeFolderModal2() {
    //   this.open_folder2 = false;
    // },
 
    // linkCloseModal() {
    //   this.folder_link = false;
    // },

    // shareCloseModal() {
    //   this.share_modal = false;
    // },
    // copyFileOpenModal() {
    //   this.file_copy_modal = true;
    // },
    // copyFileCloseModal() {
    //   this.file_copy_modal = false;
    // },
    // moveFileOpenModal() {
    //   this.file_move_modal = true;
    // },
    // moveFileCloseModal() {
    //   this.file_move_modal = false;
    // },
    // importFileOpenModal() {
    //   this.import_file_modal = true;
    // },
    // importFileCloseModal() {
    //   this.import_file_modal = false;
    // },
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
