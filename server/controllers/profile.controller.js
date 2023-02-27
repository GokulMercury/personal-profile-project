const Profile= require('../models/profile.model');

const profileController = {
    async add(req,res,next){
        const { name, email, caption, headline, highlights, experience, qualification, address, phonenumber} = req.body;
        console.log(name, caption);
       
        let newProfile = new Profile({
            name,
            email,
            caption,
            headline,
            highlights,
            experience,
            qualification,
            address,
            phonenumber
        })
        newProfile.save((err, response)=>{
            if (err) {
                return res.json({
                    message: 'Something went wrong'
                })
            }
            res.json({
                ok: 'Posted successfully'
            })
        })
        
    },

    async get(req,res,next){
        Profile.find({}, (err, Profile)=>{
            if (err){
                return res.json({
                    message: "Something went wrong",
                })
            } else{
                res.json(Profile)
            }
        })
    }
}



module.exports = profileController;