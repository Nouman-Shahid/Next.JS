"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const edit = ({ params }: { params: { id: string } }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/container/${params.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setFormData({
          title: data.container.title,
          description: data.container.description,
        });
      } catch (error) {
        setError("Failed to load data");
      }
    };
    fetchData();
  }, []);
  const handleInputData = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      setError("Please fill all the fields");
      return; // Stop execution if fields are empty
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(`/api/container/${params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Try Again Later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col items-center space-y-6 h-[70vh] justify-center"
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputData}
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <textarea
          name="description"
          className="textarea textarea-primary w-full max-w-xs min-h-56"
          placeholder="Description"
          onChange={handleInputData}
          value={formData.description}
        ></textarea>

        <button type="submit" className="btn btn-primary w-full max-w-xs">
          {isLoading ? "Updating...." : "Update Data"}{" "}
        </button>
      </form>
      {error && <p className="text-[2vh] text-red-500 mt-[-10vh]">{error}</p>}
    </div>
  );
};

export default edit;
