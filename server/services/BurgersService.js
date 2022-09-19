import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { burgers } from "../db/burgers.js"


class BurgersService {
  getBurgerbyId(id) {
    const burger = burgers.burger.find(b => b.id == id)
    if (!id) {
      throw new BadRequest('invalid')
    }
    return burger

  }
  getAllBurgers() {
    const res = burgers
    return res.burger

  }

}
export const burgersService = new BurgersService()