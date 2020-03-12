import React from "react";

function AuthorDetail (props){
    const author = props.author;
    const authorName = `${author.first_name} ${author.last_name}`;
    const booklist =author.books.map(book =>{
        return (
            <tr>
            <td> {book.title} </td>
            <td> {author.first_name} {author.last_name}</td>
            <td> <button className="btn" style={{backgroundColor: book.color}}/></td>
            </tr>
    
           

        );
    });
    
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
            
                {booklist}

        </tbody>
    </table>
</div>
);
};

export default AuthorDetail;
