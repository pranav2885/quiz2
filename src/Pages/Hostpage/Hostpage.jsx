import React, { useState } from 'react';
import './Hostpage.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const Hostpage = () => {
  const [questions, setQuestions] = useState(['Question 1']);

  const addQuestion = () => {
    setQuestions([...questions, `Question ${questions.length + 1}`]);
  };

  const deleteQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  return (
    <div className="container">
      <h1>Welcome, User</h1>
      <div className="card-container">
        {questions.map((question, index) => (
          <div className="card" key={index}>
            <div className="delete-button" onClick={() => deleteQuestion(index)}>
              <DeleteIcon />
            </div>
            <div className="card-inner">
              <input type="text" value={question} readOnly />
              <input type="text" placeholder="Option 1" />
              <input type="text" placeholder="Option 2" />
              <button className="add-button" onClick={addQuestion}>
                <AddIcon />
              </button>
            </div>
            <div className="card-overlay"></div>
          </div>
        ))}
      </div>
      <button className="add-button" onClick={addQuestion}>
        <AddIcon />
      </button>
    </div>
  );
};

export default Hostpage;
