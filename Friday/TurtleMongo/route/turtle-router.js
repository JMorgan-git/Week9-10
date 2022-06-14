const express = require('express');
const Address = require('../model/address');
const Turtle = require('../model/Turtle');

const router = express.Router();

router.get('/getAll', async (request, response, next) => {
    response.contentType('application/json') 
            .status(200)
            .json(await Turtle.find())/*.populate('addresses')*/; 
});
//.populate displays the data of the given field 
router.get('/getById/:id', async (request, response, next) => {
    response.contentType('application/json') 
            .status(200)
            .json(await Turtle.findById(request.params.id))/*.populate('addresses')*/; 
});

router.post('/create', async (request, response, next) => {
    try{
        if (Object.keys(request.body).length == 0) return next({ 
            statusCode: 400, 
            message: 'Body cannot be empty'
        });
        const turtle = new Turtle(request.body);
        await turtle.save();

        response.status(201).json(turtle);
    }catch(err){
        next(err);
    }
});

router.put('/update/:id', async (request, response, next) => {
    try{
        if (Object.keys(request.body).length == 0) return next({ 
            statusCode: 400, 
            message: 'Body cannot be empty'
        });
        const turtle = await Turtle.updateOne({_id: request.params.id}, request.body,{
            runValidators: true
        });

        if(turtle){
            response.status(200).json(await Turtle.findById(request.params.id));
        }else {
            next({statusCode: 404, message: `Turtle with id ${request.params.id} does not exist`})
        }
    }catch (err){
        next(err);
    }
});

router.delete('/delete/:id', async (request, response, next) => {
    const id = request.params.id;

    const turtle = await Turtle.findByIdAndDelete(id);

    if(turtle){
        response.status(200).json(turtle);
    }else {
        next({statusCode: 404, message: `Turtle with id ${request.params.id} does not exist`})
    }
});

router.put('/address/alt/:id', async (request, response, next) => {

    if (Object.keys(request.body).length == 0) return next({ 
        statusCode: 400, 
        message: 'Body cannot be empty'
    });
    const turtle = await Turtle.findById(request.params.id);
    if(!turtle) return next({statusCode:404, message: `Turtle with id${id} does not exist`});

    if (!address) address = new Address(request.body);

    let address = await Address.updateOne({
        streetNumber: request.body.streetNumber,
        addressLineOne: request.body.addressLineOne
        }, 
        {
            $push: {
                "turtles": turtle._id
            }
        }, 
        {
            runValidators: true
        }
    );
    if (!address) {
        address = new Address(request.body);
        address.turtles.push(turtle._id);
        await address.save();
    }

    await Turtle.updateOne({_id: request.params.id},
        {
            $push: {
                "addresses": address._id
            }
        }  
    );
    return response.status(204).send('Address added successfully');
});

router.put('/address/:id', async (request, response, next) => {
    try{
        if (Object.keys(request.body).length == 0) return next({ 
            statusCode: 400, 
            message: 'Body cannot be empty'
        });
        const turtle = await Turtle.findById(request.params.id);

        if(turtle){
            let address = Address.findOne({
                streetNumber: request.body.streetNumber,
                addressLineOne: request.body.addressLineOne
            });
            if (!address) address = new Address(request.body); 

            if(address.turtles.indexOf(turtle._id) == -1){
                //add turtle id to address
                address.turtles.push(turtle._id); 
                await address.save();
            }
            if(turtle.addresses.indexOf(addres._id) == -1){
            //add address id to turtle
                turtle.addresses.push(address._id); 
                await turtle.save();
            }

            return response.status(204).send('Address added successfully');

        }else {
            next({statusCode: 404, message: `Turtle with id ${request.params.id} does not exist`})
        }
    }catch (err){
        next(err);
    }
});

module.exports = router;