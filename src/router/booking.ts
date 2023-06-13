import express from 'express';
import {
    createBooking,
    getBookingById,
    updateBookingStatus,
    deleteBooking,
} from '../controllers/booking';

export default (router: express.Router) => {
    // Tạo một booking mới
    router.post('/bookings', createBooking);

    // Lấy booking theo ID
    router.get('/bookings/:id', getBookingById);

    // Cập nhật trạng thái của booking
    router.put('/bookings/:id/status', updateBookingStatus);

    // Xóa booking theo ID
    router.delete('/bookings/:id', deleteBooking);

}