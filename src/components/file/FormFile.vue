<script scoped>
import NodeService from "../../service/NodeService";
import { multiselectValue,multiselectValues } from '../../storejson/storejson';
export default {
  data() {
    return {
      loading: [false, false, false],
      date: "",
      due_date: "",
      multiselectValue: multiselectValue,
      multiselectValues: multiselectValues,
      radioValue: null,
      selectedNode: null,
      treeSelectNodes: null,
    };
  },
  created() {
    this.nodeService = new NodeService();
  },
  methods: {
    load(index) {
      this.loading[index] = true;
      setTimeout(() => (this.loading[index] = false), 1000);
    },
  },
  mounted() {
    this.nodeService
      .getTreeNodes()
      .then((data) => (this.treeSelectNodes = data));
    this.nodeService.getTreeNodes().then((data) => (this.treeValue = data));
  },
};
</script>

<template>
  <section id="basic_info">
    <h6>Basic info</h6>
    <div class="grid p-fluid mt-3">
      <div class="field col-12 md:col-6">
        <span class="p-float-label">
          <Chips inputId="doc_name"></Chips>
          <label for="doc_name">
            Name <span class="text-red-500 text-base">*</span>
          </label>
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
          <Calendar inputId="calendar" v-model="date"></Calendar>
          <label for="doc_link">Date <span class="text-red-500 text-base">*</span></label>
        </span>
      </div>
      <div class="field col-12 md:col-4">
        <span class="p-float-label">
          <Calendar inputId="calendar" v-model="due_date"></Calendar>
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
    </div>
  </section>
  <fieldset id="metadata_info" class="card">
    <legend>Add Custom attributes</legend>
    <!-- <h5>Add Custom attributes</h5> -->
    <div class="grid p-float mt-5">
      <div class="field">
        <span class="p-float-label">
          <MultiSelect id="multiselect" :options="multiselectValues" v-model="multiselectValue" optionLabel="name"
            :filter="false" class="align-items-center py-1 px-2 text-primary border-round mr-2">
            <!-- <template #value="slotProps">
              <div
                class="
                  align-items-center
                  py-1
                  px-2
                  bg-primary
                  text-primary
                  border-round
                  mr-2
                "
                v-for="option of slotProps.value"
                :key="option.code"
              >
                <span
                  :class="'mr-2 flag flag-' + option.code.toLowerCase()"
                  style="width: 18px; height: 12px"
                />
                <div>{{ option.name }}</div>
              </div>
              <template v-if="!slotProps.value || slotProps.value.length === 0">
                <div class="p-1">Select Countries</div>
              </template>
            </template> -->
            <!--<template #option="slotProps">
              <div class="flex align-items-center">
                <span
                  :class="
                    'mr-2 flag flag-' + slotProps.option.code.toLowerCase()
                  "
                  style="width: 18px; height: 12px"
                />
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template> -->
          </MultiSelect>
          <label for="multiselect">MultiSelect <span class="text-red-500 text-base">*</span></label>
        </span>
      </div>
    </div>
    <div class="grid mt-3">
      <div class="col-12" v-for="data in multiselectValue" :key="data.code">
        <div class="grid p-fluid">
          <div class="field col-12 md:col">
            <span class="p-float-label">
              <Chips inputId="meta_data"></Chips>
              <label for="meta_data">{{ data.name }}</label>
            </span>
          </div>

          <Button icon="pi pi-trash" class="
              p-button-rounded p-button-text p-button-danger p-button-lg
              mr-2
            " />
        </div>
      </div>
    </div>
  </fieldset>
  <section id="submit_form">
    <div class="grid mx-1 my-4">
      <Button type="button" class="mr-2 p-button-primary" label="Save" icon="pi pi-check" :loading="loading[0]"
        @click="load(0)" />
      <Button type="button" class="mr-2 p-button-outlined p-button-danger" label="Cancel" icon="pi pi-times"
        :loading="loading[0]" @click="load(0)" />
    </div>
  </section>

  <section id="file_upload" class="mt-5">
    <h5>Add Document</h5>
    <article class="grid">
      <div class="col-4">
        <div class="grid">
          <fieldset class="col-12 md:col-12 card">
            <!-- <h5>Copy</h5> -->
            <legend>Copy</legend>
            <div class="grid p-fluid mt-3">
              <div class="col">
                <div class="field">
                  <TreeSelect v-model="selectedNode" :options="treeSelectNodes" placeholder="Select Item"></TreeSelect>
                </div>
              </div>

              <!-- <div class="col-2">
              <Button
                icon="pi pi-plus-circle"
                class="mr-2 mb-2 p-button-rounded p-button-text"
              ></Button>
            </div> -->
            </div>
            <div class="grid mt-2 surface-ground p-2">
              <!-- <div class="col-1">
              <i class="pi pi-file-pdf" style="font-size: 2rem"></i>
            </div> -->
              <div class="col">This is Pdf File</div>

              <Button icon="pi pi-trash" class="
                  p-button-rounded p-button-plain p-button-text p-button-danger
                  mr-2
                  mb-2
                  col-1
                  p-button-md
                " />
            </div>
          </fieldset>
        </div>

        <!-- <label for="doc_name">Select Path</label> -->
        <!-- <div class="field">
          <TreeSelect
            v-model="selectedNode"
            :options="treeSelectNodes"
            placeholder="Select Item"
          ></TreeSelect>
        </div>
        <div class="grid">
          <Button
            type="button"
            class="mr-2 p-button-primary"
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
        </div> -->
      </div>
      <section class="col-4">
        <div class="grid">
          <fieldset class="col-12 md:col-12 card">
            <legend>Device</legend>
            <div class="grid p-fluid mt-3">
              <!-- <div class="col-6">
              <span class="p-float-label">
                <Chips inputId="doc_link"></Chips>
                <label for="doc_link">File Url or ID</label>
              </span>
            </div> -->
              <div class="col">
                <FileUpload mode="basic" name="demo" url="./upload" class="mr-2 mb-2 p-button-outlined" />
              </div>
              <!-- <div class="col-2">
              <Button
                icon="pi pi-plus-circle"
                class="mr-2 mb-2 p-button-rounded p-button-text"
              ></Button>
            </div> -->

              <!-- <div class="col">
              <Button
                icon="pi pi-plus-circle"
                label="Add File"
                class="mr-2 mb-2 p-button-outlined"
              ></Button>
            </div> -->
            </div>
            <div class="grid mt-2 surface-ground p-2">
              <!-- <div class="col-1">
              <i class="pi pi-file-pdf" style="font-size: 2rem"></i>
            </div> -->
              <div class="col">This is Pdf File</div>

              <Button icon="pi pi-trash" class="
                  p-button-rounded p-button-plain p-button-text p-button-danger
                  mr-2
                  mb-2
                  col-1
                  p-button-md
                " />
            </div>
          </fieldset>
        </div>
      </section>
      <section class="col-4">
        <div class="grid">
          <fieldset class="col-12 md:col-12 card">
            <legend>Url or ID</legend>
            <div class="grid p-fluid mt-3">
              <div class="col">
                <span class="p-float-label">
                  <Chips inputId="doc_link"></Chips>
                  <label for="doc_link">File Url or ID</label>
                </span>
              </div>

              <div class="col-2">
                <Button icon="pi pi-plus-circle" class="mr-2 mb-2 p-button-rounded p-button-text"></Button>
              </div>
            </div>
            <div class="grid mt-2 surface-ground p-2">
              <div class="col">This is Pdf File</div>

              <Button icon="pi pi-trash" class="
                  p-button-rounded p-button-plain p-button-text p-button-danger
                  mr-2
                  mb-2
                  col-1
                  p-button-md
                " />
            </div>
          </fieldset>
        </div>
      </section>
    </article>
  </section>
</template>

