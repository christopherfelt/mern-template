import express from "express";
import BaseController from "../../utils/BaseController.js";
import app1Service from "./Service.js";
// import auth0Provider from "@bcwdev/auth0provider";

export default class App1Controller extends BaseController {
  constructor() {
    super("api/v1/app1");
    this.router
      .get("", this.getAll)
      // TODO: Need to check on cognito user management to see if this is possible
      // .use(auth0Provider.getAuthorizedUserInfo)
      .post("", this.create)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .delete("/:id", this.remove);
  }
  async getAll(req, res, next) {
    try {
      // Add you code here
      let data = await app1Service.findAll();
      return res.send(data);
      // return res.send("Made it To Get All");
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      // Add you code here
      let data = await app1Service.findById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      // Add you code here
      //NOTE:  Need to check on cognito
      // req.body.creatorEmail = req.userInfo.email;
      // req.body.user = req.userInfo.email;
      let data = await app1Service.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      // Add you code here
      let data = await app1Service.edit(
        req.params.id,
        // req.userInfo.email,
        req.body
      );
      res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async remove(req, res, next) {
    try {
      // Add you code here
      let data = await app1Service.remove(
        req.params.id
        // req.userInfo.email,
        // req.body
      );
      res.send("Record Successfully Removed");
    } catch (error) {
      next(error);
    }
  }
}
