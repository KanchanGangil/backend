const TenderModel = require('../models/tender')
class TenderController {


    static Tender_insert = async (req, res) => {
        try {
            const result = new TenderModel({
                name: req.body.name,
                description: req.body.description,
                start_time: req.body.start_time,
                end_time: req.body.end_time,
            })
            await result.save()
            // console.log(result);
            res.status(201).json({
                status: "success",
                message: "Tender Inserted Successfully 😃🍻",
            });

        } catch (error) {
            console.log(error);
        }
    }

    static getTenders = async (req, res) => {
        try {
            const tenders = await TenderModel.find()
            // console.log(tenders);
            res.status(201).json({
                status: 'success',
                message: 'tenders are here',
                tenders,
            })
        } catch (error) {
            console.log(error);
        }
    }
    static viewTender = async (req, res) => {
        try {
            const tender = await TenderModel.findById(req.params.id)
            // console.log(tender);
            res.status(201).json({
                status: 'success',
                message: 'successfull',
                tender,
            })
        } catch (error) {
            console.log(error);
        }
    }
    static updateTender = async (req, res) => {
        try {
            const { name, description, start_time, end_time, buffer_time } = req.body
            const tender = await TenderModel.findById(req.params.id)
            var data = {
                name: name,
                description: description,
                start_time: start_time,
                end_time: end_time,
                buffer_time: buffer_time
            }
            const update = await TenderModel.findByIdAndUpdate(req.params.id, data)
            // console.log(update);
            // console.log(data);
            res.status(201).json({
                status: 'success',
                message: 'successfull',
                update,
                data,
            })
        } catch (error) {
            console.log(error);
        }
    }
    static deleteTender = async (req, res) => {
        try {
            await TenderModel.findByIdAndDelete(req.params.id)
            res.status(201).json({
                status: 'success',
                message: 'Delete Successfully',
            })
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = TenderController  