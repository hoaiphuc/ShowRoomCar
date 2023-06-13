import { Request, Response } from 'express';
import Car from '../models/car.model';

// Create a new car
export const createCar = (req: Request, res: Response) => {
  const { carId, carName, carType, carModel, carPrice, carDescription, sellerId } = req.body;

  const newCar = new Car({
    carId,
    carName,
    carType,
    carModel,
    carPrice,
    carDescription,
    sellerId,
  });

  newCar.save()
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Get all cars
export const getAllCars = (req: Request, res: Response) => {
  Car.find()
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Get a single car by ID
export const getCarById = (req: Request, res: Response) => {
  const carId = req.params.id;

  Car.findById(carId)
    .then((car) => {
      if (!car) {
        res.status(404).json({ error: 'Car not found' });
      } else {
        res.status(200).json(car);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Update a car by ID
export const updateCar = (req: Request, res: Response) => {
  const carId = req.params.id;
  const updatedCar = req.body;

  Car.findByIdAndUpdate(carId, updatedCar, { new: true })
    .then((car) => {
      if (!car) {
        res.status(404).json({ error: 'Car not found' });
      } else {
        res.status(200).json(car);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Delete a car by ID
export const deleteCar = (req: Request, res: Response) => {
  const carId = req.params.id;

  Car.findByIdAndRemove(carId)
    .then((car) => {
      if (!car) {
        res.status(404).json({ error: 'Car not found' });
      } else {
        res.status(200).json({ message: 'Car deleted successfully' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
