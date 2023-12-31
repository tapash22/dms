<template>
  <div class="grid p-fluid">
    <div class="col-12 lg:col-6">
      <div class="card">
        <h5>Linear Chart</h5>
        <Chart type="line" :data="lineData" :options="lineOptions" />
      </div>

      <div class="card flex flex-column align-items-center">
        <h5 class="align-self-start">Pie Chart</h5>
        <Chart
          type="pie"
          :data="pieData"
          :options="pieOptions"
          style="width: 50%"
        />
      </div>

      <div class="card flex flex-column align-items-center">
        <h5 class="align-self-start">Polar Area Chart</h5>
        <Chart
          type="polarArea"
          :data="polarData"
          :options="polarOptions"
          style="width: 50%"
        />
      </div>
    </div>
    <div class="col-12 lg:col-6">
      <div class="card">
        <h5>Bar Chart</h5>
        <Chart type="bar" :data="barData" :options="barOptions" />
      </div>

      <div class="card flex flex-column align-items-center">
        <h5 class="align-self-start">Doughnut Chart</h5>
        <Chart
          type="doughnut"
          :data="pieData"
          :options="pieOptions"
          style="width: 50%"
        />
      </div>

      <div class="card flex flex-column align-items-center">
        <h5 class="align-self-start">Radar Chart</h5>
        <Chart
          type="radar"
          :data="radarData"
          :options="radarOptions"
          style="width: 50%"
        />
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "@/AppEventBus";
import {
  labels,
  labels1,
  datasets1,
  datasets2,
  datasets3,
  backgroundColor,
  datasets4,
  colorLabels,
} from "../storejson/storejson";

export default {
  themeChangeListener: null,
  mounted() {
    this.themeChangeListener = (event) => {
      if (event.dark) this.applyDarkTheme();
      else this.applyLightTheme();
    };
    EventBus.on("change-theme", this.themeChangeListener);

    if (this.isDarkTheme()) {
      this.applyDarkTheme();
    } else {
      this.applyLightTheme();
    }
  },
  beforeUnmount() {
    EventBus.off("change-theme", this.themeChangeListener);
  },
  data() {
    return {
      lineData: {
        labels: labels,
        datasets: datasets1,
      },
      pieData: {
        labels: ["A", "B", "C"],
        datasets: datasets2,
      },
      polarData: {
        datasets: [
          {
            data: [11, 16, 7, 3, 14],
            backgroundColor: backgroundColor,
            label: "My dataset",
          },
        ],
        labels: colorLabels,
      },
      barData: {
        labels: labels,
        datasets: datasets3,
      },
      radarData: {
        labels: labels1,
        datasets: datasets4,
      },
      lineOptions: null,
      pieOptions: null,
      polarOptions: null,
      barOptions: null,
      radarOptions: null,
    };
  },
  methods: {
    isDarkTheme() {
      return this.$appState.darkTheme === true;
    },
    applyLightTheme() {
      this.lineOptions = {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
        },
      };

      this.barOptions = {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
          y: {
            ticks: {
              color: "#495057",
            },
            grid: {
              color: "#ebedef",
            },
          },
        },
      };

      this.pieOptions = {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
      };

      this.polarOptions = {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: "#ebedef",
            },
          },
        },
      };

      this.radarOptions = {
        plugins: {
          legend: {
            labels: {
              color: "#495057",
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: "#ebedef",
            },
          },
        },
      };
    },
    applyDarkTheme() {
      this.lineOptions = {
        plugins: {
          legend: {
            labels: {
              color: "#ebedef",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#ebedef",
            },
            grid: {
              color: "rgba(160, 167, 181, .3)",
            },
          },
          y: {
            ticks: {
              color: "#ebedef",
            },
            grid: {
              color: "rgba(160, 167, 181, .3)",
            },
          },
        },
      };

      this.barOptions = {
        plugins: {
          legend: {
            labels: {
              color: "#ebedef",
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: "#ebedef",
            },
            grid: {
              color: "rgba(160, 167, 181, .3)",
            },
          },
          y: {
            ticks: {
              color: "#ebedef",
            },
            grid: {
              color: "rgba(160, 167, 181, .3)",
            },
          },
        },
      };

      this.pieOptions = {
        plugins: {
          legend: {
            labels: {
              color: "#ebedef",
            },
          },
        },
      };

      this.polarOptions = {
        plugins: {
          legend: {
            labels: {
              color: "#ebedef",
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: "rgba(160, 167, 181, .3)",
            },
          },
        },
      };

      this.radarOptions = {
        plugins: {
          legend: {
            labels: {
              color: "#ebedef",
            },
          },
        },
        scales: {
          r: {
            grid: {
              color: "rgba(160, 167, 181, .3)",
            },
          },
        },
      };
    },
  },
};
</script>