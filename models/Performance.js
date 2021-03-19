import mongoose from 'mongoose';
import Schema from 'mongoose';

const PerformanceSchema = new mongoose.Schema({
    UserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    CourseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    totalmarks: {
        type: number,
        required: true
    }
});

export default mongoose.model('Performance', performanceSchema);
