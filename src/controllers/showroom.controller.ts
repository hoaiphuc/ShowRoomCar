import { Request, Response } from 'express';
import ShowroomModel, { IShowroom } from '../models/showroom.model';

// Tạo một showroom mới
export const createShowroom = async (req: Request, res: Response) => {
  try {
    const { showroomName, address, imagepath, state, status, city } = req.body;

    // Kiểm tra xem các trường bắt buộc có được cung cấp không
    if (!showroomName || !address || !state || !status || !city) {
      return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin.' });
    }

    // Tạo showroom mới
    const showroom: IShowroom = new ShowroomModel({
      showroomName,
      address,
      imagepath,
      state,
      status,
      city,
    });

    // Lưu showroom vào cơ sở dữ liệu
    await showroom.save();

    return res.status(201).json({ message: 'Showroom đã được tạo thành công.' });
  } catch (error) {
    console.error('Lỗi trong quá trình tạo showroom:', error);
    return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};

// Lấy danh sách tất cả các showrooms
export const getAllShowrooms = async (req: Request, res: Response) => {
  try {
    const showrooms = await ShowroomModel.find();

    return res.status(200).json(showrooms);
  } catch (error) {
    console.error('Lỗi trong quá trình lấy danh sách showrooms:', error);
    return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};

// Lấy showroom theo ID
export const getShowroomById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const showroom = await ShowroomModel.findById(id);

    if (!showroom) {
      return res.status(404).json({ message: 'Không tìm thấy showroom với ID cung cấp.' });
    }

    return res.status(200).json(showroom);
  } catch (error) {
    console.error('Lỗi trong quá trình lấy showroom theo ID:', error);
    return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};

// Cập nhật showroom theo ID
export const updateShowroom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { showroomName, address, imagepath, state, status, city } = req.body;

    const showroom = await ShowroomModel.findById(id);

    if (!showroom) {
      return res.status(404).json({ message: 'Không tìm thấy showroom với ID cung cấp.' });
    }

    showroom.showroomName = showroomName;
    showroom.address = address;
    showroom.imagePath = imagepath;
    showroom.state = state;
    showroom.status = status;
    showroom.city = city;

    await showroom.save();

    return res.status(200).json({ message: 'Showroom đã được cập nhật thành công.' });
  } catch (error) {
    console.error('Lỗi trong quá trình cập nhật showroom:', error);
    return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};

// Xóa showroom theo ID
export const deleteShowroom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const showroom = await ShowroomModel.findByIdAndRemove(id);

    if (!showroom) {
      return res.status(404).json({ message: 'Không tìm thấy showroom với ID cung cấp.' });
    }

    return res.status(200).json({ message: 'Showroom đã được xóa thành công.' });
  } catch (error) {
    console.error('Lỗi trong quá trình xóa showroom:', error);
    return res.status(500).json({ message: 'Đã xảy ra lỗi trong quá trình xử lý yêu cầu.' });
  }
};
