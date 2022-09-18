import React from 'react';
import classes from './Blog.module.css'

export default function SearchBy() {
  return (
        <section>
        <div className='size-page mt-5'>
              <div className={classes.title}>
                <h4>Search By</h4>
              </div>
            <div className='sizes'>
                <div>Apply</div>
                <div>Beauty</div>
                <div>Vegtable</div>
                <div>Fruit</div>
                <div>Healthy Fruit</div>
                <div>Life Style</div>
            </div>
        </div>
    </section>
  )
}
