import "./contacts-style.scss";
import { connect } from 'react-redux'
import { getConversation } from '../../../Redux/action/actions'

function Contacts(props) {

  const selectedUserHandle = (e,props)=>{
    console.log("select::",props)
    props.dispatch(getConversation(props))
  }


  return (
    <div >
      <div className="conversation" onClick={(e)=>selectedUserHandle(e,props)}>
        <img
          src={props.avatar}
          className="conversationList-avatar"
          alt="img"
        />
        <div className="conversationList-text">
          <div className="conversationList-info">
            <span id="conversationList-name">{props.username}</span>
             <span id="conversationList-ltsMsg">
               {props.description}
             </span>  
          </div>
          <div id="conversationListv-date">
          {props.lastLogin}
          </div>
        </div>
      </div>
      <hr className="hr-contacts" />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatch : dispatch,
})

export default connect(mapDispatchToProps)(Contacts);
