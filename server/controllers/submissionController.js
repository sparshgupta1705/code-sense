import Submission from "../models/Submission.js";
import Problem from "../models/Problem.js";

import { judgeSubmission }
from "../services/judgeService.js";

export const submitSolution = async (req,res)=>{

try{

const {problemId,code}=req.body;

const problem=await Problem.findById(problemId);

if(!problem){

return res.status(404).json({

success:false,

message:"Problem not found"

})

}

const result=await judgeSubmission(

code,

problem.publicTestCases,

problem.hiddenTestCases

);

const submission=await Submission.create({

user:req.userId,

problem:problemId,

code,

verdict:result.verdict,

executionTime:result.executionTime,

passedTestCases:result.passed,

totalTestCases:result.total,

compilerOutput:result.compilerOutput

});

res.json({

success:true,

submission,

result

})

}

catch(err){

res.status(500).json({

success:false,

message:"Server Error"

})

}

}