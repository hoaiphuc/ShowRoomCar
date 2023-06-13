import { Request, Response } from 'express';
import Saler from '../models/saler.model';

// Create a new saler
export const createSaler = (req: Request, res: Response) => {
  const { salerId, salerName, address, gender, status } = req.body;

  const newSaler = new Saler({
    salerId,
    salerName,
    address,
    gender,
    status,
  });

  newSaler.save()
    .then((saler) => {
      res.status(201).json(saler);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Get all salers
export const getAllSalers = (req: Request, res: Response) => {
  Saler.find()
    .then((salers) => {
      res.status(200).json(salers);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Get a single saler by ID
export const getSalerById = (req: Request, res: Response) => {
  const salerId = req.params.id;

  Saler.findById(salerId)
    .then((saler) => {
      if (!saler) {
        res.status(404).json({ error: 'Saler not found' });
      } else {
        res.status(200).json(saler);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Update a saler by ID
export const updateSaler = (req: Request, res: Response) => {
  const salerId = req.params.id;
  const updatedSaler = req.body;

  Saler.findByIdAndUpdate(salerId, updatedSaler, { new: true })
    .then((saler) => {
      if (!saler) {
        res.status(404).json({ error: 'Saler not found' });
      } else {
        res.status(200).json(saler);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Delete a saler by ID
export const deleteSaler = (req: Request, res: Response) => {
  const salerId = req.params.id;

  Saler.findByIdAndRemove(salerId)
    .then((saler) => {
      if (!saler) {
        res.status(404).json({ error: 'Saler not found' });
      } else {
        res.status(200).json({ message: 'Saler deleted successfully' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
