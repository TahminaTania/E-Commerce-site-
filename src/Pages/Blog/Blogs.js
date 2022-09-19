import React , {useState, useEffect} from 'react';
import blogpost from './Blogdata';
import './blogpage.css';
import {FiMessageCircle,FiCalendar} from 'react-icons/fi';
import {BsArrowRight} from 'react-icons/bs'
import ShowMoreBtn from './ShowMoreBtn';




const Blogs =({blogpost})=> {

  const [showMore, setShowMore] = useState(false);
  const [flag, setFlag] = useState(false);


  function show(id){

    console.log('showMore', showMore);
    console.log('flag', flag);
    if(!flag){
      setShowMore(id);
      setFlag(true);
      return 0;
    }
    setFlag(false);
    return 0;
  }

  // useEffect(() => {
  //   // console.log('useEffect showMore', showMore);
  //   // console.log('useEffect flag', flag);
  // },[showMore]);
    
  return <div>
        <section className=''>
            <div className='row'>
                {blogpost.slice(0,6).map((blog) => {
                   return <div className="col-6 p-2" key={blog.id}>
                        <div className='blogPic'> 
                          <img src={blog.image}></img>
                        </div>
                        <div className='blogitems'> 
                            <div><span><FiCalendar/>  </span>{blog.date}</div>
                            <div> <span><FiMessageCircle/> </span>{blog.msg}</div>
                        </div>
                        <div> 
                        
                            <div className='blg-ttl'><h5><a href='#'>{blog.title}</a></h5></div>
                              <div className='blg-dscrp'>
                              {/* <ShowMoreBtn description={blog.description}/> */}
                                
                                <div onClick={() => show(blog.id)}> 
                                  <div> {(showMore === blog.id) && flag ? blog.description : `${blog.description.substring(0,30)}`}</div>
                                  <div className="mt-3 show-btn">{(showMore === blog.id) && flag ? 'Show Less': 'Show More'} <span><BsArrowRight/></span></div>
                                </div>

                              </div>
                        </div>

                    </div>
})
                }
            </div>
      </section>
    </div>
  
}

export default Blogs
