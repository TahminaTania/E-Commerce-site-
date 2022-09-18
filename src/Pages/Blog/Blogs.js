import React , {useState} from 'react';
import blogpost from './Blogdata';
import './blogpage.css';
import {FiMessageCircle,FiCalendar} from 'react-icons/fi';
// import ShowMore from 'react-show-more-button';
// import ShowMore from 'react-show-more-button/dist/module';


const Blogs =({blogpost})=> {

  const [showMore, setShowMore] = useState(false); 
    
  return <div>
        <section className=''>
            <div className='row'>
                {blogpost.slice(0,6).map((blog) => {
                   return <div className="col-6" key={blog.id}>
                        <div className='blogPic'> 
                          <img src={blog.image}></img>
                        </div>
                        <div className='blogitems'> 
                            <div><span><FiCalendar/>  </span>{blog.date}</div>
                            <div> <span><FiMessageCircle/> </span>{blog.msg}</div>
                        </div>
                        <div> 
                        
                            <div className='blg-ttl'><h5><a href='#'>{blog.title}</a></h5></div>
                            <div className='blg-dscrp'><p onClick={() => setShowMore(!showMore)}> 
                              {showMore ? blog.description : `${blog.description.substring(0,30)} ....`}
                              </p></div>
                        </div>

                    </div>
})
                }
            </div>
      </section>
    </div>
  
}

export default Blogs
