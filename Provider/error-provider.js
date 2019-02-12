

function SystemErrorHandle(err, req, res, next){
    res.status(err.status || 500).json({
        error: err.name,
        description : err.message
    });
}

function LogErrorHandle(err, req, res, next){
    console.log(new Date(),err);
    next(err);
}

function ClientErrorHandle (err, req, res, next) {
    if (req.xhr) {
      res.status(500).send({error: err.name,description : err.message});
      return;
    }
    next(err);
}

function BadRequest(msg){
    var err = new Error(msg);
    err.status = 400;
    return err; 
}

module.exports = {
    LogErrorHandle: LogErrorHandle,
    ClientErrorHandle : ClientErrorHandle,
    SystemErrorHandle : SystemErrorHandle,
    BadRequest : BadRequest
}