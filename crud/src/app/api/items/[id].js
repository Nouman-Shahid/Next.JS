// pages/api/items/[id].js
import connectToDatabase from "@/lib/mongodb";
import Item from "@/model/Item";

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await connectToDatabase();

  switch (method) {
    case "GET":
      try {
        const item = await Item.findById(id);
        if (!item) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: item });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const item = await Item.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!item) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: item });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedItem = await Item.deleteOne({ _id: id });
        if (!deletedItem) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
