import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";


export class BurgersController extends BaseController {

  constructor() {
    super('/api/burgers')
    this.router
      .get('', this.getAllBurgers)
      .get('/:id', this.getBurgerbyId)
  }

  async getAllBurgers(req, res, next) {
    try {
      res.send(await burgersService.getAllBurgers())

    } catch (error) {
      next(error)
    }
  }

  async getBurgerbyId(req, res, next) {
    try {
      res.send(await burgersService.getBurgerbyId(req.params.id))
    } catch (error) {
      next(error)
    }
  }

}