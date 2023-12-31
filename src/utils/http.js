import constant  from "./constant";

async function post(path,body){
    const resp = await fetch (constant.localDomain + path, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(body),
    });
    return resp;
}

export default {post};