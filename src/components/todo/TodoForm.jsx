import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    if (title && content) {
      addTodo({ title, content });
      setTitle("");
      setContent("");
    } else {
      alert("Please Enter a Todo");
    }
  };

  return (
    <div>
      <h3 className="text-muted mb-4">Add a TODO</h3>

      <form onSubmit={handleSubmission}>
        Title <br />
        <input
          className="w-50 p-1"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a Todo"
        />
        <br />
        Content <br />
        <textarea
          className="w-50"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter the Content"
        ></textarea>
        <br />
        <button className="my-4 btn btn-primary btn-sm px-4" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
