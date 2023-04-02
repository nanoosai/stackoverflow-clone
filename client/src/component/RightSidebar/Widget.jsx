import React from "react";
import './RightSidebar.css';
import comment from '../../assets/comment.jpeg';
import pen from '../../assets/pen.jpeg';
import blacklogo from '../../assets/blacklogo.jpeg';


const Widget = () => {
    return(
        <div className="widget">
            <h4>The Overflow Blog</h4>
            <div className="right-side-bar-div-1">
            <div className="right-side-bar-div-2">
                <img src={pen} width='18px' alt="pen" />
                <p>Observability is key to the future of<br/>
                 software(and your Devops Career)</p>
            </div>
            <div className="right-side-bar-div-2">
                <img src={pen} width='18px' alt="pen" />
                <p>Podcast 374:How valuables is your screen<br/>
                name?
                </p>
            </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className="right-side-bar-div-1">
            <div className="right-side-bar-div-2">
                <img src={comment} width='18px' alt="pen" />
                <p>Review queue workflows-final release.... </p>
            
            </div>
            <div className="right-side-bar-div-2">
                <img src={comment} width='18px' alt="pen" />
                <p>Please welcome Valued associates:#958 <br/>
                -v2Blast #959-SpencerG
                </p>
            </div>
            <div className="right-side-bar-div-2">
                <img src={blacklogo} width='18px' alt="pen" />
                <p>Outdated Answers:accepted answer is<br/>
                now unpinned on stack Overflow
                </p>
            </div>
            </div>
           
            <h4>Hot Meta Posts</h4>
            <div className="right-side-bar-div-1">
            <div className="right-side-bar-div-2">
                <p>38</p>
                <p>Why was this spam flag declined.yet<br/>
                the question marked as spam </p>
            </div>
            <div className="right-side-bar-div-2">
                <p>20</p>
                <p> what is the best course of action  <br/>
                when a user has high enough rep to....
                </p>
            </div>
            <div className="right-side-bar-div-2">
                <p>14</p>
                <p> Is link to the "how to ask" help page  <br/>
                 a useful comment
                  </p>
            </div>
            </div>

        </div>
    )
}
export default Widget