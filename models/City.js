import { Schema,model,Types } from "mongoose"

let collection = 'cities'

let citySchema = new Schema({
    name: { type:String,required:true },
    country: { type:String,required:true },
    url: { type:String,required:true },
    itineraries: [{ type: Types.ObjectId, ref: 'itineraries'}],
    },{
    timestamps: true
    }
);

let City = model(collection, citySchema)
export default City;