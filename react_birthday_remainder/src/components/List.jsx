import React from 'react';


export default function List(props){
    const {people}=props;
    return(
        <div className="list_container">
            {
                people.map((person)=>{
                    const {id,age,name,image}=person;
                    return(
                        <article key={id} className='article_container'>
                            <img src={image} alt={name} />
                            <div>
                                <h4>{name}</h4>
                            </div>
                            <div>
                                <h4>{age}</h4>
                            </div>

                        </article>
                    )
                })
            }

        </div>
    )
}