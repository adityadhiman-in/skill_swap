import mongoose from "mongoose";

const { Schema } = mongoose;

const affiliateSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
});

// Create the Affiliate model
const Affiliate = mongoose.model("Affiliate", affiliateSchema);

export default Affiliate;
