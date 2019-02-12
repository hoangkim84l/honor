
function SystemErrorHandle(err, req, res, next){
    res
    .status(err.status || 500)
    .json(ErrorResponseBody(err.status || 500,err.name,err.message));
}

function LogErrorHandle(err, req, res, next){
    next(err);
}

function ClientErrorHandle (err, req, res, next) {
    if (req.xhr) {
      res
      .status(500)
      .json(ErrorResponseBody(500,err.name,err.message));
      return;
    }
    next(err);
}

function NotFoundHandle(req, res, next) {
    return res
            .status(404)
            .json(ErrorResponseBody(500,"Not Found", `${req.protocol}://${req.get('host')}${req.originalUrl} not found`));
}

function ErrorResponseBody(code,errorName,errorDescription){
    return {
        code: code,
        error: errorName,
        description : errorDescription
    }
}



function BadRequest(msg){
    var err = new Error(msg);
    err.status = 400;
    return err; 
}

module.exports = {
    NotFound : NotFoundHandle,
    LogErrorHandle: LogErrorHandle,
    ClientErrorHandle : ClientErrorHandle,
    SystemErrorHandle : SystemErrorHandle,
    BadRequest : BadRequest
}