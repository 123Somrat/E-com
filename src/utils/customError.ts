class HttpError extends Error {
    status: number;
    code: string;
  
    constructor(message: string, status: number, code: string) {
        super(message);
        this.status = status;
        this.code = code;
        // Set the prototype explicitly to maintain the prototype chain
        Object.setPrototypeOf(this, HttpError.prototype);
    }
  }

  export default HttpError;