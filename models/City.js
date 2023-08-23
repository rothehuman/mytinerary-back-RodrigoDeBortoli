import { Schema,model,Types } from "mongoose"

let collection = 'cities'

let citySchema = new Schema({
    name: { type:String,required:true },
    country: { type:String,required:true },
    url: { type:String,required:true },
    /* create_by: { type:Types.ObjectId, ref: 'users'} */
    },{
    timestamps: true
    }
);

let City = model(collection, citySchema)
export default City;