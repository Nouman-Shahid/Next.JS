import client from "../../../../lib/appwrite_client";
import { Databases, ID, Query } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client)

// CREATING COLLECTION

async function createContrainer(data: {title:string, description:string})
{
    try {
        const response = await database.createDocument(process.env.APPWRITE_DATABASE_ID as string, "666c0a8f001a175c3778",ID.unique(),data)
        return response
    } catch (error) {
        console.log(error)
        throw new Error("FAILED TO CONNECT CONTAINER")
    }
}
// FETCHING COLLECTION

async function fetchContainer()
{
    try {
        const response = await database.listDocuments(process.env.APPWRITE_DATABASE_ID as string, "666c0a8f001a175c3778",[Query.orderDesc("$createdAt")])
        return response.documents
    } catch (error) {
                console.log(error)

        throw new Error("FAILED TO FETCH CONTAINER")
    }
}


export async function POST(req: Request) {
    try {
        const {title,description} = await req.json()
        const data = {title,description}
        const response = await createContrainer(data)
            return NextResponse.json({message: "Container created"})
        
    } catch (error) {
        return NextResponse.json(
            {
                error: "Failed to create Container"
            },
            {
                status:500
            }
        )
    }
}
export async function GET() {
    try {
    
        const container = await fetchContainer()
            return NextResponse.json(container)
        
    } catch (error) {
        return NextResponse.json(
            {
                error: "Failed to create Container"
            },
            {
                status:500
            }
        )
    }
}