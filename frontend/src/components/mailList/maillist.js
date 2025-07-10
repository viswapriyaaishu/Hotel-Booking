import '../mailList/maillist.css'
export const Maillist=()=>{

    return(
        <div className="mlistwrap">
        <h1>Save  time , save  money!</h1>
        <div>Sign up and we will send the best deals to you</div>
        <div className="mlistdes">
            <input type="text" placeholder="Your Email"></input>
            <button className="subbtn">Subscribe</button>
        </div>
        </div>
    )
}