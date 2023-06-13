import express from 'express';
import {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} from '../controllers/car.controller';

export default (router: express.Router) => {
  // Create a new car
  router.post('/cars', createCar);

  // Get all cars
  router.get('/cars', getAllCars);

  // Get a car by ID
  router.get('/cars/:id', getCarById);

  // Update a car by ID
  router.put('/cars/:id', updateCar);

  // Delete a car by ID
  router.delete('/cars/:id', deleteCar);

}


