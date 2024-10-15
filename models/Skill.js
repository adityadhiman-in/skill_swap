import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    skillName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    geoLocation: {
        type: {
            type: String,
            enum: ['Point'], // 'Point' for geojson
            required: true
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        }
    }
});

skillSchema.index({ geoLocation: '2dsphere' }); // Create geospatial index for location-based search

export default mongoose.model('Skill', skillSchema);
