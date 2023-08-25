import './experience.css'

const experience = () => {
    return (
        <>

          <div className="exp" id='experience'>
            <div className="inner-1">
                <div className="date-div">
                    <p>2022-Present</p>
                </div>
                <div className="info-div">
                    <div id='text-div'>
                        <p className='title-p'>Crius NG</p>
                        <p className='job-des'>Junior Software Engineer</p>
                        <p className='work-des'>Actively involved in unit testing and integration testing to ensure the quality and reliability of e-commerce software,
                            responsible for writing efficient and well-structured code, implementing logical solutions to meet project requirements.</p>
                    </div>
                    <div id='button-div'>
                        <div className="btn-used">Java</div>
                        <div className="btn-used">SpringBoot</div>
                        <div className="btn-used">ReactJs</div>
                        <div className="btn-used">MongoDB</div>
                        <div className="btn-used">Postgres</div>
                    </div>

                </div>

            </div>
            <div className='resume-link'>
                <a href=""><p>View Full Resume ---</p></a>
            
            </div>

        </div>
 
       
        </>
      );
}
 
export default experience;