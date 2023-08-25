import './project.css'

const projects = () => {
    return ( 
        <>
        {/* Wraps the project */}
        <div className="project-container" id='projects'>
            {/* Contains the project */}
            <div className="inner-project">
                <div className="pic-div">
                    <div id='pic1'>

                    </div>

                </div>
                <div className="project-des">
                    <span className="project-title"><p>Hotel-Management-System</p></span>
                    <div className="project">
                   
                             The hotel management system merges Java Spring Boot, PostgreSQL, and React to provide secure authentication, room and employee management, <br />
                              task handling, and notifications, ensuring streamlined operations and effective communication.

                        
                    </div>
                    <div className="used-div">
                        <div className="links"><a href="https://github.com/DevTobz/hotel-management-system">Live Demo</a></div>
                        <div className="links"><a href="https://github.com/DevTobz/hotel-management-system">GitHub</a></div>
                    </div>

                </div>
            </div>
            <div className="inner-project">
                <div className="pic-div">
                    <div id='pic2'>

                    </div>

                </div>
                <div className="project-des">
                    <span className="project-title"><p>URL Shorterner</p></span>
                    <div className="project">This React-based link shortener utilizes an external API to generate shortened URLs for user-provided long links. It offers a seamless interface for creating, copying, and sharing compact links.</div>
                    <div className="used-div">
                        <div className="links"><a href="eurl-shortener-devtobz.vercel.app">Live Demo</a></div>
                        <div className="links"><a href="https://github.com/DevTobz/Url-Shortener-React">GitHub</a></div>    
                    </div>

                </div>
            </div>
            <div className="inner-project">
                <div className="pic-div">
                    <div id='pic3'>

                    </div>

                </div>
                <div className="project-des">
                    <span className="project-title"><p>E-commerce Microservice</p></span>
                    <div className="project">This microservices-based e-commerce platform leverages Java Spring Boot and Spring Cloud to create a scalable and resilient architecture. Integration with Kafka enables real-time event-driven communication between services, enhancing efficiency and responsiveness. The system supports seamless product catalog management, streamlined order processing, and robust customer interactions, providing a reliable foundation for a dynamic e-commerce experience.</div>
                    <div className="used-div">
                        <div className="links"><a href="https://github.com/DevTobz/employee-Microservice">GitHub</a></div> 
                    </div>

                </div>
            </div>
            <div className="inner-project">
                <div className="pic-div">
                    <div id='pic4'>

                    </div>

                </div>
                <div className="project-des">
                    <span className="project-title">Todo App</span>
                    <div className="project">This React-based Todo app offers a user-friendly interface to manage tasks efficiently. Users can add, edit, and mark tasks as complete, creating an organized and productive workflow. The app utilizes state management to ensure data consistency and provides a clean, responsive design for seamless usage across devices.</div>
                    <div className="used-div">
                        <div className="links"><a href="todo-app-react-devtobz.vercel.app">Live Demo</a></div>
                        <div className="links"><a href="https://github.com/DevTobz/Todo-app-react">GitHub</a></div> 
                    </div>

                </div>
            </div>
            <div className="more-projects">
             
            </div>
        </div>
        </>
     );
}
 
export default projects;