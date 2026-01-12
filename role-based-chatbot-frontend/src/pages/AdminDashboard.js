import { useState, useEffect } from "react";
import axios from "axios";

function AdminDashboard() {
  const [form, setForm] = useState({
    question: "",
    answer: ""
    
  });
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addData = async () => {
  if (editId) {
    await axios.put(
      `http://localhost:5000/api/admin/update/${editId}`,
      form
    );
    setEditId(null);
  } else {
    await axios.post("http://localhost:5000/api/admin/add", form);
  }

  setForm({ question: "", answer: "" });
  loadData();
};


  const loadData = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/all");
    setData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
  <div className="admin-container">
    <h2>Admin Dashboard</h2>

    <div className="admin-form">
      <input
        name="question"
        placeholder="Enter question"
        value={form.question}
        onChange={handleChange}
      />

      <input
        name="answer"
        placeholder="Enter answer"
        value={form.answer}
        onChange={handleChange}
      />

      <button onClick={addData}>Add</button>
    </div>

    <h3>Chatbot Knowledge</h3>

    <table>
      <thead>
        <tr>
          <th>Question</th>
          <th>Answer</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.question}</td>
            <td>{item.answer}</td>
            <td>
              <button
                onClick={() => {
                  setForm({ question: item.question, answer: item.answer });
                  setEditId(item._id);
                }}
              >
                Edit
              </button>

              <button
                onClick={async () => {
                  await axios.delete(
                    `http://localhost:5000/api/admin/delete/${item._id}`
                  );
                  loadData();
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

}

export default AdminDashboard;
