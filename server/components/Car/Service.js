import Car from "./Model.js";
import { BadRequest } from "../../utils/Errors.js";

class Service {
    async findAll(query = {}) {
        let data = await Car.find(query);
        return data;
    }
    async findById(id) {
    let data = await Car.findById(id);
        if (!data) {
            throw new BadRequest("Invalid Id");
        }
        return data;
    }
    async create(data) {
        return await Car.create(data);
    }
    async edit(id, body) {
        let data = await Car.findOneAndUpdate({ _id: id }, body, { new: true });
        if (!data) {
            throw new BadRequest("Invalid ID");
        }
        return data;
    }
    async remove(id) {
        let data = await Car.findOneAndRemove({
            _id: id,
            // creatorEmail: email,
        });
        if (!data) {
            throw new BadRequest("Invalid ID");
        }
    }
}

export default new Service();
