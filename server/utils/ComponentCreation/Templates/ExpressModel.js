export default function ExpressModel(appName) {
  return `import mongoose from "mongoose";
let Schema = mongoose.Schema;

const ${appName}Schema = new Schema(
    {
    description: { type: String, required: true },
    title: { type: String, required: true },
    // creatorEmail: { type: String, required: true },
    },
    { timestamps: true }
);

const ${appName} = mongoose.model("${appName}", ${appName}Schema);

export default ${appName};    
`;
}
