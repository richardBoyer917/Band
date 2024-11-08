import { checkIcon, inviteGear1, inviteGear2 } from "../../assets"
import { ArrowBlackButton } from "../Buttons"

const GearSmallBox = (props) => {
    const onClick = (url) => {
        window.open(url, '_blank');
    }
    return (
        <>
            <div style={{ color: 'var(--secondaryWhiteColor)' }}>
                <div className='inviteSec'>
                    <div className='inviteTitle'>
                        <img src={checkIcon} alt='checkIcon' />
                        <p className='x30'>{props.title}</p>
                    </div>
                    <div className='inviteSecBtnT'>
                        <ArrowBlackButton onClick={() => onClick(props?.links && props.links)} title={props.btnTitle} />
                        <p className='x18Font_4'>{props.text}</p>
                    </div>
                    <img alt='inviteImage' className='inviteImg1' src={inviteGear1} />
                    <img alt='inviteImage' className='inviteImg2' src={inviteGear2} />
                </div>
            </div>
        </>
    )
}

export default GearSmallBox