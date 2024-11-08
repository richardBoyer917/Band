import { gear35, gear94 } from '../../assets'
import { BigOneGear, OneGears } from '../Gears'

import "../../styles/components/boxRound.css"

const BoxRound = ({ width, top, right, bottom, left, rotate, }) => (
  <div className='outCircleSquare' style={{ width: width, height: width, top: top, right: right, bottom: bottom, left: left, rotate: rotate }}></div>
)

const MiddleGearRound = ({ top, right, bottom, left, rotate }) => (
  <div className="gearIndex" style={{ top: top, right: right, bottom: bottom, left: left, rotate: rotate }}>
    <BigOneGear img={gear94} />
    <BoxRound left={-49} top={-1} width='50px' rotate='180deg' />
    <BoxRound right={-1} bottom={-49} width='50px' rotate='180deg' />
  </div>
)

const MiddleRound = ({ top, right, bottom, left, rotate }) => (
  <div className="gearIndex heroOneGears" style={{ top: top, right: right, bottom: bottom, left: left, rotate: rotate }}>
    <BoxRound left={-29} top={-1} width='30px' rotate='180deg' />
    <BoxRound right={-1} bottom={-29} width='30px' rotate='180deg' />
  </div>
)

const SmallGearRound = ({ top, right, bottom, left, rotate }) => (
  <div className="gearIndex smallHeroOneGears itemCenter" style={{ top: top, right: right, bottom: bottom, left: left, rotate: rotate }}>
    <OneGears img={gear35} />
    <BoxRound left={-14} top={-1} width='15px' rotate='180deg' />
    <BoxRound right={-1} bottom={-14} width='15px' rotate='180deg' />
  </div>
)

const SmallRound = ({ top, right, bottom, left, rotate }) => (
  <div className="gearIndex smallHeroOneGears itemCenter" style={{ top: top, right: right, bottom: bottom, left: left, rotate: rotate }}>
    <BoxRound left={-14} top={-1} width='15px' rotate='180deg' />
    <BoxRound right={-1} bottom={-14} width='15px' rotate='180deg' />
  </div>
)

export { BoxRound, MiddleGearRound, MiddleRound, SmallGearRound, SmallRound }