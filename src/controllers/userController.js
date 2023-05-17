
const Utils = require('../helperUtils');
const Config = require('../../config/index')

async function signUp(req , res, next){
let {phone}  = req.body;
let responseFromVendor = await Utils.AxiosHelper.axiosPost(Config.MSG91Credential.SendOtpBaseUrl,{mobile :JSON.stringify(phone),template_id: Config.MSG91Credential.TemplateId},{authkey:process.env.AUTH_KEY_MSG91}) 
}
module.exports = {signUp}