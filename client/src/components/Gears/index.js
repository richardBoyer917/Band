import { BoxRound } from '../BoxRound'
import "../../styles/components/gear.css"
const BigOneGear = ({ img }) => (
  <div className='gearShow' >
    <span className='gear-spin'>
      <img src={img} alt={img} />
    </span>
  </div>
)

const OneGears = ({ img }) => (
  <span className='gear-spin'>
    <img src={img} alt={img} />
  </span>
)

const TwoGears = ({ margin, img1, img2, rotate }) => (
  <div className='gearShow' style={{ rotate: rotate, margin: margin }}>
    <span className='gear-spin'>
      <img src={img1} alt={img1} />
    </span>
    <span className='gear-back-spin'>
      <img src={img2} alt={img2} />
    </span>
  </div>
)

const TreeGears = ({ img1, img2, img3 }) => (
  <div className='treeGears'>
    <BoxRound left={-29} top={54} width='30px' rotate='180deg' />
    <BoxRound right={4} bottom={-29} width='30px' rotate='180deg' />
    <div style={{ marginTop: '35px' }}>
      <span className='gear-spin'>
        <img src={img1} alt={img1} />
      </span>
    </div>
    <div style={{ margin: '5px 0 0 -5px' }}>
      <span className='gear-back-spin' style={{ rotate: '15deg' }} >
        <img src={img2} alt={img2} />
      </span>
    </div>
    <div style={{ margin: '65px 0 0 -12px' }}>
      <span className='gear-spin'>
        <img src={img3} alt={img3} />
      </span>
    </div>
  </div>
)

const TreeGears1 = ({ img1, img2, img3 }) => (
  <div className='treeGears1'>
    <BoxRound left={4} bottom={-29} width='30px' rotate='90deg' />
    <BoxRound right={-29} top={54} width='30px' rotate='90deg' />
    <div style={{ marginTop: '35px' }}>
      <span className='gear-spin'>
        <img src={img1} alt={img1} />
      </span>
    </div>
    <div style={{ margin: '5px 0 0 -5px' }}>
      <span className='gear-back-spin' style={{ rotate: '15deg' }} >
        <img src={img2} alt={img2} />
      </span>
    </div>
    <div style={{ margin: '65px 0 0 -12px' }}>
      <span className='gear-spin'>
        <img src={img3} alt={img3} />
      </span>
    </div>
  </div>
)


export { BigOneGear, OneGears, TwoGears, TreeGears, TreeGears1 }