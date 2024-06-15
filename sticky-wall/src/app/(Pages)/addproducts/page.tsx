"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleInputData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      setError("Please fill all the fields");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/container", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create data");
      }

      router.push("/"); // Redirect to home page after successful submission
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Try Again Later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center  w-screen">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col items-center space-y-6 h-[70vh] justify-center"
        >
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            name="title" // Added name attribute
            className="input input-bordered input-primary w-[50vh]"
            onChange={handleInputData}
          />
          <textarea
            className="textarea textarea-primary w-[50vh] min-h-56"
            placeholder="Description"
            value={formData.description}
            name="description" // Added name attribute
            onChange={handleInputData}
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary w-[50vh]"
            disabled={isLoading}
          >
            {isLoading ? "Adding...." : "Add Data"}
          </button>
        </form>
        {error && <p className="text-[2vh] text-red-500 mt-[-10vh]">{error}</p>}
      </div>
    </>
  );
};

export default page;
