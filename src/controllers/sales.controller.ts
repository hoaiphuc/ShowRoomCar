import { Request, Response } from 'express';
import Sale from '../models/sales.model';

// Create a new sale
export const createSale = (req: Request, res: Response) => {
  const { saleId, carId, customerId, description, status, createDate, showroomId } = req.body;

  const newSale = new Sale({
    saleId,
    carId,
    customerId,
    description,
    status,
    createDate,
    showroomId,
  });

  newSale.save()
    .then((sale) => {
      res.status(201).json(sale);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Get all sales
export const getAllSales = (req: Request, res: Response) => {
  Sale.find()
    .then((sales) => {
      res.status(200).json(sales);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Get a single sale by ID
export const getSaleById = (req: Request, res: Response) => {
  const saleId = req.params.id;

  Sale.findById(saleId)
    .then((sale) => {
      if (!sale) {
        res.status(404).json({ error: 'Sale not found' });
      } else {
        res.status(200).json(sale);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Update a sale by ID
export const updateSale = (req: Request, res: Response) => {
  const saleId = req.params.id;
  const updatedSale = req.body;

  Sale.findByIdAndUpdate(saleId, updatedSale, { new: true })
    .then((sale) => {
      if (!sale) {
        res.status(404).json({ error: 'Sale not found' });
      } else {
        res.status(200).json(sale);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Delete a sale by ID
export const deleteSale = (req: Request, res: Response) => {
  const saleId = req.params.id;

  Sale.findByIdAndRemove(saleId)
    .then((sale) => {
      if (!sale) {
        res.status(404).json({ error: 'Sale not found' });
      } else {
        res.status(200).json({ message: 'Sale deleted successfully' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
