import React from 'react'

const Blog2 = ({ params }: { params: { id: string } }) => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <p className="text-[4vh]">Blog Page {params.id}</p>
        </main>)
}

export default Blog2