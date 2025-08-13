import { NextRequest } from "next/server";
import { Jwt, verify } from "jsonwebtoken";

export const getUserData = ( request : NextRequest) => {

    try{
        const tokenData = request.cookies.get('token') ?.value || '' ;
        const decodeToken: any = verify(tokenData, process.env.TOKEN_SECRET as string);
        return decodeToken ;
    }
    catch(error:any){
        throw new Error(error.message)
    }
}