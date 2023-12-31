<template>
        <Dialog
      header="Add Folder Under Erp"
      v-model:visible="display"
      :breakpoints="{ '960px': '75vw' }"
      :style="{ width: '60vw' }"
      :modal="true"
    >
      <div class="gird col-12">
        <div class="col-12">
          <div class="card p-fluid">
            <div class="field grid">
              <label for="name3" class="col-12 mb-2 md:col-3 md:mb-0"
                >{{name}}</label
              >
              <div class="col-12 md:col-9">
                <InputText id="name3" type="text" />
              </div>
            </div>
            <div class="field grid">
              <label for="metaField" class="col-12 mb-2 md:col-3 md:mb-0"
                >{{customer}}</label
              >
              <div class="col-12 md:col-9">
                <MultiSelect
                  v-model="metaField"
                  :options="metaFields"
                  optionLabel="name"
                  placeholder="Select Meta Fields"
                  :filter="true"
                >
                  <template #value="slotProps">
                    <div
                      class="
                        inline-flex
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
                    <template
                      v-if="!slotProps.value || slotProps.value.length === 0"
                    >
                      <div class="p-1">Select Meta Fields</div>
                    </template>
                  </template>
                  <template #option="slotProps">
                    <div class="flex align-items-center">
                      <span
                        :class="
                          'mr-2 flag flag-' +
                          slotProps.option.code.toLowerCase()
                        "
                        style="width: 18px; height: 12px"
                      />
                      <div>{{ slotProps.option.name }}</div>
                    </div>
                  </template>
                </MultiSelect>
              </div>
            </div>
          </div>
          <Button
            label="Save"
            class="col-2 p-button-outlined mr-2 mb-2"
            icon="pi pi-check"
          />
          <Button
            label="Cancel"
            class="col-2 p-button-outlined p-button-danger mr-2 mb-2"
            icon="pi pi-times"
          />
        </div>
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
</template>

<script>
export default {
    props:['customer','name','metaFields'],

    methods:{
      close(){
        console.log('click')
      }
    }
}
</script>