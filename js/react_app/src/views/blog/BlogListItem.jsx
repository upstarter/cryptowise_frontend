import React from 'react';

const BlogListItem = ({blogPost, onPostSelect}) => {
  //
  // if (error) {
  //   return <p>{error.message}</p>;
  // }
  //
  // if (isLoading) {
  //   return (
  //     <React.Fragment>
  //       <section id="blog-content">
  //         <div className="card is-loading">
  //           <div className="card-content">
  //             <div className="content"></div>
  //           </div>
  //         </div>
  //       </section>
  //     </React.Fragment>
  //   )
  // }


  return (
    <div>
      <li onClick={() => onPostSelect(blogPost)}  className="blog-post-item">
        <div className="blog-list media">
          <div className="media-left">
            <img className="media-object" src="" />
          </div>
          <div className="media-body">
            <div className="media-heading">
              {blogPost.title}
            </div>

            <div className="body" dangerouslySetInnerHTML={{__html: blogPost.content}}>
            </div>
          </div>
        </div>
      </li>
    </div>
  )
}

export default BlogListItem;
