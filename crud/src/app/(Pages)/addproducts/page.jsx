"use client";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    router.push("/");
  }
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col items-center space-y-6 h-[70vh] justify-center"
        >
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered input-primary w-full max-w-xs"
            //   onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="textarea textarea-primary w-full max-w-xs min-h-56"
            placeholder="Description"
          ></textarea>
          <button type="submit" className="btn btn-primary w-full max-w-xs">
            Add Post
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
