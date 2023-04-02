import React from "react";

import LeftSidebar from '../../component/LeftSidebar/LeftSidebar'
import TagsList from "./TagsList";
import './Tags.css'

const Tags = () => {
    const tagsList=[{
        id:1,
        tagName:" javascript",
        tagDesc:' for questions regordingprohraming in ECMAScript(javascript/js) and its varies dialecates'
    },{
        id:2,
        tagName:"python",
        tagDesc:' python is a multi-paradigm, dynamically  typed'
    },{
        id:3,
        tagName:" HTML",
        tagDesc:'hyper text markup language.used to web page design'
    },{
        id:4,
        tagName:"CSS",
        tagDesc:' cascading style sheet. Apply the styles to the webpage'
    },{
        id:5,
        tagName:"php",
        tagDesc:'php is widelyused, opensource,generalperpose'
    },{
        id:6,
        tagName:"node js",
        tagDesc:' it is used in server side to store and fetch data from database'
    },{
        id:7,
        tagName:"java",
        tagDesc:' java is high level object oriented programing language'
    }]
    return(
        <div className="home-container-1">
            <LeftSidebar/>
        <div className="home-container-2">
            <h1 className="tags-h1">Tags</h1>
            <p className="tags-p"> A tag is a keyword or label  that catogerized your questions with other or similar question</p>
            <p className="tags-p">using raight tags make it easier for to other to find and answer your question</p>
            <div className="tags-list-container">
                {
                    tagsList.map((tag)=>(
                        <TagsList tag={tag} key={tagsList.id} />
                    ))
                }
            </div>
            
        </div>


        </div>
    )
}
export default Tags