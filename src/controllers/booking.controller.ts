import { Request, Response } from 'express';
import BookingModel, { IBooking } from '../models/booking.model';

// Tạo một booking mới
export const createBooking = async (req: Request, res: Response) => {
  try {
    const { bookingid, customerid, bookingdate, time, carid, status } = req.body;

    // Kiểm tra xem các trường bắt buộc có được cung cấp không
    if (!bookingid || !customerid || !bookingdate || !time || !carid || !status) {
      return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin.' });
    }

    // Tạo booking mới
    const booking: IBooking = new BookingModel({
      bookingid,
      customerid,
      bookingdate,
      createdate: new Date(),
      time,
      carid,
      status,
    });

    // Lưu booking vào cơ sở dữ liệu
    await booking.save();

    return res.status(201).json({ message: 'Booking đã được tạo thành công.' });
  } catch (error) {
    console.error('Lỗi trong quá trình tạo booking:', error);
    return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};

// Cập nhật trạng thái của booking theo ID
export const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const booking = await BookingModel.findByIdAndUpdate(id, { status }, { new: true });

    if (!booking) {
      return res.status(404).json({ message: 'Không tìm thấy booking với ID cung cấp.' });
    }

    return res.status(200).json({ message: 'Trạng thái của booking đã được cập nhật thành công.' });
  } catch (error) {
    console.error('Lỗi trong quá trình cập nhật trạng thái booking:', error);
    return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};

// Xóa booking theo ID
export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const booking = await BookingModel.findByIdAndRemove(id);

    if (!booking) {
      return res.status(404).json({ message: 'Không tìm thấy booking với ID cung cấp.' });
    }

    return res.status(200).json({ message: 'Booking đã được xóa thành công.' });
  } catch (error) {
    console.error('Lỗi trong quá trình xóa booking:', error);
    return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};
