import React from 'react';
import AddToDoButton from '../../components/AddToDoButton/AddToDoButton';
import ShowInfo from './../../components/ShowInfo/ShowInfo';


const ToDoApp = () => {
    return (
        <div style={{paddingTop: "174px"}} className="container" >
            <AddToDoButton/>
            <ShowInfo/>
        </div>
    );
};

export default ToDoApp;