import { Schema,model,Types } from "mongoose"

let collection = 'users'

let citySchema = new Schema({
    name: { type:String,required:true },
    lastname: { type:String },
    email: { type:String, required:true },
    password: { type:String, required:true },
    photo: { type: String},
    google: { type: Boolean, default: false},
    online: { type: Boolean, default: false},
    verified: { type: Boolean, default: true},
    verified_code: { type: String },
    country: { type: String }
    },{
    timestamps: true
    }
);

let User = model(collection, citySchema)
export default User;