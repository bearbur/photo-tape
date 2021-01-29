import * as React from 'react';

export type BlogProps = { posts: Array<{ id: string, author: string, content: string }> }

//todo add controls for blog by blog id
const Blog: React.FunctionComponent<BlogProps> = ({ posts }: BlogProps) => {

    return (
        <div style={
            {
                display:'flex', 
                flexDirection: 'column',
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '15px'
            }
        }>{
            posts.map(({ id, author, content }, postKey) => <div key={`postKey_${postKey}_${id}`}>
                <p>{author}</p>
                <span>{content}</span>
            </div>)
        }</div>
    )
}

export default Blog;