import { sharedResults } from "../data/sharedResult";


export default function getStatusMessage(code) {

    let obj = sharedResults.filter(
        (obj) => {
            return obj.status === code;
        }
    );
    
    if (obj[0]) {
        return obj[0].message;
    }

    return "";
}