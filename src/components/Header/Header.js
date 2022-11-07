import imagemPhone from "../../assets/call.svg"
import imagemVideoCall from "../../assets/video.svg"
import moreOptions from "../../assets/moreoptions.svg"
import {HeaderContainer} from "./Headerstyled.js"

function Header (props) {

    const { senders, currSender, onChangeSender } = props

    return (

        <HeaderContainer>
            <div>
                <img src="http://picsum.photos/200/200" alt="Profile"/>
                <div>
                    <select value={currSender} onChange={onChangeSender} >
                        {senders.map((sender) => (
                            <option key={sender} value={sender}>
                                {sender}
                            </option>
                        ))}
                    </select>
                    <p>Online</p>
                </div>
            </div>
            <div>
                <img src={imagemVideoCall} alt="Video cam icon"/>
                <img src={imagemPhone} alt="Phone icon"/>
                <img src={moreOptions} alt="More options icon"/>
            </div>
        </HeaderContainer>
    )
}

export default Header