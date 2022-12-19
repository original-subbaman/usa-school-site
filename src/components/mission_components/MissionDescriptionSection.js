import React from 'react';
import teacherImg from '../../res/img-3.png';
function MissionDiscription() {
    return (
        <section className='mb-4'>
            <div className="container">
                <div className="d-flex flex-sm-row flex-column">
                    <img src={teacherImg} alt="School teacher" />
                    <div style={{ backgroundColor:"#EB455F"}} className="align-items-center p-4">
                        <p className="text-white lead fs-3 text-start my-auto">
                            Here we write a longer description about the mission of the school.<br/>
                            The mission of the school could be the nuture the next generation of leaders<br/>
                            Or the next generation of Tik Tok stars who waste their time creating content<br/>
                            that provide value to literally no one. I mean one can look at a rock and find more <br/>
                            braincells in it. Tee hee. 
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionDiscription;