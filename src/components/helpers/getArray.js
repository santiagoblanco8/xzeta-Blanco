import { array } from "../../data/data";

export const getArray=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(array)
        }, 2000);
    })
}