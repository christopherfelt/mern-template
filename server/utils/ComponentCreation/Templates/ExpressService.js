export default function ExpressService(appName) {
  return `import ${appName} from "./Model.js";
import { BadRequest } from "../../utils/Errors.js";

class Service {
    async findAll(query = {}) {
        let data = await ${appName}.find(query);
        return data;
    }
    async findById(id) {
    let data = await ${appName}.findById(id);
        if (!data) {
            throw new BadRequest("Invalid Id");
        }
        return data;
    }
    async create(data) {
        return await ${appName}.create(data);
    }
    async edit(id, body) {
        let data = await ${appName}.findOneAndUpdate({ _id: id }, body, { new: true });
        if (!data) {
            throw new BadRequest("Invalid ID");
        }
        return data;
    }
    async remove(id) {
        let data = await ${appName}.findOneAndRemove({
            _id: id,
            // creatorEmail: email,
        });
        if (!data) {
            throw new BadRequest("Invalid ID");
        }
    }
}

export default new Service();
`;
}
