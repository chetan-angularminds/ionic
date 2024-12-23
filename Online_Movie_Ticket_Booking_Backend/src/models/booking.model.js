import mongoose from 'mongoose';

const movieTicketBookingSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  showTime: {
    type: String,
    required: true
  },
  seatNumbers: {
    type: [String],
    required: true
  },
  bookingStatus: {
    type: String,
    enum: ['booked', 'cancelled'],
    default: 'booked'
  }
});

const MovieTicketBooking = mongoose.model('MovieTicketBooking', movieTicketBookingSchema);

export default MovieTicketBooking;