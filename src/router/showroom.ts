import express from 'express';
import {
    createShowroom,
    getAllShowrooms,
    getShowroomById,
    updateShowroom,
    deleteShowroom,
} from '../controllers/showroom.controller';

export default (router: express.Router) => {

    // Create a new showroom
    router.post('/showrooms', createShowroom);

    // Get all showrooms
    router.get('/showrooms', getAllShowrooms);

    // Get a showroom by ID
    router.get('/showrooms/:id', getShowroomById);

    // Update a showroom by ID
    router.put('/showrooms/:id', updateShowroom);

    // Delete a showroom by ID
    router.delete('/showrooms/:id', deleteShowroom);

}