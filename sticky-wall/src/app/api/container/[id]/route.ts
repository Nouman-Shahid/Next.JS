import client from "../../../../../lib/appwrite_client";
import { Databases } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client)

// Fetching a specific container

async function fetchContainer(id: string) {
    try {
        const container = await  database.getDocument(
            process.env.APPWRITE_DATABASE_ID as string,
            "666c0a8f001a175c3778",
            id
        )
        return container
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch container")
    }
    
}

// Deleting a specific container

async function deleteContainer(id: string) {
    try {
        const response = await  database.deleteDocument(
            process.env.APPWRITE_DATABASE_ID as string,
            "666c0a8f001a175c3778",
            id
        )
        return response
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete container")
    }
    
}

// Updating a specific container

async function updateContainer(id: string,data:{title: string, description : string}) {
    try {
        const response = await  database.updateDocument(
            process.env.APPWRITE_DATABASE_ID as string,
            "666c0a8f001a175c3778",
            id, 
            data
        )
        return response
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete container")
    }
    
}

export async function GET(
    req:Request,
    {params}: {params: {id:string}}
) {
    try {
        const id = params.id
        const container = await fetchContainer(id)
        return NextResponse.json({container})
    } catch (error) {
        return NextResponse.json(
            {error:"Failed to fetch container"},
            {status:500}
        )
    }
}
export async function DELETE(
    req:Request,
    {params}: {params: {id:string}}
) {
    try {
        const id = params.id
        await deleteContainer(id)
        return NextResponse.json({message:"Container deleted"})
    } catch (error) {
        return NextResponse.json(
            {error:"Failed to delete container"},
            {status:500}
        )
    }
}
export async function PUT(
    req:Request,
    {params}: {params: {id:string}}
) {
    try {
        const id = params.id
        const container = await req.json()
        await updateContainer(id,container)
        return NextResponse.json({message:"Container updated"})
    } catch (error) {
        return NextResponse.json(
            {error:"Failed to update container"},
            {status:500}
        )
    }
}