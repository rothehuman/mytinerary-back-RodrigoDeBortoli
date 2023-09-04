import { Schema,model,Types } from "mongoose"

let collection = 'itineraries'

let itinerarySchema = new Schema({
    title: { type:String,required:true },
    name: { type:String,required:true },
    photo_url: { type:String,required:false },
    price: { type:Number,required:false },
    duration: { type:String,required:false },
    hashtag: [{ type:String,required:false}],
    comments: [{ type:String,required:false }],
    city: { type:Types.ObjectId, ref: 'cities'}
    },{
    timestamps: true
    }
);

let Itinerary = model(collection, itinerarySchema)
export default Itinerary;