export class Event {
    constructor(
        public Title: string,
    ){}
}




// let eventSchema = new mongoose.Schema({
//     _id:Number, //plugins mongoose.plugin(autocomplete)
//     Title:{type:String, required:true},
//     Date:{type:Date, default:Date.now},
//     // Date:{type:String, default:() => moment().format("MMMM Do YYYY, h:mm:ss a")},
//     MainSpeakerId:{type:mongoose.Schema.Types.ObjectId, ref:"speakers"},
//     OtherSpeakersIds:[{type:mongoose.Schema.Types.ObjectId, ref:"speakers"}],
//     StudentIds:[{type:Number, ref:"students"}]
// });
