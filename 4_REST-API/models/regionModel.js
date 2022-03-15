import mongoose from "mongoose";

export const regionSchema = {
  name: {
    type: String,
    required: true,
  },
  adm_center: {
    type: String,
  },
  area: {
    type: Number,
  },
  population: {
    type: Number,
  },
  national_composition: {
    type: Number,
  },
  municipalities: {
    type: Array,
  },
};

const Region = mongoose.model("Region", regionSchema);

export default Region;
