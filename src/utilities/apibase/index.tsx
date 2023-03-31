import { GetRequestModel } from "../../models/typescript/http"

class ApiBase {
    Get = async (requestProps: GetRequestModel) => {
        await fetch(requestProps.url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            }
        }).then((response) => response.json()).
            then((json) => {
                console.log(json);
                // if (json.message == "Success") {
                //     requestProps.successFunction(json)
                // }
                // else {
                //     requestProps.errorFunction(json)
                // }
            }).catch((err) => {
                this.ExLog(err)
                requestProps.exceptionFunction(err)
            })
    }

    ExLog = async (err: any) => {
        //for instance --> log to db etc.
    }
}

export default new ApiBase