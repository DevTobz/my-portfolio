import './contact.css'

const contact = () => {
    return ( 
        <>
        <div className="wrapper" id='contact'>
            <div className='contact-wrap'>
                <p className='contact-title'> Contact</p>
                <p id='descr'>Want to talk about anything Tech related or tell me about your available job opportunities</p>
            </div>
            <form action="">
                <div className="form-container">
                    <div className="context-div">
                        <label className='labels'>Name:</label>
                        <input type="text"  />
                    </div>
                    <div className="context-div">
                         <label className='labels' >Email:</label>
                        <input type="text"  />
                    </div>
                    <div className="context-div">
                         <label className='labels' >Subject:</label>
                        <input type="text"  />
                    </div>
                    <div className="context-div">
                         <label className='labels' >Message:</label>
                        <textarea></textarea>
                    </div>
                    <button className='btn'>Send Message</button>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default contact;