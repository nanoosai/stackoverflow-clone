import React from "react";
import './HomeMainbar.css'
import { useLocation,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import QuestionList from "./QuestionList";


const HomeMainbar = () => {

    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()

    const questionList = useSelector(state => state.questionsReducer)
    //console.log(questionsList)

    //var questionList =[{
      //  id:1,
       // votes:3,
       // noOfAnswers:2,
      //  questionTitle:"what is a function ?",
       // questionBody:"it mean to be",
        //questionTags:["java","node js","react js","mongodb"],
        //userPosted:"mano",
        //askedOn:"jan1"
   // },{
       // id:2,
        //votes:0,
        //noOfAnswers:0,
        //questionTitle:"what is a function ?",
        //questionBody:"it mean to be",
        //questionTags:["python","r","javascript"],
       // userPosted:"mano",
       // askedOn:"jan1"
    //},{
      //  id:3,
        //votes:1,
       // noOfAnswers:0,
       // questionTitle:"what is a function ?",
        //questionBody:"it mean to be",
        //questionTags:["java","node js","react js","mongodb"],
        //userPosted:"mano",
        //askedOn:"jan1"
    
   // }]
     const checkAuth = () =>{
        if( user === null){
            alert("login or signup to Ask a questio")
            navigate('/auth')
        }else{
            navigate('/AskQuestions')
        }
     }
       
    return(
        <div className="main-bar">
            <div className="main-bar-header">
             {
                location.pathname ==='/' ? <h1>Top Questios</h1>:<h1>All Questions</h1>
             }
             <button onClick={checkAuth} className="ask-btn">Ask Question</button>
            </div>
            <div>
                {
                questionList.data === null ?
                <h1>loading...</h1> :
                <>
                <p>{questionList.data.length} questions</p>
               <QuestionList questionList={questionList.data} />
                </>
            }
            </div>
        </div>
    )
}
export default HomeMainbar