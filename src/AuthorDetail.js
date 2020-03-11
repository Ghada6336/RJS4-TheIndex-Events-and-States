import React from "react";

const AuthorDetail = props => {
    const author = props.author;
    const authorName = `${author.first_name} ${author.last_name}`;
    return (
    
<div className="author col-xs-10">
    <div>
    <h3>{authorName}</h3>
        <img src={author.imageUrl} className="img-thumbnail" alt={authorName} />
    </div>
    <table className='mt-3 table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Authors</th>
                <th>Color</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>  
                <td>
                    <button className="btn" style={{backgroundColor: "blue"}}/>
                </td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td>
                    <button className="btn" style={{backgroundColor: "red"}}/>
                </td>
            </tr>
        </tbody>
    </table>
</div>
);
};

export default AuthorDetail;
