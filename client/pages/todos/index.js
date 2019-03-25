import React, { Component, useState, useEffect } from 'react';
import './App.css';
import cloneDeep from 'lodash/cloneDeep';

export default () => {
    const [task, setTask] = useState("");
    const [arr, setArr] = useState([]);
    var cloneArr;
    const [inputTask, setInputTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setArr([...arr, inputTask]);
    }

    const deleteRow = (data) => {
        var conf = window.confirm("Delete" + data + "from to-do list?");

        if(conf) {
            cloneArr = cloneDeep(arr);
            setArr(cloneArr.splice(cloneArr.indexOf(data), 1));
        }
    }
    
    var content = arr.map(
        (item) => 
        <div className = "rows" name = {item} key = {item}>
            {item}

            <button onClick = {deleteRow}> Del </button>
        </div> 
    );

    return (
        <div className = "app-body">
            <div className = "content">
                <form onSubmit = {handleSubmit}>
                    <label>
                        Task:
                        <input 
                            type="text"
                            autoFocus
                            placeholder="Enter Text Here"
                            value={inputTask}
                            onChange={(event) => setInputTask(event.target.value)}
                        />
                    </label>
                    <input type = "submit"/>
                </form>
            </div> 

            <div className = "taskList">
                {content}
            </div>
        </div>
    );
};

