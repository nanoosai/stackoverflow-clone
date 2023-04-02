import React from "react";

const WidgetTags = () => {
    const tags=[ 'c','css','html','experss','firebase', 'mern','javascript', 'mysql','react.js','node.js','php','phython','mongodb','next.js']
    return(
        <div className="widget-tags">
            <h3>Watched tags</h3>
            <div className="widget-tags-div">
                {
                    tags.map((tag) =>(
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div>
    )
}
export default WidgetTags