import React  from "react";
import { useParams ,Link, useNavigate, useLocation} from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux'
import { useState } from "react";
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upvote from '../../assets/upvote.jpeg'
import downvote from '../../assets/downvote.jpeg'
import Avatar from '../../component/Avatar/Avatar'
import './Questions.css'
import DisplayAnswer from "./DisplayAnswer";
import { postAnswer,  deleteQuestion , voteQuestion} from "../../actions/question";


const QuestionsDetails = () => {
              
    const {  id } = useParams()
     
     const questionList = useSelector((state) => state.questionsReducer)
  
    //var questionList =[{
      //  _id:'1',
        //upVotes:3,
       // downVotes:2,
        //noOfAnswers:2,
        //questionTitle:"what is a function ?",
       // questionBody:"it mean to be",
       // questionTags:["java","node js","react js","mongodb"],
       // userPosted:"mano",
       // userId:1,
       // askedOn:"jan1",
        //answer:[{
        //    answerBody:"answer",
         //   userAnswered:"kumar",
         //   answeredOn:"jan 2",
         //   userId:2
      //  }]
   // },{
      //  _id:'2',
       // upVotes:3,
       // downVotes:2,
      //  noOfAnswers:0,
      //  questionTitle:"what is a function ?",
      //  questionBody:"it mean to be",
       // questionTags:["python","r","javascript"],
      //  userPosted:"mano",
       // askedOn:"jan1",
       // userId:1,
     //   answer:[{
      //      answerBody:"answer",
      //      userAnswered:"kumar",
      //      answeredOn:"jan 2",
        //    userId:2
        //}]
   // },{
    //    _id:'3',
     //   upVotes:3,
      //  downVotes:2,
      //  noOfAnswers:0,
     //   questionTitle:"what is a function ?",
     //   questionBody:"it mean to be",
     //   questionTags:["java","node js","react js","mongodb"],
      //  userPosted:"mano",
      //  askedOn:"jan1",
    //    userId:1,
    //    answer:[{
      //      answerBody:"answer",
      //      userAnswered:"kumar",
       //     answeredOn:"jan 2",
       //     userId:2
      // }]
    
    //}]

    const [Answer, setAnswer] = useState('')
     const Navigate = useNavigate()
     const dispatch = useDispatch()
     const location = useLocation()
     const url = 'https://stackover-flow-nx79.onrender.com'
     //console.log(location)
    const User = useSelector((state) => (state.currentUserReducer))


    const handlePostAns = (e, answerLength) =>{
      e.preventDefault()
      if(User === null){
        alert("login or signup to answer a question")
        Navigate('/Auth')
      }else{
        if(Answer === ''){
            alert('Enter Answer befor Submiting')
        }else{
            dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId:User.result._id}))
           //setAnswer("")
        }
      }

    }

    const handleShare = () =>{
       copy(url+location.pathname)
       alert('Copied url:' +url+location.pathname)
    }

    const handleDelete =() =>{
        dispatch(deleteQuestion(id, Navigate))
    }

     const handleUpVote = () =>{
        dispatch(voteQuestion(id, 'upVote', User.result._id))
     }

     const handleDownVote = () =>{
        dispatch(voteQuestion(id, 'downVote', User.result._id))
     }

    return(
        <div className="question-details-page">
            {
          questionList.data ===null ?
          <h1>Loading...</h1>:
          <>
          {
            questionList.data.filter((question) => question._id ===id).map((question) => (
            <div key={question._id}>
                <section className="question-details-container">
                    <h1>{question.questionTitle}</h1>
                    <div className="question-details-container-2">
                        <div className="question-votes">
                            <img src={upvote}  width="18px" alt="upvote" className="votes-icon" onClick={handleUpVote} />
                            <p>{question.upVote.length-question.downVote.length}</p>
                            <img src={downvote} width="18px" alt="downvote"  className="votes-icon" onClick={handleDownVote}/>
                        </div>
                        <div style={{width:"100%"}}>
                            <p className="question-body">{question.questionBody}</p>
                            <div className="question-detais-tags">
                                {
                                    question.questionTags.map((tag) =>(
                                        <p key={tag}>{tag}</p>
                                    ))
                                }
                            </div>
                        <div className="question-actions-user">
                            <div>
                                <button type="button" onClick={handleShare}>Share</button>

                              {
                                User?.result?._id === question?.userId  &&(
                                    <button type="button" onClick={handleDelete}>Delete</button>
                                )
                              }

                               
                            </div>
                            <div>
                                <p>asked {moment(question.askedOn).fromNow()}</p>
                                <Link to={`/Users/${question.userId}`} className='user-link'>
                                   <Avatar backgroundColor="orange" px="8" py="5">{question.userPosted.charAt(0).toUpperCase()}</Avatar> 
                                  <div>
                                  {question.userPosted}
                                  </div>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {
                    question.noOfAnswers !== 0 &&(
                        <section>
                            <h3>{question.noOfAnswers}Answers</h3>
                            <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                        </section>
                    )
                }
                <section className="post-ans-container">
                    <h3>Your Answer </h3>
                    <form onSubmit={(e) => {handlePostAns(e, question.answer.length) }}>
                        <textarea name="" id="" cols="30" rows="10" onChange={(e) =>setAnswer(e.target.value)}></textarea>
                       <input type="submit" className="post-ans-btn"/>
                    </form>
                    <p>
                        Browser other Question tagged
                        {
                            question.questionTags.map((tag) =>(
                                <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                            ))
                        } or
                    <Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff"}}>ask your own question.</Link>
                    </p>
                </section>

            </div>

            ))
          }
          </>
        }
        </div>
    )
}
export default  QuestionsDetails