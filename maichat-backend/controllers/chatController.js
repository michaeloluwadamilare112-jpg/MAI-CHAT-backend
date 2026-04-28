import { getAIResponse } from "../services/openaiService.js";

export const chat = async (req,res)=>{
  try{
    const {message} = req.body;

    const reply = await getAIResponse(message);

    res.json({reply});

  }catch(err){
    res.status(500).json({reply:"AI error"});
  }
};
