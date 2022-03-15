import express, { Router } from "express";
import Region from "../models/regionModel.js";

const regionRouter = Router();

const getRegions = async (req, res) => {
  try {
    const regions = await Region.find({});
    res.send(regions);
  } catch (error) {
    res.status(404).send();
  }
};

const getRegion = async (req, res) => {
  try {
    const region = await Region.findById(req.params.id);
    if (!region) {
      return res.status(404).send("Cnat find");
    }
    res.send(region);
  } catch (error) {
    res.status(404).send();
  }
};

const createRegion = async (req, res) => {
  try {
    const region = new Region(req.body);
    await region.save();
    res.status(201).send(region);
  } catch (error) {
    res.status(500).send("Cant create region");
  }
};

const updateRegion = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "adm_center",
    "area",
    "population",
    "national_composition",
    "municipalities",
  ];

  const isValid = updates.every((update) => allowedUpdates.includes(update));

  if (!isValid) {
    return res.status(400).send({ error: "Invalid update" });
  }

  try {
    const region = await Region.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!region) {
      return res.status(404).send("No such an Id");
    }

    res.send(region);
  } catch (error) {
    res.status(400).send("Cant update", error);
  }
};

const deleteRegion = async (req, res) => {
  try {
    const region = await Region.findByIdAndDelete(req.params.id);

    if (!region) {
      return res.status(404).send("Cant find");
    }
    res.send(region);
  } catch (error) {
    res.status(500).send(error);
  }
};

regionRouter
  .get("/regions", getRegions)
  .get("/regions/:id", getRegion)
  .post("/regions", createRegion)
  .patch("/regions/:id", updateRegion)
  .delete("/regions/:id", deleteRegion);

export default regionRouter;
