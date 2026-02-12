import{FaHeading,FaUser,FaLink,FaCloudUploadAlt,FaTimes,FaRegperPlane}from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import'./CreatePost.css';
const CreatePost=()=>{
    return(
        <div className="CreatePost-page">
            <Navbar/>
            <div className="create-post-container">
               
               <header className="form-header">
                <h1>Create New Post</h1>
                <p>share your thoughts and stories with the wold</p>
               </header>
               <div className="post-from-card">
                <from>
                    <div className="form-group">
                        <label>Post Title</label>
                        <div className="input-wrapper">
                            <FaHeading className='input-icon' />
                            <input
                            type="text"
                            name="text"
                            className="Enter a catchy title...."
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>
                            Author Name
                        </label>
                        <div className="input-wrapper">
                            <FaUser classname="input-icon"/>
                            <input
                            type="text"
                            name="author"
                            className="form-control"
                            />
                        </div>
                    </div>
                    <div className="divfrom-group">
                        <label>Description</label>
                        <textarea
                        name="description"
                        className="form-control"
                        placeholder="What on your mind?write your story here"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Cover Image</label>
                        <div className="image-source-tabs">
                            <button type="button"className="tab-btn active">
                                Image URL
                            </button>
                            <button type="button"className="tab-btn">
                                Upload File
                            </button>
                        </div>
                        <div className="input-wrapper">
                            <FaLink className="input-icon"/>
                            <input
                            type="url"
                            name="imageurl"
                            className="form-control"
                            placeholder="Paste image URL here(e.g.https://...)"
                            />
                        </div>
                        <div className="image-upload-area">
                            <FaCloudUploadAlt className="upload-icon"/>
                            <p>Click to upload image from device</p>
                        </div>
                        <div className="image-preview-container">
                            <img
                            src=""
                            alt="Preview"
                            />
                            <button type="button"className="remove-image-btn">
                                <FaTimes />
                            </button>
                        </div>
                    </div>
                    <div className="form-actions-row">
                        <button type="submit" className="submit-btn">
                            <FaRegPaperPlane />publish post
                        </button>
                        <button type="button"className="cancle-btn">
                            Clear Form
                        </button>
                    </div>
                </from>
               </div>
            </div>
        </div>
    )
}